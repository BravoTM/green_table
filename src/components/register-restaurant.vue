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
            Register your restaurant to GreenTable
          </div>

          <form class="form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="restaurantName">Restaurant Name</label>
              <input required placeholder="Enter your restaurant name" name="restaurantName" id="restaurantName" type="text" v-model="restaurantName">
            </div>

            <div class="form-group">
              <label for="location">Location</label>
              <input required placeholder="Enter your restaurant location" name="location" id="location" type="text" v-model="location">
            </div>

            <div class="form-group">
              <label for="yearsOfService">Years of Service</label>
              <input required placeholder="Enter your years of service" name="yearsOfService" id="yearsOfService" type="number" v-model="yearsOfService">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input required placeholder="Enter your email" name="email" id="email" type="text" v-model="email">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input required placeholder="Enter your password" name="password" id="password" type="password" v-model="password">
            </div>

            <div class="form-group">
              <label for="contactDetails">Contact Details</label>
              <textarea required placeholder="Enter your contact details" name="contactDetails" id="contactDetails" type="text" v-model="contactDetails"></textarea>
            </div>

            <div class="form-group">
              <label for="expectations">Expectations</label>
              <textarea required placeholder="Enter your expectations" name="expectations" id="expectations" type="text" v-model="expectations"></textarea>
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
      restaurantName: '',
      location: '',
      yearsOfService: '',
      email: '',
      password: '',
      contactDetails: '',
      expectations: '',
    };
  },

  methods: {
    ...mapActions('auth', ['signIn']),

    async handleSubmit() {
      try {
        // Add the new input fields to the signIn method
        await this.signIn({
          restaurantName: this.restaurantName,
          location: this.location,
          yearsOfService: this.yearsOfService,
          email: this.email,
          password: this.password,
          contactDetails: this.contactDetails,
          expectations: this.expectations,
        });
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>



<style scoped>
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
.lform{
  position: relative;
  z-index: 100;
  right: -100px;
  
}
.background {
  position: fixed;
}

.backimage1 {
  background-color: transparent;
  border-radius: 100%;
  z-index: 0.1;
  width: 700px;
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

.logo-container{
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: #1e88e5;
  border-radius: 35px;
  margin-bottom: 25px;
}

.social-container {
  display: flex;
  gap: 10px;
}
.wrapper{
  height: 120vh;
  margin: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65vw;
  background-color: rgba(24, 17, 7, 0.753);
  border-radius: 45px;
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
  max-width: 100vw;
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