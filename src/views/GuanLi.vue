<template>
  <div v-for="item in list" :key="item.id" class="div1">
    <span>{{ item.title }}</span>
    <span>{{ item.content }}</span>
    <span>
      <span>是否公开 </span>
      <el-switch v-model="item.status" class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" /></span>
    <span>
      <el-button type="success" @click="update(item.id)">编辑</el-button>
      <el-button type="warning" @click="dele(item.id)">删除</el-button>
    </span>
  </div>

  <!-- 弹出框 -->
  <el-dialog v-model="dialogFormVisible" title="编辑内容" width="500">
    <el-form :model="form">
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="内容" :label-width="formLabelWidth">
        <el-input v-model="form.content" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否公开" :label-width="formLabelWidth">
        <el-switch v-model="form.delivery" class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="send()">
          确定
        </el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import http from '@/util/http';
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus'

interface List {
  title: string,
  content: string,
  status: boolean,
  id: number
}

let list = ref<List[]>([])


// 列表
loadlist()
function loadlist() {
  http.request({
    url: '/posts',
    method: "get",
  }).then((e) => {
    list.value = e.data
    list.value.reverse()
  })
}

// 删除
function dele(id: number) {
  http.request({
    url: '/posts/' + id,
    method: 'delete',
  }).then(() => {
    loadlist()
  })
}

// 修改
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  content: '',
  delivery: true,
})

function update(id: any) {
  dialogFormVisible.value = true
  localStorage.setItem('id', id)
}

function send() {
  let id = localStorage.getItem('id')
  http.request({
    url: '/posts/' + id,
    method: 'patch',
    data: {
      title: form.name,
      content: form.content,
      status: form.delivery
    }
  }).then(() => {
    ElMessage.success('修改成功')
    dialogFormVisible.value = false;
    form.name = '';
    form.content = '';
    form.delivery = true;
    loadlist()
  })

}


</script>
<style scoped>
.div1 {
  display: flex;
  border: 1px solid #cecece;
  width: 51%;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
}

span {
  flex: 1;
}
</style>