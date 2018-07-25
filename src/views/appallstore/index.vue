<template>
	<div class="app-container">
		<div class='search'>
    			<router-link to="/myapp">我的应用</router-link>
        		<router-link to="/appgrounding">应用上架</router-link>
        		<router-link to="/appkey">密钥管理</router-link>
        		<div class='search-input'>
			  <el-input placeholder="请输入应用名称" v-model="inputval" size="small">
			    <el-button slot="append" icon="el-icon-search" @click='searchApp'></el-button>
			  </el-input>
			</div>
		</div>
		<div class='cont-left'>
			<ul>
				<li>
					<span class='spatitle'>应用分类：</span>	
					<span :code='item.code' v-for='(item,index) in appsorganizer' :key='index'>{{item.name}}</span>
				</li>
				<li>
					<span class='spatitle'>业务标签：</span>
					<span :code='item.code' v-for='(item,index) in businesslabel' :key='index'>{{item.name}}</span>
				</li>
				<li>
					<span class='spatitle'>价格：</span>
					<span :code='item.code' v-for='(item,index) in apppric' :key='index'>{{item.name}}</span>
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
				searchname:'',
				inputval:'',
				appsorganizer: [
					{
						code:'code1',
						name:'全部'
					},
					{
						code:'code2',
						name:'基础软件'
					},
					{
						code:'code2',
						name:'基础软件'
					},
					{
						code:'code2',
						name:'基础软件'
					}
				],
				businesslabel:[
					{
						code:'code1',
						name:'全部'
					},
					{
						code:'code2',
						name:'基础软件'
					},
					{
						code:'code2',
						name:'基础软件'
					},
					{
						code:'code2',
						name:'基础软件'
					}
				],
				apppric:[
					{
						code:'code1',
						name:'全部'
					},
					{
						code:'code2',
						name:'0-999'
					},
					{
						code:'code2',
						name:'1000-4999'
					},
					{
						code:'code2',
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

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-container {
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
			ul {
				background: #fff;
				margin: 0;
				padding: 20px;
			}
			ul>li {
				list-style: none;
				height: 40px;
				line-height: 40px;
				span {
					display: inline-block;
					margin-right: 15px;
					font-size: 14px;
					cursor: pointer;
					color: #666;
					background: #EBEEF5;
					height: 20px;
					line-height: 20px;
					border-radius: 15px;
					padding: 0 10px;
					&.spatitle {
						width: 100px;
						padding: 0;
						font-size: 15px;
						background: none;
						text-align: right;
					}
					&:hover {
						background:  rgb(232,245,251);
						color: #1482F0;
					}
					&.spatitle:hover {
						background:  none;
						color: #666;
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