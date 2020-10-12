<template>
  <div id="Api">
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
            <el-form-item>
              <el-button  @click="dialogFormVisible_foradd = true" type="primary" >新增接口</el-button>
            </el-form-item>
          </el-form>

<!--          打开新增api的dialog-->

          <el-dialog title="接口信息" :visible.sync="dialogFormVisible_foradd">
            <el-form :model="form">
              <el-form-item label="接口名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="接口描述" :label-width="formLabelWidth">
                <el-input v-model="form.api_description" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="接口地址" :label-width="formLabelWidth">
                <el-input v-model="form.api_address" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="项目名称" :label-width="formLabelWidth">
                <el-input v-model="form.project_name" autocomplete="off"></el-input>
              </el-form-item>
<!--              <el-form-item label="所属项目" :label-width="formLabelWidth">-->
<!--                <el-select v-model="form.project" placeholder="请选择项目">-->
<!--                  <el-option label="区域一" value="shanghai"></el-option>-->
<!--                  <el-option label="区域二" value="beijing"></el-option>-->
<!--                </el-select>-->
<!--              </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addApi">确 定</el-button>
            </div>
          </el-dialog>


          <!--          项目列表信息-->
          <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
            <el-table-column
                prop="id"
                label="接口编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="project_name"
                label="所属项目">
            </el-table-column>
            <el-table-column
                prop="name"
                label="接口名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="api_description"
                label="接口描述">
            </el-table-column>
            <el-table-column
                prop="api_address"
                label="接口地址">
            </el-table-column>
            <el-table-column
                label="接口文档">
              <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
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

                <el-dialog title="接口信息" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="接口名称" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属项目" :label-width="formLabelWidth">
                      <el-input v-model="form.project_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="接口描述" :label-width="formLabelWidth">
                      <el-input v-model="form.api_description" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="接口地址" :label-width="formLabelWidth">
                      <el-input v-model="form.api_address" autocomplete="off"></el-input>
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
import Breadcrum from "@/components/common/Breadcrum";
import request from "@/network/request";
// import request from "@/network/request";

export default {
  name: "Api",
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible_foradd: false,
      formLabelWidth: '120px',
      form: {
        id: '',
        name: '',
        project_name: '',
        api_description: '',
        api_address: '',
      },

      formInline: {
        input_project: '',
        input_version: '',
      },
      tableData: [{
        id: '',
        create_date: '',
        name: '',
        project_name: '',
        api_address: '',
        api_description: '',
      }],

      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  components: {
    Narbar,
    Breadcrum
  },
  created() {
    request({url:'api/list',method: 'post'}).then(response => {

      this.tableData =  response.data['msg']

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
    onSubmit() {
      console.log(this.formInline)
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    addApi() {
      request({url:"api/add",method: "post",
        data: this.form
      }).then(
          () => {
            console.log('这是新增')
            this.dialogFormVisible_foradd = false
          }
      ).catch( error => {
        alert(error)
      })
    },
    handleEdit(cow) {
      this.dialogFormVisible = true
      this.form.id = cow.id
      this.form.name = cow.name;
      this.form.project_name = cow.project_name;
      this.form.api_description = cow.api_description
      this.form.api_address = cow.api_address
    },
    onUpdate() {
      console.log(this.form.version)
      request({url:"api/update",method: "post",
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
      request({url:"api/delete",method: "post",
        data: {"api_id": id}
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }

  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";
/*.btn {*/
/*  position: center;*/
/*}*/
</style>
