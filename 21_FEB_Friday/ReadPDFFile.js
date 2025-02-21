import fs from 'fs';
import pdfParse from 'pdf-parse';

async function readPdf(filePath) {
    const pdfBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(pdfBuffer);
    return data.text;
}

// Use ES module export
export default readPdf;
