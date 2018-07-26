<template>
	<div class="app-container appallstore">
		<div class='search'>
    			<router-link to="/myapp">我的应用</router-link>
        		<router-link to="/appgrounding">应用上架</router-link>
        		<router-link to="/appkey">密钥管理</router-link>
        		<div class='search-input'>
			  <el-input placeholder="请输入应用名称" v-model="inputval" size="small" clearable>
			    <el-button slot="append" icon="el-icon-search" @click='searchApp'></el-button>
			  </el-input>
			</div>
		</div>
		<div class='cont-left'>
			<ul>
				<li>
					<span class='spatitle'>应用分类：</span>	
					<el-radio-group v-model="leicheck">
				      <el-radio-button v-for='(item,index) in appsorganizer' :label="item.code">{{item.name}}</el-radio-button>
				    </el-radio-group>
				</li>
				<li>
					<span class='spatitle'>业务标签：</span>
					<el-radio-group v-model="yecheck">
				      <el-radio-button v-for='(item,index) in businesslabel' :label="item.code">{{item.name}}</el-radio-button>
				    </el-radio-group>
				</li>
				<li>
					<span class='spatitle'>价格：</span>
					<el-radio-group v-model="price">
				      <el-radio-button v-for='(item,index) in apppric' :label="item.code">{{item.name}}</el-radio-button>
				   </el-radio-group>
				</li>
			</ul>
			<div class='app-tempplate'>
				<app-table :searchname='searchname'></app-table>
			</div>
		</div>
		<div class='cont-right'>
			<recommended></recommended>
		</div>
	</div>
</template>

<script>
	import Tab from '@/components/Tab'
	import AppTable from '@/components/Apptable'
	import Recommended from '@/components/Recommended'
	export default {
		data() {
			return {
				searchname: '',
				inputval: '',
				leicheck: '',
				yecheck: '',
				price: '',
				appsorganizer: [
					{
						code:'',
						name:'全部'
					},
					{
						code:'code2',
						name:'基础软件'
					},
					{
						code:'code3',
						name:'业务工具'
					},
					{
						code:'code4',
						name:'SDK/API'
					},
					{
						code:'code5',
						name:'微服务'
					}
				],
				businesslabel:[
					{
						code:'',
						name:'全部'
					},
					{
						code:'code2',
						name:'办公软件'
					},
					{
						code:'code3',
						name:'必要插件'
					},
					{
						code:'code4',
						name:'基础软件'
					}
				],
				apppric:[
					{
						code:'',
						name:'全部'
					},
					{
						code:'code2',
						name:'0-999'
					},
					{
						code:'code3',
						name:'1000-4999'
					},
					{
						code:'code4',
						name:'5000-9999'
					}
				]
			}
	},
	  components: { Tab, AppTable, Recommended},
	  methods: {
	  	searchApp() {
	  		this.searchname = this.inputval;
	  		alert(this.searchname)
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" >
	.app-container.appallstore {
		position: relative;
		.search {
	    		position: absolute;
	    		right: 0;
	    		top: -50px;
	    		&>a {
	    			margin-right: 20px;
	    			line-height: 50px;
	    			font-size: 14px;
	    			color: rgb(20, 130, 240);
	    		}
	    		.search-input {
	    			margin-right: 20px;
	    			margin-top: 9px;
	    			float: right;
	    		}
	    }
		.cont-left {
			margin-right: 300px;
			h2 {
				margin:0;
				font-size: 16px;
			}
			&>ul {
				background: #fff;
				margin: 0;
				padding: 20px;
			}
			&>ul>li {
				list-style: none;
				height: 40px;
				line-height: 40px;
				span {
					display: inline-block;
					border: none;
					font-size: 14px;
					font-weight: 400;
					color: #666;
				}
				.spatitle {
					width: 100px;
					font-size: 15px;
					background: none;
					text-align: right;
				}	
				.el-radio-button__inner {
					margin-right: 15px;
					cursor: pointer;
					background: #EBEEF5;
					height: 20px;
					line-height: 20px;
					border-radius: 15px;
					padding: 0 10px;
					&:hover {
						background:  rgb(232,245,251);
						color: #1482F0;
					}
				}
				.is-active {
					.el-radio-button__inner {
						box-shadow: none;
						background:  rgb(232,245,251);
						color: #1482F0;
					}
				}
			}
			.app-tempplate {
				background: #fff;
				padding: 20px;
			}
		}
		.cont-right {
			width: 300px;
			height: 100px;
			position: absolute;
			top: 20px;
			right: 0;
		}
	}
</style>