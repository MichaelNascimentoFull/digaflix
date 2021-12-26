<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3 d-flex justify-content-between">
        Filme
        <button
          class="btn btn-auth"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Cadastar filme"
          @click="modal.show()"
        >
          <i class="fas fa-upload"></i>
        </button>
      </div>
      <div class="card-body row g-2">
        <div
          class="col-12 col-sm-6"
          v-for="(movie, index) in movies"
          :key="index"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ movie.name }}</h5>
              <p class="card-text">filmer</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">{{
                movie.file + " - " + movie.size + " mb"
              }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" ref="exampleModal" tabindex="-2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">
              {{ "Salvar Filme" }}
            </h4>
            <button
              type="button"
              class="btn-close"
              @click="modal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="nameMovie" class="form-label">Nome</label>
                <input
                  type="texr"
                  v-model="fileMovie.name"
                  class="form-control"
                  id="nameMovie"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="nameMovie" class="form-label">Filme</label>
                <input
                  type="file"
                  class="form-control"
                  id="nameMovie"
                  accept="video/mp4,video/x-m4v,video/*"
                  @change="selectFile"
                />
              </div>
              <div class="mb-3">
                <label for="tagMovie" class="form-label">Tags</label>
                <multiselect
                  id="tagMovie"
                  v-model="fileMovie.tags"
                  :options="fileMovie.tags"
                  :searchable="true"
                  :close-on-select="false"
                  :show-labels="false"
                  placeholder="Digite as tags"
                  :taggable="true"
                  @tag="addTag"
                  :multiple="true"
                  tag-placeholder="Adicionar tag"
                  @open="changeMsgEmpty"
                >
                  <template slot="noResult">
                    <span>no result found.</span>
                  </template>
                </multiselect>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="modal.hide()"
            >
              Fechar
            </button>
            <button type="button" class="btn btn-primary" @click="saveMovie">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tooltip, Modal } from "bootstrap";
export default {
  data: () => ({
    loading: false,
    modal: null,
    fileMovie: { name: "", file: "", size: "", movie: "", tags: [] },
    tags: [],
  }),
  computed: {
    movies() {
      return [
        { name: "vigadores", file: "avagers", size: "5" },
        { name: "Homem Aranha", file: "avagers", size: "5" },
      ];
    },
    validateMovie() {
      return true;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  },
  created() {
    this.getMovies();
  },
  methods: {
    selectFile(event) {
      this.fileMovie.movie = event.target.files[0];
    },
    getMovies() {
      this.loading = true;
      this.$store
        .dispatch("Movie/getMovies")
        .then(() => {
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
        });
    },
    saveMovie() {
      this.loading = true;
      if (!this.validateMovie()) {
        this.loading = false;
        return;
      }
      this.$store
        .dispatch("Movie/saveMovie", this.fileMovie)
        .then(() => {
          this.loading = false;
          this.$eventBus.$emit(
            "newMessage",
            "Filme",
            "Cadastro de filme realizado com sucesso",
            "success"
          );
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
        });
    },
    editMovie(movieEdited) {
      this.loading = true;
      if (!this.validateMovie()) {
        this.loading = false;
        return;
      }
      this.$store
        .dispatch("Movie/editMovie", movieEdited)
        .then(() => {
          this.loading = false;
          this.$eventBus.$emit(
            "newMessage",
            "Filme",
            "Filme atualizado com sucesso",
            "success"
          );
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
        });
    },
    deleteMovie(id) {
      this.loading = true;
      this.$store
        .dispatch("Movie/deleteMovie", id)
        .then(() => {
          this.loading = false;
          this.$eventBus.$emit(
            "newMessage",
            "Filme",
            "Filme deletado com sucesso",
            "success"
          );
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
        });
    },
    addTag(newTag) {
      console.log(newTag);
      this.fileMovie.tags.push(newTag);
    },
    changeMsgEmpty() {
      if (this.fileMovie.tags.length == 0) {
        var x = document.getElementsByClassName("multiselect__option");
        for (var i = 0; i < x.length; i++) {
          x[i].innerText = "Sem tags!";
        }
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>