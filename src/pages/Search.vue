<template>
  <div class="search">
    <div class="search__wrapper">
      <input type="text" 
        class="search__input" 
        v-model="searchText"
        placeholder="Ketik nama produk, produsen atau nomor sertifikat">
      <button 
        class="search__btn"
        @click="doSearch">
        Cari
      </button>
    </div>
    <div class="search__result">
      <div class="search__empty" v-if="dataResult.length <= 0">
        <img src="../assets/cek-halal-small.png"/>
      </div>
      <div class="search__exist" v-if="dataResult.length > 0"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchText: '',
      dataResult: []
    }
  },
  methods: {
    doSearch: function () {
      alert('You searching ' + this.searchText + '...')
    }
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  clear: both;
}
.search__wrapper {
  display: flex;
  justify-content: center;
  padding: 0 .5em;
  
}
.search__input {
  padding: 1em;
  width: 70%;
  outline: none;
  border: 1px solid #999;
  border-radius: 0;
  border-top-left-radius: .25em;
  border-bottom-left-radius: .25em;
}
.search__btn {    
  -webkit-appearance: none;
  padding: 1em 2em;
  outline: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #000;
  background-color: #000;
  color: #65eaea;
  border-radius: 0;
  border-top-right-radius: .25em;
  border-bottom-right-radius: .25em;
}
.search__result{
  min-height: 15em;
}
</style>
