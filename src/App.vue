<template>
  <div id="app">
    <header-section></header-section>

    <main>
      <router-view></router-view>
    </main>

    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from '@/components/Header'
import FooterSection from '@/components/Footer'

export default {
  name: 'app',
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

</style>
