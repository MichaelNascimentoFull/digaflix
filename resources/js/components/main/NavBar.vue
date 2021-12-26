<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Digaflix</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Início</a>
          </li>
          <router-link to="/movies" v-if="logged">
            <a class="nav-link active" aria-current="page" href="#">Filmes</a>
          </router-link>
        </ul>
        <form class="d-flex" v-if="!logged">
          <router-link to="/login">
            <button class="btn btn-auth">Logar</button>
          </router-link>
          <router-link to="/register">
            <button class="btn btn-auth ms-2 ps-2">Registrar</button>
          </router-link>
        </form>
        <ul class="navbar-nav" v-else>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user.name }}
            </a>
            <ul
              class="dropdown-menu dropdown-menu-lg-end"
              aria-labelledby="navbarDropdown"
            >
              <li><a class="dropdown-item" @click="logout" href="#">Sair</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
  }),
  computed:{
    logged(){return this.$store.state.Auth.loggedIn},
    user(){return this.$store.state.Auth.user.user},
  },
  methods:{
    logout(){
        this.$store.dispatch('Auth/logout')
        .then(()=>{
          this.loading=false
          this.$router.push({
            name: 'Login', 
          })
          this.$eventBus.$emit(
            "newMessage",
            "Logout",
            "Logout realizado com sucesso",
            "success"
          );
        })
        .catch(error => {
          this.loading=false; 
          this.$eventBus.$emit(
            "newMessage",
            "Logout",
            "Erro",
            "danger"
          );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #81a6b5;
}
a {
    text-decoration: none;
}
</style>