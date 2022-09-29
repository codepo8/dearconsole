---
title: Contributing to Dear Console…
name: Give me a list of all headings and their level
layout: text
---

# So you got something you want to tell the Console?

Excellent, we'd love to add it here for all to benefit. The best way would be to go to the [GitHub Repo](https://github.com/codepo8/dearconsole) and add it yourself. If you're not familiar with GitHub, you can also [contact me on Twitter me about your snippet](https://twitter.com/codepo8) and I'll add it for you.

## How to contribute

1. Fork the repo
1. Add your snippet to the `_scripts` folder
1. Snippets are Markdown files with a YAML front matter. 
1. You can take a look at the existing snippets or take the `template.md` file and alter it.
1. Once you have your snippet, create a pull request and we're off to the races

Here is what the template looks like with comments to explain what each thing means.

{% raw %}
    
    ---
    # This is the title
    title: Dear Console, say hello world
    # This is what the link will display on the idex page
    name: Say hello world
    # This is the code example that will be added to the copy buttons
    # Every instance of ' needs to be replaced with ± and double
    # quotes should not be used
    codeexample: 'console.log(±hello world±)'
    # tags for the example
    tags: logging hello console
    # choose the default layout to render an HTML document
    ---
    
    {% highlight javascript %}
    console.log('hello world')
    {% endhighlight %}
    
{% endraw %}

Thanks for contributing!