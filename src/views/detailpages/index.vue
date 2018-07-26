<template>
	<div class="app-container">
		<div class='cont-left'>	
			<div class='cont-title'>
				<svg-icon icon-class='example' font-size='80px'></svg-icon>
				<ul>
					<li><h2>关系数据库中间件</h2><el-button type='primary' size="mini">下载</el-button></li>
					<li><span>价格：{{title.price}}</span><span>上架日期：{{title.pushDate}}</span></li>
					<li><span>下载次数：{{title.textnumber}}</span></li>
					<li class='contshort'><span class='shortlabel'>简介：</span><span>{{title.msg}}</span></li>
				</ul>
			</div>
			<div class='cont-main'>
				<h2>应用详情</h2>
				<div></div>
			</div>
		</div>
		<div class='cont-right'>
			<recommended :row='row'></recommended>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getAppDetail } from '@/api/apptable'
	import Tab from '@/components/Tab'
	import Recommended from '@/components/Recommended'
	export default {
		data() {
			return {
				title: {
					price: '免费',
					pushDate: '2018-7-8',
					textnumber: '5',
					msg:'Xprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur LfdfXprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur LfdfXprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur LfdfXprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur Lfdfg'
				},
				row: null
			}
		},
	  	components: { Tab, Recommended},
	  	computed: {
		    	...mapGetters([
		      'apptype',
		      'appid'
		    ])
		 },
		 created() {
		    //this.fetchData()
		  },
		 methods: {
		 	fetchData() {
		 		this.listLoading = true
			    getAppDetail(this.listQuery).then(response => {
			        this.list = response.data.items
			        this.listLoading = false
			    }).catch((err) => {
			      	this.listLoading = false
			    })
		 	}
		 },
		 watch: {
		 	appid(){
		 		alert(this.appid)
		 	}
		 }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-container {
		position: relative;
		.cont-left {
			margin-right: 300px;	
			.cont-title {
				padding: 20px;
				background: #fff;
				position: relative;
				svg {
					position: absolute;
					top: 20px;
					left: 20px;
				}
				ul {
					margin-left: 100px;
					li {
						list-style: none;
						position: relative;
						margin: 10px 0;
						h2 {
							margin: 10px 0 20px 0;
							font-size: 16px;
						}
						.el-button {
							position: absolute;
							right: 0;
							top: 0;
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
		.cont-right {
			width: 300px;
			height: 100px;
			position: absolute;
			top: 20px;
			right: 0;
		}
	}
</style>