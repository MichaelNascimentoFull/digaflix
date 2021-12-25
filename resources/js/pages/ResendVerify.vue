<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3">Verifique seu email</div>
      <div class="card-body">
        Um email de verificação de email foi enviado para seu email, caso não
        tenha recebido clique <a href="#" @click="sendVerifyEmail">aqui</a> para reenviar
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendVerifyEmail() {
      this.$store
        .dispatch("Auth/sendVerifyEmail", this.$route.params.userEmail)
        .then(() => {
          this.loading = false;
          this.$eventBus.$emit(
            "newMessage",
            "Email",
            "Um novo email foi enviado, verifique seu email",
            "success"
          );
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit("newMessage", "Email", "Erro", "danger");
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