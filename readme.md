# My Personal Blog

## Requirement
- [Node Js](https://nodejs.org/en/download)
- [Jekyll](https://jekyllrb.com/docs/installation/)

## Installation
- Node Dependencies
```bash
npm install
```
- Gem dependecies
```bash
bundle install
```

## Run
```bash
bundle exec jekyll serve --livereload
```

## Structure (root folder)
- `_data` -  contain data related to blog
- `_includes` - contain reusble component template
- `_layouts` - contain page layout
- `_posts` - contain all posts
- `assets` - contain assets for blog (css, js, image)
- `series` - folder for create blog series
- `index.html` - entry page
- `archives.html` - archives page
- `categories.html` - categories page (show all post based on categories)
- `tags.html` - tags page (show all post based on tags)
- `404.html` - not found page

## Post
* Post naming convention
`YYYY-MM-DD-{title separated by spaces}.md`
* Post permalink
    * **title**: specify the title of the post. Leave this field blank if you want the title to match the title in the post file name.
    * **thumbnail**: specify thumbnail for post (optional). The image must be under `assets/post-assets/images/` folder. Only specify the name of image (not full path).
    * **categories**: specify the categories of post (separated by spaces if there are multiple categories for post)
    * **tags**: specify the tags of post (separated by spaces if there are multiple tags for post)
    * **is_series**: specify if the post is part of a series (true or false)
    * **series_order**: specify the order of post in the series (number)
    * **series_title**: which series title this post belongs to (series title is specified in _data/blog-series.toml)

**Example**
```md
---
title: Digital System
thumbnail: hero1.jpg
categories: lower-level
tags: digital-system analog digital
is_series: true
series_order: 1
series_title: digital-system
---
```
* Embed post figure image
```md
{% include post-image.html image="hero1.jpg" caption="hero image" label="example" %}

You can see an example in {% figref example %}.
```
## Blog series
Step for create a series:
1. add series in `_data/blog-series.yml`
```yml
- name: digital-system
  desc: Blog Series related digital system 
  img: digital-system.jpeg
```
2. Create folder inside `series` folder with the same name in `_data` and create `index.html` inside.
**example index.html**
```html
---
layout: series
title: Digital System Series
series_title: digital-system
---

{% assign posts = site.posts | where: "is_series", true | where: "series_title", page.series_title | sort:
"series_order" %}

{% include link-list-group.html data=posts chapters="Introductory Concepts:1" %}
```
