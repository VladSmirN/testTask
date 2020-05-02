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
        <v-text-field v-model="name" label="Имя" required></v-text-field>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
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
      this.getReviews()
      console.log('Component mounted.')
    },
    data: () => ({
      email: "",
      name: "",
      comment: "",
      reviews: [{ NAME: "Vlad Vlad", EMAIL: "email@email.ru", COMMENT: "all ok" }]
    }),
    methods: {

      async getReviews(){
        let res = await axios.get('http://127.0.0.1:8000/reviews')
        this.reviews = res.data
        console.log(res.data)
      },
      async send(){
        try {
          let  ans  = await axios.post('http://127.0.0.1:8000/reviews/store',{
          email:this.email,
          name:this.name,
          comment:this.comment
          })
          this.reviews.push({NAME:this.name,EMAIL:this.email,COMMENT:this.comment})
          this.email = ""
          this.name = ""
          this.comment = ""
          alert("Ваш отзыв успешно добавлен");
        } catch (error) {
          alert("Данные не прошли валидацию.");   
        }
        
        
      }
    }
  }
</script>