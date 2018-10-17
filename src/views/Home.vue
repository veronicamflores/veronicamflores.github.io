<template>
  <div class="home">
    <div class="container mt-3">
      <div class="row body">
        <div class="col-xs-12 col-md-4 img-bg border-r mt-1 mb-2"><h1 class="mt-5">VERONICA FLORES</h1><h3>FULLSTACK DEVELOPER</h3></div>
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
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center color3 border-r mt-2 mb-2"><h1>Want to Chat? Leave  A Message!</h1></div>
        <div class="col-5">
          <form class="row d-flex justify-content-between">
            <input type="text" placeholder="First Name" class="form-control col-5 mt-2 mb-2"/>
            <input type="text" placeholder="Last Name" class="form-control col-6 mt-2 mb-2"/>
            <input type="email" placeholder="email" class="form-control col-12 mt-2 mb-2">
            <input type="text" placeholder="MESSAGE" class="form-control col-12 mt-2 mb-2">
            <button class="btn btn-primary mt-2 mb-2">Submit</button>
          </form>
        </div>
      </div>
        </div>
        <div class="col">
          <footer class="row color2 mt-5">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <p><router-link class="hover" :to="{name: 'home'}">Home</router-link></p>&nbsp;
            <p><router-link class="hover" :to="{name: 'about'}">About</router-link></p>&nbsp;
            <p><router-link class="hover" :to="{name: 'work'}">Work</router-link></p>&nbsp;
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <h3><i class="fab fa-github"></i>&nbsp;<i class="fab fa-linkedin"></i>&nbsp;<i class="fab fa-facebook-square"></i></h3>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center"><p>&copy; 2018 Veronica Flores</p></div>
      </footer></div>
        
      
    </div>
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
  background: url("../assets/honeyPancake.jpeg") no-repeat center center;
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
.hover:hover {
  color: #8b104e;
}
.hover {
  color: #f8f1d3;
}
</style>
 