'use strict';

const Controller = require('egg').Controller;

class GoodsCateController extends Controller {

  async index() {
    let result = await this.ctx.model.GoodsCate.aggregate([{
        $lookup: {
          from: "goods_cate",
          localField: "_id",
          foreignField: "pid",
          as: "items"
        }
      },
      {
        $match: {
          pid: "0"
        }
      }
    ]);
    this.ctx.body = {
      code: 20000,
      msg: result
    }
  }

  async top() {
    let result = await this.ctx.model.GoodsCate.find({
      pid: "0"
    });
    this.ctx.body = {
      code: 20000,
      msg: result
    }
  }

  async add() {
    let goodsCate = new this.ctx.model.GoodsCate(this.ctx.request.body);
    await goodsCate.save();
    this.ctx.body = {
      code: 20000,
      msg: '新增分类成功'
    }
  }
}

module.exports = GoodsCateController;