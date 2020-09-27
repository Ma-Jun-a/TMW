<template>
  <div id="Scripts">

    <Narbar class="nav"></Narbar>
    左侧展示接口，选中接口可以直接展示对应接口的所有脚本，不限制脚本是否属于该用户，暂时不限定其修改权限，
    <div>查询区 通过用户，接口 等条件进行查询</div>
    <div>查询结果展示区</div>
    <div>点击脚本跳转的该脚本的执行结果页面</div>
    <h2>woshi Scripts</h2>
  </div>
</template>

<script>
import Narbar from "@/components/common/Narbar";
export default {
  name: "Scripts",
  components: {
    Narbar
  }
}
</script>

<style scoped>

</style>
