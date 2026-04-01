# Content Guide — How to Update Your Website

Everything on this site is driven by simple data files. No build tools, no CMS — just edit, save, push.

---

## Quick Overview

| What | Index File | Content |
|------|-----------|---------|
| Blog posts | `thoughts.js` | Separate `.md` files in `blogs/` |
| Projects | `projects.js` | Plain JS objects |
| Ideas | `ideas.js` | Plain JS objects |

---

## Adding a New Blog Post (Thought)

### Step 1: Write your post

Create a new `.md` file in the `blogs/` folder. Name it something URL-friendly:

```
blogs/my-new-post.md
```

Write your post in plain Markdown:

```markdown
This is my intro paragraph.

## First Section

Write your post here using **Markdown**. All standard features work:
- **Bold** and *italic* text
- [Links](https://example.com)
- Lists, code blocks, blockquotes
- Headings (##, ###, etc.)

### Adding Images

Drop image files into the `images/` folder, then reference them:

![description of image](images/my-photo.jpg)

### Code Blocks

```python
def hello():
    print("Hello, world!")
```

### Blockquotes

> This is a blockquote. Great for highlighting quotes or key ideas.
```

### Step 2: Register it in thoughts.js

Open `thoughts.js` and add a new object **at the top** of the array:

```js
{
    id: "my-new-post",                // URL-safe unique ID
    title: "My New Blog Post",
    date: "2026-03-15",               // YYYY-MM-DD
    tags: ["topic", "another-topic"],
    coverImage: "",                   // optional: "images/my-cover.jpg"
    excerpt: "A one or two sentence summary that shows on the listing page.",
    file: "my-new-post.md"           // filename in blogs/ folder
},
```

### Step 3: Push

```bash
git add . && git commit -m "new post" && git push
```

That's it. Live in ~1 minute.

---

## Adding a New Project

Open `projects.js` and add at the top of the array:

```js
{
    title: "My Project Name",
    description: "A sentence or two about what this project is.",
    tags: ["Python", "Machine Learning"],
    links: [
        { label: "GitHub", url: "https://github.com/..." },
        { label: "Demo",   url: "https://demo-url.com" },
        { label: "Paper",  url: "https://arxiv.org/..." },
    ]
},
```

Links are optional — you can have zero or many.

---

## Adding a New Idea

Open `ideas.js` and add at the top of the array:

```js
{
    title: "My Idea",
    description: "A brief description of the idea.",
    status: "spark",        // Options: spark | exploring | building | paused
    tags: ["tag1", "tag2"],
},
```

### Idea Statuses

| Status | Meaning | Color |
|--------|---------|-------|
| `spark` | Just a thought, not started | Yellow |
| `exploring` | Researching / thinking about it | Blue |
| `building` | Actively working on it | Green |
| `paused` | On hold | Gray |

---

## Adding Images to Blog Posts

1. Put your image file in the `images/` folder
2. In your `.md` file in `blogs/`, use Markdown image syntax:

```markdown
![A description of the image](images/my-image.jpg)
```

- Images are automatically responsive (max-width: 100%)
- They get rounded corners and look nice in the post
- You can also set a cover image for a post using the `coverImage` field in `thoughts.js`

---

## Customizing Your Info

### Change your name
Edit the `<a class="site-name">` in both `index.html` and `thought.html`.

### Update the About section
Edit the `<section id="about">` content directly in `index.html`. It's plain HTML.

### Change social links
Update the `<div class="header-right">` section in both HTML files.

### Update colors
All colors are CSS custom properties at the top of `styles.css`:

```css
:root {
    --accent:    #c45d3e;   /* Warm accent color */
    --accent-soft: #f0dad2; /* Light accent background */
    --bg:        #faf9f7;   /* Page background */
    /* ... etc */
}
```

---

## File Structure

```
ThuwarageshJ.github.io/
├── index.html          ← Main page (About + all tabs)
├── thought.html        ← Individual blog post page
├── styles.css          ← All styling
├── script.js           ← Tab switching & content rendering
├── thought-page.js     ← Blog post page logic (fetches .md files)
├── thoughts.js         ← Blog post index (edit this!)
├── projects.js         ← Your projects (edit this!)
├── ideas.js            ← Your ideas (edit this!)
├── blogs/              ← Blog post content (one .md file per post)
│   └── welcome.md
├── images/             ← Drop images here
│   └── (your images)
└── GUIDE.md            ← This file
```

## Workflow

1. Write your post as a `.md` file in `blogs/`
2. Add metadata entry in `thoughts.js`
3. `git add . && git commit -m "new post" && git push`
4. Done — live on your site in ~1 minute
