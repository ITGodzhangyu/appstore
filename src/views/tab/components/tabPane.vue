<template>
	<div class='listmain'>
		<ul v-for='(item,index) in list' :key='index'>
		  	<li :code='item.code'>
		  		<p>{{item.name}}</p>
		  		<span :code='ite.code' v-for='(ite,inx) in item.data'>{{ite.name}}</span>
		  	</li>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
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
    getList() {
    }
  }
}
</script>
<style scoped>
	.listmain>ul p {
		margin: 0;
	}
	.listmain>ul {
		line-height: 31px;
		margin:0;
		padding: 0;
		font-size: 13px;
	}
	.listmain>ul>li{
		list-style: none;
		margin-left: 15px;
	}
	.listmain>ul>li span {
		margin-right: 25px;
	}
</style>