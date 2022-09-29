---
title: Dear Console, give me all the images as markdown including their alternative text.
name: Give me all the images as markdown including their alternative text.
layout: default
codeexample: 'copy($$(±section img±).map(i=>`![${i.alt}](${i.src})`).join(±\n±))'
tags: markdown images scraping
---

{% highlight javascript %}
copy($$('section img').map(
    i => `![${i.alt}](${i.src})`).join('\n')
)
{% endhighlight %}





