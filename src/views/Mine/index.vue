<template>
    <div  id="main">
      <Header />
        <div id="content">
          <!-- <Login /> -->
          
          <div style="width:200px;height:100px;background-color:red" @click="addFunc(changableNum)"></div>
          <div>原始：{{ changeNum }}</div>
          <div>getters属性：{{ this.$store.getters.changeClick }}</div>
          <div>{{ content }}</div>
        </div>
      <TabBar />
    </div>
</template>


<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';
import bus from '@/event/EventBus'
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
export default {
  name: 'Mine',
  data(){
    return {
      content:'',
      changableNum: 2
    }
  },
  mounted(){
    bus.$on('busClick',(val)=>{
      this.content = val.content;
    })
  },
  methods:{
    // aa(){
      // this.$store.commit('add')
      // var n = 2;
      // this.$store.dispatch('addFunc', n);  //dispatch分发actions里面的addFunc方法
      // this.$store.dispatch('changeNum/addFunc', n); //意思是指changeNum.js里actions里的addFunc方法
    // }
    ...mapActions('changeNum',[ //changeNum是指modules文件夹下的changeNum.js
      'addFunc'    //changeNum.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ])
  },
  computed:{
    // ...mapState({
    //     changeNum:state=>state.changeNum.changeNum
    // })
    ...mapGetters('changeNum',{ //用mapGetters来获取changeNum.js里面的getters
      changeNum: 'changeClick'
    })
  },
  components: {
      Header,
      TabBar,
      Login
  }
};
</script>
<style>
</style>