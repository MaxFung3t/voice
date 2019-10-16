<template>
    <div  id="main">
      <Header />
        <div id="content">
          <!-- <Login /> -->
          <div>{{content}}</div>
        </div>
      <TabBar />
    </div>
</template>


<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';
import bus from '@/event/EventBus'
export default {
  name: 'Mine',
  data(){
    return {
      content:''
    }
  },
  mounted(){
    bus.$on('busClick',(val)=>{
      this.content = val.content;
    })
  },
  methods:{

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