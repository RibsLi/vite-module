export default function (type) {
  // [请求地址, 请求方式, contentType]
  // contentType === 1 : 'application/x-www-form-urlencoded;charset=UTF-8'
  // contentType === 2 : 'application/json'
  // contentType === 3 : 'multipart/form-data'
  const urlObj = {
    upload: ['/appuser/api/appletCustomController/upload', 'post', 3], // 图片上传

    token: ['/appuser/api/common/qiniu/token', 'post', 1], // 获取七牛Token

    enterpriseGoodsTypeList: ['/appuser/api/appletCustomController/enterpriseGoodsTypeList', 'post', 1], // 商品类型
    enterpriseGoodsCategoryList: ['/appuser/api/appletCustomController/enterpriseGoodsCategoryList', 'post', 1], // 实物分类
    enterpriseServiceGoodsCategory: ['/appuser/api/appletCustomController/enterpriseServiceGoodsCategory', 'post', 1], // 服务分类

    getAppletTemplate: ['/appuser/api/appletCustomController/getAppletTemplate', 'post', 1], // 商城首页数据回显接口
    getCouponRedemptionCentreAppletTemplate: ['/appuser/api/appletCustomController/getCouponRedemptionCentreAppletTemplate', 'post', 1], // 领券中心数据回显接口
    getServiceGoodsAppletTemplate: ['/appuser/api/appletCustomController/getServiceGoodsAppletTemplate', 'post', 1], // 服务商品首页数据回显接口

    saveHomeTemplate: ['/appuser/api/appletCustomController/saveHomeTemplate', 'post', 1], // 商城首页数据保存
    saveCouponRedemptionCentreTemplate: ['/appuser/api/appletCustomController/saveCouponRedemptionCentreTemplate', 'post', 1], // 领券中心数据保存
    saveServiceHomeTemplate: ['/appuser/api/appletCustomController/saveServiceHomeTemplate', 'post', 1] // 服务首页数据保存
  }
  return urlObj[type] || ''
}
