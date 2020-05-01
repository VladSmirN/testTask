<template>
  <v-container>
    <v-card v-for="(review,index) in reviews" v-bind:key="review.COMMENT" style="margin:10px" max-width="600">
      <v-card-title>
        {{review.NAME}}
      </v-card-title>
      <v-card-subtitle>
        {{review.EMAIL}}
      </v-card-subtitle>
      <v-card-text>
        {{review.COMMENT}}
      </v-card-text>
    </v-card>
    <v-card max-width="600" style="margin:10px">
      <v-card-text>
        <v-text-field v-model="email" label="Имя" required></v-text-field>
        <v-text-field v-model="name" label="E-mail" required></v-text-field>
        <v-textarea
        solo
        v-model="comment"
        name="input-7-4"
        label="Отзыв"
      ></v-textarea>
        <v-btn block color="#2196F3" dark @click=send>
          Добавить
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>

</template>
<script>
  import axios from 'axios'
  export default {
    mounted() {
      console.log('Component mounted.')
    },
    data: () => ({
      email: "",
      name: "",
      comment: "",
      reviews: [{ NAME: "Vlad Vlad", EMAIL: "email@email.ru", COMMENT: "all ok" }]
    }),
    methods: {
      async send(){
        let  ans  = await axios.post('http://127.0.0.1:8000/reviews/store',{
          email:"1",
          name:"sasafsfa1",
          comment:"1"
        })
        console.log(ans);
      }
    }
  }
</script>