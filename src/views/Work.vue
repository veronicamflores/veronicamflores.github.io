<template>
  <div class="work">
    <div class="container">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="d-flex justify-content-around align-items-center">
          <img src="../assets/musicVue.png" alt="" class="img-fluid border-r pink-border">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/itunes-api" target="_blank">Code</a></button>         
          <button class="btn"><a href="https://veronicamflores.github.io/itunes-api/" target="_blank">Website</a></button>         
        </div>
        <h4>Music is Fun</h4>
        <p>Created a music enthusiast application where users search
          for songs from the itunes api. Independently time boxed and assessed 
          challenges.  Utilized HTML, CSS, JavaScript, and Bootstrap</p>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="d-flex justify-content-around align-items-center">
           <img src="../assets/slapgame.png" alt="" class="img-fluid border-r pink-border">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/checkpoint-one" target="_blank">Code</a></button>
          <button class="btn"><a href="https://veronicamflores.github.io/checkpoint-one/" target="_blank">Website</a></button>          
        </div>
        <h4>Slap Game</h4>
        <p>A game where users can compete computer generated opponents increasing 
          and decreasing their personal levels by using various objects. Designed 
          using HTML, CSS, Bootstrap, and JavaScript. Created all the personalized artwork of 
          characters</p>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="d-flex justify-content-around align-items-center">
           <img src="../assets/inspire.png" alt="" class="img-fluid border-r pink-border">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/todo" target="_blank">Code</a></button>
           <button class="btn"><a href="https://veronicamflores.github.io/todo/" target="_blank">Website</a></button>          
        </div>
        <h4>Inspire</h4>
        <p>Inspire is a todo list app where users can create and delete todos, along with see the weather, 
          and get a random background image and quote. Currently working on a new version with better and more functionality.
          Created using HTML, CSS, and JavaScript</p>
      </div>   
      <!-- <div class="col-md-6 col-xs-12">
        <div class=" size d-flex justify-content-around align-items-center">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/checkpoint-four" target="_blank">Code</a></button>        
        </div>
        <h4>Battle Cards</h4>
        <p>Example Description</p>
      </div>  -->
      <div class="col-md-6 col-xs-12">
        <div class="d-flex justify-content-around align-items-center">
           <img src="../assets/kanban.png" alt="" class="img-fluid border-r pink-border">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/summer18-kanban" target="_blank">Code</a></button>        
        </div>
        <h4>Kanban</h4>
        <p>Developed a "Trello" inspired application. Kanban is an application that 
          allows users to create board, lists, tasks and comments. Built with HTML, JavaScript, and
          Vue.js. </p>
      </div> 
      <div class="col-md-6 col-xs-12">
        <div class=" d-flex justify-content-around align-items-center">
           <img src="../assets/keepr.png" alt="" class="img-fluid border-r pink-border">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/keepr" target="_blank">Code</a></button>      
        </div>
        <h4>Keepr</h4>
        <p>Developed a "Pinterest" inspired application. Keepr is a social network that 
          allows users to visually share, and discovernew interests by posting images or 
          videos. Users can search other user collections.  Built with HTML, JavaScript, 
          Vue.js,and C#. Embraced design and development challenges</p>
      </div> 
      <div class="col-md-6 col-xs-12">
        <div class=" d-flex justify-content-around align-items-center">
           <img src="../assets/yoft.png" alt="" class="img-fluid border-r pink-border">
        </div>
        <div class="mt-2 mb-2 d-flex justify-content-around" >
          <button class="btn"><a href="https://github.com/veronicamflores/capstone" target="_blank">Code</a></button>
          <button class="btn"><a href="https://yoft.herokuapp.com/" target="_blank">Website</a></button>          
        </div>
        <h4>YOFT</h4>
        <p>Yoft" also known as Ye Olde Fitness Tracker, a personalized fitness 
          application where users can track weather, makeposts, try new workouts, 
          and track goals. Users are given daily goals to push their limits. 
          Ye Olde was inspired bymedieval knights leveling up, users can level up 
          and gain different badges. Developed utilizing HTML, CSS, Bootstrap, Node.js, 
          and Vue.js. Collaborated with peers and implemented scrum methodologies</p>
      </div>              
    </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <p><router-link class="hover" :to="{name: 'home'}">Home</router-link></p>&nbsp;
            <p><router-link class="hover" :to="{name: 'about'}">About</router-link></p>&nbsp;
            <p><router-link class="hover" :to="{name: 'work'}">Work</router-link></p>&nbsp;
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <a class="font-size" href="https://github.com/veronicamflores" target="_blank"><i class="fab fa-github"></i></a >&nbsp;<a class="font-size" href="https://www.linkedin.com/in/veronicamarieflores" target="_blank"><i class="fab fa-linkedin"></i></a>&nbsp;<a class="font-size" href=""><i class="fab fa-facebook-square" target="_blank"></i></a>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center"><p>&copy; 2018 Veronica Flores</p></div>
    </div>
      </div>
  </div>
</template>
<style>
.pink-border {
  border: 5px solid #5f1854;
}
.btn a {
  color: #f8f1d3;
}
.btn a:hover {
  color: #1abb9c;
}
</style>
