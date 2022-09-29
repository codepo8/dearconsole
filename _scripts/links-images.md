---
title: Dear Console, give me the URLs of all the images links in the document point to
name: Give me the URLs of all the images links in the document point to
layout: default
codeexample: 'copy($$(±a±).filter(a => a.href.match(/\.(jpe?g|gif|png|webp)$/i)).map(i=>i.href).join(±\n±))'
tags: images media scraping
---

{% highlight javascript %}
copy($$('a').filter(
    a => a.href.match(
        /\.(jpe?g|gif|png|webp)$/i
    )).map(i=>i.href).join('\n'))
{% endhighlight %}