<template>
    <div class="write">
        <el-form ref="form" :model="form" label-width="80px">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="天气">
                        <el-input v-model="weather"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
        <button @click="addDiary">提交</button>
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

                console.log(data)
            },
            getW(){
                // const UID = "U785B76FC9"; // 测试用 用户ID，请更换成您自己的用户ID
                // const KEY = "4r9bergjetiv1tsd"; // 测试用 key，请更换成您自己的 Key
                // var LOCATION = 'Qingdao'; // 除拼音外，还可以使用 v3 id、汉语等形式
                //
                // var Api = require('./lib/api.js')
                // var argv = require('optimist').default('l', LOCATION).argv;
                //
                //
                // var api = new Api(UID, KEY);
                // api.getWeatherNow(argv.l).then(function(data) {
                //     console.log(JSON.stringify(data, null, 4));
                // }).catch(function(err) {
                //     console.log(err.error.status);
                // });
            }
        }
    }
</script>

<style scoped>


    .textarea, .editor div {
        display: inline-block;
        width: 49%;
        height: 50vw;
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
</style>
