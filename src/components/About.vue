<template>
  
  <div class="green-table-container">
    <h1 class="title">Green Table</h1>
    <div class="description-container">
      <div class="abot">

      <img class="image" src="https://th.bing.com/th/id/OIG4.Eyc.BEe6ozyjpEh3EetT?pid=ImgGn" alt="SDG 1: No Poverty">

      <p class="description">
        Green Table is not only a platform that brings local restaurants together and makes it easy for people to enjoy their meals, but it also contributes to solving some of the Sustainable Development Goals (SDGs) set by the United Nations.
      </p>
    </div>
      <div class="abt">
      <p class="description">
        One of the SDGs that Green Table may help solve is SDG 2: Zero Hunger. By partnering with local restaurants, Green Table can help reduce food waste and promote sustainable agriculture. The app can also help achieve SDG 3: Good Health and Well-being by promoting healthy and nutritious meals from local restaurants.
      </p>
      <img class="image" src="https://th.bing.com/th/id/OIG1..L3e1DGlDPHNg6Txywu_?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="SDG 2: Zero Hunger">
    </div>
      <div class="abot">
        <img class="image" src="https://th.bing.com/th/id/OIG1.QuOYqU2z.FiJ9puk6m76?pid=ImgGn" alt="SDG 1: No Poverty">
        <p class="description">
        Moreover, Green Table's monthly feeding program for the homeless aligns with SDG 1: No Poverty and SDG 2: Zero Hunger. By providing meals to those in need, Green Table helps reduce poverty and hunger in the local community.
        </p>
        
      </div>
      <div class="abt">
        <p class="description">
        Lastly, Green Table's mission to bring local restaurants together and make it easy for people to enjoy their meals contributes to SDG 11: Sustainable Cities and Communities. By promoting local businesses, Green Table supports sustainable economic growth and development in the community.
        </p>
        <img class="image" src="https://th.bing.com/th/id/OIG1.GK8asvvAWQ1oLfsLo7U7?pid=ImgGn" alt="SDG 11: Sustainable Cities and Communities">
      </div>
      <div class="abot">
      <p class="description">
        Overall, Green Table's efforts to bring local restaurants together, reduce food waste, promote healthy and nutritious meals, and support the local community align with several SDGs, making it a socially responsible and sustainable platform.
      </p>
    </div>
    </div>
  </div>

</template>

<style scoped>
.green-table-container {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
    z-index: 1;
    align-items: center;
    overflow: auto;
  min-height: 100vh; 
    font-family:'Arial';
    background-color: #4a4944;
    max-width:100vw;
  
}
img{
  border-radius: 35px;
}

.title {
  font-size: 50px;
  font-weight: bold;
  color: #2e7d32;
}
p{
  padding-top: 80px;
}


.description-container {
  display: flex;
  flex-direction: column;
  align-items:start;
  width: 70%;
  
}
.abot{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
}
.abt{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
}

.description {
  font-size: 20px;
  text-align: center;
  margin: 20px 0;
}

.image {
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
}
</style>