import Vue from "vue"
import VueRouter from "vue-router";

const Home = () => import("../views/Home/Home")
const Me = () => import("../views/Me/Me")
const Recommend = () => import("../views/Recommend/Recommend")
const Search = () => import("../views/Search/Search")
const Login = () => import("../views/Login/Login")

const Hot = () => import("../views/Home/Children/Hot/Hot")
const Box = () => import("../views/Home/Children/Box")
const Dress = () => import("../views/Home/Children/Dress")
const Ele = () => import("../views/Home/Children/Ele")
const Food = () => import("../views/Home/Children/Food")
const General = () => import("../views/Home/Children/General")
const Man = () => import("../views/Home/Children/Man")
const Mbady = () => import("../views/Home/Children/Mbady")
const Shirt = () => import("../views/Home/Children/Shirt")
const MeSetting = () => import("../views/Me/MeSetting")
const User = () =>import("../views/Me/User")


Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home,
    children:[
      {path:"hot",component:Hot,meta:{showBottomTabBar:true}},
      {path:"box",component:Box,meta:{showBottomTabBar:true}},
      {path:"dress",component:Dress,meta:{showBottomTabBar:true}},
      {path:"ele",component:Ele,meta:{showBottomTabBar:true}},
      {path:"food",component:Food,meta:{showBottomTabBar:true}},
      {path:"general",component:General,meta:{showBottomTabBar:true}},
      {path:"man",component:Man,meta:{showBottomTabBar:true}},
      {path:"mbady",component:Mbady,meta:{showBottomTabBar:true}},
      {path:"shirt",component:Shirt,meta:{showBottomTabBar:true}},
      {path:"/home",redirect:"/home/hot"},

    ]

  },
  {
    path:"/search",
    component:Search,
    meta:{showBottomTabBar:true}

  },{
    path:"/recommend",
    component:Recommend,
    meta:{showBottomTabBar:true}
  },{
    path:"/me",
    component:Me,
    meta:{showBottomTabBar:true}
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/setting",
    component:MeSetting
  },
  {
    path:"/user",
    component:User
  }


]
const router = new VueRouter({
  routes,
  mode:"history"
})

export default router