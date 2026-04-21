import https from 'https';
import fs from 'fs';

https.get('https://www.idatriaolystic.com/blog', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Save to a file so we can view it
    fs.writeFileSync('wix-page.json', data);
    
    // Try to regex out post titles or slugs
    const titles = [...data.matchAll(/"title":"([^"]+)"/g)].map(m => m[1]);
    const uniqueTitles = [...new Set(titles)];
    console.log("Found Titles:", uniqueTitles.filter(t => t.length > 5 && !t.includes('{')));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
