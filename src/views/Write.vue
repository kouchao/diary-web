<template>
    <div class="write">
        <el-form label-width="80px">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="天气">
                        <el-input v-model="weather"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="addDiary">提交</el-button>
                </el-col>
            </el-row>

        </el-form>

        <div class="editor">
            <textarea class="textarea" :value="content" @input="update"></textarea>
            <div v-html="compiledMarkdown"></div>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import _ from 'lodash'
    import marked from 'marked'
    import api from '@/utils/api'
    export default {
        name: 'write',
        data(){
          return {
              content: '# 欢迎使用！',
              weather: '晴'
          }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.content, {sanitize: true})
            }
        },
        methods: {
            update: _.debounce(function (e) {
                this.content = e.target.value
            }, 300),
            async addDiary(){
                const {content, weather} = this
                const {data} = await api.addDiary({
                    content,
                    weather
                })

                if(data.code == 0){
                    this.$alert('提交成功', '提示', {
                        confirmButtonText: '确定',
                    });
                }

            }
        }
    }
</script>

<style scoped>


    .textarea, .editor div {
        display: inline-block;
        width: 49%;
        height: 40vw;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    .textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
        padding: 30px;
        line-height: 25px;
    }

    code {
        color: #f66;
    }

    .write {
        width: 70%;
        margin: auto;
    }
</style>
