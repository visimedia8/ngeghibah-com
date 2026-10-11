import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getFallbackImageUrl } from '@/lib/imageUtils';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const secret = process.env.N8N_WEBHOOK_SECRET || 'ngeghibah-super-secret-key-2026';

    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized webhook request' }, { status: 401 });
    }

    const payload = await req.json();

    // Data contract validation
    if (!payload.title || !payload.slug || (!payload.content_html && !payload.contentHtml)) {
      return NextResponse.json(
        { error: 'Payload tidak lengkap: title, slug, dan content_html wajib ada' },
        { status: 400 }
      );
    }

    // Defensive fallback: ensure heroImage is always present and valid for future articles
    if (!payload.heroImage && !payload.hero_image) {
      payload.heroImage = getFallbackImageUrl(payload.category, 'article');
    }

    // In production with DB:
    // await prisma.article.upsert({ ... })

    // On-Demand ISR Revalidation
    try {
      revalidatePath('/');
      revalidatePath(`/artikel/${payload.slug}`);
      if (payload.category) {
        revalidatePath(`/kategori/${payload.category}`);
      }
      revalidatePath('/sitemap.xml');
    } catch (e) {
      // Revalidation error logging
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Artikel berhasil diterima dan diproses untuk publikasi',
        slug: payload.slug,
        receivedAt: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
