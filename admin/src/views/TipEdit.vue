<template>
    <div class = "about">
    <h1>{{id ? '编辑':'新增'}}数据</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
    
    
    <el-form-item label= "姓名">
        <el-input v-model="model.name" ></el-input>
    </el-form-item>
    
    <el-form-item label= "金额">
        <el-input v-model="model.money" ></el-input>
    </el-form-item>

    <el-form-item label= "前科次数">
        <el-input v-model="model.predecessor" ></el-input>
    </el-form-item>

    <el-form-item label= "有无累犯">
    <el-select v-model="model.isAlways"> 
        <el-option v-for="item in is " :key="item"  :label="item.text" :value="item.value"  ></el-option>
    </el-select>
    </el-form-item>
  

    <el-form-item label= "判决时间">
        <el-input v-model="model.result" ></el-input>
    </el-form-item>

    <el-form-item label= "详情">
        <el-input v-model="model.remark" ></el-input>
    </el-form-item>

    <el-form-item>
     <el-button type="primary" native-type="submit"  >保存</el-button>
    </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
        props:{
            id:{}
        },
        data(){
            return {
                model:{},
                parents:[],
                is:[{text:'有',value:'有'},{text:'无',value:'无'}],
            }
        },

        methods:{
            async save(){
                
                if(this.id){
                   await  this.$http.put(`rest/tips/${this.id}`,this.model)
                }else{
                   await  this.$http.post('rest/tips',this.model)
                }
                this.$router.push('/tips/list')
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            },

            async fetch(){
                const res = await this.$http.get(`rest/tips/${this.id}`)
                this.model = res.data
            },

            async fetchParents(){
                const res =await this.$http.get('rest/tips')
                this.parents =res.data
            }            
        },

        created() {
            this.id && this.fetch()
            this.fetchParents()
        },
    }
</script>

        


