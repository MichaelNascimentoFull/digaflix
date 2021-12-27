<template>
  <div class="container mt-sm-5">
    <div class="card text-left">
      <div class="card-header h3 d-flex justify-content-between">
        <div>
          Filme
          <button
            class="btn"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Ordenar"
            @click="orderBy"
          >
            <i v-show="typeOrder == 'asc'" class="fas fa-sort-alpha-up"></i>
            <i v-show="typeOrder == 'desc'" class="fas fa-sort-alpha-down"></i>
          </button>
        </div>
        <button
          class="btn btn-auth"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Cadastar filme"
          @click="
            resetMovie();
            modal.show();
          "
        >
          <i class="fas fa-upload"></i>
        </button>
      </div>
      <div class="card-body row g-2">
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3"
          v-for="(movie, index) in movies"
          :key="index"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ "Nome : " + movie.name }}</h5>
              <p class="card-text">
                Tags :
                <span
                  class="badge rounded-pill bg-secondary me-1"
                  v-for="(tags, ind) in movie.tagsmovies"
                  :key="ind"
                  >{{ tags.tag.name }}</span
                >
              </p>
              <div class="d-flex justify-content-end">
                <button
                  class="btn btn-secondary me-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Editar filme"
                  @click="
                    editedMovie(movie);
                    modal.show();
                  "
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  class="btn btn-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Deletar filme"
                  @click="deleteMovie(movie.id)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div class="card-footer">
              <small class="text-muted">{{
                movie.file +
                " | " +
                (parseInt(movie.size) / 1000000).toFixed(2) +
                " mb"
              }}</small>
            </div>
          </div>
        </div>
        <template v-if="movies.length == 0 && loading">
          <div class="d-flex justify-content-center">
            <span
              class="spinner-border spinner-border-lg"
              role="status"
              aria-hidden="true"
            ></span>
            Carregando...
          </div>
        </template>
        <template v-else-if="movies.length == 0 && !loading">
          <div class="d-flex justify-content-center">
            <h5>Sem Filmes Cadastrados</h5>
          </div>
        </template>
      </div>
    </div>
    
    <!-- MODAL -->
    <div class="modal fade" ref="exampleModal" tabindex="-2" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">
              {{'id' in fileMovie?'Editar Filme': 'Salvar Filme' }}
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
              <div class="mb-3" v-if="! ('id' in fileMovie)">
                <label for="nameMovie" class="form-label">Filme</label>
                <input
                  type="file"
                  class="form-control"
                  id="nameMovie"
                  accept="video/mp4,video/x-m4v,video/*"
                  @change="selectFile"
                />
              </div>
              <div class="mb-3" v-else>
                Arquivo | Tamanho: <br>
                {{
                  fileMovie.file +
                  " | " +
                  (parseInt(fileMovie.size) / 1000000).toFixed(2) +
                  " mb"
                }}
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
                  @remove="removeTag"
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
            <button v-if="! ('id' in fileMovie)" type="button" class="btn btn-primary" @click="saveMovie">
              Salvar
            </button>
            <button v-else type="button" class="btn btn-primary" @click="editMovie(fileMovie)">
              Atualizar
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
    typeOrder: "asc",
  }),
  computed: {
    movies() {
      return this.$store.state.Movie.movies;
    },
    validateMovie() {
      return true;
    },
  },
  mounted() {
    this.loadTooltips();
  },
  created() {
    this.getMovies();
  },
  methods: {
    editedMovie(movie) {
      //Função de preparo do filme pra modal de edição
      this.fileMovie =  Object.assign({}, movie);
      var tags = this.fileMovie.tagsmovies.map(function(val){
        return val.tag.name
      })
      this.fileMovie.tags = tags
    },
    resetMovie() {
      console.log('foi')
      this.fileMovie = { name: "", file: "", size: "", movie: "", tags: [] };
    },
    loadTooltips() {
      this.modal = new Modal(this.$refs.exampleModal);
      Array.from(
        document.querySelectorAll('button[data-bs-toggle="tooltip"]')
      ).forEach((tooltipNode) => new Tooltip(tooltipNode));
    },
    selectFile(event) {
      this.fileMovie.movie = event.target.files[0];
    },
    getMovies() {
      this.loading = true;
      this.$store
        .dispatch("Movie/getMovies", this.typeOrder)
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
      if (!this.validateMovie) {
        this.loading = false;
        return;
      }
      console.log(this.fileMovie);
      console.log(this.fileMovie.movie.name);
      this.fileMovie.file = this.fileMovie.movie.name;
      this.fileMovie.size = this.fileMovie.movie.size;
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
          this.loadTooltips
        })
        .catch((error) => {
          this.loading = false;
          this.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
          this.loadTooltips
        });
    },
    editMovie(movieEdited) {
      this.loading = true;
      if (!this.validateMovie) {
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
        this.fileMovie.tags.push(newTag);
      },
      removeTag(tag) {
        console.log(tag)
        var index = this.fileMovie.tags.findIndex(o=> o==tag)
        console.log(index)
        this.fileMovie.tags.splice(index,1);
         this.$forceUpdate();
      },
    changeMsgEmpty() {
      if (this.fileMovie.tags.length == 0) {
        var x = document.getElementsByClassName("multiselect__option");
        for (var i = 0; i < x.length; i++) {
          x[i].innerText = "Sem tags!";
        }
      }
    },
    orderBy() {
      console.log("asc", this.typeOrder);
      if (this.typeOrder == "asc") {
        this.typeOrder = "desc";
        this.getMovies();
      } else {
        this.typeOrder = "asc";
        this.getMovies();
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>