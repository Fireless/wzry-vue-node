<template>
    <div class = "about">
    <h1>新建分类</h1>
    <el-form label-width="120px">
    <el-form-item label= "名称">
        <el-input v-model="model.name"></el-input>
    </el-form-item>
    <el-form-item>
     <el-button type="primary" native-type="submit" @submit.native.prevent="save" >保存</el-button>
    </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                model:{}
            }
        },

        methods:{
            save(){
                // this.$http.post()
            }
        }
    }
</script>