<template>
  <nav><router-link to="/">DC Scouting</router-link></nav>
  <router-view />
</template>

<style lang="scss">
@import url('@/assets/gilroy/gilroy.scss');
#app {
  font-family: Gilroy;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
