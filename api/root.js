export default function handler(req, res) {
  const accept = req.headers['accept'] || '';
  
  if (accept.includes('text/markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.send(`# InfiniEdit

A fast, powerful Infinite Craft save editor.

## Features
- Edit .ic files
- Manage elements and recipes
- Visualize dependencies
- Live recipe lookup
- Direct browser export

[Open InfiniEdit](https://infiniedit.qzz.io/)
`);
  } else {
    res.setHeader('Content-Type', 'text/html');
    // Serve your index.html
    res.sendFile('./index.html');
  }
}
