import {
  HOME_CASUAL, HOME_NAV, HOME_SHOPS, SEARCH_NAV,SEARCH_SHOPS
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
  [SEARCH_NAV](state,{searchnav}){
    state.searchnav = searchnav
  },
  [SEARCH_SHOPS](state,{searchshops}){
    state.searchshops = searchshops
  }

}