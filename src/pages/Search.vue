<template>
  <div class="search">
    <div class="search__wrapper">
      <div class="search__select" @click="toggleMenu">
        {{ selectedMenu.display }}

        <i class="caret">&#9662;</i>
      </div>
      <input type="text" 
        class="search__input" 
        v-model="searchText"
        :placeholder="placeholderText">
      <button 
        class="search__btn"
        @click="doSearch">
        Cari
      </button>
    </div>

    <div class="menu" :class="{'menu--show': showMenu}">
      <div v-for="menu in menus" 
            :key="menu.value" 
            class="menu__item"
            :class="{'menu--active': menu.value === selectedMenu.value}"
            @click="selectMenu(menu)">
          {{ menu.display }}
      </div>
    </div>

    <div class="search__result">
      <div class="search__empty" v-if="dataResult.length <= 0">
        <img src="../assets/cek-halal-small.png"/>
      </div>
      <div class="search__exist" v-if="dataResult.length > 0">
        <div class="search__item"
          v-for="data in dataResult" 
          :key="data.nomor_sertifikat">
          <div>
            {{ data.title }}
          </div>
          <div>
            {{ data.produsen }}
          </div>
          <div>
            {{ data.nomor_sertifikat }}
          </div>
          <div>
            {{ data.berlaku_hingga }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data () {
    return {
      menus: [
        {
          display: 'Nama Produk',
          value: 'nama_produk'
        },
        {
          display: 'Nama Produsen',
          value: 'nama_produsen'
        },
        {
          display: 'Nomor Sertifikat',
          value: 'nomor_sertifikat'
        }
      ],
      selectedMenu: {
        display: 'Nama Produk',
        value: 'nama_produk'
      },
      showMenu: false,
      timeout: null,
      searchText: '',
      dataResult: []
    }
  },
  computed: {
    placeholderText: function () {
      let text = this.selectedMenu.display.toLowerCase()
      return `Ketik ${text} disini`
    }
  },
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu
      clearTimeout(this.timeout)
      // auto hide when there is no action
      this.timeout = setTimeout(() => {
        this.showMenu = false
      }, 2000)
    },
    selectMenu: function (menu) {
      this.selectedMenu = menu
      this.showMenu = false
    },
    doSearch: function () {
      let path = `https://sites.google.com/macros/exec?service=AKfycbx_-gZbLP7Z2gGxehXhWMWDAAQsTp3e3bmpTBiaLuzSDQSbIFWD&menu=${this
        .selectedMenu.value}&query=${this.searchText}`

      if (this.searchText !== '') {
        axios.defaults.crossDomain = true
        axios
          .get(path)
          .then((response) => {
            this.dataResult = response.data
            console.log('Success when getting data via API ', response)
          })
          .catch((error) => {
            console.log('Error when trying to get via API ', error)
          })
      }
    }
  }
}
</script>

<style scoped>
.search {
  width: 100%;
  clear: both;
}
.search__wrapper {
  display: flex;
  justify-content: center;
  padding: 0 0.5em;
}
.caret {
  float: right;
  font-size: 14px;
  font-style: normal;
  margin-top: -3px;
  color: #282828;
}
.search__select {
  padding: 1em 0.5em;
  width: 35%;
  border: 1px solid #999;
  background-color: #fff;
  border-radius: 0;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
  font-size: 12px;
  color: #999;
  text-align: left;
}
.search__input {
  -webkit-appearance: none;
  padding: 1em;
  width: 70%;
  outline: none;
  border: 1px solid #999;
  border-radius: 0;
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
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}
.search__result {
  min-height: 15em;
}

.menu {
  overflow: hidden;
  max-height: 0;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  width: 200px;
  margin-left: 0.7em;
  text-align: left;
  font-size: 13px;
  color: #999;
}
.menu--show {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  max-height: 1000px;
  overflow: hidden;
}
.menu--active {
  background-color: #000;
  color: #65eaea;
}
.menu__item {
  padding: 1em;
  border-bottom: 1px solid #999;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}
.search__item{
    margin-top: .5em;
    padding: 1em;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    max-width: 100%;
}
</style>
