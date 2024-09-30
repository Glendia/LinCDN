<script setup>
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogDir = path.join(__dirname, '/blog/');
const files = fs.readdirSync(blogDir);

const posts = files
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const fullPath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContent);
    return {
      ...data,
      path: `/blog/${file.replace(/\.md$/, '')}`
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
  

</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.path">
        <router-link :to="post.path">{{ post.title }}</router-link> - {{ post.date }}
      </li>
    </ul>
  </div>
</template>