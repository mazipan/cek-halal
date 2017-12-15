<template>
  <footer class="footer">
    <h2>About Cek Halal</h2>
    <ul>
      <li><a href="https://github.com/mazipan/cek-halal" target="_blank" rel="noopener">Source Code</a></li>
      <li><a href="https://github.com/mazipan/" target="_blank" rel="noopener">Author</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer{
  text-align: center;
}
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
