'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async del() {
    let model = this.ctx.request.query.model;
    let _id = this.ctx.request.query.id;
    await this.ctx.model[model].deleteOne({
      _id
    });
    this.ctx.body = {
      code: 20000,
      msg: '删除成功'
    }
  }

  async upload(){
    
  }

}

module.exports = BaseController;