<template>
  <div>
    <nav-component></nav-component>
    <router-view></router-view>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div
          class="toast-header text-light"
          :class="'bg-' + toastAtributes.color"
        >
          <strong class="me-auto">{{ toastAtributes.title }}</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{{ toastAtributes.msg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "bootstrap";
export default {
  name: "App",

  data: () => ({
    toast: null,
    toastAtributes: {
      title: "",
      msg: "",
      color: "",
    },
  }),
  methods: {
    makeToast(title, msg, color) {
      this.toastAtributes.title = title;
      this.toastAtributes.msg = msg;
      this.toastAtributes.color = color;
      var toastLiveExample = document.getElementById("liveToast");
      this.toast = new Toast(toastLiveExample);
      this.toast.show();
    },
  },
  created() {
    this.$eventBus.$on("newMessage", this.makeToast);
  },
};
</script>

<style lang="scss">
.btn-auth {
  background-color: #2a394a;
  color: white;
}
</style>