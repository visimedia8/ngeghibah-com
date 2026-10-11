import http from 'http';

const routes = [
  '/',
  '/artikel/duduk-perkara-royalti-musik-musisi-vs-promotor-konser',
  '/artikel/kronologi-lengkap-drama-live-tiktok-creator-fuji-an',
  '/seleb/rachel-vennya',
  '/seleb/han-so-hee',
  '/hak-jawab',
  '/tentang-kami',
  '/redaksi',
  '/pedoman-media-siber',
  '/kode-etik',
  '/kebijakan-privasi',
  '/disclaimer',
  '/kontak-kami',
  '/sitemap.xml',
  '/robots.txt',
];

async function runCheck() {
  console.log('--- STARTING VERIFICATION CHECKS ON PORT 3005 ---');
  let hasErrors = false;

  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:3005${route}`);
      const text = await res.text();
      const status = res.status;
      const isError =
        status !== 200 ||
        text.includes('Application error') ||
        text.includes('Internal Server Error') ||
        text.includes('Unhandled Runtime Error');

      if (isError) {
        hasErrors = true;
        console.error(`❌ [FAIL] ${route} returned status ${status}`);
      } else {
        console.log(`✅ [OK 200] ${route} (Length: ${text.length} bytes)`);
      }
    } catch (e) {
      hasErrors = true;
      console.error(`❌ [EXCEPTION] ${route}: ${e.message}`);
    }
  }

  // Also test n8n webhook API route
  try {
    const postRes = await fetch('http://localhost:3005/api/webhooks/n8n/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ngeghibah-super-secret-key-2026',
      },
      body: JSON.stringify({
        title: 'Verifikasi Webhook Automated Article Test',
        slug: 'verifikasi-webhook-automated-article-test',
        content_html: '<p>Testing automated ingestion pipeline.</p>',
        category: 'seleb-lokal',
        status: 'published',
      }),
    });
    const postJson = await postRes.json();
    if (postRes.status === 201 && postJson.success) {
      console.log('✅ [OK 201] POST /api/webhooks/n8n/article authenticated webhook works');
    } else {
      hasErrors = true;
      console.error('❌ [FAIL] POST /api/webhooks/n8n/article failed:', postJson);
    }
  } catch (e) {
    hasErrors = true;
    console.error(`❌ [EXCEPTION] Webhook API: ${e.message}`);
  }

  console.log('--- VERIFICATION SUMMARY ---');
  if (hasErrors) {
    console.error('TESTS FAILED!');
    process.exit(1);
  } else {
    console.log('ALL ROUTES VALIDATED SUCCESSFULLY (0 ERRORS, 0 CRASHES, 0 WSOD)!');
    process.exit(0);
  }
}

runCheck();
