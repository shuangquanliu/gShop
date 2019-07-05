import Msit from '../pages/Msit/Msit.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

export default [
  {
    path:'/msit',
    component:Msit
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/msit'
  }
]
