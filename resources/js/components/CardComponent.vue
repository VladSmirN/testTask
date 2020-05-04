<template>


  <v-container>

    <v-card v-if="card.photo" style="margin:10px" max-width="400">

      <v-img class="white--text align-end" :src="card.photo"></v-img>

      <v-card-title>
        {{card.item_name}}
      </v-card-title>
      <v-card-subtitle>
        {{card.item_description}}
      </v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item-group mandatory v-model="size" color="#2196F3">
            <v-list-item v-for="(price, i) in card.prices" :key="i">
              {{price.size}}
              <v-spacer></v-spacer>
              {{price.price}}р
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-container grid-list-xl text-xs-center>
          <v-layout row wrap>
            <v-flex xs1 offset-xs1>
              <v-btn color="black" fab small @click="count>=2?count--:count">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs6 offset-xs1>
              <v-card>
                <v-card-text>
                  <div style="text-align: center;">{{count}} </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs1>
              <v-btn color="black" fab small @click="count++">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>

        <span class="title-text">Пищевая ценность в 100г. продукта:</span>
        <v-container>
          <v-layout row>
            <v-flex xs3>
              Белки</br>{{card.item_protein}} г
            </v-flex>
            <v-flex xs3>
              Жиры</br>{{card.item_fats}} г
            </v-flex>
            <v-flex xs3>
              Углеводы</br>{{card.item_carbohydrates}} г
            </v-flex>
            <v-flex xs3>
              Калории</br>{{card.item_calories}} г
            </v-flex>
          </v-layout>
        </v-container>

        <span class="title-text">Выберите тесто:</span>
        <v-list>
          <v-list-item-group mandatory v-model="dough" color="#2196F3">
            <v-list-item v-for="(dough, i) in card.addon_item[0].sub_item" :key="i">
              {{dough.sub_item_name}}
              <v-spacer></v-spacer>
              {{dough.pretty_price}}
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <span class="title-text">Добавки к пицце:</span>
        <div v-for="(additive, i) in card.addon_item[1].sub_item" :key="i">
          <v-container>
            <v-layout row>
              <v-flex xs3>
                {{additive.sub_item_name}} </br> + {{additive.price}}р
              </v-flex>
              <v-flex xs4 offset-xs5>
                <v-btn color="black" fab x-small @click="minusAddities(i)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span style="margin-left:1px;margin-right:1px;">{{additives[i]}}</span>
                <v-btn color="black" fab x-small @click="plusAddities(i)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </div>

        <v-list-item>
          <span class="title-text">Сумма: </span>
          {{summa}} р
          <v-spacer></v-spacer>
          <v-btn color="#2196F3" dark>В корзину</v-btn>
        </v-list-item>
        
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
  import axios from 'axios'
  import _ from 'lodash'
  export default {
    mounted() {
      this.getCard();

    },
    data: () => ({
      size: 0,
      count: 1,
      dough: 0,
      card: {},
      additives: [],
      ref: 'https://vsem-edu-oblako.ru/singlemerchant/api/loadItemDetails?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&device_id=89000001020&lang=ru&device_platform=mobile&json=true&item_id=18094140#get'
    }),
    methods: {
      minusAddities(i) {
        if (this.additives[i] > 0)
          Vue.set(this.additives, i, this.additives[i] - 1)

      },
      plusAddities(i) {
        Vue.set(this.additives, i, this.additives[i] + 1)

      },
      async getCard() {

        let res = await axios.get(this.ref)

        this.card = _.get(res, 'data.details.data')
        this.card.addon_item[1].sub_item.forEach(element => {
          this.additives.push(0)
        });

      }
    },
    computed: {
      summa: function () {
        let sumAdditives = 0
        this.additives.forEach((item, i, arr) => {
          sumAdditives += this.card.addon_item[1].sub_item[i].price * this.additives[i]
        });
        return Number(this.count * this.card.prices[this.size].price) +
          Number(this.card.addon_item[0].sub_item[this.dough].price) +
          sumAdditives

      }
    }
  }
</script>
<style scoped>
  .title-text {
    color: black;
    /* Цвет символа */
    font-size: 105%;
    /* Размер шрифта */
  }
</style>