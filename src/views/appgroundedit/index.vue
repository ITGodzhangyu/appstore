<template>
	<div class='app-container gedit-content'>
		<div class='cont-top'>
			<h2>基本信息</h2>
			<el-form :model="row" label-width="120px">
				<el-form-item label="应用名称：">
				   <el-input v-model="row.id"></el-input>
				</el-form-item>
				<el-form-item label="应用图标：" class='uploadimg'>
				   <!--<img :src='row.img'/>-->
				  	<el-upload action="" :show-file-list='false' :before-upload='beforeAvatarUpload' :on-error='uploadimg'>
				  	  <img src='@/img/app.png' />
					  <el-button size="mini" type="primary">点击上传</el-button>
					  <span slot="tip" class="el-upload__tip">(支持JPG、PNG 图标大小 80x80,小于500K)</span>
					</el-upload>
				</el-form-item>
				<el-form-item label="应用分类：">
					<el-radio-group v-model="row.type">
				      <el-radio-button label="CN">基础软件</el-radio-button>
				      <el-radio-button label="US">开发工具</el-radio-button>
				      <el-radio-button label="JP">SDK/API</el-radio-button>
				      <el-radio-button label="EU">微服务</el-radio-button>
				    </el-radio-group>
				</el-form-item>
				<el-form-item label="子类：">
				  <el-checkbox-group v-model="row.typeson">
				    <el-checkbox label="1">办公软件</el-checkbox>
				    <el-checkbox label="2">必要插件</el-checkbox>
				    <el-checkbox label="3">运行环境</el-checkbox>
				  </el-checkbox-group>
				</el-form-item>
				<el-form-item label="AppID：">
					<el-input v-model="row.id"></el-input>
				</el-form-item>
				<el-form-item label="密钥：">
				    <el-input v-model="row.id"></el-input>
				 </el-form-item>
				<el-form-item label="收费方式：">
				   <el-radio v-model="row.id" label="1">免费</el-radio>
				</el-form-item>
				<div class='black'></div>
				<el-form-item label="上传文件：">
					<div class='uploadfile'>
						<el-upload
						  drag
						  action=""
						  multiple>
						  <p><i class="el-icon-upload" style='margin-top:25px;'></i></p>
						  <el-button size='mini'>上传</el-button>
						  <div class="el-upload__text">文件名称（长度不能超过50个字符）</div>
					   </el-upload>
					</div>
				</el-form-item>
				<div class='black'></div>
				<el-form-item label="详细信息：">
					<tinymce :height="300" v-model="content"></tinymce>
				</el-form-item>
				 <el-form-item style='text-align:right;margin-bottom:0'>
				 	<el-button type="primary"  size='small' plain>保存草稿</el-button>
				    <el-button type="primary"  size='small' :loading="loading" @click='up'>提交申请</el-button>
		    			<el-button size='small'>取 消</el-button>
				 </el-form-item>
			</el-form>
		</div>
		<div class='cont-center'>
			
		</div>
		<div class='cont-bottom'>
			
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Tinymce from '@/components/Tinymce'
	export default {
	  components: { Tinymce },
	  data() {
	  	return {
	  		loading: false,
	  		row: {"id":'关系数据库中间件',"typeson":['1','2'],"img":'@/img/app.png',"timestamp":450322752289,"author":"Jessica","reviewer":"Margaret","content":"<p>我是测试数据我是测试数据</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>","forecast":14.28,"importance":2,"type":"CN","status":"draft","display_time":"2000-02-04 11:42:35","comment_disabled":true,"pageviews":3003,"image_uri":"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3","platforms":["a-platform"]},
	  		content:'测试数据'
	  	}
	  },
	   created() {
	  	if(this.appground){
	  		alert(this.appground)
	  	}
	  },
	  computed:{
	      ...mapGetters([
	        'appground'
	      ])
	   },
	   methods: {
	   	uploadimg(img) {
	   		this.$message.success('上传成功！');
	   		
	   	},
	   	up() {
	   		this.loading = true;
	  		setTimeout(() => {
	  			this.loading = false;
	  			this.$message({
	    				message: '创建成功',
	    				type: 'success',
	          		center: true
        			});
        			this.$router.push('/appgrounding');  
	  		},1000);
	   	},
	   	beforeAvatarUpload(file) {
	        const isType = file.type === 'image/jpeg' || file.type === 'image/png';
	        const isLt500K = file.size / 1024 < 500;
	        console.log(file)
	        if (!isType) {
	          this.$message.error('上传图标只能是 JPG 或 PNG 格式!');
	          return false
	        }
	        if (!isLt500K) {
	          this.$message.error('上传图标大小不能超过 500KB!');
	        }
	        return isType && isLt500K;
	      }
	   }
	   
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.gedit-content {
		background: #f2f2f2;
		.cont-top {
			background: #fff;
			padding: 20px;
			h2 {
				padding: 10px 0 15px 0;
				font-size: 16px;
				border-bottom: 1px solid #ebeef5;
				font-weight: 400;
				margin-bottom: 20px;
			}
			.el-form {
				img {
					width: 48px;
				}
				.black {
					height: 20px;
					background: #f2f2f2;
					margin: 20px -20px;
				}
				.uploadimg .el-upload {					
					.el-button {
						background: none;
						color: #409EFF;
						padding-left: 5px;
						border: none;
					}
				}
				.el-upload__tip {
					color: #999;
				}
				.uploadfile {
    					padding: 20px;
   					border: 1px solid #dcdfe6;  
   				}
			}
		}
	}
</style>