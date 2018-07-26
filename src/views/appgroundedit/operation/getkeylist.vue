<template>
	<div class='keylist-content'>
		<el-table ref="keyTable" @row-click='chack' :data="list" 
			fit highlight-current-row  style="width: 100%" 
			v-loading.body="listLoading" element-loading-text="请给我点时间！" 
			empty-text='列表内还没有内容，请先申请 AppID'
			header-cell-class-name='table-head'>
		    <el-table-column align="left" label="AppID" prop='id'>
		      <template slot-scope="scope">
		      	<el-radio v-model="checked" :label="scope.row.id"> </el-radio>
		        <span>{{scope.row.id}}</span>
		      </template>
		    </el-table-column>	
		    <el-table-column label="密钥"  sortable='true' prop='id'>
		      <template slot-scope="scope">
		        <span>{{scope.row.id}}</span>
		      </template>
		    </el-table-column>
		  </el-table>
		  <div class='btn'>
		  	<el-button type="primary" plain size='small' style='float:left' @click='$emit("creatdialog")'>申请 AppID</el-button>
		  	<el-button size='small' @click="$emit('closedialog')">取 消</el-button>
		  	<el-button type="primary" size='small' @click='successbtn'>确 定</el-button>
		  </div>
	</div>
</template>

<script>
	export default {
	  data() {
	  	return {
	  		list: [],
	  		checked: null,
	  		addDialog: false,
	  		successDialog: false,
	  		listLoading: false
	  	}
	  },
	  methods: {
	  	chack(row) {
	  		this.checked = row.id;
	  	},
	  	returnSuccess() {
	  		
	  	},
	  	successbtn() {
	  		if(!this.checked){
	  			let msg;
	  			if(this.list){
	    				msg = '请选择AppID与密钥';
	  			}else {	  				
		    			msg = '您尚未申请AppID,请先申请AppID';	    				
	  			}
	  			this.$message({
	    				message: msg,
	    				type: 'warning',
	          		center: true
	         	})
	  			return false
	  		}
	  		this.$emit('successdialog',this.checked);
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	.keylist-content {
		.btn {
			height: 20px;
			margin-top: 20px;
			.el-button {
				float: right;
			}
		}
		.el-radio__label {
			display: none;
		}
	}
	
</style>