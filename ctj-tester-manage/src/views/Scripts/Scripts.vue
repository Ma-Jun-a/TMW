<template>
  <div id="Scripts">
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
              <el-select v-model="formInline.input_version" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>

          <el-form-item>
            <el-button  @click="dialogFormVisible_foradd = true" type="primary" >新增脚本</el-button>
          </el-form-item>
          </el-form>

          <!--          新增脚本的dialog-->
          <el-dialog title="脚本信息" :visible.sync="dialogFormVisible_foradd">
            <el-form :model="form">
              <el-form-item label="所属用户" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="对应接口" :label-width="formLabelWidth">
                <el-input v-model="form.api_name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="脚本说明" :label-width="formLabelWidth">
                <el-input v-model="form.script_description" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="脚本内容" :label-width="formLabelWidth">
                <el-input v-model="form.script_content" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="测试参数" :label-width="formLabelWidth">
                <el-input v-model="form.parameters" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible_foradd = false">取 消</el-button>
              <el-button type="primary" @click="addScript">确 定</el-button>
            </div>
          </el-dialog>



          <!--          项目列表信息-->
          <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
            <el-table-column
                prop="id"
                label="脚本编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="user_id"
                label="所属用户"
                width="180">
            </el-table-column>
            <el-table-column
                prop="api_id"
                label="对应接口">
            </el-table-column>
            <el-table-column
                prop="description"
                label="脚本说明">
            </el-table-column>
            <el-table-column
                prop="script_content"
                label="脚本内容">
            </el-table-column>
            <el-table-column
                prop="parameters"
                label="测试参数">
            </el-table-column>
            <el-table-column
                prop="create_date"
                label="创建时间">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">编辑</el-button>

                <el-dialog title="脚本信息" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
<!--                    <el-form-item label="所属用户" :label-width="formLabelWidth">-->
<!--                      <el-input v-model="form.username" autocomplete="off"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="对应接口" :label-width="formLabelWidth">-->
<!--                      <el-input v-model="form.api_name" autocomplete="off"></el-input>-->
<!--                    </el-form-item>-->
                    <el-form-item label="脚本说明" :label-width="formLabelWidth">
                      <el-input v-model="form.script_description" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="参数信息" :label-width="formLabelWidth">
                      <el-input v-model="form.parameters" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="脚本内容" :label-width="formLabelWidth">
                      <el-input v-model="form.script_content" autocomplete="off"></el-input>
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
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Narbar from "@/components/common/Narbar";
import Breadcrum from "@/components/common/Breadcrum";
import request from "@/network/request";
export default {
  name: "Scripts",data() {
    return {
      formInline: {
        input_project: '',
        input_version: '',
      },
      dialogFormVisible: false,
      dialogFormVisible_foradd: false,
      formLabelWidth: '120px',
      form: {
        id: '',
        username: '',
        api_name: '',
        script_description: '',
        parameters: '',
        script_content: '',
      },

      tableData: [{
        id: '',
        user_id: '',
        api_id: '',
        description: '',
        script_content: '',
        create_date: '',
        parameters: '',
      }]
    }
  },

  components: {
    Narbar,
    Breadcrum
  },
  created () {
    request({url:'scripts/list',method: 'get'}).then(response => {
      this.tableData =  response.data['msg']

    }).catch( error => {
      console.log(error)
    })
  },
  methods: {
    onSubmit() {
      console.log(this.formInline)
    },
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
    handleEdit(cow) {
      this.dialogFormVisible = true
      this.form.id = cow.id
      this.form.username = cow.user_id;
      this.form.api_name = cow.api_id;
      this.form.script_description = cow.description
      this.form.parameters = cow.parameters
      this.form.script_content = cow.script_content
    },
    onUpdate() {
      console.log(this.form.version)
      request({url:"scripts/update",method: "post",
        data: this.form
      }).then(
          () => {
            console.log('这是更新')
            this.dialogFormVisible = false
          }
      ).catch( error => {
        alert(error)
      })
    },
    handleDelete(id) {
      request({url:"scripts/delete",method: "post",
        data: {"script_id": id}
      }).then(
          () => {
            alert('删除成功')
            this.dialogFormVisible = false
          }
      ).catch( error => {
        alert(error)
      })
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    addScript() {
      request({url:"scripts/add",method: "post",
        data: this.form
      }).then(
          () => {
            this.dialogFormVisible_foradd = false
          }
      ).catch( error => {
        alert(error)
      })
  }
  }}
</script>

<style scoped>

@import "../../assets/css/base.css";
</style>
