<template>
	<div class='edit-content'>
		<el-form :model="row">
			<el-form-item label="AppID：">
			   <span>{{row.id}}</span>
			</el-form-item>
			<el-form-item label="密钥：">
			   <span>{{row.id}}</span>
			</el-form-item>
			<el-form-item label="关联应用：">
				<span>{{row.author}}</span>
			</el-form-item>
			<el-form-item label="状态：">
			   <span v-if='row.type == 1'>
		      		<i class='el-icon-success'></i>
			        <span>正常</span>
		      	</span>
		      	<span v-else-if='row.type == 3'>
				    <i class='el-icon-remove'></i>				    
			        <span>停用</span>
		      	</span>
		      	<span v-else>
				    <i class='el-icon-warning'></i>
			        <span>异常</span>
		      	</span>
			</el-form-item>
			<el-form-item label="申请时间：">
				<span>{{row.timestamp}}</span>
			</el-form-item>
			<el-form-item label="描述：">
			    <span>{{row.id}}</span>
			</el-form-item>
		</el-form>
	</div>
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
	  },
	  methods: {
	  	
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.edit-content {
		.el-form-item {
		    margin-bottom: 0;
		    margin-left: 10px;
		}
		.el-icon-success{
			color: rgb(83,176,149);
		}
		.el-icon-warning{
			color: rgb(238,175,103);
		}
		.el-icon-remove{
			color: rgb(219,106,103);
		}
	}
</style>