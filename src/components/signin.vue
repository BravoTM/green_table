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
      <div class="lform">
    <div class="wrapper">
    <div class="form-container">
      <div class="logo-container">
        Welcome Back!
      </div>
  
      <div class="social-buttons">
        <button class="social-button facebook">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
          </svg>
          <span>Sign in with Facebook</span>
        </button>
        <button class="social-button apple">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6734 7.2221C10.7974 7.2221 9.44138 6.2261 8.01338 6.2621C6.12938 6.2861 4.40138 7.3541 3.42938 9.0461C1.47338 12.4421 2.92538 17.4581 4.83338 20.2181C5.76938 21.5621 6.87338 23.0741 8.33738 23.0261C9.74138 22.9661 10.2694 22.1141 11.9734 22.1141C13.6654 22.1141 14.1454 23.0261 15.6334 22.9901C17.1454 22.9661 18.1054 21.6221 19.0294 20.2661C20.0974 18.7061 20.5414 17.1941 20.5654 17.1101C20.5294 17.0981 17.6254 15.9821 17.5894 12.6221C17.5654 9.8141 19.8814 8.4701 19.9894 8.4101C18.6694 6.4781 16.6414 6.2621 15.9334 6.2141C14.0854 6.0701 12.5374 7.2221 11.6734 7.2221ZM14.7934 4.3901C15.5734 3.4541 16.0894 2.1461 15.9454 0.850098C14.8294 0.898098 13.4854 1.5941 12.6814 2.5301C11.9614 3.3581 11.3374 4.6901 11.5054 5.9621C12.7414 6.0581 14.0134 5.3261 14.7934 4.3901Z"></path>
          </svg>
          <span>Sign in with Apple</span>
        </button>
      </div>
  
      <div class="line"></div>
  
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input required placeholder="Enter your email" name="email" id="email" type="text" v-model="email">
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input required placeholder="Enter your password" name="password" id="password" type="password" v-model="password">
        </div>
  
        <button class="button" type="submit">Sign in</button>
      </form>
  
      <div class="link-container">
        <router-link to="/register">Don't have an account?</router-link>
        <router-link to="/reset-password">Forgot password?</router-link>
      </div>
    </div>
  </div>
  </div>
  </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
  
    methods: {
      ...mapActions('auth', ['signIn']),
  
      async handleSubmit() {
        try {
          await this.signIn({ email: this.email, password: this.password });
          this.$router.push('/');
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .lform{
    position: relative;
    z-index: 100;
    right: -300px;
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
    right: 350px;
    top: 100px;
    
    
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
  
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  
  .social-container {
    display: flex;
    gap: 10px;
  }
  .wrapper{
    height: 100vh;
    margin: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    background-color: aquamarine;
    border-radius: 35px;
    z-index: 100;
  
  }
  
  .social-button {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .social-button svg {
    margin-right: 8px;
  }
  
  .line {
    width: 100%;
    height: 1px;
    background-color: #dfe3e8;
    margin: 20px 0;
  }
  
  .form-container .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  
  .form-group label {
    margin-bottom: 4px;
  }
  
  .form-group input {
    padding: 8px;
    border: 1px solid #dfe3e8;
    border-radius: 4px;
  }
  
  .button {
    padding: 8px 16px;
    background-color: #1e88e5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .link-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    margin-top: 16px;
  }
  
  .link-container a {
    color: #1e88e5;
    text-decoration: none;
  }
  
  .link-container a:hover {
    text-decoration: underline;
  }
  </style>