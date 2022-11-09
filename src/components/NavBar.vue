<template>
  <header class="nav__bar">
    <div class="left-items">
      <img src="../assets/program-icon.png" alt="icon" class="program-icon" />
      <router-link to="/" class="nav__logo nav__link">Home</router-link>
    </div>
    <div class="nav__items">
      <router-link to="/about" class="nav__item nav__link">About</router-link>
      <router-link to="/works" class="nav__item nav__link">Works</router-link>
    </div>
  </header>
</template>

<style scoped>
.div {
  position: fixed;
  width: 100%;
}
.left-items {
  display: flex;
}
.nav__bar {
  position: fixed;
  width: 100%;
  top: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: black;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
}
.nav__link:visited {
  color: #eee;
}
.nav__link:hover {
  font-weight: bold;
  color: #fff;
}
.nav__logo {
  width: auto;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 100px;
  border-left: 1px solid #eee;
}
</style>
