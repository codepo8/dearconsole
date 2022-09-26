
<ul>
{% for s in site.scripts %}
  <li>
    <a href="/dearconsole{{ s.url }}">
      {{ s.name }}
    </a>
  </li>
{% endfor %}
</ul>