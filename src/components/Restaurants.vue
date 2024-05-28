<template >
  <div class="container">
  <link rel="stylesheet" href="https://i.pinimg.com/236x/f7/be/31/f7be31ee1ffac255f607a45c3ce64634.jpg">
  <link rel="stylesheet" href="/src/components/style.css">
  <div id="app">
    <section id="tranding">
      <div class="container">
        <h3 class="text-center section-subheading">- popular Delivery -</h3>
        <h1 class="text-center section-heading">Tranding food</h1>
      </div>
      <div class="container">
        <swiper :options="swiperOptions" class="tranding-slider">
          <swiper-slide v-for="(food, index) in foods" :key="index" class="tranding-slide">
            <div class="tranding-slide-img">
              <img :src="food.image" alt="Tranding">
            </div>
            <div class="tranding-slide-content">
              <div class="info">
                <button class="comment-menu">{{ food.menu }}</button>
              <h2 class="food-price">{{ food.price }}</h2>
              <n/>
              
              <h2 class="food-place">{{ food.place }}</h2>
              
              <span class="comment-contacts"> call:{{ food.contacts }}</span>
              <span class="comment"> Location:{{ food.location }}</span>
            </div>
              <div class="tranding-slide-content-bottom">
                <h2 class="food-name">
                  {{ food.name }}
                </h2>
                <h3 class="food-rating">
                  <span>{{ food.rating }}</span>
                  <div class="rating">
                    <ion-icon name="star" v-for="i in 5" :key="i"></ion-icon>
                  </div>
                </h3>
              </div>
            </div>
          </swiper-slide>
          <div class="tranding-slider-control">
            <div class="swiper-button-prev slider-arrow" @click="swiper.slidePrev()">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div class="swiper-button-next slider-arrow" @click="swiper.slideNext()">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </swiper>
      </div>
    </section>
  </div>
