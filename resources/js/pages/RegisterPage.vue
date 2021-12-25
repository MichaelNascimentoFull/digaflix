<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3">Cadastrar</div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Nome </label>
            <input
              type="text"
              :style="! validateName && EnableValidation ? 'border:1px solid red' : ''"
              v-model="newUser.name"
              class="form-control"
              id="exampleInputName1"
            Name/>
            <template v-if="! validateName && EnableValidation">
              <small>Campo nome deve pelo menos 3 letras.</small>
            </template>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email </label>
            <input
              type="email"
              :style="! validateEmail && EnableValidation ? 'border:1px solid red' : ''"
              v-model="newUser.email"
              class="form-control"
              id="exampleInputEmail1"
            />
            <template v-if="! validateEmail && EnableValidation">
              <small>Email não é valido</small>
            </template>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              :style="! validatePassword && EnableValidation ? 'border:1px solid red' : ''"
              v-model="newUser.password"
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
              v-model="newUser.password_confirmation"
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
              @click.prevent="register()"
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
    newUser: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    loading: false,
    EnableValidation: false,
  }),
  computed: {
    validateName() {
      if (this.newUser.name.length >= 3) {
        return true;
      }
      return false;
    },
    validateEmail() {
      if (this.newUser.email.length >= 3 && this.newUser.email.includes("@")) {
        return true;
      }
      return false;
    },
    validatePassword() {
      if (this.newUser.password.length >= 6) {
        return true;
      }
      return false;
    },
    validatePasswordConfirmation() {
      if (this.newUser.password == this.newUser.password_confirmation) {
        return true;
      }
      return false;
    },
  },

  methods: {
    validation() {
      var valid = true;
      if (!this.validateName) valid = false;
      if (!this.validateEmail) valid = false;
      if (!this.validatePassword) valid = false;
      if (!this.validatePasswordConfirmation) valid = false;
      return valid;
    },
    register() {
      this.EnableValidation = true;
      this.loading = true;
      if (!this.validation()) {
        this.loading = false;
        return;
      }
      this.$eventBus.$emit(
        "newMessage",
        "Cadastro",
        "Cadastro realizado, verifique seu email",
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