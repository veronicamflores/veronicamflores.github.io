<template>
  <div class="home">
    <div class="container mt-3">
      <div class="row body">
        <div class="col-xs-12 col-md-4 img-bg border-r mt-1 mb-2"><h1>VERONICA FLORES</h1><h3>FULLSTACK DEVELOPER</h3></div>
        <div class="col-xs-12 col-md-8">
          <div class="row pl-3 d-flex justify-content-around">
            <div class="col-6 img-about size border-r mt-1 mb-2"><router-link :to="{name: 'about'}"></router-link></div>
            <div class="col-5 color3 size border-r mt-1 mb-2"></div>
            <div class="col-5 color4 size border-r mt-3"></div>
            <div class="col-6 size img-work border-r mt-3"><h3 class="work-text" hidden>Find More Here</h3></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <footer class="row color2">
        <div class="col-6 d-flex justify-content-center"><p>&copy; BLAh BAlh BlAh</p></div>
        <div class="col-6 d-flex justify-content-center"><p>Home | About | Work </p></div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
<style>
.work-text:hover {
  visibility: visible;
}
.img-bg {
  background: url("../assets/chocolatePancakes.png") no-repeat center center;
  background-size: cover;
  height: 42rem;
}
.img-about {
  background: url("../assets/about2.png") no-repeat;
  background-size: cover;
}
.img-about:hover {
  border: 5px solid #8b104e;
}
.img-work {
  background: url("../assets/musicVue.png") no-repeat center center;
  background-size: cover;
}
.img-work:hover {
  background: url("../assets/workpic1.png") no-repeat center center;
  background-size: cover;
  border: 5px solid #5f1854;
}
.img-round {
  border-radius: 50%;
}
.border-r {
  border-radius: 20px;
}
.size {
  height: 20rem;
}
.color1 {
  background-color: #f8f1d3;
}
.color2 {
  background-color: #1abb9c;
}
.color3 {
  background-color: #8b104e;
}
.color4 {
  background-color: #5f1854;
}
.ma-w {
  max-width: 50%;
}
</style>
 