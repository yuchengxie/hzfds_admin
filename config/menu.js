module.exports = [
  {
    path: '/',
    name: 'home',
    label: '首页',
    icon: 's-home',
    url: 'Home/Home'
  }, {
    path: '/user',
    name: 'user',
    label: '用户管理页',
    icon: 'user',
    url: 'UserManage/UserManage',
  }, {
    path: '/video',
    name: 'video',
    label: '轮播图管理页',
    icon: 'picture',
    url: 'FocusManage/FocusManage',
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
    },{
      path: '/page2',
      name: 'page2',
      label: '页面二',
      icon: 's-home',
      url: 'Other/PageTwo'
    }]
  }
]