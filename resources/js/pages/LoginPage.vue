<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3">Login</div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email </label>
            <input
              type="email"
              :style="
                !validateEmail && EnableValidation ? 'border:1px solid red' : ''
              "
              v-model="user.email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <template v-if="!validateEmail && EnableValidation">
              <small>Email não é valido</small>
            </template>
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              :style="
                !validatePassword && EnableValidation
                  ? 'border:1px solid red'
                  : ''
              "
              v-model="user.password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <template v-if="!validatePassword && EnableValidation">
              <small>Senha tem que ter 6 ou mais caracteres</small>
            </template>
          </div>
          <div class="mb-3">
            <router-link to="/forgotPassword"> Esqueceu a senha?</router-link>
          </div>
          <div class="d-flex flex-row-reverse">
            <button
              class="btn btn-auth mt-3"
              @click.prevent="login()"
              :disabled="loading"
            >
              <template v-if="!loading"> Entrar </template>
              <template v-else>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Entrando...
              </template>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: "",
      password: "",
    },
    loading: false,
    EnableValidation: false,
  }),
  computed: {
    validateEmail() {
      if (this.user.email.length >= 3 && this.user.email.includes("@")) {
        return true;
      }
      return false;
    },
    validatePassword() {
      if (this.user.password.length >= 6) {
        return true;
      }
      return false;
    },
  },

  methods: {
    validation() {
      var valid = true;
      if (!this.validateEmail) valid = false;
      if (!this.validatePassword) valid = false;
      return valid;
    },
    login() {
      this.EnableValidation = true;
      this.loading = true;
      if (!this.validation()) {
        this.loading = false;
        return;
      }
      this.$store
        .dispatch("Auth/login", this.user)
        .then((res) => {
          this.loading = false;
          this.$router.push({
            name: "MoviesPage",
          });
          this.$eventBus.$emit(
            "newMessage",
            "Login",
            "Login realizado com sucesso",
            "success"
          );
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit(
            "newMessage",
            "Login",
            error.response.data.error,
            "danger"
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  max-width: 600px;
}
</style>