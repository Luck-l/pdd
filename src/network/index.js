import ajax from "./ajax";

//基础路径
const BASE_URL = "http://127.0.0.1:3000";

//请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + "/api/homeswiper")

//请求首页导航
export const getHomeNav = () => ajax(BASE_URL + "/api/homenav")

//请求首页商品列表
export const getHomeShops = () =>ajax(BASE_URL + "/api/homeshops")

//请求推荐列表
export const getRecommendshops = (params) =>ajax(BASE_URL + "/api/homeshops",params)

//请求搜索模板导航
export const getSearchNav = () =>ajax(BASE_URL + "/api/searchnav")

//请求搜索模板商品
export const getSearchShops = () =>ajax(BASE_URL + "/api/searchshops")

//获取登陆模块验证码
// export const getLoginVerify = () =>ajax(BASE_URL + "/api/loginverify")