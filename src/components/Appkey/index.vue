<template>
	<div class='appkey'>
		<el-button type="primary" size="small">申请 AppID</el-button>
		<div class='app-table'>
			<el-table :data="list" fit highlight-current-row @row-click='' style="width: 100%" v-loading.body="listLoading" element-loading-text="请给我点时间！" header-cell-class-name='table-head'>
			    <el-table-column align="left" label="AppID" prop='id'>
			      <template slot-scope="scope">
			        <span style='color:#1482F0'>{{scope.row.id}}</span>
			      </template>
			    </el-table-column>	
			    <el-table-column label="关联应用"  sortable='true' prop='author'>
			      <template slot-scope="scope">
			        <span>{{scope.row.author}}</span>
			      </template>
			    </el-table-column>
			
			    <el-table-column label="状态" sortable='true' prop='type'>
			      <template slot-scope="scope">
			        <i :class='scope.row.type | typefilter'></i>
			        <span>{{scope.row.type | textfilter}}</span>
			      </template>
			    </el-table-column>
			
			    <el-table-column label="申请时间" sortable='true' prop='timestamp'>
			      <template slot-scope="scope">
			        <span>{{scope.row.timestamp}}</span>
			      </template>
			    </el-table-column>
			
			    <el-table-column label="操作" prop='importance' width='100px'>
			    	<template slot-scope="scope">
			      <el-dropdown :hide-on-click="false"  placement='bottom-start' @command="handleCommand">
					  <span class="el-dropdown-link">
					    <i class="el-icon-more"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item command="1">编辑</el-dropdown-item>
					    <el-dropdown-item command="0">删除</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
					</template>
			    </el-table-column>
			  </el-table>
			  <div class="block">
			  	 <!--<span class="demonstration">条/每页</span>-->
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      background
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="pageSize"
			      layout="sizes, prev, pager, next"
			      :total="pageNumber">
			    </el-pagination>
			  </div>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	  	return {
	  		pageNumber: 1000,
	  		currentPage: 2,
	  		pageSize: 100,
	  		listLoading: false,
	  		list:[
	  			{"type":'1','id':'AppID_sadasabfbfbbsahwhgevdff','author':'未关联应用','timestamp':'2018-7-8 11:30:09'},
	  			{"type":'2','id':'AppID_sadasabfbfbbsahwhgevdff','author':'未关联应用','timestamp':'2018-7-8 11:30:09'},
	  			{"type":'3','id':'AppID_sadasabfbfbbsahwhgevdff','author':'未关联应用','timestamp':'2018-7-8 11:30:09'},
	  			{"type":'3','id':'AppID_sadasabfbfbbsahwhgevdff','author':'未关联应用','timestamp':'2018-7-8 11:30:09'}	
	  		]
	  	}
	  },
	  methods: {
	  		handleSizeChange(val) {
		  		//this.currentPage = val
		  		//this.fetchData()
		  	},
		  	goDetailpages(item) {
		  		//this.$router.push('/detailpages');
		  	},
		  	handleCurrentChange(val) {
		  		//this.pageSize = val
		  		//this.fetchData()
		  	},
		  	handleCommand(command) {
		  		
		  	}
	  },
	  filters: {
	  	typefilter(type) {
	  		switch(type) {
	  			case '1' : return 'el-icon-success';
	  			case '2' : return 'el-icon-warning';
	  			case '3' : return 'el-icon-remove';
	  			default: return 'el-icon-warning';
	  		}
	  	},
	  	textfilter(type) {
	  		switch(type) {
	  			case '1' : return '正常';
	  			case '2' : return '异常';
	  			case '3' : return '停用';
	  			default: return '异常';
	  		}
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.appkey {
		.el-button {
			margin-bottom: 20px;
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
		.el-dropdown-link {
		    cursor: pointer;
		    color: #409EFF;
		  }
		  .block {
		  	margin-top: 20px;
		  }
	}
</style>