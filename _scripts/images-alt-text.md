---
name: Give me a list of all the images in the document with their alternative text
layout: default
snippet: null;
---

# Give me a list of all the images in the document with their alternative text

```javascript
copy($$('img').map(i => `${i.alt}: ${i.src}`).join("\n"))
```
