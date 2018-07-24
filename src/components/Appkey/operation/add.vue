<template>
	<div class='delete-content'>
		<p>申请AppID并对此进行描述</p>
		<div class='textcont'>
			<label>描述：</label>
			<el-input type="textarea" v-model="edittext" placeholder='描述内容不超过200字'></el-input>
		</div>
		<div class='btn'>
			<el-button type="primary" @click="added" size='small' :loading="loading">申 请</el-button>
	    		<el-button @click="$emit('closedialog')" size='small'>取 消</el-button>
		</div>
	</div>
</template>

<script>
	import { createKey } from '@/api/key'
	export default {
	  data() {
	  	return {
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
	  	added() {
	  		this.loading = true;
	  		setTimeout(() => {
	  			this.loading = false;
	  			this.$emit('successdialog');
	  			this.$message({
	    				message: '申请成功',
	    				type: 'success',
	          		center: true
        			});
	  		},1000);
//	  		createKey(data).then(response => {
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
	.delete-content {
		.btn {
			margin-top: 30px;
			text-align: right;
			.el-button {
		    		margin-top: 10px;
		    }
		}
		.textcont {
			padding-left: 40px;
			margin-top: 10px;
			position: relative;
			label {
				position: absolute;
				font-size: 14px;
				font-weight: 400;
				color: #606266;
				left: 0;
				top: 0;
			}
			.el-textarea {
				
			}
		}
	}
</style>