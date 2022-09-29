---
title: Dear Console, give me the URLs of all the image links in the document
name: Give me the URLs of all the image links in the document
layout: default
codeexample: 'copy($$(±a±).filter(a => a.href.match(/\.(jpe?g|gif|png|webp)$/i)).map(i=>i.href).join(±\n±))'
tags: images media scraping
---

{% highlight javascript %}
copy($$('a').filter(
    a => a.href.match(
        /\.(jpe?g|gif|png|webp)$/i
    )).map(i=>i.href).join('\n')
)
{% endhighlight %}