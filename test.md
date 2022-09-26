  <ul class="tips">
  {%- for post in collections.all -%}
    <li class="hover-box tip"><a href="{{ post.url }}">x{{ post.data.title }}</a></li>
  {%- endfor -%}
  </ul>