"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_MoviesPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/MoviesPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/MoviesPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      modal: null,
      fileMovie: {
        name: "",
        file: "",
        size: "",
        movie: "",
        tags: []
      },
      tags: [],
      typeOrder: "asc",
      movieAlert: false
    };
  },
  computed: {
    movies: function movies() {
      return this.$store.state.Movie.movies;
    }
  },
  mounted: function mounted() {
    this.loadTooltips();
  },
  created: function created() {
    this.getMovies();
  },
  methods: {
    editedMovie: function editedMovie(movie) {
      //Função de preparo do filme pra modal de edição
      this.fileMovie = Object.assign({}, movie);
      var tags = this.fileMovie.tagsmovies.map(function (val) {
        return val.tag.name;
      });
      this.fileMovie.tags = tags;
    },
    resetMovie: function resetMovie() {
      this.fileMovie = {
        name: "",
        file: "",
        size: "",
        movie: "",
        tags: []
      };
      this.movieAlert = false;
      this.$forceUpdate();
    },
    loadTooltips: function loadTooltips() {
      this.modal = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal(this.$refs.exampleModal);
      Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]')).forEach(function (tooltipNode) {
        return new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Tooltip(tooltipNode);
      });
    },
    selectFile: function selectFile(event) {
      this.fileMovie.movie = event.target.files[0];
      this.validateMovie();
    },
    getMovies: function getMovies() {
      var _this = this;

      this.loading = true;
      this.$store.dispatch("Movie/getMovies", this.typeOrder).then(function () {
        _this.loading = false;
      })["catch"](function (error) {
        _this.loading = false;

        _this.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
      });
    },
    saveMovie: function saveMovie() {
      var _this2 = this;

      this.loading = true;

      if (!this.validateMovie()) {
        this.loading = false;
        return;
      }

      console.log(this.fileMovie);
      console.log(this.fileMovie.movie.name);
      this.fileMovie.file = this.fileMovie.movie.name;
      this.fileMovie.size = this.fileMovie.movie.size;
      this.$store.dispatch("Movie/saveMovie", this.fileMovie).then(function () {
        _this2.loading = false;

        _this2.$eventBus.$emit("newMessage", "Filme", "Cadastro de filme realizado com sucesso", "success");

        _this2.loadTooltips;

        _this2.modal.hide();
      })["catch"](function (error) {
        _this2.loading = false;

        _this2.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");

        _this2.loadTooltips;
      });
    },
    editMovie: function editMovie(movieEdited) {
      var _this3 = this;

      this.loading = true;
      this.$store.dispatch("Movie/editMovie", movieEdited).then(function () {
        _this3.loading = false;

        _this3.$eventBus.$emit("newMessage", "Filme", "Filme atualizado com sucesso", "success");

        _this3.modal.hide();
      })["catch"](function (error) {
        _this3.loading = false;

        _this3.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
      });
    },
    deleteMovie: function deleteMovie(id) {
      var _this4 = this;

      if (confirm('Deseja deletar esse filme?')) {
        this.loading = true;
        this.$store.dispatch("Movie/deleteMovie", id).then(function () {
          _this4.loading = false;

          _this4.$eventBus.$emit("newMessage", "Filme", "Filme deletado com sucesso", "success");
        })["catch"](function (error) {
          _this4.loading = false;

          _this4.$eventBus.$emit("newMessage", "Filme", "Erro", "danger");
        });
      }
    },
    addTag: function addTag(newTag) {
      this.fileMovie.tags.push(newTag);
      this.$forceUpdate();
    },
    removeTag: function removeTag(tag) {
      console.log(tag);
      var index = this.fileMovie.tags.findIndex(function (o) {
        return o == tag;
      });
      console.log(index);
      this.fileMovie.tags.splice(index, 1);
      this.$forceUpdate();
    },
    changeMsgEmpty: function changeMsgEmpty() {
      if (this.fileMovie.tags.length == 0) {
        var x = document.getElementsByClassName("multiselect__option");

        for (var i = 0; i < x.length; i++) {
          x[i].innerText = "Sem tags!";
        }
      }
    },
    orderBy: function orderBy() {
      console.log("asc", this.typeOrder);

      if (this.typeOrder == "asc") {
        this.typeOrder = "desc";
        this.getMovies();
      } else {
        this.typeOrder = "asc";
        this.getMovies();
      }
    },
    validateMovie: function validateMovie() {
      if (this.fileMovie.movie == '') {
        return false;
      }

      if (this.fileMovie.movie.size > 5000000) {
        this.movieAlert = true;
        return false;
      }

      this.movieAlert = false;
      return true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/MoviesPage.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/MoviesPage.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MoviesPage_vue_vue_type_template_id_e24f248a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoviesPage.vue?vue&type=template&id=e24f248a& */ "./resources/js/pages/MoviesPage.vue?vue&type=template&id=e24f248a&");
