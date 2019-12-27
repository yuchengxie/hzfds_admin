'use strict';

const Controller = require('egg').Controller;

class GoodsCateController extends Controller {
  async top() {
    var result = await this.ctx.model.GoodsCate.find({ pid: "0" });
    this.ctx.body={
      code:20000,
      msg:result
    }
  }
}

module.exports = GoodsCateController;