import {
  HOME_CASUAL, HOME_NAV, HOME_SHOPS, SEARCH_NAV, SEARCH_SHOPS, RECOMMEND_SHOPS, USER_INFO,
} from "./mutation-types"
export default {
  [HOME_CASUAL](state,{homecasual}){
    state.homecasual = homecasual
  },
  [HOME_NAV](state,{homenav}){
    state.homenav = homenav
  },
  [HOME_SHOPS](state,{homeshops}){
    state.homeshops = homeshops
  },
  [RECOMMEND_SHOPS](state,{recommendshops}){
    state.recommendshops = state.recommendshops.concat(recommendshops)
  }
  ,
  [SEARCH_NAV](state,{searchnav}){
    state.searchnav = searchnav
  },
  [SEARCH_SHOPS](state,{searchshops}){
    state.searchshops = searchshops
  },
  // [LOGIN_VERIFY](state,{loginverify}){
  //   state.loginverify = loginverify
  // }
  [USER_INFO](state,{userInfo}){
    state.userinfo = userInfo
  },
}