<template>
	<div class='app-table'>
		<el-table :data="list" fit highlight-current-row @row-click='goDetailpages' style="width: 100%" v-loading.body="listLoading" element-loading-text="请给我点时间！" header-cell-class-name='table-head'>
		    <el-table-column align="left" label="应用名称" prop='id' width='200px'>
		      <template slot-scope="scope">
		      	 <img src='@/img/app.png'/>
		        <span style='color:#1482F0'>{{scope.row.id}}</span>
		      </template>
		    </el-table-column>	
		    <el-table-column label="价格"  sortable='true' prop='timestamp'>
		      <template slot-scope="scope">
		        <span>{{scope.row.timestamp}}</span>
		      </template>
		    </el-table-column>
		
		    <el-table-column label="已下载部署" sortable='true' prop='title'>
		      <template slot-scope="scope">
		        <span>{{scope.row.title}}</span>
		        <el-tag>{{scope.row.type}}</el-tag>
		      </template>
		    </el-table-column>
		
		    <el-table-column label="上架日期" sortable='true' prop='author'>
		      <template slot-scope="scope">
		        <span>{{scope.row.author}}</span>
		      </template>
		    </el-table-column>
		
		    <el-table-column label="应用描述" prop='importance'>
		      <template slot-scope="scope">
		        <!-- <img :src='scope.row.img' />-->
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
</template>

<script>
	import { getList } from '@/api/table'
	import { mapGetters } from 'vuex'
	export default {
	  data() {
	  	return {
	  		pageNumber: 1000,
	  		currentPage: 2,
	  		pageSize: 100,
	  		listLoading: false,
	  		list:[
	  			{"id":'关系数据库中间件',"img":'@/img/app.png',"timestamp":450322752289,"author":"Jessica","reviewer":"Margaret","title":"Xprsqb Lfykrgzgp Eqjt Dtvcdn Wqenu Yooecnl Wtlwpmyx Qowur Lfdf","content_short":"我是测试数据","content":"<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":14.28,"importance":2,"type":"CN","status":"draft","display_time":"2000-02-04 11:42:35","comment_disabled":true,"pageviews":3003,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},
	  			{"img":'@/img/app.png',"id":14,"timestamp":89483976437,"author":"Lisa","reviewer":"Nancy","title":"Ooxhwjsa Ifbfmwphtw Qvygygwcjf Jhkla Btvcq Djntzw","content_short":"我是测试数据","content":"<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":65.67,"importance":1,"type":"CN","status":"draft","display_time":"1988-10-05 09:20:22","comment_disabled":true,"pageviews":4669,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},
	  			{"img":'@/img/app.png',"id":15,"timestamp":1054226254140,"author":"David","reviewer":"Kimberly","title":"Iifs Wqmttsd Twxc Frupf Diick Upjyyem","content_short":"我是测试数据","content":"<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":62.57,"importance":1,"type":"CN","status":"draft","display_time":"2016-08-10 11:01:29","comment_disabled":true,"pageviews":2445,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},
	  			{"img":'@/img/app.png',"id":20,"timestamp":1121577594616,"author":"Jason","reviewer":"Nancy","title":"Nmkdb Uqdchxdp Yhrx Rnhr Rmfm Kzrq","content_short":"我是测试数据","content":"<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":64.78,"importance":1,"type":"CN","status":"published","display_time":"1995-10-24 07:53:11","comment_disabled":true,"pageviews":3723,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},
	  			{"img":'@/img/app.png',"id":25,"timestamp":1340694676528,"author":"Cynthia","reviewer":"Margaret","title":"Skmtn Orcpenvr Lqyhivlr Cfyr Bott","content_short":"我是测试数据","content":"<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":12.65,"importance":2,"type":"CN","status":"draft","display_time":"2003-05-15 02:54:57","comment_disabled":true,"pageviews":3914,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]}]
	  	}
	  },
	  props:{
	  	searchname: {
	  		type: String,
	  		default: ''
	  	}
	  },
	  created() {
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
	.app-table {
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