<template>
    <div class="primeiroconteudo" v-if="state.showComponent">

<div class="areadireita">
          <a v-if="esquerda" @click="voltar" class="mover1" >&#60;</a>
      </div>

      <div class="areaimg">
        <div class="areaimg1" :style="{marginLeft: marginLeft + 'px'}">

          <div @click="proximo" class="produtol1" v-for="obj in objetos" :key="obj.id">
          
                <div class="areadentro">
                  <p class="tit">{{ obj.Titulo }}</p> 

                  <img class="primeiraimg1" :src="obj.img"> <br>

                  <p class="descri">{{ obj.title }}</p>
                </div>

                <p class="valor">{{ obj.valor }}</p>

                
                <a id="obj_bot" href="#" v-if="obj.botao" :style="obj.style"> {{ obj.botao }} </a>
          </div>

        </div>
      </div>

<div class="areadireita">
    <a v-if="direita" @click="mover" class="mover" >&#62;</a>
</div>

</div>
</template>

<script>
import { state } from './state.js';


    export default{

      setup() {
            return {
                state,
            };
        },


        name: "PrimeiroCarrose",
        data(){
            return{

                marginLeft: 0,
      esquerda: false,
      direita: true,


                objetos:[
  {
    "Titulo": "Compre seu favorito",
    "img": 'img/blusa1.jfif',
    "id": 1,
    "title": "Camiseta Dry Fit - academia",
    "valor": "R$ 33,00"
  },
  {
    "Titulo": "Visto recentemente",
    "img": 'img/blusa2.jpg',
    "id": 2,
    "title": "Camiseta Dry Fit - academia",
    "valor": "R$ 33,00"
  },
  {
    "Titulo": "Também te interessa",
    "img": 'img/blusa3.jpg',
    "id": 3,
    "title": "Camiseta Dry Fit - academia",
    "valor": "R$ 33,00"
  },
  {
    "Titulo": "O que você quer",
    "img": 'img/eletro1.jpg',
    "id": 4,
    "title": "Geladeira frost free Consul inoxidável 220V",
    "valor": "R$ 3.299"
  },
  {
    "Titulo": "Para sua casa",
    "img": 'img/eletro2.jpg',
    "id": 5,
    "title": "Maquina de lavar Brastemp 13Kg ",
    "valor": "R$ 1.994"
  },
  {
    "Titulo": "Meios de pagamento",
    "img": 'img/meiosml.jpeg',
    "id": 6,
    "title": "Pague suas compras com rapidez e segurança",
    "botao": "Mostrar meios",
    "style": {color: 'rgb(0, 110, 255)', backgroundColor: 'rgb(205, 225, 253)', marginTop: '19px'}
  },
  {
    "Titulo": "Menos de R$100",
    "img": 'img/menos.jpeg',
    "id": 7,
    "title": "Confira produtos com preços baixos",
    "completed": false,
    "botao": "Mostrar produtos",
    "style": {color: 'rgb(0, 110, 255)', backgroundColor: 'rgb(205, 225, 253)', marginTop: '19px'}
  },
  {
    "Titulo": "Mais vendidos",
    "img": 'img/vendidosml.png',
    "id": 8,
    "title": "Explore os produtos que são tendências",
    "completed": false,
    "botao": "Ir para Mais vendidos",
    "style": {color: 'rgb(0, 110, 255)', backgroundColor: 'rgb(205, 225, 253)', marginTop: '19px'}
  },
  {
    "Titulo": "Compra garantida",
    "img": 'img/garantida.png',
    "id": 9,
    "title": "Você pode devolver  suas compra grátis ",
    "completed": false,
    "botao": "Como funciona",
    "style": {color: 'rgb(0, 110, 255)', backgroundColor: 'rgb(205, 225, 253)', marginTop: '19px'}
  },
  {
    "Titulo": "Lojas oficiais",
    "img": 'img/oficiais.jpeg',
    "id": 10,
    "title": "Suas marcas preferidas",
    "completed": false,
    "botao": "Mostrar lojas",
    "style": {color: 'rgb(0, 110, 255)', backgroundColor: 'rgb(205, 225, 253)', marginTop: '38px'}
  },
  {
    "Titulo": "Nossas categorias",
    "img": 'img/categorias.jpeg',
    "id": 11,
    "title": "Encontre celulares, roupas, imóveis e muito mais",
    "completed": false,
    "botao": "Ir para categorias",
    "style": {color: 'rgb(0, 110, 255)', backgroundColor: 'rgb(205, 225, 253)'}
  }
],
            }
        },

        methods:{
        mover(){
      this.marginLeft -= 980
      this.esquerda = true
      this.direita = false
    },

    voltar(){
      this.marginLeft += 980
      this.esquerda = false
      this.direita = true
    },
        }
        
    }
</script>

<style>

.primeiroconteudo{
  border: solid 0px black;
  display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -170px;
        background-color: rgb(228, 228, 228);
}

.areadireita{
  border: solid 0px green;
  width: 90px;
  height: 100px;
  margin-top: 50px;
}

.areadireita a{
  font-size: 40px;
  color: rgb(36, 122, 252);
  margin-top: -30px;
  padding: 9px 22px;
  border-radius: 40px;
  font-weight: 300;
}

.areadireita .mover1{
  margin-left: 60px;
  position: relative;
}

.botoes{
  border: solid 0px blue;
  height: 60px;
  display: flex;
  position: relative;
  margin-top: 100px;
}

.areadireita .mover, .mover1{
  width: 100px;
  background-color: white;
  border-radius: 40px;
  margin-left: -40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  cursor: pointer;
}

.mover:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.mover1:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.listaproduto1{
  border: solid 1px blue;
  height: 240px;
}

.areaimg1{
  border: solid 0px orange;
  width: 2400px;
  display: flex;
  transition: 0.3s;
  margin-top: 270px;
}

      .produtol1{
        border: solid 0px blue;
        width: 184px;
        border-radius: 4px;
        height: 280px;
        background-color: white;
        margin-left: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-top: -270px;
      }

  .areaimg{
    border: solid 0px blue;
    width: 1188px;
    overflow-x: hidden;  
  }
   
</style>