/* harmony import */ var _MoviesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoviesPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/MoviesPage.vue?vue&type=script&lang=js&");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MoviesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoviesPage_vue_vue_type_template_id_e24f248a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MoviesPage_vue_vue_type_template_id_e24f248a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MoviesPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/MoviesPage.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/MoviesPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoviesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MoviesPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/MoviesPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoviesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/pages/MoviesPage.vue?vue&type=template&id=e24f248a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/MoviesPage.vue?vue&type=template&id=e24f248a& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoviesPage_vue_vue_type_template_id_e24f248a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoviesPage_vue_vue_type_template_id_e24f248a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoviesPage_vue_vue_type_template_id_e24f248a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MoviesPage.vue?vue&type=template&id=e24f248a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/MoviesPage.vue?vue&type=template&id=e24f248a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/MoviesPage.vue?vue&type=template&id=e24f248a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/MoviesPage.vue?vue&type=template&id=e24f248a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-sm-5" }, [
    _c("div", { staticClass: "card text-left" }, [
      _c(
        "div",
        { staticClass: "card-header h3 d-flex justify-content-between" },
        [
          _c("div", [
            _vm._v("\n        Filme\n        "),
            _c(
              "button",
              {
                staticClass: "btn",
                attrs: {
                  "data-bs-toggle": "tooltip",
                  "data-bs-placement": "bottom",
                  title: "Ordenar",
                },
                on: { click: _vm.orderBy },
              },
              [
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.typeOrder == "asc",
                      expression: "typeOrder == 'asc'",
                    },
                  ],
                  staticClass: "fas fa-sort-alpha-up",
                }),
                _vm._v(" "),
                _c("i", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.typeOrder == "desc",
                      expression: "typeOrder == 'desc'",
                    },
                  ],
                  staticClass: "fas fa-sort-alpha-down",
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-auth",
              attrs: {
                "data-bs-toggle": "tooltip",
                "data-bs-placement": "bottom",
                title: "Cadastar filme",
              },
              on: {
                click: function ($event) {
                  _vm.resetMovie()
                  _vm.modal.show()
                },
              },
            },
            [_c("i", { staticClass: "fas fa-upload" })]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body row g-2" },
        [
          _vm._l(_vm.movies, function (movie, index) {
            return _c(
              "div",
              { key: index, staticClass: "col-12 col-sm-6 col-lg-4 col-xl-3" },
              [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v(_vm._s("Nome : " + movie.name)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "card-text" },
                      [
                        _vm._v("\n              Tags :\n              "),
                        _vm._l(movie.tagsmovies, function (tags, ind) {
                          return _c(
                            "span",
                            {
                              key: ind,
                              staticClass:
                                "badge rounded-pill bg-secondary me-1",
                            },
                            [_vm._v(_vm._s(tags.tag.name))]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex justify-content-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary me-1",
                          attrs: {
                            "data-bs-toggle": "tooltip",
                            "data-bs-placement": "bottom",
                            title: "Editar filme",
                          },
                          on: {
                            click: function ($event) {
                              _vm.editedMovie(movie)
                              _vm.modal.show()
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: {
                            "data-bs-toggle": "tooltip",
                            "data-bs-placement": "bottom",
                            title: "Deletar filme",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.deleteMovie(movie.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer" }, [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(
                        _vm._s(
                          movie.file +
                            " | " +
                            (parseInt(movie.size) / 1000000).toFixed(2) +
                            " mb"
                        )
                      ),
                    ]),
                  ]),
                ]),
              ]
            )
          }),
          _vm._v(" "),
          _vm.movies.length == 0 && _vm.loading
            ? [_vm._m(0)]
            : _vm.movies.length == 0 && !_vm.loading
            ? [_vm._m(1)]
            : _vm._e(),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "exampleModal",
        staticClass: "modal fade",
        attrs: { tabindex: "-2", "aria-hidden": "true" },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h4",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLabel" },
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        "id" in _vm.fileMovie ? "Editar Filme" : "Salvar Filme"
                      ) +
                      "\n          "
                  ),
                ]
              ),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close",
                attrs: { type: "button", "aria-label": "Close" },
                on: {
                  click: function ($event) {
                    return _vm.modal.hide()
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("form", [
                _c("div", { staticClass: "mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "nameMovie" } },
                    [_vm._v("Nome")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fileMovie.name,
                        expression: "fileMovie.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "texr",
                      id: "nameMovie",
                      "aria-describedby": "emailHelp",
                    },
                    domProps: { value: _vm.fileMovie.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fileMovie, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                !("id" in _vm.fileMovie)
                  ? _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "nameMovie" },
                          },
                          [_vm._v("Filme")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          style: _vm.movieAlert ? "border:1px solid red" : "",
                          attrs: {
                            type: "file",
                            id: "nameMovie",
                            accept: "video/mp4,video/x-m4v,video/*",
                          },
                          on: { change: _vm.selectFile },
                        }),
                        _vm._v(" "),
                        _vm.movieAlert
                          ? [
                              _c("small", [
                                _vm._v("Filme tem que ter 5mb no máximo"),
                              ]),
                            ]
                          : _vm._e(),
                      ],
                      2
                    )
                  : _c("div", { staticClass: "mb-3" }, [
                      _vm._v("\n              Arquivo | Tamanho: "),
                      _c("br"),
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.fileMovie.file +
                              " | " +
                              (parseInt(_vm.fileMovie.size) / 1000000).toFixed(
                                2
                              ) +
                              " mb"
                          ) +
                          "\n            "
                      ),
                    ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mb-3" },
                  [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "tagMovie" } },
                      [_vm._v("Tags")]
                    ),
                    _vm._v(" "),
                    _c(
                      "multiselect",
                      {
                        attrs: {
                          id: "tagMovie",
                          options: _vm.fileMovie.tags,
                          searchable: true,
                          "close-on-select": false,
                          "show-labels": false,
                          placeholder: "Digite as tags",
                          taggable: true,
                          multiple: true,
                          "tag-placeholder": "Adicionar tag",
                        },
                        on: {
                          tag: _vm.addTag,
                          open: _vm.changeMsgEmpty,
                          remove: _vm.removeTag,
                        },
                        model: {
                          value: _vm.fileMovie.tags,
                          callback: function ($$v) {
                            _vm.$set(_vm.fileMovie, "tags", $$v)
                          },
                          expression: "fileMovie.tags",
                        },
                      },
                      [
                        _c("template", { slot: "noResult" }, [
                          _c("span", [_vm._v("no result found.")]),
                        ]),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.modal.hide()
                    },
                  },
                },
                [_vm._v("\n            Fechar\n          ")]
              ),
              _vm._v(" "),
              !("id" in _vm.fileMovie)
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", disabled: _vm.movieAlert },
                      on: { click: _vm.saveMovie },
                    },
                    [_vm._v("\n            Salvar\n          ")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.editMovie(_vm.fileMovie)
                        },
                      },
                    },
                    [_vm._v("\n            Atualizar\n          ")]
                  ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("span", {
        staticClass: "spinner-border spinner-border-lg",
        attrs: { role: "status", "aria-hidden": "true" },
      }),
      _vm._v("\n          Carregando...\n        "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h5", [_vm._v("Sem Filmes Cadastrados")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);