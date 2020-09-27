<template>
  <div id="Api">

    <Narbar class="nav"></Narbar>
    <div>查询区 通过项目和版本号进行查询</div>
    <div>展示 接口列表信息</div>
    <div>点击接口可以跳转到脚本列表处</div>
    <h2>woshi Api</h2>
  </div>
</template>

<script>
import Narbar from "@/components/common/Narbar";
export default {
  name: "Api",
  components: {
    Narbar
  }
}
</script>

<style scoped>

</style>
