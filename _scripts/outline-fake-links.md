---
title: Dear console, show a red outline around all links that aren't going anywhere
name: Show a red outline around all links that aren't going anywhere
layout: default
codeexample: '$$('a').filter(l => l.href.match(/^#$|^javascript:/)).forEach((l)=>{l.style='outline:10px solid firebrick';})'
tags: images media scraping
---

{% highlight javascript %}
$$('a').filter(
    l => l.href.match(/^#$|^javascript:/)).forEach(
        l => {l.style='outline:10px solid firebrick';}
)
{% endhighlight %}


