import {
  getHomeCasual, getHomeNav, getHomeShops,getRecommendshops, getSearchNav, getSearchShops
} from "../network"

import {
  HOME_CASUAL, HOME_NAV, HOME_SHOPS, RECOMMEND_SHOPS, SEARCH_NAV, SEARCH_SHOPS
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
  //登陆模块验证码
  // async reqLoginVerify({commit}){
  //   const result = await getLoginVerify()
  //   commit(LOGIN_VERIFY,{loginverify:result.data})
  // }
}