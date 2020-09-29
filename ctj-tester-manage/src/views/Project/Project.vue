<template>
  <div id="Project">
<!--    <div class="container-fluid">-->
<!--      <div class="row">-->

<!--        <div class="col-md-1">-->
<!--          <Narbar class="nav"></Narbar>-->
<!--        </div>-->
<!--        <div class="col-md-11 ">-->
<!--          <Breadcrum></Breadcrum>-->

<!--          <ol class="list-unstyled">-->
<!--            <li v-for="project in data" :key="project">-->
<!--              <button type="button" class="btn btn-primary">{{project.project}}</button>-->
<!--            </li>-->
<!--          </ol>-->

<!--        </div>-->

<!--      </div>-->
<!--    </div>-->

    <div class="row">
      <div class="col-md-2"><Narbar></Narbar></div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-4">.col-md-6</div>
          <div class="col-md-4">.col-md-6</div>
          <div class="col-md-4">.col-md-6</div>
        </div>
        <div class="row">
          <div class="col-md-12"> <Breadcrum></Breadcrum></div>
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

// import request from "@/network/request";
// import {getproject} from "@/network/home";
import request from "@/network/request";
import Breadcrum from "@/components/common/Breadcrum";
// import axios from 'axios'
export default {
  name: "Project",
  data() {
    return {
      data: '',
      project: '',
      version: '',
    }
  },
  components: {
    Breadcrum,
    Narbar,
  },
  created() {
    request({url:'project/list',method: 'get'}).then(response => {
      this.data =  response.data['msg']
    }).catch( error => {
      console.log(error)
    })
  },
  methods: {
    clickproject (items) {
      this.$store.commit("saveinfo",items)
    }

  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";
/*.row {*/

/*}*/


</style>
