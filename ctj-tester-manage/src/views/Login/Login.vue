<template>
  <div>


    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">User Name</label>
        <input type="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-bind:value="username">
<!--        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" :value="password">
      </div>
<!--      <div class="form-group form-check">-->
<!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
<!--      </div>-->
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
  </div>
</template>

<script>


export default {
name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  // methods: {
  //   checkinfo() {
  //     if (this.username=='majun' && this.password=='123456') {
  //       console.log('succ')
  //       // this.$store.commit('Login',this.username());
  //
  //       // this.$store.commit('changestate')
  //
  //       // this.$router.push('/Home'); //登录成功后跳转到的页面
  //       // return 'successful'
  //     } else {
  //       console.log('faile')
  //       // this.$router.push('/Home')
  //       return 'errormsg'
  //     }
  //   }
  // }
}
</script>

<style scoped>
/*@import '../assets/css/base.css';*/
.form-control {
  width: 500px;
}
</style>
