<template>
  <form class="form-signin">
    <h1><i class="fas fa-check-double text-danger font-"></i></h1>
    <h1 class="h3 mb-3 font-weight-normal">{{ title }}</h1>
    <label for="inputUsername" class="sr-only">Username</label>
    <input
      type="text"
      id="inputUsername"
      class="form-control"
      :placeholder="username"
      v-model="inputUsername"
      required
      autofocus
      v-bind:class="{ username: readonly }"
    />

    <label for="inputPassword" class="sr-only">Password</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required
      v-model="inputPassword"
    />
    <slot></slot>
    <button
      class="btn btn-lg btn-primary btn-block"
      type="button"
      id="ok-button"
      @click="onSubmit"
    >
      {{ okButtonLable }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    title: { type: String },
    username: { type: String },
    okButtonLable: { type: String },
  },
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("on-submit", this.inputUsername, this.inputPassword);
    },
  },
};
</script>

<style lang="css" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
