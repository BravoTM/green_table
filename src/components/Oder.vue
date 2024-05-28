<template>
  <div class="homecontainer">
    <div class="background">
      <div class="backimage1">
        <div class="backimage2">
          <div class="backimage3">
            <div class="backimage4">
              <div id="myDiv" class="backimage5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      
      
    
    <div class="text">
      <block>
        <h1>
          <span class="welcome">Welcom to<br/></span>GreenTable.
        </h1>
        <span><span></span></span>
      </block>
    </div>
    <div>
    <div class="scrollpage">
      <h2 class="imgtitle">Discover Local Restaurants</h2>
      <br/>
      
      <div class="section">
        <div class="card" v-for="(image, index) in images" :key="index"><img :src="image"></div>
      </div>
      <br/>
      <br/>
      <div class="home-banner">
        <div class="home-container05">
          <h3 class="home-text13">GreenTable</h3>
          <span class="home-text14">healthy living</span>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div class="home-container06 max-width-container">
        <div class="home-container07">
          <span class="home-text15">
            Welcome to our community-driven restaurant platform! Launched in
            2024, our website is a hub for connecting food enthusiasts with
            local restaurants. Our mission? To foster community spirit, empower
            local businesses, and create memorable dining experiences. Whether
            you’re craving a cozy café, a vibrant food truck, or a family-owned
            bistro, our platform makes it effortless to discover and support
            these culinary gems. Join us in celebrating the flavors of our
            community! </span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzMuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
            class="home-svg"/>
          <br/>
          <br/>
          <div class="registerbtn">
          <a href="/registerRestaurant" class="discover">Register Restaurant</a>
        </div>
          
          
        </div>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
    <div class>
    <div class="info">
      <h1 class="home-banner-heading heading2" id="info"> Delight Your Taste Buds with Nature&apos;s Finest</h1>
      <a  href="/about" class="discover">Discover Our Story</a>
      <button class="comment">Leave a comment</button>
    </div>
    </div>
    
  </div>
</div>
</template>

<script>
import Drawer from './Drawer.vue';
export default {
  name: 'Home',
  components: {
    Drawer,
  },
  data() {
    return {
      drawerVisible: false,
      images: [
        'https://i.pinimg.com/564x/93/5a/d0/935ad0009e287388bdc0a6eed6426131.jpg',
        'https://i.pinimg.com/236x/53/93/0f/53930f1701abb63c7e0263824f21aefa.jpg',
        'https://i.pinimg.com/236x/c5/27/4b/c5274b49e5f6d5c8bb7dc6666a7e960e.jpg',
        'https://i.pinimg.com/236x/b1/bc/4c/b1bc4c726d89e528b1d8ee5cf87b545d.jpg',
        'https://i.pinimg.com/474x/d8/61/f9/d861f9b8f20fef00348ec34e8e6c4ae3.jpg',
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
    openNewPage() {
      // Redirect to the index.js page (plain vanilla HTML)
      window.location.href = 'indx.html';
    },
  },
};


</script>






<style scoped>
.registerbtn{
  position: relative;
  right: 250px;
}
a{
  text-decoration: none;
}
#info{
  position: relative;
  top: -90px;
  left: 300px;
}
.home-banner-heading heading2{
  padding-left: 20px;
  width: 100%;
  position: relative;
  right: 10px;
}
.home-container07 {
  width: 100%;
  max-width:100vw;
  display: flex;
  position: relative;
  max-width: 770px;
  box-sizing: border-box;
  margin-top: var(--dl-space-space-fiveunits);
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  margin-left: 200px;
}
  .home-svg {
  
  width: 199px;
  height: 200px;
  position: absolute;
}
.content-wrapper{
  z-index: 100;
  margin-top: 180px;
  max-width:100vw;
}

  .homecontainer {
    display: flex;
    justify-content:space-between;
    z-index: 1;
    align-items: center;
    overflow: auto;
  min-height: 100vh; 
    font-family:'Arial';
    background-color: #4a4944;
    max-width:100vw;
  }
.welcome{
  margin-top: 10px;
    max-width: 800px;
    text-align: center;
    font-family: STIX Two Text;
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
  }
  
h1 {
    font-size: 80px;
    font-weight: 700;
    color:white;
    font-family:pacifico;
    position: relative;
    
    
    
    
  }
.home-footer {
  background-color: #3b3530;
  color: #fff;
  padding: 2rem 1rem;
  width: 100%;
}

.footerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  flex-direction: column;
  padding-bottom: 32px;
  
}

.home-container30 {
  display: flex;
  align-items: center;
  width: 100%;
}

.logoa {
  font-size: 2rem;
  margin-right: 2rem;
}

.footer-nav {
  display: flex;
  align-items: center;
}

.footer-nav span {
  margin-right: 2rem;
  cursor: pointer;
}

.home-separator {
  border-left: 1px solid #fff;
  height: 2rem;
  margin: 0 2rem;
}

.home-container31 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
}

.home-text88 {
  margin-right: 2rem;
}

.home-icon-group1 {
  display: flex;
  align-items: center;
}

.socialIcons {
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  fill: #fff;
}

.heading2 {
  font-size: 35px;
  font-family: STIX Two Text;
  font-weight: 600;
  line-height: 150%;
  z-index: 200;
}

