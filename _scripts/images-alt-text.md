---
name: Give me a list of all the images in the document with their alternative text
layout: default
snippet: copy($$('img').map(i => `${i.alt}: ${i.src}`).join("\n"))
---

# Give me a list of all the images in the document with their alternative text

```javascript
{{page.snippet}}
```
