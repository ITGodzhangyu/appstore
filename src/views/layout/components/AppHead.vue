<template>
	<div>
	<div class='pagelogo'>
		<img src="@/img/logo.png"/>
		<span>中国石油勘探开发云平台</span>
	</div>
	<el-menu :default-active="activeIndex" class="el-menu-demo navlist" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">首页</el-menu-item>
	  <el-menu-item index="2">应用商店</el-menu-item>
	  <el-menu-item index="3">资源中心</el-menu-item>
	  <el-menu-item index="4">数据中心</el-menu-item>
	  <el-menu-item index="4">账号中心</el-menu-item>
	</el-menu>
	<el-menu class="navbar" mode="horizontal">
	    
	    <el-dropdown class="avatar-container" trigger="click">
	      <div class="avatar-wrapper">
	        <svg-icon icon-class='user' font-size='20px'></svg-icon>
	        <span>登录</span>
	        <!--<i class="el-icon-caret-bottom"></i>-->
	      </div>
	      <el-dropdown-menu class="user-dropdown" slot="dropdown">
	        <router-link class="inlineBlock" to="/">
	          <el-dropdown-item>
	            Home
	          </el-dropdown-item>
	        </router-link>
	        <el-dropdown-item divided>
	          <span @click="logout" style="display:block;">LogOut</span>
	        </el-dropdown-item>
	      </el-dropdown-menu>
	    </el-dropdown>
	  </el-menu>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Breadcrumb from '@/components/Breadcrumb'
	import Hamburger from '@/components/Hamburger'
	export default {
		data() {
	      return {
	        activeIndex: '2',
	        activeIndex2: '2'
	      };
    		},
	  components: {
	    Breadcrumb,
	    Hamburger
	  },
	  computed: {
	    ...mapGetters([
	      'sidebar',
	      'avatar'
	    ])
	  },
	  methods: {
	    toggleSideBar() {
	      this.$store.dispatch('ToggleSideBar')
	    },
	    handleSelect(key, keyPath) {
        		console.log(key, keyPath);
     	},
	    logout() {
	      this.$store.dispatch('LogOut').then(() => {
	        location.reload() // 为了重新实例化vue-router对象 避免bug
	      })
	    }
	  }
	} 
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navlist {
	float:left;
	background: none;
	border: none;
}
.svg-icon {
	vertical-align: middle;
	border-radius: 10px;
	background:#fff;
	color: #84bfe6;
}
.el-menu-item {
	color: #fff;
}
.el-menu-item {
	padding: 0 30px;
}
.el-dropdown {
	color: #fff;
}
.pagelogo {
	line-height: 60px;
	float:left;
	margin-right: 80px;
	color: #fff;
	img {
		font-size: 30px;
		vertical-align: middle;
		width: 40px;
	}
	span {
		font-size: 18px;
	}
}
.el-menu--horizontal>.el-menu-item.is-active {
	color: blue;
	border: none;
}
.el-menu--horizontal>.el-menu-ite {
	color: #fff;
	border: none;
}
.navbar {
  height: 50px;
  float:right;
  line-height: 50px;
  margin-top: 5px;
  border-radius: 0px !important;
  background: none;
  border: none;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>