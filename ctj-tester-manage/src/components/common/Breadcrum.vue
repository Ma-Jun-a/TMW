<template>
  <div id="Breadcrum">
    <div class="navbar bg-white breadcrumb-bar">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">{{ $store.state.project }}</a></li>
          <li class="breadcrumb-item"><a href="#">{{ $store.state.version }}</a></li>
          <li class="breadcrumb-item"><a href="#">{{ $store.state.api }}</a></li>
          <li class="breadcrumb-item"><a href="#">{{ $store.state.script }}</a></li>
<!--          <li class="breadcrumb-item active" aria-current="page">Data</li>-->

        </ol>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "Breadcrum",
  // data() {
  //   return {
  //     breadcruminfo: {
  //       project: '',
  //       version: '',
  //       api: '',
  //       script: '',
  //     },
  //   }
  // },
  // created() {
  //   this.$store.commit("saveinfo")
  // },

}
</script>

<style scoped>

</style>
