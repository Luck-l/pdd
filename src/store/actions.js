import {
  getHomeCasual, getHomeNav, getHomeShops, getLogOut, getRecommendshops, getSearchNav, getSearchShops, getUserInfo,
} from "../network"

import {
  HOME_CASUAL, HOME_NAV, HOME_SHOPS, RECOMMEND_SHOPS, RESET_USER_INFO, SEARCH_NAV, SEARCH_SHOPS, USER_INFO
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
  async reqHomeShops({commit},params){
    const result = await getHomeShops(params)
    commit(HOME_SHOPS,{homeshops:result.message})
  },

  //获取推荐商品列表
  async reqRecommendShops({commit},params){
    const result = await getRecommendshops(params)
    commit(RECOMMEND_SHOPS,{recommendshops:result.message})
    params.callback && params.callback();
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
  },

  //同步用户的信息
  syncUserInfo({commit},userInfo){
    commit(USER_INFO,{userInfo})
  },

  //异步获取用户信息
  async getUserInfo({commit}){
    const result =await getUserInfo()
    if(result.success_code === 200){
      commit(USER_INFO,{userInfo:result.message})
    }
  },

  //退出登陆
  async logout({commit}){
    const result =await getLogOut()
    if(result.success_code === 200){
      commit(RESET_USER_INFO)
    }
  }
}