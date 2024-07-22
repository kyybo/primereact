'use server';

import fs from 'fs';
import path from 'path';

export async function readFile (filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return fileContents;
}
