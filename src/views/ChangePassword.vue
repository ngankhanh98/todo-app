<template>
  <div class="text-center">
    <AuthenticateForm
      title="Change password"
      okButtonLable="Change password"
      :username="usern/username"
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

import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user/username"]),
  },
  name: "ChangePassword",
  components: {
    AuthenticateForm,
  },
  methods: {
    submiting(username, password) {
      this.$store.dispatch("user/changePassword", password);
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
