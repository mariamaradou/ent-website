import { createRouter, createWebHistory } from "vue-router";
import MedicalCenterPage from "../components/MedicalCenterPage"
import HomePage from "../components/HomePage"

const routes = [
    {
    path: "/medicalcenter",
    name: "Medical Center",
    component: MedicalCenterPage
    },
    {
        path: "/",
        name: "Home",
        component: HomePage
        }

]

const router = createRouter({
   history: createWebHistory("/"),
    routes
})

export default router