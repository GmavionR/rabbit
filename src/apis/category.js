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