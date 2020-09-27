<template>
  <div id="Project">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12"><Narbar class="nav"></Narbar></div>
        <div class="col-md-3 col-md-offset-3">点击某个项目在这里展示版本信息和版本介绍
          <br>
          点击版本跳转页面到api页面，并且展示该项目版本的所有接口信息ffffffffffffff。</div>
      </div>
<!--      <div class="row">-->
<!--        <div class="col-md-3 col-md-offset-1">偏移</div>-->
<!--      </div>-->


      <ol class="list-unstyled">
        <li v-for="project in data" :key="project">
          <button type="button" class="btn btn-primary">{{project}}</button>
        </li>
      </ol>


    </div>

  </div>

</template>

<script>
import Narbar from "@/components/common/Narbar";
// import request from "@/network/request";
// import {getproject} from "@/network/home";
import request from "@/network/request";
// import axios from 'axios'

export default {
  name: "Project",
  data() {
    return {
      data: ''
    }
  },
  components: {
    Narbar,
  },
  created() {
    request({url:'project/list',method: 'get'}).then(response => {
      this.data =  response.data['msg']
    }).catch( error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";
.row {
  margin-bottom: 20px;
  background-color: whitesmoke;
}
[class*="col-"] {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #1d2124;
  background-color: rgba(86,61,124,.15);
  border: 1px solid #ddd;
  background-color: rgba(86,61,124,.2);
}

</style>
