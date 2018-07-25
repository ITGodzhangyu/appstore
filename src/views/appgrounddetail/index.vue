<template>
	<div class="app-container">
			<div class='cont-title'>
				<img src='@/img/app.png' />
				<ul>
					<li>
						<h2>关系数据库中间件</h2>
						<el-dropdown :hide-on-click="false"  placement='bottom-end' @command="handleCommand($event)">
						  <span class="el-dropdown-link" style='margin:0'>
						    <i class="el-icon-more" style='cursor:pointer'></i>
						  </span>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item command="edit">编辑</el-dropdown-item>
						    <el-dropdown-item command="delete">删除</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
					</li>
					<li><span>价格：{{title.price}}</span><span>AppID：{{title.id}}</span></li>
					<li><span>上传日期：{{title.pushDate}}</span><span>密钥：{{title.id}}</span></li>
					<li><span>审核状态：{{title.pushDate}}</span><span>应用类型：{{title.pushDate}}</span></li>
					<li class='contshort'><span class='shortlabel'>简介：</span><span>{{title.msg}}</span></li>
				</ul>
			</div>
			<div class='cont-file'>
				<span>上传文件：</span>
				<div class='uploadfile'>
						<el-upload
						  drag
						  action=""
						  disabled
						  multiple>
						  <p><i class="el-icon-upload" style='margin-top:25px;'></i></p>
						  <el-button size='mini' style='margin-bottom:20px' disabled>已上传</el-button>
						  <div class="el-upload__text" style='color:#66b1ff'><i class='el-icon-success'></i>文件名称（长度不能超过50个字符）创建时间： 2018-07-18 19:00</div>
					   </el-upload>
				</div>
			</div>
			<div class='cont-main'>
				<h2>应用详情</h2>
				<div></div>
			</div>
			<el-dialog title="删除" :visible.sync="deleteDialog" width='450px'>
			  <delete-page :row='editcheck' @closedialog='deleteDialog=false' @successdialog='returnSuccess'></delete-page>
		 	</el-dialog>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import DeletePage from './operation/delete'
	export default {
		components:{ DeletePage },
		data() {
			return {
				deleteDialog: false,
				editcheck: null,
				title: {
					id: 'ddddd',
					price: '免费',
					pushDate: '2018-7-8',
					textnumber: '5',
					msg:'Xprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur LfdfXprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur LfdfXprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur LfdfXprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur Lfdfg'
				}
			}
		},
		methods: {
			handleCommand(comman) {
		  		if(comman == 'edit'){
		  			this.$router.push('/appgroundedit');  			
		  		}else if(comman == 'delete'){
		  			this.deleteDialog = true;
		  		}
		  	},
		  	returnSuccess() {
		  		this.deleteDialog = false;
		  	}
		},
	  	computed: {
		    	...mapGetters([
		      'apptype',
		      'appname'
		    ])
		 },
	  	created() {
	  		console.log(this.apptype)
	  	}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-container {
		position: relative;
			.cont-title {
				padding: 20px;
				background: #fff;
				position: relative;
				img {
					position: absolute;
					top: 20px;
					left: 20px;
					width: 64px;
				}
				ul {
					margin-left: 80px;
					.el-dropdown {
						position: absolute;
						right: 0;
						top: 0;
					}
					li {
						list-style: none;
						position: relative;
						margin: 10px 0;
						h2 {
							margin: 10px 0 20px 0;
							font-size: 16px;
						}
						span {
							font-size: 14px;
							margin-right: 200px;
						}
						&.contshort {
							span {
								display: inline-block;
								line-height: 20px;
								margin-left: 40px;
								margin-right: 0;
							}
							.shortlabel {
								margin: 0;
								position: absolute;
							}
						}
					}
					
				}
			}	
			.cont-file {
				background: #fff;
				margin-top: 20px;
				padding: 20px;
				&>span {
					font-size: 14px;
					float: left;
					margin-left: 50px;
				}
				.uploadfile {
					margin-left: 122px;
					padding: 20px;
					border: 1px solid #dcdfe6;  
				}
			}
			.cont-main {
				margin-top: 20px;
				background: #fff;
				padding: 20px;
				h2 {
					height: 40px;
					line-height: 40px;
					font-size: 16px;
					font-weight: 400;
					border-bottom: 1px solid #ebeef5;
				}
				div {
					border: 2px solid  #ebeef5;
					margin-top: 20px;
					height: 300px;
				}
			} 	
	}
</style>