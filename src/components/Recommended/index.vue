<template>
	<div class='right-conten'>
		<h3>应用推荐</h3>
		<ul>
			<li v-for='(item,index) in recommendedList' :key='index' @click='golink(item.type)'>
				<img src='@/img/app.png' />
				<span>{{item.name}}</span>
				<span>{{item.price}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	import { getRecommendedList } from '@/api/apptable'
	export default {
	  data() {
	  	return {
	  		recommendedList:[
					{
						icon:'user',
						name:'应用名称',
						type:'code1',
						price:1000
					},
					{
						icon:'user',
						name:'应用名称',
						type:'code2',
						price:1000
					},
					{
						icon:'user',
						name:'应用名称',
						type:'code3',
						price:1000
					}
				]
	  	}
	  },
	   created() {
	    //this.fetchData()
	  },
	  methods: {
	  	...mapMutations([ 'SET_APPID' ]),
	  	golink(appid) {
    			this.SET_APPID(appid);
	  		this.$router.push('/detailpages');
	  	},
	  	fetchData() {
	      getRecommendedList(this.listQuery).then(response => {
	        this.list = response.data.items
	      }).catch((err) => {
	      })
	    }
	  }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.right-conten {
		h3 {
				margin: 0;
				padding: 0;
				font-weight: 400;
				margin-bottom: 20px;
			}
			img {
				vertical-align: middle;
				width: 64px;
			}
			ul {
				padding: 0;
				margin:0;
			}
			li {
				list-style:none;
				border: 1px solid #ebeef5;
				cursor: pointer;
				background: #fff;
				padding: 20px;
				margin-bottom: 20px;
				width: 280px;
				height: 104px;
				&:hover {
					border-color: #84bfe6;
				}
			}
	}
</style>