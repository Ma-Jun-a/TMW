<template>
  <div id="Project">
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
            <el-form-item label="项目名称">
              <el-input v-model="formInline.input_project" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="版本号">
              <el-select v-model="formInline.input_project" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSearch">查询</el-button>
            </el-form-item>

            <!--          新增项目的dialog-->
            <el-form-item>
              <el-button  @click="dialogFormVisible = true" type="primary" >新增接口</el-button>
            </el-form-item>
            <el-dialog title="项目信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="版本号" :label-width="formLabelWidth">
                  <el-input v-model="form.version" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="项目描述" :label-width="formLabelWidth">
                  <el-input v-model="form.description" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible_foradd = false">取 消</el-button>
                <el-button type="primary" @click="onAdd">确 定</el-button>
              </div>
            </el-dialog>
          </el-form>




<!--          项目列表信息-->
          <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
            <el-table-column
                prop="id"
                label="项目编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="项目名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="version"
                label="版本信息">
            </el-table-column>
            <el-table-column
                prop="description"
                label="项目描述">
            </el-table-column>
            <el-table-column
                prop="create_date"
                label="创建日期">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">编辑</el-button>

                <el-dialog title="项目信息" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="项目名称" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="版本号" :label-width="formLabelWidth">
                      <el-input v-model="form.version" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="项目描述" :label-width="formLabelWidth">
                      <el-input v-model="form.description" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="onUpdate">确 定</el-button>
                  </div>
                </el-dialog>

                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
          </el-pagination>

        </el-main>
      </el-container>
    </el-container>


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
      dialogFormVisible: false,
      dialogFormVisible_foradd: false,
      formLabelWidth: '120px',
      form: {
        id: '',
        name: '',
        version: '',
        description: '',
      },
      data: '',
      project: '',
      version: '',
      formInline: {
        input_project: '',
        input_version: '',
      },

      tableData: [{
        id: '',
        create_date: '',
        name: '',
        version: '',
        description: '',
      }]
    }
  },
  components: {
    Breadcrum,
    Narbar,
  },
  created() {
    request({url:'project/list',method: 'get'}).then(response => {

      this.tableData =  response.data['msg']
      console.log(this.tableData)
    }).catch( error => {
      console.log(error)
    })
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
    },
    onSearch() {
      console.log(this.formInline)

    },
    handleEdit(cow) {
      this.dialogFormVisible = true
      this.form.id = cow.id
      this.form.name = cow.name;
      this.form.description = cow.description
      this.form.version = cow.version
    },
    onUpdate() {
      console.log(this.form.version)
      request({url:"project/update",method: "post",
        data: this.form
      }).then(
          () => {
            this.dialogFormVisible = false
          }
      ).catch( error => {
        alert(error)
      })
    },
    handleDelete(id) {
      request({url:"project/delete",method: "post",
        data: {"project_id": id}
      }).then(
          () => {
            alert('删除成功')
          }
      ).catch( error => {
        alert(error)
      })
    },
    onAdd() {
      request({url:"project/add",method: "post",
      data: {
        "project": this.form.name,
        "version": this.form.version,
        "description": this.form.description
      }
      }).then(
          () => {
            this.dialogFormVisible_foradd = false
          }
      ).catch( error => {
        alert(error)
      })
    }

  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";
/*.row {*/

/*}*/
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.input2 {
  float: right;
}
</style>
