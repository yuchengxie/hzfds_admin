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
      url: 'User/User/User',
    }, {
      path: '/role',
      name: 'role',
      label: '角色列表',
      icon: 'user',
      url: 'User/Role/Role',
    },{
      path: '/access',
      name: 'access',
      label: '权限列表',
      icon: 'user',
      url: 'User/Access/Access',
    },{
      path: '/access',
      name: 'accessAdd',
      label: '增加权限列表',
      url: 'User/Access/Add',
      isOperate: true//操作
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
        path: '/goods',
        name: 'goods',
        icon: 'picture',
        label: '商品列表',
        url: 'Goods/Goods/Goods',
      },
      {
        path: '/goods/add',
        name: 'goodsAdd',
        label: '增加商品列表',
        url: 'Goods/Goods/Add',
        icon: 'picture',
        isOperate: true//操作
      },
      {
        path: '/goodsCate',
        name: 'goodsCate',
        label: '商品分类',
        icon: 'video-camera-solid',
        url: 'Goods/Cate/Cate',
      },
      {
        path: '/goodsCate/add',
        name: 'goodsCateAdd',
        label: '增加商品分类',
        url: 'Goods/Cate/Add',
        icon: 'picture',
        isOperate: true//操作
      },
      {
        path: '/goodsAttr',
        name: 'goodsAttr',
        label: '商品类型',
        icon: 'video-camera-solid',
        url: 'Goods/Attr/Attr'
      },
      {
        path: '/goodsAttr/add',
        name: 'goodsAttrAdd',
        label: '增加商品属性',
        url: 'Goods/Attr/Add',
        icon: 'picture',
        isOperate: true//操作
      },
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