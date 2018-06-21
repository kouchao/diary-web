<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Write</router-link> |-->
      <!--<router-link to="/list">List</router-link>-->
    <!--</div>-->
    <div style="width: 124px; margin: auto">
      <el-tabs v-model="type" @tab-click="handleClick">
        <el-tab-pane label="写日记" name="write"></el-tab-pane>
        <el-tab-pane label="看日记" name="list"></el-tab-pane>
      </el-tabs>
    </div>

    <router-view/>
  </div>
</template>
<script>
    export default {
        name: 'app',
        data(){
            return {
                type: this.$route.name == 'index' || this.$route.name == 'write' ? 'write' : 'list'
            }
        },
        methods: {
            handleClick({name}) {
                this.$router.push({
                    name
                })
                console.log(name);
            }
        }
    }
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
