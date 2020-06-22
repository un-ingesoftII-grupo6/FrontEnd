<template>
<div id="app">
  <v-app>
    <router-view></router-view>
    <Footer>
      <v-footer id ="footer" class="py-4 bg-dark text-white-50" padless>
        <v-row justify="center" no-gutters>
            <strong>Copyright &copy; UN Wallet</strong>
        </v-row>
      </v-footer>
    </Footer>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    dataStorage(key, item) {
      localStorage.setItem(key, item);
    },
    deleteDataStorage(key) {
      localStorage.removeItem(key);
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Big+Shoulders+Display:600&display=swap");

html,

#page-content {
  flex: 1 0 auto;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF)
}

#app{
  height: 100%;
}

#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}

#button {
    margin-left: .8em;
}

#button1 {
    margin-top: .8em;
}
</style>
