<template>
  <div class="text-center">
    <AuthenticateForm
      title="Sign in"
      okButtonLable="Sign in"
      @on-submit="submiting"
    >
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
    </AuthenticateForm>
  </div>
</template>

<script>
import AuthenticateForm from "../components/AuthenticateForm";
export default {
  name: "Login",
  components: {
    AuthenticateForm,
  },
  methods: {
    submiting(username, password) {
      console.log("username", username);
      console.log("password", password);
    },
  },
};
</script>

<style lang="css">
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.text-center {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
