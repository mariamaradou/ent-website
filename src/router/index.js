import { createRouter, createWebHistory } from "vue-router";
import MedicalCenterPage from "../components/MedicalCenterPage"
import HomePage from "../components/HomePage"
import BioPage from "../components/BioPage"

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

    }


]

const router = createRouter({
   history: createWebHistory("/"),
    routes
})

export default router