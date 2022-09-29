---
title: Dear console, give me only the file names of the image sources in the current document without the rest of the URL
name: Give me only the file names of the image sources in the current document without the rest of the URL
layout: default
codeexample: 'copy($$(±img±).map(i=>i.src.split(±/±).pop()).join(±\n±))'
tags: images media scraping
---

{% highlight javascript %}
copy($$('img').map(
    i=>i.src.split('/').pop()).
join('\n'))
{% endhighlight %}


