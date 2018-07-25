<template>
	<div class='delete-content'>
		<p>确定要删除“{{row.id}}”么?</p>
		<div>
			<el-button type="primary" @click="deleted" size='small' :loading="loading">删 除</el-button>
	    		<el-button @click="$emit('closedialog')" size='small'>取 消</el-button>
		</div>
	</div>
</template>

<script>
	import { deleteKey } from '@/api/key'
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
	  	deleted() {
	  		this.loading = true;
	  		setTimeout(() => {
	  			this.loading = false;
	  			this.$emit('successdialog');
	  			this.$message({
	    				message: '删除成功',
	    				type: 'success',
	          		center: true
        			});
	  		},1000);
//	  		deleteKey(data).then(response => {
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
		div {
			margin-top: 30px;
			text-align: right;
		}
		    .el-button {
		    		margin-top: 10px;
		    }
	}
</style>