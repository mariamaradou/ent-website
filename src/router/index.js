import { createRouter, createWebHistory } from "vue-router";
import MedicalCenterPage from "../components/MedicalCenterPage"
import HomePage from "../components/HomePage"
import BioPage from "../components/BioPage"
import SurgeriesPage from "../components/SurgeriesPage"
import ServicesPage from "../components/ServicesPage"
const routes = [
    {
    path: "/medicalcenter",
    name: "Medical Center",
    component: MedicalCenterPage,
    data:{ image: "hello"}
    // meta: { transition: 'fade' },
    },
    {
    path: "/",
    name: "Home",
    component: HomePage
    
        },
    {path: "/bio",
    name:"BioPage",
    component: BioPage

    },
    {
        path:"/surgeries",
        name:"Surgeries",
        component:SurgeriesPage
    },
    {
        path:"/services",
        name:"Services",
        component:ServicesPage
    }



]

const router = createRouter({
   history: createWebHistory("/"),
    routes
})

export default router