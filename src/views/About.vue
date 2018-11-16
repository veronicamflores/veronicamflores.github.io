<template>
  <div class="about">
    <div class="container">
    <div class="row d-flex">
      <div class="col-md-7 col-xs-12">
        <img src="../assets/about2.png" alt="" class="img-fluid border-r mt-2 mb-5">
      </div>
      <div class="col-md-5 col-xs-12">
        <div class="row d-flex">
        <div class="col-12">
        <h2>Hi! I'm Veronica Flores.</h2>
        <p>I like to think of myself as talented and accomplished in front and back-end development. 
        After years of being self-taught I pursued additional education 
        in an immersive boot-camp experience finessing software development 
        skills. I'm a recent graduate with experience building full scale 
        applications from start to finish. I am a passionate artist with a 
        knack for problem solving and debugging. Previously I contributed to  
        my local drama club, providing creative input on backdrops and set design. 
        I enjoy a good challenge and love developing applications that are fully 
        functional and watching them come to life.</p>
      </div> 
      <div class="col-12">
        <h3>Skills | Knowledge In...</h3>
        <ul>
          <li>HTML </li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="col-12">
        <h2>Contact Information</h2>
        <p>Email: <a class="colorFont" href="mailto:veronica.marie.flores@gmail.com">veronica.marie.flores@gmail.com</a></p>
        <p>My Github: <a class="font-size" href="https://github.com/veronicamflores" target="_blank"><i class="fab fa-github"></i></a> |
         My LinkedIn: <a class="font-size" href="https://www.linkedin.com/in/veronicamarieflores" target="_blank"><i class="fab fa-linkedin"></i></a>
        | My Facebook: <a class="font-size" href="#"><i class="fab fa-facebook-square" target="_blank"></i></a></p>
      </div>
        </div>        
      </div>
    </div>
    </div><div class="container mt-3">
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <p><router-link class="hover" :to="{name: 'home'}">Home</router-link></p>&nbsp;
            <p><router-link class="hover" :to="{name: 'about'}">About</router-link></p>&nbsp;
            <p><router-link class="hover" :to="{name: 'work'}">Work</router-link></p>&nbsp;
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center"><p>&copy; 2018 Veronica Flores</p></div>
    </div>
      </div>
  </div>
</template>
<style>
.colorFont {
  color: #8b104e;
}
</style>

