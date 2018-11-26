<template>
    <div class="page-top">
        <div class="page-top__sign">
            <h1 class="page-top__sign__logo">零起点科技</h1>
        </div>

        <el-dropdown trigger="click" class="page-top__user-info" v-show="isLogin">
            <span class="el-dropdown-link page-top__user-info__avatar"></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link to="">我的账号</router-link></el-dropdown-item>
                <el-dropdown-item><router-link to=""></router-link></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
export default {
    name: 'pageTop',
    props: {
        isLogin: Boolean
    },

}
</script>
<style lang="less" scoped>
.page-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    &__sign {
        &__logo {
            display: inline-block;
            width: 180px;
            padding-top: 40px;
            height: 0;
            background-image: url(../assets/images/logo.png);
            background-repeat: no-repeat;
            background-position: center center;
            overflow: hidden;
        }
    }
    &__user-info {
        &__avatar {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-image: url(../assets/images/avatar.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100%;
        }
    }
}
</style>


