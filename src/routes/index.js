
import{createRouter, createWebHistory }from"vue-router";
import registerRestaurant from "@/components/register-restaurant.vue";
import Home from "./../components/Home.vue";
import Navbar from "./../components/Navbar.vue";
import Oder from "./../components/Oder.vue";
import Restaurants from "./../components/Restaurants.vue";
import Community from "./../components/Community.vue";
import About from "./../components/About.vue";
import Contactus from "./../components/Contactus.vue";
import experiment from "./../components/experiment.vue";
import login from "./../components/login.vue";
import signin from "./../components/signin.vue";
const routes =[
    {
        path: '/',
        name: 'Home',
        component:  Home,
    },
    {
        path: '/registerRestaurant',
        name: 'registerRestaurant',
        component:  registerRestaurant,
    },
    {
        path: '/login',
        name: 'login',
        component:  login,
    },
    {
        path: '/signin',
        name: 'signin',
        component:  signin,
    },
    {
        path: '/experiment',
        name: 'experiment',
        component:  experiment,
    },
    {
        path: '/Contactus',
        name: 'Contactus',
        component:  Contactus,
    },
    {
        path: '/About',
        name: 'About',
        component:  About,
    },
    {
        path: '/Community',
        name: 'Community',
        component:  Community,
    },
    {
        path: '/Oder',
        name: 'Oder',
        component: Oder,
    },
    {
        path: '/Navbar',
        name: 'Navbar',
        component: Navbar,
    },
    {
        path: '/Restaurants',
        name: 'Restaurants',
        component: Restaurants,
    },
    
]

const router =createRouter({
    history: createWebHistory(),
    routes,
});

export default router