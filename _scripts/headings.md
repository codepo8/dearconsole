---
title: Dear Console, give me a list of all headings and their level
name: Give me a list of all headings and their level
layout: default
codeexample: '$$(±1h1,h2,h3,h4,h5,h6±1).map(±2±3±3h=>`${h.tagName.toLowerCase()}: ${h.innerText.trim()}`±2).join(±\n±)'
---

{% highlight javascript %}
{{ page.codeexample | replace: '±', "'"}}
{% endhighlight %}

