<template>

  <div class="ar" v-if="state.showComponent">
          <div class="correr" :style="{marginLeft: correr + 'px'}" >
            <div v-for="obj in objetoimagens" :key="obj.id">
              <img class="imgcorrer" :src="obj.image">
            </div> 
          </div>
  <button @click="correndo"></button>
  </div> 

</template>

<script>
  import { state } from './state.js';

export default {

  setup() {
            return {
                state,
            };
        },

  components: {

  },

  data(){
    return{     
      moveCount: 0,
      MaxMoves: 4,
      moveDistance: 100, 
      correr: 4500,
      aqui: 'tudobem',


  objetoimagens:[
  {
    "Titulo": "promo1",
    "id": 1,
    "image": "./img/promo1.jpg"
  },
  {
    "Titulo": "promo1",
    "id": 2,
    "image": "./img/promo2.jpg"
  },
  {
    "Titulo": "promo1",
    "id": 3,
    "image": "./img/promo3.jpg"
  },
  {
    "Titulo": "promo1",
    "id": 4,
    "image": "./img/promo4.jpg"
  }
  ]
    }
  },


methods:{

    correndo(){
      this.correr -=2998;
    },

    mudar(){
      this.aqui = 'nova palavra'
    }

},

mounted(){
  const interval = 2000;
  let executionCount = 1;
  const maxExecutions = 3;

  const intervalId = setInterval(() =>{
    if(executionCount <= maxExecutions){
      this.correndo();
      executionCount++
      console.log(executionCount)

    } /*else if(executionCount == 4){
      executionCount = 1;
      this.correr +=8993
    } */else {
      clearInterval(intervalId);
    }
  }, interval);
}

}

</script>

<style>

.ar{
    border: solid 0px orange;
    display: flex;
    background-color: rgb(228, 228, 228);
    height: 455px;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }

.primeiroconteudo{
  border: solid 0px black;
  display: flex;
  height: 290px;
  margin-top: -300px;
}

.correr{
  border: solid 0px black;
  display: flex;
  transition: 0.9s;
  height: 450px;
}

.imgcorrer{
  width: 1499px;
  height: 400px;
  margin-top: 0px;
}

#obj_bot{
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  width: 160px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeiraimg1{
  width: 124px;
  height: 115px;
  border-radius: 4px;
  margin-top: 10px;
}

.areadentro{
  border: solid 0px black;
  width: 154px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tit{
  font-weight: 500;
  margin-top: 15px;
  text-align: center;
  color: rgb(41, 41, 41);
}

.valor{
  font-size: 18px;
  font-weight: 500;
  margin-left: -86px;
  margin-top: 10px;
}

.descri{
  font-size: 14px;
  color: rgb(66, 66, 66);
  font-weight: 400;
  margin-top: -5px;
}

.descri:hover{
  color: rgb(36, 122, 252);
}

/*--------------Responsividade--------------*/


@media(min-width: 1356px) and (max-width: 1851px){
 
}
 
   
</style>