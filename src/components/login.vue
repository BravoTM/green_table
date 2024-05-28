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
      <div class="card">
        <div class="card__img">
          <svg width="100%" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG code goes here -->
          </svg>
        </div>
        <div class="card__avatar" @click="uploadAvatar">
          <img :src="userImage" alt="User Avatar" class="user-avatar">
        </div>
        <div class="card__title">alpha</div>
        <div class="card__subtitle">Web Development</div>
        <div class="card__wrapper">
          <button class="card__btn">Button</button>
          <button class="card__btn card__btn-solid">Button</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userImage: 'default-avatar.png' // Set the default avatar image URL here
      }
    },
    methods: {
      uploadAvatar() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
  
        input.onchange = (event) => {
          const file = event.target.files[0];
          const reader = new FileReader();
  
          reader.onload = (event) => {
            this.userImage = event.target.result;
          };
  
          reader.readAsDataURL(file);
        };
  
        input.click();
      }
    }
  }
  </script>
  
  <style>
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
    right: 350px;
    top: 50px;
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
    animation-delay: 600ms;
  }
  
  @keyframes colorChange {
    0% {
      background-color: rgb(209, 87, 17);
    }
    100% {
      background-color: rgb(189, 150, 23);
    }
  }
  
  .card {
    --main-color: #fff;
    --submain-color: #ccc;
    --bg-color: #000;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    width: 300px;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: #000;
    margin: 105px;
    position: relative;
    top: 40px;
    left: 400px;
  }
  
  .card__img {
    height: 192px;
    width: 100%;
  }
  
  .card__img svg {
    height: 100%;
    border-radius: 20px 20px 0 0;
  }
  
  .card__avatar {
    position: absolute;
    width: 114px;
    height: 114px;
    background: #000;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 57px);
  }
  
  .card__avatar svg {
    width: 100px;
    height: 100px;
  }
  
  .card__avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .card__title {
    margin-top: 60px;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
  }
  
  .card__subtitle {
    margin-top: 10px;
    font-weight: 400;
    font-size: 15px;
    color: var(--submain-color);
  }
  
  .card__btn {
    margin-top: 15px;
    width: 76px;
    height: 31px;
    border: 2px solid #fff;
    border-radius: 4px;
    font-weight: 700;
    font-size: 11px;
    color: #fff;
    background: #000;
    text-transform: uppercase;
    transition: all 0.3s;
  }
  
  .card__btn-solid {
    background: #fff;
    color: #000;
  }
  
  .card__btn:hover {
    background: #fff;
    color: #000;
  }
  
  .card__btn-solid:hover {
    background: #000;
    color: #fff;
  }
  
  /* Other styles go here */
  </style>