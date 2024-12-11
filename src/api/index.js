

import request from '@/utils/request'

//获取商品列表

export const getProductClassificatList = (data)=>{
      return request({
              method:'get',
              url:'/index', 
              params:data
        })
  }     

export const getCarList = (data)=>{
      return request({
              method:'get',
              url:'/racing/setting', 
              params:data
        })
  }     


  export const getNewList = (data)=>{
      return request({
              method:'post',
              url:'/racing/roundRecord', 
              data,
        })
  }    


  export const getBannerList = (data)=>{
      return request({
            method:'get',
            url:'/index', 
            params:data
      })
  }


  export const getCommodityList = (data)=>{
      return request({
            method:'get',
            url:`/categoriesForApi/${data.id}`, 
  
      })
  }

  export const getCommodityDetaile = (data)=>{
      return request({
            method:'get',
            url:`/products/detail/${data.id}`, 
  
      })
  }