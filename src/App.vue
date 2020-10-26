<template>
  <div>
    <Login />
    <ChangePassword v-if="['user/username']" />
  </div>
</template>

<script>
import Login from "./views/Login";
import ChangePassword from "./views/ChangePassword";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user/username"]),
  },
  components: {
    Login,
    ChangePassword,
  },
};
</script>

<style></style>
