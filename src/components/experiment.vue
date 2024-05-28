<template>
  <div class="homecontainer">
    
    <div class="content-wrapper">
      
      
    
    <div class="text3">
      <block>
        <h1>
          <span class="welcome">GreenTable<br/></span>Community.
        </h1>
        <span><span></span></span>
      </block>
    </div>
    
    <div>
    <div class="scrollpage">
      <div class="community-page">
    <h1 class="our">Our Community</h1>
    <div class="blur-background">
    <div class="com-events">
      <h2>Community Events</h2>
      <p>We regularly host and participate in community events, such as charity fundraisers, local festivals, and community gatherings. Check out our upcoming events:</p>
      <ul>
        <li><span class="sub">Event 1:</span> May 5th - Cinco de Mayo Celebration - Join us for a night of food, drinks, and live music as we celebrate Cinco de Mayo!</li>
        <li><span class="sub">Event 2: </span>May 10th - Mother's Day Brunch - Treat your mom to a special brunch menu, complete with mimosas and live music.</li>
        <li><span class="sub">Event 3: </span>May 15th - Wine Tasting Event - Sample a variety of wines from around the world and learn about their unique flavors and characteristics.</li>
      </ul>
    </div>
  </div>
  <div class="blur-background">
    <div class="section">
      <h2>Local Partnerships</h2>
      <p>We believe in supporting local businesses and organizations. Here are some of our partners:</p>
      <ul>
        <li><span class="sub">Partner 1: </span>Local Food Bank - We donate leftover food to the local food bank to help those in need.</li>
        <li><span class="sub">Partner 2:</span> Local School - We offer discounts to local school staff and students to support education in our community.</li>
        <li><span class="sub">Partner 3:</span> Local Non-Profit - We host fundraising events and donate a portion of the proceeds to a local non-profit organization.</li>
      </ul>
    </div>
  </div>

  <div class="blur-background">
    <div class="section">
      <h2>Community Initiatives</h2>
      <p>We are committed to giving back to our community. Here are some of the initiatives we support:</p>
      <ul>
        <li><span class="sub">Initiative 1:</span> Sustainability - We use eco-friendly products and practices to reduce our carbon footprint and protect the environment.</li>
        <li><span class="sub">Initiative 2:</span> Diversity and Inclusion - We strive to create a welcoming and inclusive environment for all customers and employees.</li>
        <li><span class="sub">Initiative 3:</span> Community Engagement - We participate in local events and initiatives to support and engage with our community.</li>
      </ul>
    </div>
  </div>
    <div class="blur-background">
    <div class="section">
      <h2>Testimonials</h2>
      <p>Our community members have had positive experiences with us. Here's what they have to say:</p>
      <ul>
        <li>"Best restaurant in town are all here! The food is always delicious and the staff is so friendly and welcoming." - John D.</li>
        <li>"I love  odering for date night with my husband. The  service is always excellent." - Sarah K.</li>
        <li>"This is my go-to spot for work lunch with my coworkers. The salads are fresh and the sandwiches are delicious just in time." - Emily T.</li>
      </ul>
    </div>
  </div>
    <div class="blur-background">
    <div class="section">
      <h2>Community News</h2>
      <p>Stay up-to-date with our latest news and developments:</p>
      <ul>
        <li><span class="sub">News 1:</span>We are now offering online ordering for takeout and delivery.</li>
        <li><span class="sub">News 2: </span>We are hosting a charity event next month to benefit a local hospital.</li>
        <li><span class="sub">News 3:</span> We have added new menu items featuring locally-sourced ingredients.</li>
      </ul>
    </div>
  </div>
    <div class="blur-background">
    <div class="section">
      <h2>Community Feedback</h2>
      <p>We value your feedback and suggestions. Share your thoughts below:</p>
      <form @submit.prevent="submitFeedback">
        <textarea v-model="feedback" placeholder="Enter your feedback or suggestion here"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
    <div class="blur-background">
    <div class="section">
      <h2>Community Resources</h2>
      <p>We have put together some resources that may be of interest to you:</p>
      <ul>
        <li><span class="sub">Resource 1:</span> A list of local events and activities</li>
        <li><span class="sub">Resource 2:</span>A directory of local businesses and organizations</li>
        <li><span class="sub">Resource 3:</span> A guide to sustainable living in our community</li>
      </ul>
    </div>
  </div>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      feedback: '',
    };
  },
  methods: {
    submitFeedback() {
      console.log('Feedback submitted:', this.feedback);
      // You can add code here to submit the feedback to your database or email system
    },
  },
};
</script>





<style scoped>
h2{
  color: #49FC02;
  background-color: #4D4343;
  padding-left: 10px;
  border-radius: 35px;
  width: 30vw;
}
.our{
  font-family: inria Serif;
  font-size: 60px;
  color: rgb(252, 141, 5);
  z-index: 100;
}
img{
  
  float: right;
  left: px;
  border-radius: 39px;
  
}
.community-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.section {
  margin-bottom: 40px;
  color: #F8F0F0;
  padding: 10px;
}
.blur-background {
  background-image: url('https://th.bing.com/th/id/OIG1.ucZ9lWzEO6maocJy5qXu?w=1024&h=1024&rs=1&pid=ImgDetMain');
  background-size: cover;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  border-radius: 39px;
}

.blur-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.801);
  border-radius: 35px;
  z-index: -1;
}

.com-events {
  margin-bottom: 40px;
  color: #F8F0F0;
  font-size:17px;
  padding: 10px;
  border-radius: 35px;
  width: 55vw;
}
h2 {
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
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
    color: rgb(252, 141, 5);
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

.sectionz {
  
  align-items: center;
  display: flex;
  justify-content: space-around;
  position: relative;
  right: 450px;
  top: -80px;

  
  
  

}

img {
  width: 30vw;
  height: 70vh;
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

.text3 {
  align-items: end;
  margin-right: 10px;
  z-index: 10;
  width: 50vw;
  display: flex;
  position: relative;
  top: -100px;
  left: 600px;
  color: rgb(252, 141, 5);
}

.background {
  position: fixed;
}
.sub{
  color: #49FC02;
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