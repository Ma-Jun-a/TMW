<template>
  <div class="Vertical">
    <Baritem @itemclick="pathlink('/home')"> <span>home</span> </Baritem>
  </div>
</template>

<script>
import Baritem from "@/components/common/Baritem";
export default {
  name: "Vertical",
  data() {
    return {
      querystring: {
        apiid: '',
        userid: '',

      }
    }
  },
  components: {
    Baritem
  }
}
</script>

<style scoped>
/*@import '../../assets/css/base.css'*/


</style>
