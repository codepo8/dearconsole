---
title: Dear Console, give me the current page as a markdown list link item
name: Give me the current page as a markdown list link item
layout: default
codeexample: 'copy(`* [${$(±title±).innerText.trim()}](${document.location.href})`)'
tags: document url markdown 
---

{% highlight javascript %}
copy(`* [${$('title').innerText.trim()}](${document.location.href})`)
{% endhighlight %}