<template>
    <div class="page-header">       
        <div class="page-header__wrapper">
            <el-menu 
                default-active="1"
                mode="horizontal"
                background-color="#fff"
                active-text-color = '#008de1'
                text-color="#333"
                class="page-header__nav">
                <el-menu-item index="1">
                    <router-link to="/">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/">项目库</router-link>                         
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/">企业库</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/">人员库</router-link>
                </el-menu-item>
                <el-submenu index="5">
                    <template slot="title">                                                             
                        <span slot="title">黑名单库</span>
                    </template>
                    <el-menu-item index="5-1">
                        <router-link to="/">企业黑名单</router-link>
                    </el-menu-item>
                    <el-menu-item index="5-2">
                        <router-link to="/">人员黑名单</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="6">
                    <router-link to="/">统计分析</router-link>
                </el-menu-item>
                <el-submenu index="7">
                    <template slot="title">系统管理</template>
                    
                        <el-menu-item index="7-1">
                        <router-link to="/">组织结构</router-link>
                        </el-menu-item>
                    <el-menu-item index="7-2">
                        <router-link to="/">用户管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="7-3">
                        <router-link to="/">我的账号</router-link>
                    </el-menu-item>                           
                </el-submenu>
                <el-menu-item index="8">
                    <router-link to="/">企业信息</router-link>
                </el-menu-item>
            </el-menu>        
            <div class="page-header__search">
                <el-autocomplete
                placeholder="请输入项目名称"
                ></el-autocomplete>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "PageHeader",
    data() {
        return {

        }
    },

}
</script>
<style lang="less" scoped>
    .page-header {

        background-color: #fff;
        padding: 0 100px; 
        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;       
            height: 60PX;  
        }
        &__nav {
            font-size: 18px;
        }
        &__search {
            width: 180px;
            height: 40px;
        }
    }
</style>

