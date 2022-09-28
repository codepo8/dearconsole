---
title: Dear Console, give me a table of contents of the document indented by heading level
name: Give me a table of contents of the document indented by heading level
layout: default
codeexample: 'copy($$('h1,h2,h3,h4,h5,h6').map( h => '\t'.repeat(h.tagName.slice(-1)-1)+ '- ' + h.innerText.trim() ).join('\n'))'
---

{% highlight javascript %}
copy($$('h1,h2,h3,h4,h5,h6')
    .map( h => '\t'.repeat(h.tagName.slice(-1)-1) + '- ' + h.innerText.trim() )
    .join('\n'))
{% endhighlight %}
