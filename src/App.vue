<template>
    <div>
        <this-header></this-header>
        <div class="container">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>  
        <this-TabBar></this-TabBar>
    </div>
</template>
<script>
import Header from './components/Header';
import TabBar from './components/TabBar';
export default {
    name: 'index',
    components: {
        thisHeader: Header,
        thisTabBar: TabBar
    },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
}
ul{list-style:none}
a{text-decoration: none;} 
img{vertical-align:top;border:none}
.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}
</style>
