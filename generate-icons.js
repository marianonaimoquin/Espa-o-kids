const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outDir = path.join(__dirname, "public", "icons");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Fondo rosa
  ctx.fillStyle = "#FF5C8D";
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, size * 0.2);
  ctx.fill();

  // Emoji 🎉 centrado
  ctx.font = `${size * 0.55}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎉", size / 2, size / 2);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(outDir, `icon-${size}x${size}.png`), buffer);
  console.log(`✅ icon-${size}x${size}.png generado`);
});

console.log("🎉 Todos los íconos generados en public/icons/");
