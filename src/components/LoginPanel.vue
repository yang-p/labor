<template>
    <div class="login-panel">
        <el-form 
        :model="form"
        :rules="rules"
        :label-width="labelWidth"
        :label-position="labelPosition">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%">登录</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>
export default {
    name: "LoginPanel",
    data() {
        return {
            form: {
                name: '',
                password: '',
            },
            labelPosition: 'right',
            labelWidth: '60px',
            rules: {
                userName: [

                ]
            }
        }
    }

}
</script>
<style lang="less" scoped>
    .login-panel {
        padding: 40px 60px 40px 40px;
        width: 400px;
        border: 1px solid #ccc;
        margin: 100px auto;
        background-color: #f5f5f5;
    }
</style>

