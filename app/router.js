'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;

  //public
  router.get('/del',controller.base.del);
  
  router.get('/', controller.home.index);
  router.get('/menu', controller.login.setMenu);
  router.post('/login', controller.login.login);

  //admin
  router.get('/admin', controller.admin.index);
  router.post('/admin/add', controller.admin.add);
  router.post('/admin/edit', controller.admin.edit);
  
  //role
  router.get('/role',controller.role.index);
  router.post('/role/add',controller.role.add);
  router.post('/role/edit',controller.role.edit);

  //access
  // router.get('/access',controller.access.index);

  //focus
  router.get('/focus',controller.focus.index);
  router.post('/focus/add',controller.focus.add);
  router.post('/focus/edit',controller.focus.edit);

  //goodscate
  router.get('/goods/cate',controller.goodsCate.index);
  router.get('/goods/cate/top',controller.goodsCate.top);
  router.post('/goods/cate/add',controller.goodsCate.add);
  router.post('/goods/cate/edit',controller.goodsCate.edit);

  //goodstype
  router.get('/goods/type',controller.goodsType.index);
  router.post('/goods/type/add',controller.goodsType.add);
  router.post('/goods/type/edit',controller.goodsType.edit);
};