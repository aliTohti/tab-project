import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home=()=>import('../views/home/home.vue')
const clas=()=>import('../views/class/class.vue')
const cart=()=>import('../views/cart/cart.vue')
const user=()=>import('../views/user/user.vue')
const routes = [
  {
    path:'',
    redirect:'/home'
},
{
    path:'/home',
    component:home
},
{
  path:'/class',
  component:clas 
},
{
  path:'/cart',
  component:cart
},
{
  path:'/user',
  component:user
}
]

const router = new VueRouter({  
  routes,
  mode:'history'
})

export default router
