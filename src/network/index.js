import ajax from "./ajax";

//基础路径
const BASE_URL = "http://127.0.0.1:3000";

//请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + "/api/homeswiper")

//请求首页导航
export const getHomeNav = () => ajax(BASE_URL + "/api/homenav")

//请求首页商品列表
export const getHomeShops = () =>ajax(BASE_URL + "/api/homeshops")

//请求搜索模板导航
export const getSearchNav = () =>ajax(BASE_URL + "/api/searchnav")

//请求搜索模板商品
export const getSearchShops = () =>ajax(BASE_URL + "/api/searchshops")