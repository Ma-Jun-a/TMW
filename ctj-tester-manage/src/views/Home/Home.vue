<template>
  <div id="home">
    <el-container>
      <el-header>
        <el-row class="demo-avatar demo-basic" >
          <el-col :span="12">
            <div class="demo-basic--circle">
              <div class="block"><el-avatar :size="45" :src="circleUrl"></el-avatar></div>
            </div>
          </el-col>
          </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Narbar></Narbar>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>




  </div>
</template>

<script>
// @ is an alias to /src
import Narbar from '@/components/common/Narbar'
// import Breadcrum from "@/components/common/Breadcrum";
export default {
  name: 'Home',
  components: {
    Narbar,
    // Breadcrum,
  },
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"]
    }
  }
}
</script>
<style scoped>

@import "../../assets/css/base.css";


</style>
