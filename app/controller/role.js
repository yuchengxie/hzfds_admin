'use strict';

var BaseController = require('./base.js');

class RoleController extends BaseController {
	async index() {
		var result = await this.ctx.model.Role.find({});
		this.ctx.body = {
			code: 20000,
			msg: result
		}
	}

	async add() {
		let role = new this.ctx.model.Role({
			title: this.ctx.request.body.title,
			description: this.ctx.request.body.description,
		})
		await role.save();
		this.ctx.body = {
			code: 20000,
			msg: '新增角色成功'
		}
	}

	async edit(){
		let fields=this.ctx.request.body;
		console.log('edit fields:',fields);
		await this.ctx.model.Role.updateOne({_id:fields._id},fields);
		this.ctx.body={
			code:20000,
			msg:'更新角色成功'
		}
	}
	
	async doAdd() {

		//  console.log(this.ctx.request.body);


		var role = new this.ctx.model.Role({

			title: this.ctx.request.body.title,

			description: this.ctx.request.body.description,
		})

		await role.save(); //注意


		await this.success('/admin/role', '增加角色成功');


	}

	async auth() {

		/*

		 1、获取全部的权限  

		 2、查询当前角色拥有的权限（查询当前角色的权限id） 把查找到的数据放在数组中

		 3、循环遍历所有的权限数据     判断当前权限是否在角色权限的数组中，   如果在角色权限的数组中：选中    如果不在角色权限的数组中不选中
		 
		*/


		var role_id = this.ctx.request.query.id;

		var result = await this.service.admin.getAuthList(role_id);


		await this.ctx.render('admin/role/auth', {

			list: result,
			role_id: role_id
		});

	}


	async doAuth() {



		/*
		
		1、删除当前角色下面的所有权限

		2、把获取的权限和角色增加到数据库
		
		*/


		console.log(this.ctx.request.body);

		var role_id = this.ctx.request.body.role_id;

		var access_node = this.ctx.request.body.access_node;

		//1、删除当前角色下面的所有权限

		await this.ctx.model.RoleAccess.deleteMany({
			"role_id": role_id
		});



		//2、给role_access增加数据 把获取的权限和角色增加到数据库

		for (var i = 0; i < access_node.length; i++) {

			var roleAccessData = new this.ctx.model.RoleAccess({

				role_id: role_id,
				access_id: access_node[i]
			})

			roleAccessData.save();
		}


		await this.success('/admin/role/auth?id=' + role_id, "授权成功");




	}




}

module.exports = RoleController;