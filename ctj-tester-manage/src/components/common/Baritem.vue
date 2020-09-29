<template>
  <div class="Baritem" >
<!--    <li class="nav-item">-->
      <a class=" nav-link btn-info"  @click="clicklink(path)" >
        <slot></slot>
      </a>
<!--    </li>-->

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
a {
  float: inside;
  position: center;
}
.vav-link {
  background-color: #b1dfbb;
  /*float: top;*/
  padding-top: 5px;
}
</style>
