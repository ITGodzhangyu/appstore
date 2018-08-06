<template>
  <!-- <div class="tab-container" @mouseleave='back'>   
    <el-tabs style='margin-top:20px;' v-model="activeName" tab-position='left' type='card'>
      <el-tab-pane v-for="item in tabMapOptions" :key='item.key' :name="item.key">
      	<div slot="label" :class='item.className' @mouseover='check(item.key)'>
      		<svg-icon :icon-class='item.icon' style='font-size: 24px;padding-top:5px;'></svg-icon> 
      		<span style='display:inline-block;width:70px;'>{{item.label}}</span>
      	</div>
        <keep-alive>
          <tab-pane v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
    <div class='tab-bg' v-show='hovered'>
	 	<template>
		  <el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="(item,index) in tabImgList" :key="index">
		    		<div class='imgcont'>
		    			<img :src='item.src' style='width:100%;height:100%'/>
		    			<div>
		    				<h3>{{item.name}}</h3>
		    				<p>{{item.des}}</p>
		    				<el-button @click='golink'>{{item.btn}}</el-button>
		    			</div>
		    		</div>
		    </el-carousel-item>
		  </el-carousel>
		</template>
	 </div>
  </div> -->
    <div class="tab-container" @mouseleave='back'>   
        <el-tabs style='margin-top:20px;' v-model="activeName" tab-position='left' type='card'>

            <el-tab-pane v-for="(item, index) in navList" :key='index'>
              	<div slot="label" :class='tabMapOptions[index].className' @mouseover='check(item.id)'>
              		<svg-icon :icon-class='tabMapOptions[index].icon'></svg-icon> 
              		<span>{{item.name}}</span>
              	</div>
                <keep-alive>
                    <tab-pane v-if='activeName==item.id' :type='type' @create='showCreatedTimes'></tab-pane>
                </keep-alive>
            </el-tab-pane>

        </el-tabs>
        <div class='tab-bg' v-show='hovered'>
    	 	<template>
                <el-carousel :interval="5000" arrow="always">
        		    <el-carousel-item v-for="(item,index) in tabImgList" :key="index">
    		    		<div class='imgcont'>
    		    			<img v-if='item.src==1' src='@/img/bg1.png' style='width:100%;height:100%'/>
                            <img v-else-if='item.src==2' src='@/img/bg2.png' style='width:100%;height:100%'/>
                            <img v-else-if='item.src==3' src='@/img/bg3.png' style='width:100%;height:100%'/>
    		    			<div>
    		    				<h3>{{item.name}}</h3>
    		    				<p>{{item.des}}</p>
    		    				<el-button @click='goabout'>{{item.btn}}</el-button>
    		    			</div>
    		    		</div>
        		    </el-carousel-item>
    		    </el-carousel>
    		</template>
    	 </div>
    </div>
</template>

