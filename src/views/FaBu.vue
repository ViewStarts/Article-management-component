<template>
    <el-form :model="form" label-width="auto" style="max-width: 400px;margin:50px 0 0 50%;">
        <el-form-item label="文章标题">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="是否公开">
            <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button @click="rese()">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import http from '@/util/http';
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

// do not use same name with ref
const form = reactive({
    name: '',
    delivery: false,
    desc: '',
})

const onSubmit = () => {
    http.request({
        url: '/posts',
        method: 'post',
        headers: {
            'Content-Type': "application/json"
        },
        data: {
            title: form.name,
            content: form.desc,
            status: form.delivery
        }
    }).then(() => {
        ElMessage.success('发布成功')
        form.name = '';
        form.desc = '';
        form.delivery = false;
    })
}

// 重置
function rese() {
    form.name = '';
    form.desc = '';
    form.delivery = false;
}
</script>
