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
  router.post('/upload',controller.base.upload);

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

  //focus
  router.get('/focus',controller.focus.index);
  router.post('/focus/add',controller.focus.add);
  router.get('/focus/edit',controller.focus.edit);
  router.post('/focus/doEdit',controller.focus.doEdit);
};