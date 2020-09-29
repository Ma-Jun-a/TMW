<template>
  <div id="Scripts">
    <div class="row">
      <div class="col-md-2"><Narbar></Narbar></div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-4">.col-md-6</div>
          <div class="col-md-4">.col-md-6</div>
          <div class="col-md-4">.col-md-6</div>
        </div>
        <div class="row">
          <div class="col-md-12"><Breadcrum></Breadcrum></div>
        </div>
        <div class="row">
          <div class="col-md-12">.col-md-6</div>
        </div>
        <div class="row">
          <div class="col-md-12">.col-md-6</div>
        </div>
        <div class="row">
          <div class="col-md-12">.col-md-6</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Narbar from "@/components/common/Narbar";
import Breadcrum from "@/components/common/Breadcrum";
export default {
  name: "Scripts",
  components: {
    Narbar,
    Breadcrum
  }
}
</script>

<style scoped>

@import "../../assets/css/base.css";
</style>
