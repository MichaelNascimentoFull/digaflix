<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3">Esqueceu a senha?</div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Digite seu email para recuperar a senha </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="d-flex flex-row-reverse">
            <button class="btn btn-auth">Enviar email</button>
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