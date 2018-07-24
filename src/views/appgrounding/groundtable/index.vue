<template>
	<div class='ground-table'>
		<el-table :data="list" fit highlight-current-row @row-click='goDetailpages' style="width: 100%" v-loading.body="listLoading" element-loading-text="请给我点时间！" header-cell-class-name='table-head'>
		    <el-table-column align="left" label="应用名称" prop='id' width='200px'>
		      <template slot-scope="scope">
		      	 <img src='@/img/app.png'/>
		        <span style='color:#1482F0'>{{scope.row.id}}</span>
		      </template>
		    </el-table-column>	
		    <el-table-column label="状态"  sortable='true' prop='type'>
		      <template slot-scope="scope">
		        <span>{{scope.row.timestamp}}</span>
		        <el-button v-if='scope.row.type == 1' round size='mini' type='primary'>待上传</el-button>
		        <el-button v-else-if='scope.row.type == 2' round size='mini' type='warning'>待审核</el-button>
		        <el-button v-else-if='scope.row.type == 3' round size='mini' type='success'>已上架</el-button>
		        <el-button v-else-if='scope.row.type == 4' round size='mini' class='backed'>已撤回</el-button>
		        <el-button v-else-if='scope.row.type == 5' round size='mini' type='info'>已下架</el-button>
		        <el-button v-else-if='scope.row.type == 6' round size='mini' type='danger'>已删除</el-button>
		
		      </template>
		    </el-table-column>
		
		    <el-table-column label="应用类型" sortable='true' prop='apptype'>
		      <template slot-scope="scope">
		        <span>{{scope.row.apptype}}</span>
		      </template>
		    </el-table-column>
		
		    <el-table-column label="创建日期" sortable='true' prop='creattime'>
		      <template slot-scope="scope">
		        <span>{{scope.row.creattime}}</span>
		      </template>
		    </el-table-column>
		
		    <el-table-column label="更新时间" prop='uptime'>
		      <template slot-scope="scope">
		        <span>{{scope.row.uptime}}</span>
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
		      :page-sizes="[10, 20, 50, 100]"
		      :page-size="pageSize"
		      layout="sizes, prev, pager, next"
		      :total="pageNumber">
		    </el-pagination>
		  </div>
	</div>
</template>

<script>
	import { getList } from '@/api/table'
	import { mapGetters } from 'vuex'
	export default {
	  data() {
	  	return {
	  		pageNumber: 1000,
	  		currentPage: 2,
	  		pageSize: 10,
	  		listLoading: false,
	  		list:[
	  			{"type":'1','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'},
	  			{"type":'2','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'},
	  			{"type":'3','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'},
	  			{"type":'4','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'},
	  			{"type":'5','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'},
	  			{"type":'6','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'},
	  			{"type":'4','id':'dddddd','apptype':'基础软件','uptime':'2018-7-9 18:00','creattime':'2018-7-8 18:00'}
	  		]
	  	}
	  },
	  props:{
	  	searchname: {
	  		type: String,
	  		default: ''
	  	}
	  },
	  created() {
	  	this.pageNumber = this.list.length;
	    //this.fetchData()
	  },
	  computed:{
	      ...mapGetters([
	        'apptype'
	      ])
	    },
	  methods:{
	  	handleSizeChange(val) {
	  		this.currentPage = val
	  		//this.fetchData()
	  	},
	  	goDetailpages(item) {
	  		this.$router.push('/detailpages');
	  	},
	  	handleCurrentChange(val) {
	  		this.pageSize = val
	  		//this.fetchData()
	  	},
	  	fetchData() {
	      this.listLoading = true
	      getList(this.listQuery).then(response => {
	        this.list = response.data.items
	        this.listLoading = false
	      }).catch((err) => {
	      	this.listLoading = false
	      })
	    }
	  },
	  watch: {
	  		apptype(){
	  			//this.fetchData();
	  		},
	  		searchname() {
	  			alert(this.searchname)
	  			//this.fetchData();
	  		}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.ground-table {
		border-top: 1px solid #ebeef5;
		img {
			width: 64px;
			vertical-align: middle;
		}
		.block {
			height: 40px;
			padding: 15px;
			font-weight: 300;
			.el-pagination {
				float: right;
			}
			.demonstration {
				float: right;
				line-height: 30px;
				font-size: 14px;
			}
		}
	}
</style>