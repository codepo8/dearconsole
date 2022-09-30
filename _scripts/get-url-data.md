---
title: Dear Console, give me a list of all data from a GET URL
name: Give me a list of all data from a GET URL
layout: default
codeexample: 'copy(Array.from(new URLSearchParams(window.location.search)).map(([key,val]) => `${key}: ${val}`).join(±\n±)'
tags: url scraping
author: Pankaj Parashar
---

{% highlight javascript %}
copy(
  Array.from(new URLSearchParams(window.location.search))
       .map(([key,val]) => `${key}: ${val}`)
       .join("\n")
)
{% endhighlight %}
