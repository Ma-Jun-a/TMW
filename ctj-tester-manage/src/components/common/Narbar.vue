<template>
  <div id="Narbar"  >
    <el-row class="tac">
      <el-col :span="12">

        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen(1)"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :default-openeds="openindex">



        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>测试管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/project" active-text-color="#ffd04b">项目管理</el-menu-item>
              <el-menu-item index="/api">接口管理</el-menu-item>
              <el-menu-item index="/scripts">脚本管理</el-menu-item>
              <el-menu-item index="/results">测试结果</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">测试结果</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">测试环境</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
// import Baritem from "@/components/common/Baritem";

export default {
  name: "Narbar",
  data() {
    return {
      openindex: ["1"],
    }
  },
  components: {
    // Baritem
  },
  methods: {
    pathlink(item) {
      this.$router.push(item)
    },
    handleOpen(key, keyPath) {

        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>

<style scoped>

@import "../../assets/css/base.css";



</style>
