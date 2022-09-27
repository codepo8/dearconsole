---
title: Dear Console, give me a list of all headings and their level
name: Give me a list of all headings and their level
layout: default
codeexample: 'copy($$('h1,h2,h3,h4,h5,h6').map(h=>`${'\t'.repeat(h.tagName.match(/\d/)[0]-1)+'- '}${h.innerText.trim()}`).join('\n'))'
---

{% highlight javascript %}
{{ page.codeexample | replace: '±', "'" | replace: '£', '\n' | replace '§', '\t'}}}}
{% endhighlight %}


copy($$('h1,h2,h3,h4,h5,h6').map(
±3h => `${'\t'.repeat(
±3h.tagName.match(/\d/)[0]-1
±3)+'- '}`+
±3`${h.innerText.trim()}`
).join('\n'))