.info {
  width: 100vw;
  display: flex;
  align-items: center;
  padding-top: 96px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 96px;
  justify-content: space-between;
  background-color: #f8a970;
  z-index: 200;
  display: block;
  
}


.buttonFilled {
  
  color: var(--dl-color-custom-neutral-light);
  transition: 0.3s;
  font-family: Noto Sans;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 24px;
  padding-right:10px;
  padding-bottom: 5px;
  background-color: #D1510A;
  display: inline;
  

}
.discover {
  margin-left: 450px;
  color: var(--dl-color-custom-neutral-light);
  transition: 0.3s;
  font-family: Noto Sans;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 24px;
  padding-right:10px;
  padding-bottom: 5px;
  background-color: #D1510A;
  display: inline;
  text-decoration: none;

}

.card {
  position: relative;
  width: 150px;
  height: 220px;
  background: rgb(12, 15, 15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 0px;
  margin-bottom: 0px; /* Add this line */
  
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 18%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: rgba(124, 114, 109, 0.582);
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100% 0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.card:hover:after {
  content: "view restourant";
}






.h2 {
  position: relative;
  bottom: 300px;
  right: -200px;
  z-index: 10;
  width: 50vw;
  display: flex;
}

.comment {
  background-color: #D1510A;
  border-radius: 25px;
  color: rgb(41, 38, 38);
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  height: 30px;
  width: 150px;
  align-items: center;
  margin-left: 40px;
}

.join {
  background-color: #D1510A;
  border-radius: 25px;
  color: rgb(41, 38, 38);
  padding: 14px 38px;
}

.home-text15 {
  color: var(--dl-color-gray-black80);
  width: 100%;
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: "Jost";
  font-weight: 400px;
  line-height: 175%;
  font-stretch: normal;
  margin-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
}

.home-text13 {
  margin-bottom: var(--dl-space-space-halfunit);
}

.home-text14 {
  text-transform: uppercase;
}

.home-container05 {
  flex: 0 0 auto;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(99, 95, 95);
  font-family: inika;
  color: aliceblue;
  font-size: 14px;
}

.home-banner {
  flex: 0 0 auto;
  width: 100%;
  height: 1px;
  display: flex;
  margin-top: var(--dl-space-space-threeunits);
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-950);
  padding: Unit,Twounits;

}

.section {
  
  align-items: center;
  display: flex;
  justify-content: space-around;
  position: relative;
  right: 450px;
  top: -80px;

  
  
  

}

img {
  width: 130px;
  height: 210px;
  border-radius: 25px;
  cursor: pointer;
}

.imgtitle {
  font-size: 20px;
  font-family: inter;
  position: relative;
  top: 10px;
  left: 490px;
  color: aliceblue;
}

.text {
  align-items: end;
  margin-right: 10px;
  z-index: 10;
  width: 50vw;
  display: flex;
  position: relative;
  top: -100px;
  left: 600px;
}

.background {
  position: fixed;
}

.backimage1 {
  background-color: transparent;
  border-radius: 100%;
  z-index: 0.1;
  width: 800px;
  height: 700px;
  position: relative;
  left: 550px;
  top: -300px;
}

.backimage2 {
  background-color: transparent;
  border-radius: 100%;
  width: 800px;
  height: 800px;
  z-index: 0.2;
  position: relative;
  right: 400px;
  bottom: 50px;
  box-shadow: 10px;
}

.backimage3 {
  background-color: rgb(250, 116, 6);
  border-radius: 100%;
  width: 800px;
  height: 800px;

  position: relative;
  right: 300px;
  top: -140px;
  
  
  box-shadow: 26px 26px 52px #676767, -26px -26px 52px #ffffff;
  animation: colorChange 3s infinite alternate;
  animation-delay: 900ms;
}

@keyframes colorChange {
  0% {
    background-color: rgb(245, 93, 6);
  }
  100% {
    background-color: rgb(247, 156, 103);
  }
}

.backimage4 {
  background-color: rgb(161, 168, 168);
  border-radius: 100%;
  width: 600px;
  height: 600px;
  z-index: 0.4;
  position: absolute;
  bottom: 180px;
  right: 180px;
  box-shadow: 26px 26px 52px #999797, -26px -26px 52px #4D4C4C;
  animation: colorChange 3s infinite alternate;
  animation-delay: 600ms;
}

@keyframes colorChange {
  0% {
    background-color: rgb(77, 69, 69);
  }
  100% {
    background-color: rgb(150, 144, 123);
  }
}

.backimage5 {
    background-color: rgb(66, 67, 68);
    border-radius: 100%;
    z-index: 1;
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 140px;
    right: 150px;
    box-shadow: 26px 26px 52px #676767,
                -26px -26px 52px #ffffff;
    animation: colorChange 3s infinite alternate;
    animation-delay: 600ms; /* Add the delay here */
}
@keyframes colorChange {
  0% {
    background-color: rgb(209, 87, 17);
  }
  100% {
    background-color: rgb(189, 150, 23);
  }
}



.scrollpage {
  margin-top: 100px;
  margin-left: 85px;
  width: 85vw;
  display: block;
  background-color: rgba(56, 53, 53, 0.911);
  border-radius: 25px;
  z-index: 100;
 margin-top: -100px;
}
</style>