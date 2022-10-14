---
title: Dear Console, give me the current size of localstorage
name: Give me the current size of localstorage
codeexample: 'Object.entries(localStorage).reduce( (total, [key, value]) => total + (value.length*2 / 1024), 0 ).toFixed(2)'
tags: localstorage
layout: default
author: Pankaj Parashar
authorlink: https://pankajparashar.com
---

{% highlight javascript %}
Object.entries(localStorage)
      .reduce( (total, [key, value]) => total + (value.length*2 / 1024), 0 )
      .toFixed(2)
{% endhighlight %}
