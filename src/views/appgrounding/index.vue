<template>
	<div class="app-container">
			<div style="padding: 0 20px;background: #fff">
				<div class='ground-title'>
					<h2>应用上架</h2>
					<el-button type='primary' size="mini" @click='addground'>新建上架</el-button>
				</div>
			</div>
			<ul>
				<li>
					<span class='spatitle'>审核状态：</span>	
					<span :code='item.code' v-for='(item,index) in appsorganizer' :key='index'>{{item.name}}</span>
				</li>
				<li>
					<span class='spatitle'>应用类型：</span>
					<span :code='item.code' v-for='(item,index) in businesslabel' :key='index'>{{item.name}}</span>
				</li>
			</ul>
			<div class='app-tempplate'>
				<ground-table :searchname='searchname'></ground-table>
			</div>
	</div>
</template>

<script>
	import Tab from '@/components/Tab'
	import GroundTable from './groundtable'
	import Recommended from '@/components/Recommended'
	export default {
		data() {
			return {
				searchname:'',
				inputval:'',
				appsorganizer: [
					{
						type:'0',
						name:'全部'
					},
					{
						type:'1',
						name:'待上传'
					},
					{
						type:'2',
						name:'待审核'
					},
					{
						type:'3',
						name:'已上架'
					},
					{
						type:'4',
						name:'已撤回'
					},
					{
						type:'5',
						name:'已下架'
					},
					{
						type:'6',
						name:'已删除'
					}
				],
				businesslabel:[
					{
						code:'0',
						name:'全部'
					},
					{
						code:'1',
						name:'基础软件'
					},
					{
						code:'2',
						name:'业务工具'
					},
					{
						code:'3',
						name:'SDK/API'
					},
					{
						code:'4',
						name:'微服务'
					}
				]
			}
	},
	  components: { Tab, GroundTable, Recommended},
	  methods: {
	  	searchApp() {
	  		this.searchname = this.inputval;
	  		alert(this.searchname)
	  	},
	  	addground() {
	  		this.$router.push('/appgroundedit');  
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-container {
		position: relative;		
			.ground-title {
				background: #fff;
				padding: 25px 0 15px 0;
				height: 60px;
				border-bottom: 1px solid  #ebeef5;
				h2 {
					font-size: 16px;
					float: left;
				}
				.el-button {
					float: right;
					margin-top: -5px;
				}
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
</style>