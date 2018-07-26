<template>
	<ul class='success-content'>
		<li class='title'><label><i class='el-icon-success'></i></label>申请 AppID 成功！</li>
		<li><label>AppID：</label><span>{{row.id}}</span></li>
		<li><label>密钥：</label><span>{{row.id}}</span></li>
		<li><label>描述：</label><span>{{row.author}}</span></li>
	</ul>
</template>

<script>
	export default {
	  data() {
	  	return {
	  		
	  	}
	  },
		props:{
			 row: {
			    type: Object,
			    default: {}
			 }
		  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" >
	.success-content {
		margin: -10px 0;
		.el-icon-success {
			color: rgb(83,176,149);
			margin-right: 9px;
		}
		
		li {
			margin: 10px 0;
			font-size: 12px;
			&.title {
				font-size: 14px;
			}
			label {
				display: inline-block;
				width: 70px;
				text-align: right;
			}
		}
	}
</style>