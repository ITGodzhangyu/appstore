<template>
	<div class="app-container">
		<div class='myapp'>
			<h2>我的应用</h2>
			<div class='myapp-content'>
				<ul class='myapp-left'>
					<li v-for='(item,index) in btnlist' :class='{active : index == chackbox.index}' @click='chacked(item,index)'>{{item.name}}</li>
				</ul>
				<div class='myapp-right'>
					<apptable :urltype='chackbox.type' v-show='modelhid==1'></apptable>
					<appkey v-show='modelhid==0'></appkey>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Apptable from '@/components/Apptable'	
	import Appkey from '@/components/Appkey'	
	export default {
		data() {
			return {
				btnlist: [
					{
						name:'已下载应用',
						type:''
					},
					{
						name:'上架应用',
						type:''
					},
					{
						name:'应用密钥',
						type:'appkey'
					}
				],
				modelhid: 1,
				chackbox: {
					index: 0,
					type: ''
				}
			}
		},
	  	components: { Apptable, Appkey },
		 methods: {
		 	chacked(item,index) {
		 		if(item.type == 'appkey'){
		 			this.modelhid = 0;
		 			this.chackbox.index = index;
		 		}else {
		 			this.modelhid = 1;
		 			this.chackbox.index = index;
		 			this.chackbox.type = item.type;
		 		}
		 	}
		 },
	  	created() {
	  		
	  	}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.myapp {
		background: #fff;
		padding: 20px;
		h2{
			font-size: 18px;
			font-weight: 400;
			padding: 10px 0 15px 0;
			border-bottom: 1px solid #ebeef5;
		}
		.myapp-content {
			margin-top: 20px;
			.myapp-left {
				float: left;
				width: 180px;
				li {
					height: 30px;
					line-height: 30px;
					cursor: pointer;
					padding-left: 10px;
					font-size: 14px;
					margin-bottom: 10px;
					&.active {
						background: rgb(232,245,251);
						color: rgb(65,155,221);
					}
				}
			}
			.myapp-right {
				margin-left: 200px;
				padding-left: 20px;
				border-left: 1px solid #ebeef5;
			}
		}
	}
</style>