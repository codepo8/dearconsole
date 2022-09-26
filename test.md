
<ul>
{% for s in site.scripts %}
  <li>
    <a href="dearconsole/{{ s.url }}">
      {{ s.name }} - {{ s.position }}
    </a>
  </li>
{% endfor %}
</ul>