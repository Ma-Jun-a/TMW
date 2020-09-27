<template>
  <div class="Baritem">
    <li class="nav-item">
      <a class=" btn  btn-lg active nav-link active"  @click="clicklink(path)">
        <slot></slot>
      </a>
    </li>

  </div>
</template>

<script>
export default {
  name: "Baritem",
  data() {
    return {
      message: ''
    }
  },
  props: {
    path: String
  },
  methods: {
    clicklink(path) {
      this.$emit('itemclick',path)
      // this.$router.push(path)
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";

span {
  /*font-family: "Microsoft YaHei UI";*/
  font-size: large;
}
a {
  font-weight: normal;
}
</style>
