"use strict";

// const path = require("path");
// const fs = require("fs");

// const pump = require("mz-modules/pump");
// let OSS = require("ali-oss");
/*
1、安装mz-modules

https://github.com/node-modules/mz-modules

https://github.com/mafintosh/pump
*/

var BaseController = require("./base.js");
class FocusController extends BaseController {
  async index() {
    let result = await this.ctx.model.Focus.find({});
    console.log('focus result:', result);
    this.ctx.body = {
      code: 20000,
      msg: result
    }
  }

  async add() {
    let focus = new this.ctx.model.Focus(this.ctx.request.body);
    await focus.save();
    this.ctx.body = {
      code: 20000,
      msg: '新增轮播图成功'
    }
  }

  async edit() {
    var id = this.ctx.request.query.id;
    var result = await this.ctx.model.Focus.find({
      _id: id
    });
    console.log('edit:',result[0]);
    this.ctx.body = { 
      code: 20000,
      msg: result[0]
    }
  }
}

module.exports = FocusController;