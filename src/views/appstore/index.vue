<template>
	<div class="app-container" style='position:relative'>
		<h2>应用分类</h2>
		<div class='search'>
    			<router-link to="/myapp">我的应用</router-link>
        		<router-link to="/appgrounding">应用上架</router-link>
        		<router-link to="/appkey">密钥管理</router-link>
        		<div class='search-input'>
			  <el-input placeholder="请输入应用名称" v-model="inputval" size="small">
			    <el-button slot="append" icon="el-icon-search" @click='searchApp'></el-button>
			  </el-input>
			</div>
		</div>
		<tab></tab>
		<div class='app-tempplate'>
			<h3>最新上架应用</h3>	
			<app-table :searchname='searchname'></app-table>
		</div>
	</div>
</template>

<script>
	import Tab from '@/components/Tab'
	import AppTable from '@/components/Apptable'
	export default {
		data() {
			return {
				searchname:'',
				inputval:''
			}
		},
	  components: { Tab , AppTable},
	  methods: {
	  	searchApp() {
	  		this.searchname = this.inputval;
	  	}
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-container {
		position: relative;
		h2 {
			margin:0;
			font-size: 16px;
		}
		.search {
	    		position: absolute;
	    		right: 0;
	    		top: -50px;
	    		&>a {
	    			margin-right: 20px;
	    			line-height: 50px;
	    			font-size: 14px;
	    			color: rgb(20, 130, 240);
	    		}
	    		.search-input {
	    			margin-right: 20px;
	    			margin-top: 9px;
	    			float: right;
	    		}
	    }
		.app-tempplate {
			background: #fff;
			margin-top: 20px;
			padding: 20px;
			h3 {
				font-size: 16px;
				line-height: 60px;
				height: 60px;
				margin: 0;
				margin-top: -20px;
				font-weight: 400;
			}
		}
	}
</style>