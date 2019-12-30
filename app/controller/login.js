'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async setMenu() {
    console.log('menu:', this.config.menu);
    this.ctx.body = {
      menu: this.config.menu
    }
  }
  async login() {
    let fields = this.ctx.request.body;
    fields.password = await this.service.tools.md5(fields.password);
    let reuslt = await this.ctx.model.Admin.find({
      "username": fields.username,
      "password": fields.password
    });
    if(reuslt.length>0){
      this.ctx.body = {
        code:20000,
        menu: this.config.menu,
      }
    }else{
      this.ctx.body = {
        code:20001,
        menu: '用户名或密码错误',
      }
    }
    // this.ctx.body = {
    //   code: 20000,
    //   menu: this.config.menu,
    // }
  }
}

module.exports = LoginController;