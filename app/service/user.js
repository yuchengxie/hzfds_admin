'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAuthList(role_id) {
    var result = await this.ctx.model.Access.aggregate([{
        $lookup: {
          from: 'access',
          localField: '_id',
          foreignField: 'module_id',
          as: 'items'
        }
      },
      {
        $match: {
          "module_id": '0'
        }
      }
    ]);
    var accessReulst = await this.ctx.model.RoleAccess.find({
      "role_id": role_id
    });
    var roleAccessArray = [];
    accessReulst.forEach(function (value) {
      roleAccessArray.push(value.access_id.toString());
    })
    for (var i = 0; i < result.length; i++) {
      if (roleAccessArray.indexOf(result[i]._id.toString()) != -1) {
        result[i].checked = true;
      }
      for (var j = 0; j < result[i].items.length; j++) {
        if (roleAccessArray.indexOf(result[i].items[j]._id.toString()) != -1) {
          result[i].items[j].checked = true;
        }
      }
    }
    return [roleAccessArray,result];
  }
}

module.exports = UserService;