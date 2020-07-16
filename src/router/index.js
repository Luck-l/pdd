import Vue from "vue"
import VueRouter from "vue-router";

const Home = () => import("../views/Home/Home")
const Chat = () => import("../views/Chat/Chat")
const Me = () => import("../views/Me/Me")
const Recommend = () => import("../views/Recommend/Recommend")
const Search = () => import("../views/Search/Search")

const Hot = () => import("../views/Home/Children/Hot/Hot")
const Box = () => import("../views/Home/Children/Box")
const Dress = () => import("../views/Home/Children/Dress")
const Ele = () => import("../views/Home/Children/Ele")
const Food = () => import("../views/Home/Children/Food")
const General = () => import("../views/Home/Children/General")
const Man = () => import("../views/Home/Children/Man")
const Mbady = () => import("../views/Home/Children/Mbady")
const Shirt = () => import("../views/Home/Children/Shirt")


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
      {path:"hot",component:Hot},
      {path:"box",component:Box},
      {path:"dress",component:Dress},
      {path:"ele",component:Ele},
      {path:"food",component:Food},
      {path:"general",component:General},
      {path:"man",component:Man},
      {path:"mbady",component:Mbady},
      {path:"shirt",component:Shirt},
      {path:"/home",redirect:"/home/hot"},

    ]

  },
  {
    path:"/search",
    component:Search,

  },{
    path:"/recommend",
    component:Recommend
  },{
    path:"/chat",
    component:Chat
  },{
    path:"/me",
    component:Me
  },


]
const router = new VueRouter({
  routes,
  mode:"history"
})

export default router