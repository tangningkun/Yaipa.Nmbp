    
<template>
  <div class="main">
    <div class="main-content">
      <img src="../../assets/img/logo.png" />
      <form role="form" class="main-content-form">
        <div class="input-group main-content-input">
          <span class="input-group-addon" id="basic-username">用户名</span>
          <input
            type="text"
            class="form-control"
            name="username"
            id="username"
            placeholder="请输入用户名"
            aria-describedby="basic-username"
          />
        </div>
        <div class="input-group main-content-input">
          <span class="input-group-addon" id="basic-password">密码</span>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="请输入密码"
            aria-describedby="basic-password"
          />
        </div>
        <div class="input-group main-content-input">
          <span class="input-group-addon" id="basic-password">确认密码</span>
          <input
            type="password"
            class="form-control"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="请输入确认密码"
            aria-describedby="basic-password"
          />
        </div>
        <div class="main-content-input">
          <button type="button" id="btn-submit" class="btn btn-danger">注册</button>
        </div>
      </form>
      <hr />
      <div>
        <a href="javascript:;" @click="gotoPage('login')" class="main-content-login">
          <span>已有账号？去登录</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script src="./register.component.js">
</script>


<style src="./register.scss" lang="scss" scoped></style>