---
title: Dear Console, give me a list of all the images in the document with their alternative text
name: Give me a list of all the images in the document with their alternative text
layout: default
codeexample: 'copy($$(±1img±1).map(i => `${i.alt}: ${i.src}`).join(±1\n±1))'
---

{% highlight javascript %}
{{ page.codeexample | replace: '±1', "'" | replace: '±2', '\n' | replace '±3', '\t'}}}}
{% endhighlight %}

