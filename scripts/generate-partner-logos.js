const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function createPng(width, height, getPixel) {
  // Signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA color type
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw image data with 0 filter byte per scanline
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter byte: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

// Ensure dir
const partnersDir = path.join(__dirname, '..', 'public', 'images', 'partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

// Generate 8 distinct luxury logo badges
const partners = [
  { name: 'Emirates', hue: 0 },
  { name: 'Qatar Airways', hue: 330 },
  { name: 'Turkish Airlines', hue: 10 },
  { name: 'Four Seasons', hue: 45 },
  { name: 'Aman Resorts', hue: 40 },
  { name: 'Belmond', hue: 210 },
  { name: 'The Ritz-Carlton', hue: 200 },
  { name: 'Virtuoso', hue: 35 },
];

const W = 280;
const H = 96;

partners.forEach((p, idx) => {
  const png = createPng(W, H, (x, y, w, h) => {
    // Elegant border frame & subtle monogram pattern
    const borderX = x < 4 || x >= w - 4;
    const borderY = y < 4 || y >= h - 4;
    const corner = (x < 12 && y < 12) || (x >= w - 12 && y < 12) || (x < 12 && y >= h - 12) || (x >= w - 12 && y >= h - 12);
    
    // Ambient luxury background
    const cx = w / 2;
    const cy = h / 2;
    const dist = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
    
    // Gold/silver metallic sheen
    const grad = Math.sin((x + y * 0.5) * 0.05) * 0.5 + 0.5;
    
    // Draw an emblem diamond in the center
    const isDiamond = Math.abs(x - cx) * 0.6 + Math.abs(y - cy) < 22;
    const isDiamondInner = Math.abs(x - cx) * 0.6 + Math.abs(y - cy) < 18;

    if (borderX || borderY) {
      if (!corner) {
        return [201, 162, 75, 140]; // accentGold
      }
      return [0, 0, 0, 0];
    }

    if (isDiamond && !isDiamondInner) {
      return [218, 185, 105, 230];
    }

    // Horizontal bars indicating typography
    const isBar1 = y >= 36 && y <= 40 && Math.abs(x - cx) < 60;
    const isBar2 = y >= 52 && y <= 55 && Math.abs(x - cx) < 40;

    if (isBar1 || isBar2) {
      const alpha = Math.floor(180 + grad * 70);
      return [240, 230, 210, alpha];
    }

    // Soft dark transparent backdrop
    return [15, 23, 42, 160];
  });

  fs.writeFileSync(path.join(partnersDir, `partner-${idx + 1}.png`), png);
  console.log(`Generated partner-${idx + 1}.png for ${p.name}`);
});
