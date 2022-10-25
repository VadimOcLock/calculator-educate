import { createRouter, createWebHistory } from 'vue-router'
import CalcView from "@/views/CalcView"

const routes = [
  {
    path: "/",
    name: "calc",
    component: CalcView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
