import http from '@/utils/http.js'
export function getCategoryAPI(id){
    return http({
        url:'/category',
        params:{
            id
        }
    })
}

// export const getCategoryAPI = (id) => {
//     return http({
//       url:'/category',
//       params:{
//         id
//       }
//     })
//   }


/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
// get请求可以省略method
export const getCategoryFilterAPI = (id) => {
    return http({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }
