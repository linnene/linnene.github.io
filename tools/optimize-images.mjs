import { existsSync } from 'node:fs';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const photographyDir = path.join(root, 'public', 'images', 'photography');
const sourceExtensions = new Set(['.jpg', '.jpeg', '.png']);
const generatedSuffixes = ['.webp', '-full.webp'];

const previewWidth = 1600;
const previewQuality = 82;
const fullWidth = 2600;
const fullQuality = 88;

async function walk(dir) {
  if (!existsSync(dir)) return [];

  const entries = await readdir(dir);
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) return walk(fullPath);
    return fullPath;
  }));

  return files.flat();
}

function isSourceImage(file) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file).toLowerCase();
  return sourceExtensions.has(ext) && !generatedSuffixes.some((suffix) => base.endsWith(suffix));
}

function outputPathFor(file, suffix) {
  const parsed = path.parse(file);
  return path.join(parsed.dir, `${parsed.name}${suffix}`);
}

async function optimizeOne(file) {
  const previewOut = outputPathFor(file, '.webp');
  const fullOut = outputPathFor(file, '-full.webp');
  const inputInfo = await stat(file);
  const previewExists = existsSync(previewOut) && (await stat(previewOut)).mtimeMs >= inputInfo.mtimeMs;
  const fullExists = existsSync(fullOut) && (await stat(fullOut)).mtimeMs >= inputInfo.mtimeMs;

  if (previewExists && fullExists) {
    return { file, skipped: true };
  }

  await mkdir(path.dirname(previewOut), { recursive: true });

  const image = sharp(file, { failOn: 'none' }).rotate();

  if (!previewExists) {
    await image
      .clone()
      .resize({ width: previewWidth, withoutEnlargement: true })
      .webp({ quality: previewQuality, effort: 5 })
      .toFile(previewOut);
  }

  if (!fullExists) {
    await image
      .clone()
      .resize({ width: fullWidth, withoutEnlargement: true })
      .webp({ quality: fullQuality, effort: 5 })
      .toFile(fullOut);
  }

  return { file, skipped: false };
}

const sources = (await walk(photographyDir)).filter(isSourceImage);

if (!sources.length) {
  console.log('No photography source images found.');
  process.exit(0);
}

const results = await Promise.all(sources.map(optimizeOne));
const created = results.filter((result) => !result.skipped).length;
const skipped = results.length - created;

console.log(`Optimized photography images: ${created} updated, ${skipped} unchanged.`);
