<template>
	<div class='listmain'>
		<ul v-for='(item,index) in list' :key='index'>
		  	<li :code='item.code'>
		  		<p><span @click='golink(item.code)' :class='{active: item.code==active}'>{{item.name}}</span></p>
		  		<span :code='ite.code' v-for='(ite,inx) in item.data' @click='appChange(ite.code)'>{{ite.name}}</span>
		  	</li>
		</ul>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
    		active:'code1',
      list: [
      	{
      		name:'分类一',
      		code:'code1',
      		data:[{
      		"name":"应用1",
      		"code":'code1'
	      	},
	      	{
	      		"name":"应用2",
	      		"code":'code2'
	      	},
	      	{
	      		"name":"应用3",
	      		"code":'code3'
	      	},
	      	{
	      		"name":"应用4",
	      		"code":'code4'
	      	},
	      	{
	      		"name":"应用5",
	      		"code":'code5'
	      	} ]
      	},
      	{
      		name:'分类二',
      		code:'code1',
      		data:[{
      		"name":"应用1",
      		"code":'code1'
	      	},
	      	{
	      		"name":"应用2",
	      		"code":'code2'
	      	},
	      	{
	      		"name":"应用3",
	      		"code":'code3'
	      	},
	      	{
	      		"name":"应用4",
	      		"code":'code4'
	      	},
	      	{
	      		"name":"应用5",
	      		"code":'code5'
	      	} ]
      	},
      	{
      		name:'分类三',
      		code:'code1',
      		data:[{
      		"name":"应用1",
      		"code":'code1'
	      	},
	      	{
	      		"name":"应用2",
	      		"code":'code2'
	      	},
	      	{
	      		"name":"应用3",
	      		"code":'code3'
	      	},
	      	{
	      		"name":"应用4",
	      		"code":'code4'
	      	},
	      	{
	      		"name":"应用5",
	      		"code":'code5'
	      	} ]
      	},
      ]
     } 
  },
filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
},
  created() {
    this.getList()
  },
  methods: {
  	...mapMutations(['SET_APPTYPE','SET_APPNAME']),
    getList() {
    },
    golink(){
    		this.$router.push('/appallstore');
    },
    appChange(ttype){
    		this.$set(this,'active',ttype);
    		this.SET_APPTYPE(ttype);
    		this.$router.push('/detailpages');
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.listmain {
		&>ul{
			margin:0;
			padding: 0;
			font-size: 13px;
			&>li {
				list-style: none;
				margin-left: 15px;
			}
			span {
				display: inline-block;
				padding: 6px 15px;
				color: #666;
				/*background: rgb(242,242,242);
				border-radius: 15px;*/
				margin-right: 10px;
				&:hover {
					/*background: rgb(232,245,251);*/
					color: #1482F0;
					cursor: pointer;
				}
				&.active {
					/*background: #2FA7DF;*/
					color: #1482F0;
				}
			}
			p {		
				margin: 5px 0;
			}
		}
	}
</style>