<template>
  <!-- 头部区域 -->
  <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router style="display: flex;">
    <el-menu-item index="/" style="flex: 1; justify-content: center;">文章管理</el-menu-item>
    <el-menu-item index="/fabu" style="flex: 1;  justify-content: center;">文章发布</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>
<style></style>