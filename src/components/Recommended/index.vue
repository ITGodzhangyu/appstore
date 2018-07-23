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
						type:'code1',
						price:1000
					},
					{
						icon:'user',
						name:'应用名称',
						type:'code1',
						price:1000
					}
				]
	  	}
	  },
	  methods: {
	  	...mapMutations(['SET_APPTYPE','SET_APPNAME']),
	  	golink(ttype) {
	  		this.$set(this,'active',ttype);
    			this.SET_APPTYPE(ttype);
	  		this.$router.push('/detailpages');
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