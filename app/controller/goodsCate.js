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
    console.log('result:', result);
    this.ctx.body = {
      code: 20000,
      msg: result
    }
  }

  async top() {
    let result = await this.ctx.model.GoodsCate.find({
      pid: "0"
    });
    console.log('top:', result);
    this.ctx.body = {
      code: 20000,
      msg: result
    }
  }

  async add() {
    let parts = this.ctx.request.body;
    console.log('parts1:', parts);
    if (parts.pid != "0") {
      parts.pid = this.app.mongoose.Types.ObjectId(parts.pid); //调用mongoose里面的方法把字符串转换成ObjectId
    }
    let goodsCate = new this.ctx.model.GoodsCate(parts);
    console.log('parts2:', parts);
    await goodsCate.save();
    this.ctx.body = {
      code: 20000,
      msg: '新增分类成功'
    }
  }
}

module.exports = GoodsCateController;