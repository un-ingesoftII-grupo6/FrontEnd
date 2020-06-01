<template>
<div id="app">
    <div class="container">
    <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
html,

body {
  height: 100%;
}

#page-content {
  flex: 1 0 auto;
}

#sticky-footer {
  flex-shrink: none;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF)
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
