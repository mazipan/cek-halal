<template>
    <header class="header">
      <img src="../assets/cek-halal.png" class="brand"/>  
      <span class="brand-title">Cek Halal</span>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style>
.header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #000;
  color: #65eaea;
}

.brand {
  height: 40px;
  display: inline-block;
  vertical-align: middle;
  margin: 0.5em;
  border-radius: 0.3em;
}

.brand-title {
  font-size: 30px;
  line-height: 1.5;
  font-style: italic;
  vertical-align: middle;
  font-family: 'Great Vibes', cursive;
}
</style>
