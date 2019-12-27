module.exports = [{
    path: '/',
    name: 'home',
    label: '首页',
    icon: 's-home',
    url: 'Home/Home'
  }, {
    path: '',
    name: 'user',
    label: '用户管理',
    icon: 'user',
    children: [{
      path: '/user',
      name: 'user',
      label: '用户列表',
      icon: 'user',
      url: 'User/User',
    },{
      path: '/role',
      name: 'role',
      label: '角色列表',
      icon: 'user',
      url: 'User/Role',
    },{
      path: '/access',
      name: 'access',
      label: '权限列表',
      icon: 'user',
      url: 'User/Access',
    }]
  }, {
    path: '/focus',
    name: 'focus',
    label: '轮播图管理页',
    icon: 'picture',
    url: 'Focus/Focus',
  },
  {
    path: '',
    name: 'goods',
    label: '商品管理',
    icon: 'picture',
    children: [{
        path: '/goodsCate',
        name: 'goodsCate',
        label: '商品分类',
        icon: 'video-camera-solid',
        url: 'Goods/GoodsCate',
      },
      {
        path: '/goodsAttr',
        name: 'goodsAttr',
        label: '商品类型',
        icon: 'video-camera-solid',
        url: 'Goods/GoodsAttr'
      },
      {
        path: '/goods',
        name: 'goods',
        label: '商品列表',
        icon: 'video-camera-solid',
        url: 'Goods/Goods'
      }
    ]
  },
  {
    path: '',
    name: 'other',
    label: '其他',
    icon: 'video-camera-solid',
    children: [{
      path: '/page1',
      name: 'page1',
      label: '页面一',
      icon: 'video-camera-solid',
      url: 'Other/PageOne'
    }, {
      path: '/page2',
      name: 'page2',
      label: '页面二',
      icon: 's-home',
      url: 'Other/PageTwo'
    }]
  }
]