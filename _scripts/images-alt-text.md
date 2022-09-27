---
title: Dear Console, give me a list of all the images in the document with their alternative text
name: Give me a list of all the images in the document with their alternative text
layout: default
codeexample: 'copy($$(±img±).map(i => `${i.alt}: ${i.src}`).join(±\n±))'
---

{% highlight javascript linenos %}
{{ page.codeexample | replace: '±', "'"}}
{% endhighlight %}

