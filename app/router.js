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
  router.get('/manager', controller.admin.index);
  router.post('/manager/add', controller.admin.add);
  router.post('/manager/edit', controller.admin.edit);
};