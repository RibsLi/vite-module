import { defineStore } from 'pinia'

export const useStore = defineStore('foo', {
  state: () => {
    return {
      // 底部导航
      tabs: [
        { name: '首页', icon: '@/assets/images/home_active.png' },
        { name: '分类', icon: '@/assets/images/category.png' },
        { name: '购物车', icon: '@/assets/images/shopping_cart.png' },
        { name: '我的', icon: '@/assets/images/user.png' }
      ],
      current: -1, // 当前选中的索引值，默认不选中
      // 跳转类型列表
      typeList: [
        { name: '零售-商品类型', type: 'goodsType' },
        { name: '零售-一级分类', type: 'firstCategory' },
        { name: '零售-二级分类', type: 'secondCategory' },
        { name: '服务商品-一级分类', type: 'serviceFirstCategory' },
        { name: '服务商品-二级分类', type: 'serviceSecondCategory' },
        { name: '固定页面', type: 'fixedPage' }
        // { name: '页面路径', type: 'pageUrl' }
      ],
      // 商品类型跳转目标
      // data: { name: '', id: 1 }
      targetList: [
        // 零售商品类型跳转目标
        { type: 'goodsType', data: [] },
        // 零售一级分类跳转目标
        { type: 'firstCategory', data: [] },
        // 零售二级分类跳转目标
        { type: 'secondCategory', data: [] },
        // 服务商品一级分类跳转目标
        { type: 'serviceFirstCategory', data: [] },
        // 服务商品二级分类跳转目标
        { type: 'serviceSecondCategory', data: [] },
        // 固定页面跳转目标
        {
          type: 'fixedPage',
          data: [
            { name: '附近店铺', id: 1, urlPath: '/pages/location/NearbyShop' },
            { name: '同城跑腿', id: 2, urlPath: '/pages/run-errands/Home' },
            { name: '领劵中心', id: 3, urlPath: '/pages/user/CouponCenter' },
            { name: '休闲娱乐', id: 4, urlPath: '/pages/leisure/Index' }
          ]
        }
        // 页面路径
        // { type: "pageUrl", data: [] },
      ],
      // 组件类型数组
      typeArr: [
        {
          split: true,
          name: '基础组件'
        },
        {
          type: 'swiper',
          name: '轮播图',
          data: {
            list: []
          },
          num: 0
        },
        {
          type: 'showcase',
          name: '橱窗',
          data: {
            list: []
          },
          num: 0
        },
        {
          type: 'menus',
          name: '金刚区',
          data: {
            list: [],
            columns: 5 // 每行展示多少列
          },
          num: 0
        },
        {
          type: 'recommend',
          name: '组合推荐',
          data: {},
          num: 0
        },
        {
          type: 'title',
          name: '标题',
          data: {
            title: '',
            position: 'left' // left center right
          },
          num: 0
        },
        {
          type: 'space',
          name: '辅助间隔',
          data: {
            space: 1 // 1 小 2 中 3 大
          },
          num: 0
        },
        {
          type: 'waterfall',
          name: '导航',
          data: {},
          num: 0
        },
        {
          type: 'rating',
          name: '排行榜',
          data: {},
          num: 0
        },
        {
          type: 'richtext',
          name: '富文本',
          data: {
            content: ''
          },
          num: 0
        },
        {
          split: true,
          name: '营销组件'
        },
        {
          type: 'coupon',
          name: '优惠券',
          data: {},
          num: 0
        }
      ],

      // 配置图标列表数据
      arr: []
    }
  },
  getters: {},
  actions: {}
})
