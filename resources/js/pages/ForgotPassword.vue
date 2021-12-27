<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3">Esqueceu a senha?</div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Digite seu email para recuperar a senha
            </label>
            <input
              type="email"
              :style="
                !validateEmail && EnableValidation ? 'border:1px solid red' : ''
              "
              v-model="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
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
    email: "",
    loading: false,
    EnableValidation: false,
  }),
  computed: {
    validateEmail() {
      if (this.email.length >= 3 && this.email.includes("@")) {
        return true;
      }
      return false;
    },
  },

  methods: {
    validation() {
      var valid = true;
      if (!this.validateEmail) valid = false;
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
        .dispatch("Auth/sendReset", this.email)
        .then((res) => {
          this.loading = false;
          this.$eventBus.$emit(
            "newMessage",
            "Nova senha",
            "Email para nova senha foi enviado",
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
</style>>