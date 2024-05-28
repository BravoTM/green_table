<template>
    <div>
      <div class="right-drawer" :style="{ width: drawerVisible ? '20vw' : '0', paddingLeft: drawerVisible ? '10px' : '0' }" :aria-hidden="!drawerVisible">
        <h1>Menu</h1>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Stories</h4>
        <h4>Testimonials</h4>
        <h4>Contact</h4>
        <div style="text-align:right; margin:5px">
          <button class="close" @click="drawerVisible = false" aria-label="Close menu">
            <i class="las la-times" style="font-size:24px"></i>
          </button>
        </div>
      </div>
      <div class="drawer-mask" :style="{ width: drawerVisible ? '100vw' : '0', opacity: drawerVisible ? '0.6' : '0' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawerVisible: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.drawerVisible = !this.drawerVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .right-drawer {
    position: absolute;
    top: 0;
    right: 0;
    width: 20vw; /* initially */
    overflow: hidden;
    height: 100vh;
    padding-left: 0; /* initially */
    border-left: 1px solid rgb(255, 252, 252);
    background: rgb(3, 1, 1);
    z-index: 200;
    transition: all 0.2s; /* for the animation */
  }
  
  .drawer-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 0; /* initially */
    height: 100vh;
    background: #000;
    opacity: 0.3;
    z-index: 199;
  }
  </style>