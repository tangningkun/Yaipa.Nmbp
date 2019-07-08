<template>
  <div class="main">
    <div class="main-content">
      <img src="../../assets/img/logo.png" />
      <!-- <span class="main-content-span">yapai.nmbp.ui</span> -->
      <el-form
        role="form"
        class="main-content-form"
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div class="input-group main-content-input">
          <span class="input-group-addon" id="basic-username">
            <i class="el-icon-place">&nbsp;&nbsp;|&nbsp;&nbsp;UserName</i>
          </span>
          <input
            type="text"
            class="form-control"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            aria-describedby="basic-username"
            autocomplete="on"
          />
        </div>
        <div class="input-group main-content-input">
          <span class="input-group-addon" id="basic-password">
            <i class="el-icon-lock">&nbsp;&nbsp;|&nbsp;&nbsp;PassWord</i>
          </span>
          <input
            type="password"
            class="form-control"
            v-model="loginForm.password"
            placeholder="请输入密码"
            aria-describedby="basic-password"
            autocomplete="on"
          />
        </div>
        <div class="main-content-input">
          <button type="button" id="btn-submit" class="btn btn-danger" @click="gotoPage('home')">登录</button>
        </div>
      </el-form>
      <hr />
      <div>
        <a href="javascript:;" @click="gotoPage('changeps')" class="main-content-revise">
          <span>忘记密码？去修改</span>
        </a>
        <a href="javascript:;" @click="gotoPage('register')" class="main-content-register">
          <span>
            没有账号？去注册
            <i class="el-icon-right"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script src="./login.component.js">
</script>


<style src="./login.scss" lang="scss" scoped></style>