</div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// Load the external script
const scriptElement = document.createElement('script');
scriptElement.src = '/src/components/script.js';
document.head.appendChild(scriptElement);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
      foods: [
        {
          image: 'https://th.bing.com/th/id/R.53ba6826746283e60c266ebb26f3d3e3?rik=CbBcWTHd2rbxvA&pid=ImgRaw&r=0',
          price: "$Comrade\'s Delight offers a unique dining experience,blending traditional recipes with modern twists. ",
          name: 'Comrades Delight',
          rating: '4.5',
          menu: "comrade menu",
          place: "Indulge in a warm, inviting atmosphere and savor delectable dishes, crafted with fresh, locally-sourced ingredients. Join us for a memorable culinary journey!",
          contacts: "0703333333",
          location: "123456789",
        },
        {
          image: 'https://th.bing.com/th/id/OIP.sY9z9X-LvXZq0kGpKvYAZAHaHa?w=592&h=592&rs=1&pid=ImgDetMain',
          price: 'Welcome to Galian, where culinary artistry meets exquisite flavors. Our master chefs create innovative, mouthwatering dishes using the finest seasonal ingredients. ',
          name: 'Galian',
          rating: '4.5',
          place:"Experience exceptional service and ambiance, making every meal a memorable occasion. Visit us today!",
          contacts:"0788353422",
          location:"2377325",
          menu: "Galian menu",
        },
        {
          image: 'https://th.bing.com/th/id/OIP.hSlVXeLG1pluoUwmg-sR4QHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain',
          price: 'Discover the magic of Amore, a restaurant that combines authentic Italian cuisine with a cozy, romantic atmosphere.',
          name: 'Amore',
          rating: '4.5',
          place:"Amore da Roma - Detroit's historic Italian eatery, known for delicious food and impeccable service.",
          contacts:"0788353422",
          location:"2377325",
          menu: "Galian menu",
        },
        {
          image: 'https://th.bing.com/th/id/OIP.CM-WFd3ulOVYibyTkgHW5QHaE8?w=640&h=427&rs=1&pid=ImgDetMain',
          price: 'Foodey Restaurant offers a delightful culinary experience with a diverse menu of mouthwatering dishes. ',
          name: 'Foodey',
          rating: '4.5',
          place:"Our commitment to fresh, locally-sourced ingredients ensures every meal is a treat for your taste buds. Join us for an unforgettable dining experience!",
          contacts:"0137753422",
          location:"23w3567325",
          menu: "Foodey menu",
        },
        {
          image: 'https://imageio.forbes.com/specials-images/imageserve/65303f5a3e43f77b3877ab48/0x0.jpg?format=jpg',
          price: 'Cilfer Restaurant offers a world-class dining experience, featuring innovative dishes crafted by our renowned culinary team.',
          name: 'Cilfer',
          rating: '4.8',
          place:"With a commitment to using only the freshest ingredients, Cilfer delivers bold, exciting flavors in a sophisticated, inviting atmosphere. Prepare to be amazed at Cilfer Restaurant.",
          contacts:"0784537426",
          location:"436867525",
          menu: "cilfer menu",
        },
        {
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/8b/36/ab/mercado-do-peixe.jpg',
          price: 'Malion Restaurant is your destination for exceptional dining. Our talented chefs present a creative, locally-inspired menu, complemented by a curated selection of wines.',
          name: 'Malion',
          rating: '4.4',
          place:"With a focus on impeccable service and a welcoming ambiance, Malion promises an unforgettable dining experience. Join us tonight!",
          contacts:"013458345622",
          location:"278t3325",
          menu: "Malion menu",
        },
        {
          image: 'https://th.bing.com/th/id/OIP.j4KleopVRy4GGG5QlEp2KgHaF_?rs=1&pid=ImgDetMain',
          price: 'Bivil Restaurant invites you to embark on a gastronomic adventure. With a diverse menu showcasing global flavors, our dishes are prepared with passion and expertise.',
          name: 'brivill',
          rating: '4.3',
          place:"our cozy, stylish atmosphere and enjoy a dining experience that delights the senses. See you soon at Bivil!!",
          contacts:"0735835452",
          location:"23sbdc325",
          menu: "Brivill menu",
        },
      ],
    };
  },
};
</script>
<!-- Include the external JavaScript file -->


<style scoped>
/* Importing Swiper CSS */
@import url('https://unpkg.com/swiper@8/swiper-bundle.min.css');

/* Custom styles for the page */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.info{
  background-color: rgb(126, 116, 116);
  position: absolute;
  left: 400px;
  top: 100px;
  width: 100vw;
  border-radius: 35px;
  height: 50vh;
  justify-content: space-between;
  padding: 5px;

}
.comment {
  background-color: #D1510A;
  border-radius: 25px;
  color: rgb(41, 38, 38);
  padding: 5px;

  font-size: 16px;
  height: 30px;
  width: 150px;
  align-items: center;
  margin-left: 40px;
  margin-top: 40px;
  
  
}
.comment-contacts {
  background-color: #3F3632;
  border-radius: 25px;
  color: rgb(253, 250, 250);
  padding: 5px;
  font-size: 20px;
  height: 30px;
  width: 150px;
  align-items: center;
  margin-left: 40px;
  font-weight: 400;
  margin-top: 40px;
  
}
.comment-menu {
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
  margin-bottom: 100px;
  
}
.container{
  padding-top: 50px;
  display: flex;
  flex-direction: column;
    z-index: 1;
    align-items: center;
    
  max-height: 100vh; 
    font-family:'Arial';
    background-color: #4a4944;
    max-width:100vw;
}
.tranding-slider-control{
  background-color:rgb(56, 61, 60);

}

/* Container styles */
.container {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 15px;
}
.food-place{
  margin: 10px;
  color: rgb(8, 6, 6);
  position: relative;
  display: block;
  text-align: left;
  position: relative;
  
  
}
.food-price{
  margin: 10px;
  color: rgb(8, 6, 6);
  position: relative;
  display: block;
  text-align: left;
  position: relative;
  
  
}
/* Section subheading styles */
.section-subheading {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
}
</style>