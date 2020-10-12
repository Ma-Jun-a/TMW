<template>
  <div id="Breadcrum">
<!--    <div class="navbar bg-white breadcrumb-bar">-->
<!--      <nav aria-label="breadcrumb">-->
<!--        <ol class="breadcrumb">-->
<!--          <li class="breadcrumb-item"><a href="#">{{ $store.state.project }}</a></li>-->
<!--          <li class="breadcrumb-item"><a href="#">{{ $store.state.version }}</a></li>-->
<!--          <li class="breadcrumb-item"><a href="#">{{ $store.state.api }}</a></li>-->
<!--          <li class="breadcrumb-item"><a href="#">{{ $store.state.script }}</a></li>-->
<!--&lt;!&ndash;          <li class="breadcrumb-item active" aria-current="page">Data</li>&ndash;&gt;-->

<!--        </ol>-->
<!--      </nav>-->
<!--    </div>-->
<!--    elementui-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
<!--      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

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
