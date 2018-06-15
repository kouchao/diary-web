<template>
  <div class="about">
    <button @click="getAllDiary">获取日记</button>

    <timeline>
      <div v-for="item in dataList">
        <timeline-title>{{item.createTime}} - {{item.weather}}</timeline-title>
        <timeline-item color="#9dd8e0"><div v-html="item.html"></div></timeline-item>
      </div>

    </timeline>

  </div>
</template>

<script>
    import api from '@/utils/api'
    import marked from 'marked'
    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
    export default {
        name: 'about',
        data(){
            return {
                dataList: []
            }
        },
        methods: {
            update: _.debounce(function (e) {
                this.content = e.target.value
            }, 300),
            async getAllDiary(){
                const {content, weather} = this
                const {data} = await api.getAllDiary({
                    content,
                    weather
                })

                data.res.forEach(o => {
                    o.html = marked(o.content, {sanitize: true})
                })

                this.dataList = data.res

                console.log(data)
            },
        },
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        }
    }
</script>
