<template>
    <div class = "about">
    <h1>{{id ? '编辑':'新建'}}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">

    <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
        <el-form-item label= "名称">
        <el-input v-model="model.name" ></el-input>
    </el-form-item>
      <el-form-item label= "称号">
        <el-input v-model="model.title" ></el-input>
    </el-form-item> 
    <el-form-item label= "头像">
        <el-upload
         class="avatar-uploader"
         :action="$http.defaults.baseURL + '/upload'"
        :show-file-list="false"
        :on-success="afterupload"
        >
            <img v-if="model.avatar" :src="model.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
   </el-form-item>
    <el-form-item label= "类型">
        <el-select v-model="model.categories" multiple>
            <el-option v-for="item of categories" 
            :key="item._id"
            :label="item.name"
            :value="item._id"
            ></el-option>
        </el-select>
    </el-form-item>

     <el-form-item label= "难度">
        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.difficult" ></el-rate>
    </el-form-item>
     <el-form-item label= "技能">
        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.skill" ></el-rate>
    </el-form-item>
    <el-form-item label= "攻击">
        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.attack" ></el-rate>
    </el-form-item>
    <el-form-item label= "生存">
        <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.survice" ></el-rate>
    </el-form-item>
        


    <el-form-item label= "顺风出装">
        <el-select v-model="model.items1" multiple>
            <el-option v-for="item of items1" 
            :key="item._id"
            :label="item.name"
            :value="item._id"
            ></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label= "逆风出装">
        <el-select v-model="model.items2" multiple>
            <el-option v-for="item of items2" 
            :key="item._id"
            :label="item.name"
            :value="item._id"
            ></el-option>
        </el-select>
    </el-form-item>

    <el-form-item label= "使用技巧">
        <el-input type="textarea" v-model="model.usageTips" ></el-input>
    </el-form-item>
    <el-form-item label= "对抗技巧">
        <el-input type="textarea" v-model="model.battleTips" ></el-input>
    </el-form-item>
    <el-form-item label= "团战思路">
        <el-input type="textarea" v-model="model.teamTips" ></el-input>
    </el-form-item>
        </el-tab-pane>


        <el-tab-pane label="技能" name="skills">
            <el-button type="text" @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
            <el-row type="flex" style="flex-wrap:wrap" :gutter="20">
                <el-col :md="12" v-for="(item,i) in model.skills" :key="i" :span="20">
                    <el-card :body-style="{ padding:'20px'}" shadow="hover">
                    <el-form-item label="名称">
                        <el-input v-model="item.name"></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                        <el-upload
                             class="avatar-uploader"
                              :action="$http.defaults.baseURL + '/upload'"
                              :show-file-list="false"
                             :on-success="res => $set(item,'icon',res.url)"
         >
                          <img v-if="item.icon" :src="item.icon" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                     </el-upload>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="item.description"></el-input>
                    </el-form-item>
                        <el-form-item label="小提示">
                        <el-input type="textarea" v-model="item.tips"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" size="small" @click="model.skills.splice(i,1)">删除</el-button>
                    </el-form-item>
                  
                    </el-card>
                </el-col>
            </el-row>
        </el-tab-pane>

    </el-tabs>
   

    <el-form-item style="margin-top:1rem">
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
                model:{
                    scores:{
                        difficult:0
                    },
                },
               categories:[],
               items1:[],
               items2:[],
            }
        },

        methods:{
            afterupload(res){
               this.$set(this.model,'avatar',res.url)
            },
            async save(){
                
                if(this.id){
                   await  this.$http.put(`rest/heros/${this.id}`,this.model)
                }else{
                   await  this.$http.post('rest/heros',this.model)
                }
                this.$router.push('/heros/list')
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            },

            async fetch(){
                const res = await this.$http.get(`rest/heros/${this.id}`)
                this.model = Object.assign({},this.model,res.data) 
            },

            async fetchCategories(){
                const res =await this.$http.get('rest/categories')
                this.categories =res.data
            },
            async fetchItem1(){
                const res =await this.$http.get('rest/items')
                this.items1 =res.data
            },
            async fetchItem2(){
                const res =await this.$http.get('rest/items')
                this.items2 =res.data
            }                          
        },

        created() {
            this.fetchItem2()
            this.fetchItem1()
            this.fetchCategories()
            this.id && this.fetch()
        },
    }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }
</style>