import fs from 'fs';
import path from 'path';

// Create a minimal valid 16x16 32-bit RGBA BMP inside ICO format
// ICO Header: 6 bytes
// Icon Directory Entry: 16 bytes
// BITMAPINFOHEADER: 40 bytes
// Pixel data: 16x16x4 = 1024 bytes (Neon Pink #FF2E93 background with cyan dot)
// AND mask: 16x(16/8) padded = 64 bytes

const width = 16;
const height = 16;
const bpp = 32;
const imageSize = 40 + (width * height * 4) + (height * 4); // 40 + 1024 + 64 = 1128 bytes
const fileSize = 6 + 16 + imageSize;

const buf = Buffer.alloc(fileSize);

// ICO Header
buf.writeUInt16LE(0, 0); // Reserved
buf.writeUInt16LE(1, 2); // Type 1 = ICO
buf.writeUInt16LE(1, 4); // Count = 1

// Directory Entry
buf.writeUInt8(width, 6);
buf.writeUInt8(height, 7);
buf.writeUInt8(0, 8); // Color count
buf.writeUInt8(0, 9); // Reserved
buf.writeUInt16LE(1, 10); // Color planes
buf.writeUInt16LE(bpp, 12); // Bits per pixel
buf.writeUInt32LE(imageSize, 14); // Image data size
buf.writeUInt32LE(22, 18); // Offset of data

// BITMAPINFOHEADER (offset 22)
let offset = 22;
buf.writeUInt32LE(40, offset); // Header size
buf.writeInt32LE(width, offset + 4);
buf.writeInt32LE(height * 2, offset + 8); // Double height for XOR + AND masks
buf.writeUInt16LE(1, offset + 12); // Planes
buf.writeUInt16LE(bpp, offset + 14); // BPP
buf.writeUInt32LE(0, offset + 16); // BI_RGB (uncompressed)
buf.writeUInt32LE(width * height * 4, offset + 20); // Image size
buf.writeInt32LE(0, offset + 24); // XPelsPerMeter
buf.writeInt32LE(0, offset + 28); // YPelsPerMeter
buf.writeUInt32LE(0, offset + 32); // ClrUsed
buf.writeUInt32LE(0, offset + 36); // ClrImportant

// Fill pixels (BGRA format)
// Neon Pink: #FF2E93 -> B: 0x93, G: 0x2E, R: 0xFF, A: 0xFF
// Cyan Dot: #00F0FF  -> B: 0xFF, G: 0xF0, R: 0x00, A: 0xFF
offset += 40;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const isCyanDot = (x >= 6 && x <= 9 && y >= 6 && y <= 9);
    if (isCyanDot) {
      buf.writeUInt8(0xFF, offset);     // B
      buf.writeUInt8(0xF0, offset + 1); // G
      buf.writeUInt8(0x00, offset + 2); // R
      buf.writeUInt8(0xFF, offset + 3); // A
    } else {
      buf.writeUInt8(0x93, offset);     // B
      buf.writeUInt8(0x2E, offset + 1); // G
      buf.writeUInt8(0xFF, offset + 2); // R
      buf.writeUInt8(0xFF, offset + 3); // A
    }
    offset += 4;
  }
}

// AND mask (all 0 for opaque pixels)
// Remaining bytes are already 0 from Buffer.alloc

fs.writeFileSync('public/favicon.ico', buf);
fs.writeFileSync('src/app/favicon.ico', buf);
console.log('Successfully generated public/favicon.ico and src/app/favicon.ico');
