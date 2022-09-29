---
title: Dear console, give me the file names of images of the document without the rest of the URL
name: Give me the file names of images of the document without the rest of the URL
layout: default
codeexample: 'copy($$(±img±).map(i=>i.src.split(±/±).pop()).join(±\n±))'
tags: images media scraping
---

{% highlight javascript %}
copy($$('img').map(
    i=>i.src.split('/').pop()).
join('\n'))
{% endhighlight %}


