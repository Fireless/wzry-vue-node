<template>
<div class="about">
    <h1>档案汇总</h1>
     <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="240">
        </el-table-column>
        
        <el-table-column prop="name" column-key="name"  label="姓名">
        </el-table-column>
        
         <el-table-column prop="money" label="金额" width="240">
        </el-table-column>

         <el-table-column prop="predecessor" label="前科次数" width="240" :filter-method="filterHandler" :filters="preNumber">
        </el-table-column>

         <el-table-column prop="isAlways" label="有无累犯" width="240" :filter-method="filterHandler" :filters="[{text:'有',value:'有'},{text:'无',value:'无'},]">
        </el-table-column>
         <el-table-column prop="result" label="判罚时间（年）" width="240">
        </el-table-column>        
         <el-table-column prop="remark" label="详情" width="240">
        </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" 
        @click ="$router.push(`/tips/edit/${scope.row._id}`)"
        >编辑</el-button>
        <el-button type="text" size="small"
        @click = "remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table> 
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[],
            preNumber:[{text:'1',value:1},{text:'2',value:2},{text:'3',value:3},{text:'4',value:4},{text:'5次以上',value:5},]
        }
    },

    methods: {
       filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
        async fetch(){
            const res = await this.$http.get('rest/tips')
            this.items = res.data
        },

        async remove(row){
            this.$confirm(`此操作将永久删除分类"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
            const res = await this.$http.delete(`rest/tips/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }
    },
    created() {
        this.fetch()
    },    

}
</script>