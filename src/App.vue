<template>
  <div id="app" class="color2 container-fluid">
    <div id="nav">
      <nav class="navbar navbar-expand-md color2">
        <a class="navbar-brand pr-3" href="/#/">  <img src="./assets/glamour1.png" width="150" height="150" alt="" class="img-round"/></a>
        <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span  class="p-2"><i class="fas fa-terminal"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>&nbsp; &nbsp; 
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>&nbsp; &nbsp;
            <li class="nav-item">
              <router-link to="/work">Work</router-link>
            </li>&nbsp; &nbsp;
          </ul>
        </div>
      </nav>
    </div>
      
    <router-view/>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: "VT323", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.nav-item {
  font-size: x-large;
}
.nav-item a {
  color: #f8f1d3;
}
.nav-item a:hover {
  color: #8b104e;
}
.btn {
  background-color: #8b104e;
  color: #f8f1d3;
}
.img-round {
  border-radius: 50%;
}
.color1 {
  background-color: #f8f1d3;
}
.color2 {
  background-color: #1abb9c;
}
</style>
