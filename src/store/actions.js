import {
  getHomeCasual, getHomeNav, getHomeShops, getSearchNav,getSearchShops
} from "../network"

import {
  HOME_CASUAL, HOME_NAV, HOME_SHOPS, SEARCH_NAV, SEARCH_SHOPS
} from "./mutation-types"

export default {
    //获取首页轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual()
    commit(HOME_CASUAL,{homecasual:result.message})
  },

  //获取首页导航
  async reqHomeNav({commit}){
    const result = await getHomeNav()
    commit(HOME_NAV,{homenav:result.message})
  },

  //获取首页商品列表
  async reqHomeShops({commit}){
    const result = await getHomeShops()
    commit(HOME_SHOPS,{homeshops:result.message})
  },

  //获取搜索模板导航
  async reqSearchNav({commit}){
    const result = await getSearchNav()
    commit(SEARCH_NAV,{searchnav:result.message})
  },

  //获取搜索模板商品
  async reqSearchShops({commit}){
    const result = await getSearchShops()
    commit(SEARCH_SHOPS,{searchshops:result.message})
  }
}