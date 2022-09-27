---
name: Give me a list of all the images in the document with their alternative text
layout: default
---

# Give me a list of all the images in the document with their alternative text

{% capture snippet %}
copy($$('img').map(i => `${i.alt}: ${i.src}`).join("\n"))
{% endcapture%}
```javascript
{{snippet}}
```
