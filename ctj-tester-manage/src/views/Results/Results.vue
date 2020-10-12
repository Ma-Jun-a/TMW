<template>
  <div id="Results">
    <el-container>
      <el-header> header </el-header>
      <el-container>
        <el-aside width="200px">
          <Narbar></Narbar>
        </el-aside>
        <el-main>
          <!--          面包靴-->
          <Breadcrum></Breadcrum>
          <br>

          <!--          搜索栏-->
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="接口名称">
              <el-input v-model="formInline.input_project" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="项目名称">
              <el-select v-model="formInline.input_project" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>


          <!--          项目列表信息-->
          <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
            <el-table-column
                prop="id"
                label="结果编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="create_date"
                label="对应接口">
            </el-table-column>
            <el-table-column
                prop="create_date"
                label="对应的脚本">
            </el-table-column>
            <el-table-column
                prop="name"
                label="响应码"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="生成时间">
            </el-table-column>
            <el-table-column
                prop="create_date"
                label="详细信息">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Narbar from "@/components/common/Narbar";
import Breadcrum from "@/components/common/Breadcrum";
export default {
  name: "Results",
  data() {
    return {
      formInline: {
        input_project: '',
        input_version: '',
      },

      tableData: [{
        create_date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        create_date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        create_date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        create_date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
  ,
  components: {
    Narbar,
    Breadcrum
  },
  methods: {
    clickproject (items) {
      this.$store.commit("saveinfo",items)
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        console.log(row)
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }

  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";

</style>
