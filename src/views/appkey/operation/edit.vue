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
			    <el-input type="textarea" v-model="edittext"></el-input>
			 </el-form-item>
			 <el-form-item style='text-align:right'>
			    <el-button type="primary" @click="updata" size='small' :loading="loading">保 存</el-button>
	    			<el-button @click="$emit('closedialog')" size='small'>取 消</el-button>
			 </el-form-item>
		</el-form>
	</div>
</template>

<script>
	import { updateKey } from '@/api/key'
	export default {
	  data() {
	  	return {
	  		edittext: this.row.id,
	  		loading: false
	  	}
	  },
	  created() {
	  	//this.edittext = this.row.id;
	  },
	  props:{
		 row: {
		    type: Object,
		    default: {}
		 }
	  },
	  methods: {
	  	updata() {
	  		let data = {
	  			des: this.edittext
	  		}
	  		this.loading = true;
	  		setTimeout(() => {
	  			this.loading = false;
	  			this.$emit('successdialog');
	  			this.$message({
	    				message: '保存成功',
	    				type: 'success',
	          		center: true
        			});
	  		},1000);
//	  		updateKey(data).then(response => {
//	        		this.row = response.data.items
//	      	}).catch((err) => {
//				this.$message({
//  					message: err,
//	    				type: 'error',
//	          		center: true
//	        		});
//	      		this.loading = false
//	      	})
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.edit-content {
		.el-form-item {
		    margin-bottom: 0;
		    margin-left: 10px;
		    .el-button {
		    		margin-top: 10px;
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
	}
</style>