<template>
  <div id="home">

    <Narbar class="nav"></Narbar>
    <br>
    <br>

    <p>zheshibiaoti</p>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import Narbar from '../../components/common/Narbar'



export default {
  name: 'Home',
  components: {
    Narbar,
  },


}
</script>
<style lang="less">

@import "../../assets/css/base.css";

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
