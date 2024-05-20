import http from '@/utils/http'
//适配接口
export function getBannerAPI(params = {}){
  // 默认为1 商品为2
   const {distributionSite = '1'} = params
    return http({
        url:'home/banner',
        params:{
          distributionSite
        }
    })
}

export const findNewAPI = () => {
    return http({
      url:'/home/new'
    })
  }


  /**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
//   export const getHotAPI = () => {
//     return  http('home/hot', 'get', {})
//   }

export const getHotAPI = () => {
    return  http({
        url:'home/hot'
    })
  }

  export const getGoodsAPI = () => {
    return http({
      url: '/home/goods'
    })
  }