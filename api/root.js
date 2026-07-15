import fs from 'fs';
import path from 'path';

const markdown = `# ✨ InfiniEdit

The Ultimate Save Editor for **Infinite Craft**

Fast • Powerful • Open Source

**Edit, analyze, and visualize Infinite Craft save files directly in your browser.**

No installation • No accounts • No uploads • Everything stays on your device

## Live Websites

- Primary: https://infiniedit.qzz.io
- Mirror: https://infiniedit.vercel.app

## Features

### 📂 Save Management
- Open \`.ic\` save files
- Export back to \`.ic\`
- Export as JSON
- Drag & Drop support
- Autosave
- Backup manager

### 🧪 Element Editor
- Browse every element
- Instant search
- Add/rename/delete elements
- Edit emojis
- Multi-select editing
- Live InfiniBrowser search & autocomplete

### 📖 Recipe Editor
- Create and edit recipes
- Import recipe lists
- Missing ingredient detection
- Auto-fetch recipes from InfiniBrowser API
- Bulk-fill missing recipes

### 📊 Save Analysis
- Duplicate detection
- Dead-end detection
- Reachability analysis
- Missing dependencies
- Ingredient statistics

### 🌐 Interactive Graph
- Dependency visualization
- Zoom & Pan
- Re-layout graph
- Highlight relationships

### ⚡ Quality of Life
- Undo / Redo
- Dark & Light themes
- Responsive & mobile-friendly
- Keyboard shortcuts
- Automatic local backups

## Privacy

Your save files are processed entirely in your browser. InfiniEdit never uploads your data.

## Built With

HTML5 • CSS3 • Vanilla JavaScript (no frameworks, no dependencies)

## Disclaimer

InfiniEdit is an unofficial fan-made project. Not affiliated with or endorsed by Infinite Craft.

Made with ❤️ for the Infinite Craft community.
`;

export default function handler(req, res) {
  if (req.headers['accept']?.includes('text/markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    return res.send(markdown);
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.sendFile('./index.html');
}
