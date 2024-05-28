<template>
  <div class="navbarcontainer">
  <vue-navigation-bar class="navbar" style="border-radius: 35px"  >
    
    
  
    <!-- Search container with a search input and a search icon -->
    <div class="search-container">
      <input type="text" class="search-input" placeholder="Search...">
      <span class="search-icon"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="</span>
    </div>
    <!-- other components and content -->
    <button class="hamburger-menu" @click="toggleDrawer">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</button>
    
    <!-- App bar links container with five links -->
    <div class="appbarlinks">
      <div class="link-container">
        <a href="/Restaurants" class="link">Restaurants</a>
        <a href="/Oder" class="link">Oder</a>
        <a href="/" class="logo">-GreenTable-</a>
        <a href="/Community" class="link">community</a>
        <a href="/About" class="link">About</a>
        
        <a href="/experiment" class="link" >experiment</a>
        <div class="home-icons">
            <a href="/signin" >
          <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
              class="home-image3" /></a>
            </div>
      </div>
    </div>
  </vue-navigation-bar>
</div>

  
  

</template>
<script>
// Importing the Home and IconCommunity components
import Home from "./../components/Home.vue";
import IconCommunity from "./icons/IconCommunity.vue";
import Drawer from "./../components/Drawer.vue";

export default {
  components: {
    Drawer,
  },
  data() {
    return {
      drawerVisible: false,
    };
  },
  methods: {
  toggleDrawer() {
    
    this.drawerVisible = !this.drawerVisible;
    this.$refs.drawer.toggle();
  },
},
};
</script>

<style scoped>

.hamburger-menu {
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
}
.drawer-open {
  transform: translateX(0);
}
.hamburger-menu span {
  width: 100%;
  height: 2px;
  background: black;
  border-radius: 5px;
}
vue-app-bar{
  z-index: 10px;
  
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 200;
  height: 60px; /* Adjust the height as needed */
  /* Additional styling for your navbar */
}

.bar{
  width: 10px;
}
.link{
  text-decoration: none;
  font-family: Jost;
  font-size: 14px;
  color: beige;
}
.navbarcontainer{
  width: 80vw;
  z-index: 20px;
}
.home-icons {
  display: flex;
  position: relative;
  left: 0px;
}
.navbar {
  /* Nav bar styles */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 35px;
  margin-top: 15px;
  margin-left: 50px;
  background-color: rgba(32, 30, 30, 0.616); /* Grey background color with 0.8 opacity */
  width: 85vw; /* Use percentage or vw as needed */
  z-index: 200;
  position: fixed;
  color: aliceblue;
}

.search-container {
  /* Search container styles */
    display: flex;
    position: absolute;
    left: 10px;
}

.search-input {
  /* Search input styles */
  width: 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: width 0.3s ease;
  height: 30px;
}

.search-icon {
  /* Search icon styles */
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url("https://th.bing.com/th/id/OIP._RTO9yp1xH5aQA0vS7fpHAHaHW?rs=1&pid=ImgDetMain") no-repeat center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.search-container:hover .search-input {
  /* Search input hover styles */
  width: 100px;
}

.search-container:hover .search-icon {
  /* Search icon hover styles */
  transform: translateY(-50%) rotate(90deg);
}

.appbarlinks {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  
  .link-container {
    display:flex;
    justify-content:center;
    justify-content: space-around;
    width: 70vw;
    align-items: center;
    position: relative;
    left: 180px;
    color: beige;
  }
  
 
  
  .logo {
    
  font-family: Jost;
    color: rgb(46, 252, 5);
    font-size: 20px;
    
    
    text-decoration: none;
  }
  
  </style>