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
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <router-link to="/forgotpassword"> Esqueceu a senha?</router-link>
          </div>
          <div class="d-flex flex-row-reverse">
            <button class="btn btn-auth">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  max-width: 600px;
}
</style>>