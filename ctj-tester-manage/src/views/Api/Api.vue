<template>
  <div id="Api">
<!--    <div class="container-fluid">-->

<!--      <div class="row">-->
<!--        <div class="col-md-4">-->
<!--          <Narbar class="nav"></Narbar>-->
<!--          <Breadcrum></Breadcrum>-->
<!--        </div>-->
<!--        <div class="col-md-2">-->
<!--          <div class="dropdown">-->
<!--            <button class="btn btn-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--              <span class="drop">项目名称</span>-->
<!--            </button>-->

<!--            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
<!--              <a class="dropdown-item" href="#">Action</a>-->
<!--              <a class="dropdown-item" href="#">Another action</a>-->
<!--              <a class="dropdown-item" href="#">Something else here</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <div class="dropdown">-->
<!--            <button class="btn btn-secondary dropdown-toggle" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--              <span class="drop">版本号  </span>-->
<!--            </button>-->

<!--            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
<!--              <a class="dropdown-item" href="#">Action</a>-->
<!--              <a class="dropdown-item" href="#">Another action</a>-->
<!--              <a class="dropdown-item" href="#">Something else here</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col-md-3">-->
<!--          <p>qitaxinxi</p>-->
<!--        </div>-->
<!--        <div class="col-md-9">-->

<!--          <div class="list-group">-->
<!--            <button type="button" class="list-group-item list-group-item-action active">-->
<!--              Cras justo odio-->
<!--            </button>-->
<!--            <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>-->
<!--            <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>-->
<!--            <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>-->
<!--            <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>-->
<!--          </div>-->

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
  name: "Api",
  components: {
    Narbar,
    Breadcrum
  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";
/*.btn {*/
/*  position: center;*/
/*}*/
</style>
