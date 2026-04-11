import fs from 'fs'

const loadMarkdown = (fileName: string): string => {
  return fs.readFileSync(fileName, 'utf-8');
}

export default loadMarkdown;
