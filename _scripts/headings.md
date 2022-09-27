---
title: Dear Console, give me a list of all headings and their level
name: Give me a list of all headings and their level
layout: default
codeexample: '$$(±h1,h2,h3,h4,h5,h6±).map(h=>`${h.tagName.toLowerCase()}: ${h.innerText.trim()}`).join(±\n±)'
---

{% highlight javascript %}
{{ page.codeexample | replace: '±', "'"}}
{% endhighlight %}

