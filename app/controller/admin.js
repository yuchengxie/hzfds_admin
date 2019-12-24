'use strict';

const Controller = require('egg').Controller;
let BaseController = require('./base');

class AdminController extends BaseController {
  
  async index() {
    let res = await this.ctx.model.Admin.find({});
    this.ctx.body = {
      code: 20000,
      msg: res
    }
  }

  async add() {
    //验证数据合法
    let fields = this.ctx.request.body;
    console.log('fields:', fields);
    //将数据写入数据库
    let user = new this.ctx.model.Admin(fields);
    user.save();
    console.log('写入成功');
    this.ctx.body = {
      code: 20000,
      msg: user.username + '写入数据库'
    }
  }
  async edit() {
    //验证数据合法
    let fields = this.ctx.request.body;
    let _id = fields._id;
    console.log('fields:', fields);
    //将数据写入数据库
    await this.ctx.model.Admin.updateOne({
      _id
    }, fields);
    this.ctx.body = {
      code: 20000,
      msg: user.username + '编辑成功'
    }
  }
}

module.exports = AdminController;