<template>
	<div class='edit-content'>
		<el-form :model="row" label-width='70px'>
			<el-form-item label="AppID：">
			   <span>{{row.id}}</span>
			</el-form-item>
			<el-form-item label="密钥：">
			   <el-input v-model='edittext' size='mini'></el-input>
			</el-form-item>
			<el-form-item>
				<div class='btn'>
					<el-button type="primary" @click="updata" size='small' :loading="loading">修 改</el-button>
	    		   		<el-button @click="$emit('closedialog')" size='small'>取 消</el-button>
				</div>
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
	    				message: '修改成功',
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
			.btn {
				text-align: right;
			}
		}
	}
</style>