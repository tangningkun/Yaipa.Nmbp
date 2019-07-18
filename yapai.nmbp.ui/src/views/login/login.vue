<template>
  <div class="main">
    <div class="main-content">
      <div class="main-content-left">
        <div class="main-content-left-content">
          <div class="main-content-left-image">
            <img src="../../assets/img/login-img/u17.png" />
          </div>
          <div class="main-content-left-title">
            <p>
              <span>内蒙煤矿</span>
            </p>
            <p>
              <span>边坡监测系统</span>
            </p>
          </div>
        </div>
      </div>
      <div class="main-content-right">
        <p>
          <span>登录</span>
        </p>
        <el-form ref="form" :model="formInfo.data" :rules="formInfo.rules" class="login-form">
          <el-form-item prop="account">
            <el-input
              v-model.trim="formInfo.data.account"
              type="text"
              prefix-icon="el-icon-user"
              placeholder="请输入账号"
              @keyup.enter.native="handleLogin()"
              class="login-input"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="formInfo.data.password"
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              @keyup.enter.native="handleLogin()"
              class="login-input"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-bt" @click="handleLogin()">登录</el-button>
          </el-form-item>
          <div class="remember">
            <el-checkbox v-model="formInfo.remember" class="login-checkbox">记住密码</el-checkbox>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script src="./login.component.js">
</script>



<style src="./login.scss" lang="scss"></style>
<!--scss加入 scoped elementui部分样式不能正常显示-->


