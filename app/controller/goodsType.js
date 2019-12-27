'use strict';

const Controller = require('egg').Controller;

class GoodsTpeController extends Controller {
  async index() {
    let list = await this.ctx.model.GoodsType.find({});
    this.ctx.body = {
      code: 20000,
      msg: list
    }
  }

  async add() {
    var goodsType = this.ctx.model.GoodsType(this.ctx.request.body);
    await goodsType.save();
    this.ctx.body = {
      code: 20000,
      msg: '商品分类添加成功'
    }
  }
}

module.exports = GoodsTpeController;