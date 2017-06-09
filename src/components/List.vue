<template>
  <div>
    <div class="col-md-3" v-for="book in books">
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名：{{book.bookName}}
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover">
        </div>
        <div class="panel-footer">价格：<span>{{book.bookPrice | currer('￥') }}</span>
          <router-link :to="{name:'Detail',params:{id:book.id}}">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      filters:{
        currer(input,paraml){
          return paraml+input;
        }
      },
      created() {
        this.$http.get('/book').then((res)=>{
          this.books = res.body;
        });
      },
      data(){
        return {
            books:[
              //{bookName:'aaa',bookCover:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494498644158&di=ffa7a854ddb2d82a929d6ca993799e8b&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F2786001_091115796000_2.jpg',bookPrice:12}
            ]
        }
      },
      components: {},
      methods: {}
    }
</script>
<style scoped>
img{width:80%}
</style>
