<template>
  <div class="home">
    <img src="../assets/cek-halal-small.png"/>

    <div class="search__link">
      <router-link :to="{ name: 'search' }" class="search__action">
        Cek Disini
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.search__link{
  margin: 1em auto;
  text-align: center;
}
.search__action{
  -webkit-appearance: none;
  display: inline-block;
  padding: 13px 5em;
  border-radius: .25em;
  outline: none;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #000;
  color: #65eaea;
}
</style>
