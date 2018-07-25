<template>
	<div class='delete-content'>
		<p>这条记录管理员还没有上架，可以进行撤回操作。</p>
		<p>撤回后可以进行继续编辑，要进行【撤回】操作么？</p>
		<div>
			<el-button type="primary" @click="withdrawd" size='small' :loading="loading">撤 回</el-button>
	    		<el-button @click="$emit('closedialog')" size='small'>取 消</el-button>
		</div>
	</div>
</template>

<script>
	import { withdrawGround } from '@/api/appgrounding'
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
	  	withdrawd() {
	  		this.loading = true;
	  		setTimeout(() => {
	  			this.loading = false;
	  			this.$emit('successdialog');
	  			this.$message({
	    				message: '撤回成功',
	    				type: 'success',
	          		center: true
        			});
	  		},1000);
//	  		withdrawGround(data).then(response => {
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