<script>
    import tabPane from './components/tabPane'
    import { mapMutations } from 'vuex'
    export default {
        name: 'tab',
        components: { tabPane },
        data() {
            return {
                navList: [],
                tabMapOptions: [
                    { key: 'CN', index:'1', icon:'basice', className:'basicecls' },
                    { key: 'US', index:'2', icon:'dev', className:'devcls' },
                    { key: 'JP', index:'3', icon:'sdk', className:'sdkcls' },
                    { key: 'EU', index:'4', icon:'server', className:'servercls' }
                ],
                tabImgList: [
                  	{name: '应用商店', des:'统一，开放，共享', btn:'了解更多',src:'1'},
                  	{name: '共享', des:'为软件开发人员或团队提供中间件、微服务、开发组件包等开发资源服务目录', btn:'了解更多',src:'2'},
                  	{name: '生态', des:'为第三方服务提供产品的上架审核及服务计量机制，支持其产品在线运营。', btn:'了解更多',src:'3'}
                ],
                activeName: '',
                createdTimes: 0,
                hovered: true,
                type: 2
            }
        },
        created() {
            this.getInitCategory();
        },
        methods: {
        	...mapMutations(['SET_APPTYPE','SET_BUSTYPE']),

            showCreatedTimes() {
                this.createdTimes = this.createdTimes + 1
            },
            check(parent) {
    			this.hovered = false;
	    		this.activeName = parent;
	    		this.SET_APPTYPE(parent);
                this.type = parent;
            },
            back(){
        			this.hovered = true;
            },
            golink(){
            		this.SET_APPTYPE('');
    				this.SET_BUSTYPE('');
        			this.$router.push('/appallstore');
            },
            goabout() {
            		this.$router.push('/aboutstore');
            },
            getInitCategory() {
                let params = {
                    parentId: 1,
                    deep: 1
                }
                this.axios.get("/category/list", { params: params })
                    .then(response => {
                        if (response.data) {
                            this.navList = response.data.sort(this.compare("sort"));
                            this.SET_APPTYPE(response.data[0].id);
                        }
                    })
            },
            compare(property) {
                return (obj1,obj2) => {
                    var value1 = obj1[property];
                    var value2 = obj2[property];
                    return value1 - value2;
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scope>
	$basicecls1: rgba(54,179,126,.5);
	$basicecls2: rgba(54,179,126,1);
	$devcls1: rgba(237,59,58,.5);
	$devcls2: rgba(237,59,58,1);
	$sdkcls1: rgba(239,108,2,.5);
	$sdkcls2: rgba(239,108,2,1);
	$servercls1: rgba(101,84,192,.5);
	$servercls2: rgba(101,84,192,1);
  .tab-container{
    margin: 0px;
    height: 344px;
    margin-top: 20px;
    position: relative;
    background: #fff;
    .tab-bg {
    		position: absolute;
    		width: calc(100% - 220px);
    		top: 0;
    		margin-left: 220px;
    		height: 100%;
    		.el-carousel {
    			height: 100%;
    			.el-carousel__container {
    				height: 100%;
    				.imgcont {
    					position: relative;
    					height: 100%;
    					&>div {
    						position: absolute;
    						top: 20%;
    						left: 9%;
    						color: #fff;
    						h3 {
    							font-size: 36px;
    							margin-bottom: 20px;
    						}
    						p {
    							font-size: 18px;
    							width: 320px;
    							margin-bottom: 20px;
    						}
    						.el-button {
    							background: none;
    							color: #fff;
    						}
    					}
    				}
    			}
    			.el-carousel__indicators {
    				bottom: 18px;
    			}
    			.el-carousel__button {
    				border-radius: 50%;
    				width: 10px;
    				background: none;
    				border: 2px solid #fff;
    				opacity: .48;
    				height: 10px;
    				
    			}
    			.is-active .el-carousel__button {
    				opacity: 1;
    			}
    		}
    }
    .el-tabs--left.el-tabs--card .el-tabs__item {
    		height: 86px;
    		width: 200px;
    		line-height: 86px;
    		text-align: center;
    		font-size: 18px;
            font-weight: normal;
    		padding: 0;
            svg {
                font-size: 24px;
                padding-top:5px;
            }
            span {
                display: inline-block;
                width: 70px;
                font-weight: normal;
            }
    		.basicecls {
    			border-left: 5px solid $basicecls1;
    		}
    		.devcls {   			
    			border-left: 5px solid $devcls1;
    		}
    		.servercls {
    			border-left: 5px solid $servercls1;
    		}
    		.sdkcls { 
    			border-left: 5px solid $sdkcls1;    			
    		}
    		&.is-active {
    			-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    			.basicecls {
	    			border-left: 5px solid $basicecls2;
	    			color: $basicecls2;
	    		}
	    		.devcls {   			
	    			border-left: 5px solid $devcls2;
	    			color: $devcls2;
	    		}
	    		.servercls {
	    			border-left: 5px solid $servercls2;
	    			color: $servercls2;
	    		}
	    		.sdkcls { 
	    			border-left: 5px solid $sdkcls2;    		
	    			color: $sdkcls2;
	    		}
    		}
    }
    .el-tabs__header {
    		margin-right: 0!important;
    }
    .el-tabs__content {
    		border: 1px solid #e4e7ed;
    }
  }
</style>
