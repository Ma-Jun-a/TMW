<template>
  <div id="home">
<!--    <div class="container-fluid">-->
<!--      <div class="row">-->
<!--        <div class="col-md-1">-->
<!--          <Narbar></Narbar>-->
<!--        </div>-->
<!--        <div class="col-md-10">-->
<!--          <div class="row">user信息</div>-->
<!--          <div class="row">面包屑组件</div>-->
<!--          <div class="row">-->
<!--            <h1> welcome user !</h1>-->
<!--          </div>-->
<!--          <div class="row">-->

<!--            &lt;!&ndash;第三方&ndash;&gt;-->
<!--            <ul class="list-group">-->
<!--              <li class="list-group-item d-flex justify-content-between align-items-center">-->
<!--                Cras justo odio-->
<!--                <span class="badge badge-primary badge-pill">14</span>-->
<!--              </li>-->
<!--              <li class="list-group-item d-flex justify-content-between align-items-center">-->
<!--                Dapibus ac facilisis in-->
<!--                <span class="badge badge-primary badge-pill">2</span>-->
<!--              </li>-->
<!--              <li class="list-group-item d-flex justify-content-between align-items-center">-->
<!--                Morbi leo risus-->
<!--                <span class="badge badge-primary badge-pill">1</span>-->
<!--              </li>-->
<!--            </ul>-->

<!--          </div>-->
<!--        </div>-->

<!--      </div>-->

<!--&lt;!&ndash;      <Breadcrum></Breadcrum>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="dropdown">&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&ndash;&gt;-->
<!--&lt;!&ndash;          Dropdown button&ndash;&gt;-->
<!--&lt;!&ndash;        </button>&ndash;&gt;-->

<!--&lt;!&ndash;        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="dropdown-item" href="#">Action</a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="dropdown-item" href="#">Another action</a>&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="dropdown-item" href="#">Something else here</a>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->


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
// @ is an alias to /src
import Narbar from '../../components/common/Narbar'
import Breadcrum from "@/components/common/Breadcrum";


export default {
  name: 'Home',
  components: {
    Narbar,
    Breadcrum,
  },


}
</script>
<style lang="less">

@import "../../assets/css/base.css";

* {
  margin: 0px;
  padding: 0px;
}
.left-div {
  width: 100px;
  height: auto;
  background-color: #95999c;
}
.right-div {
  float: left;
  width: 1000px;
  background-color: #17a2b8;
}
//#home {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  //text-align: center;
//  color: #2c3e50;
//}

//#nav {
//  padding: 30px;
//  //background: #86cfda;
//  span {
//    font-family: "Microsoft YaHei UI";
//    font-size: large;
//  }
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
