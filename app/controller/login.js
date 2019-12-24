'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async setMenu(){
    console.log('menu:',this.config.menu);
    this.ctx.body={
      menu:this.config.menu
    }
  }
  async login() {
    let user = this.ctx.request.body;
    console.log('user:', user);
    
    //创建menu
    // let menu1 = new this.ctx.model.Menu({
    //   path: '/',
    //   name: 'home',
    //   label: '首页',
    //   icon: 's-home',
    //   url: 'Home/Home'
    // })
    // let menu2 = new this.ctx.model.Menu({
    //   path: '/user',
    //   name: 'user',
    //   label: '用户管理页',
    //   icon: 'user',
    //   url: 'UserManage/UserManage',
    // });
    // var menu = [];
    // menu.push(menu1);
    // menu.push(menu2);

    // console.log('menu:', menu);
    // console.log('menu5555:', this.config.menu);

    this.ctx.body = {
      menu: this.config.menu,
      // menu: menu
    }
  }
}

module.exports = LoginController;