<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3">Cadastrar nova senha</div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              :style="! validatePassword && EnableValidation ? 'border:1px solid red' : ''"
              v-model="newPassword.password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <template v-if="! validatePassword && EnableValidation">
              <small>Senha tem que ter 6 ou mais caracteres</small>
            </template>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Confirmação de Senha</label
            >
            <input
              type="password"
              :style="! validatePasswordConfirmation && EnableValidation ? 'border:1px solid red' : ''"
              v-model="newPassword.password_confirmation"
              class="form-control"
              id="exampleInputPassword2"
            />
            <template v-if="! validatePasswordConfirmation && EnableValidation">
              <small>Confirmação de senha diferente da senha</small>
            </template>
          </div>

          <div class="d-flex flex-row-reverse">
            <button
              class="btn btn-auth mt-3"
              @click.prevent="resetPassword()"
              :disabled="loading"
            >
              <template v-if="!loading"> Enviar </template>
              <template v-else>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Enviando...
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
    newPassword: {
      password: "",
      password_confirmation: "",
    },
    loading: false,
    EnableValidation: false,
  }),
  computed: {
    validatePassword() {
      if (this.newPassword.password.length >= 6) {
        return true;
      }
      return false;
    },
    validatePasswordConfirmation() {
      if (this.newPassword.password == this.newPassword.password_confirmation) {
        return true;
      }
      return false;
    },
  },

  methods: {
    validation() {
      var valid = true;
      if (!this.validatePassword) valid = false;
      if (!this.validatePasswordConfirmation) valid = false;
      return valid;
    },
    resetPassword() {
      this.EnableValidation = true;
      this.loading = true;
      if (!this.validation()) {
        this.loading = false;
        return;
      }
      this.$eventBus.$emit(
        "newMessage",
        "Nova senha",
        "Senha atualizada com sucesso",
        "success"
      );
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