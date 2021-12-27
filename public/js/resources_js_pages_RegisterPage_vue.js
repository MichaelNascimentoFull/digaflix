"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_RegisterPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      newUser: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      loading: false,
      EnableValidation: false
    };
  },
  computed: {
    validateName: function validateName() {
      if (this.newUser.name.length >= 3) {
        return true;
      }

      return false;
    },
    validateEmail: function validateEmail() {
      if (this.newUser.email.length >= 3 && this.newUser.email.includes("@")) {
        return true;
      }

      return false;
    },
    validatePassword: function validatePassword() {
      if (this.newUser.password.length >= 6) {
        return true;
      }

      return false;
    },
    validatePasswordConfirmation: function validatePasswordConfirmation() {
      if (this.newUser.password == this.newUser.password_confirmation) {
        return true;
      }

      return false;
    }
  },
  methods: {
    validation: function validation() {
      var valid = true;
      if (!this.validateName) valid = false;
      if (!this.validateEmail) valid = false;
      if (!this.validatePassword) valid = false;
      if (!this.validatePasswordConfirmation) valid = false;
      return valid;
    },
    register: function register() {
      var _this = this;

      this.EnableValidation = true;
      this.loading = true;

      if (!this.validation()) {
        this.loading = false;
        return;
      }

      this.$store.dispatch('Auth/register', this.newUser).then(function () {
        _this.loading = false;

        _this.$router.push({
          name: 'ResendVerify',
          params: {
            userEmail: _this.newUser.email
          }
        });

        _this.$eventBus.$emit("newMessage", "Cadastro", "Cadastro realizado, verifique seu email", "success");
      })["catch"](function (error) {
        _this.loading = false;

        _this.$eventBus.$emit("newMessage", "Cadastro", error.response.data, "danger");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container[data-v-036b264a] {\n  margin-top: 20px;\n  max-width: 600px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_style_index_0_id_036b264a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_style_index_0_id_036b264a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_style_index_0_id_036b264a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/RegisterPage.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/RegisterPage.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterPage_vue_vue_type_template_id_036b264a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=template&id=036b264a&scoped=true& */ "./resources/js/pages/RegisterPage.vue?vue&type=template&id=036b264a&scoped=true&");
/* harmony import */ var _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/RegisterPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _RegisterPage_vue_vue_type_style_index_0_id_036b264a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true& */ "./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterPage_vue_vue_type_template_id_036b264a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterPage_vue_vue_type_template_id_036b264a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "036b264a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/RegisterPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/RegisterPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/RegisterPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_style_index_0_id_036b264a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=style&index=0&id=036b264a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/RegisterPage.vue?vue&type=template&id=036b264a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/RegisterPage.vue?vue&type=template&id=036b264a&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_036b264a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_036b264a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_036b264a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=template&id=036b264a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=template&id=036b264a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=template&id=036b264a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterPage.vue?vue&type=template&id=036b264a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-header h3" }, [_vm._v("Cadastrar")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("form", [
          _c(
            "div",
            { staticClass: "mb-3" },
            [
              _c(
                "label",
                {
                  staticClass: "form-label",
                  attrs: { for: "exampleInputName" },
                },
                [_vm._v("Nome ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newUser.name,
                    expression: "newUser.name",
                  },
                ],
                staticClass: "form-control",
                style:
                  !_vm.validateName && _vm.EnableValidation
                    ? "border:1px solid red"
                    : "",
                attrs: { type: "text", id: "exampleInputName1", Name: "" },
                domProps: { value: _vm.newUser.name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.newUser, "name", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              !_vm.validateName && _vm.EnableValidation
                ? [
                    _c("small", [
                      _vm._v("Campo nome deve pelo menos 3 letras."),
                    ]),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3" },
            [
              _c(
                "label",
                {
                  staticClass: "form-label",
                  attrs: { for: "exampleInputEmail1" },
                },
                [_vm._v("Email ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newUser.email,
                    expression: "newUser.email",
                  },
                ],
                staticClass: "form-control",
                style:
                  !_vm.validateEmail && _vm.EnableValidation
                    ? "border:1px solid red"
                    : "",
                attrs: { type: "email", id: "exampleInputEmail1" },
                domProps: { value: _vm.newUser.email },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.newUser, "email", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              !_vm.validateEmail && _vm.EnableValidation
                ? [_c("small", [_vm._v("Email não é valido")])]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3" },
            [
              _c(
                "label",
                {
                  staticClass: "form-label",
                  attrs: { for: "exampleInputPassword1" },
                },
                [_vm._v("Senha")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newUser.password,
                    expression: "newUser.password",
                  },
                ],
                staticClass: "form-control",
                style:
                  !_vm.validatePassword && _vm.EnableValidation
                    ? "border:1px solid red"
                    : "",
                attrs: { type: "password", id: "exampleInputPassword1" },
                domProps: { value: _vm.newUser.password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.newUser, "password", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              !_vm.validatePassword && _vm.EnableValidation
                ? [
                    _c("small", [
                      _vm._v("Senha tem que ter 6 ou mais caracteres"),
                    ]),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-3" },
            [
              _c(
                "label",
                {
                  staticClass: "form-label",
                  attrs: { for: "exampleInputPassword2" },
                },
                [_vm._v("Confirmação de Senha")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newUser.password_confirmation,
                    expression: "newUser.password_confirmation",
                  },
                ],
                staticClass: "form-control",
                style:
                  !_vm.validatePasswordConfirmation && _vm.EnableValidation
                    ? "border:1px solid red"
                    : "",
                attrs: { type: "password", id: "exampleInputPassword2" },
                domProps: { value: _vm.newUser.password_confirmation },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.newUser,
                      "password_confirmation",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              !_vm.validatePasswordConfirmation && _vm.EnableValidation
                ? [
                    _c("small", [
                      _vm._v("Confirmação de senha diferente da senha"),
                    ]),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-row-reverse" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-auth mt-3",
                attrs: { disabled: _vm.loading },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.register()
                  },
                },
              },
              [
                !_vm.loading
                  ? [_vm._v(" Enviar ")]
                  : [
                      _c("span", {
                        staticClass: "spinner-border spinner-border-sm",
                        attrs: { role: "status", "aria-hidden": "true" },
                      }),
                      _vm._v("\n              Enviando...\n            "),
                    ],
              ],
              2
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);