---
title: Dear Console, give me a list of all the external links with their text as markdown
name: Give me a list of all the external links with their text as markdown
layout: default
codeexample: 'copy($$(`a[href^=http]`).map(l => `[${l.innerText}](${l.href})`).join(`\n`))'
tags: links markdown
---

{% highlight javascript %}
copy($$(`a[href^=http]`).map(l => 
    `[${l.innerText}](${l.href})`
).join(`\n`))
{% endhighlight %}

