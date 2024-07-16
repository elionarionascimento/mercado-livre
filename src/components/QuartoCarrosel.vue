<template>
    <div class="quarto"></div>

    <div class="carro4-1" v-if="state.showComponent">

        <div class="areadireita4">
              <a v-if="esquerda" @click="voltar" class="mover4" >&#60;</a>
        </div>

        <div class="relacionado">

            <div class="l4">
                    <h4>Inspirado nos seus favoritos</h4>

                    <div class="pontos">
                        <div :style="{backgroundColor: cor1}" class="ponto1"></div>
                        <div :style="{backgroundColor: cor2}" class="ponto2"></div>
                        <div :style="{backgroundColor: cor3}" class="ponto3"></div>
                        <div :style="{backgroundColor: cor4}" class="ponto4"></div>
                    </div>
            </div>



            <div class="area04" :style="{marginLeft: marginLeft + 'px'}">
                            <div class="produtol4" v-for="obj4 in objetos4" :key="obj4.id">

                                <div class="areadentro4">
                                    <img class="primeiraimg4" :src="obj4.img">  <br>

                                    <p class="descri">{{ obj4.title }}</p> 

                                    <p class="de4">{{ obj4.de }}</p>
                                    <p class="valor4">{{ obj4.valor }} </p>
                                    <p class="off4">{{ obj4.off }}</p>
                                    <p class="parcelas4">{{ obj4.parcelas }}</p>
                                    <p class="gratis4" :style="obj4.style">{{ obj4.gratis }}</p>

                                </div>
                            </div>
            </div>

        </div>

        <div class="areadireita4">
              <a v-if="direita" @click="mover" class="mover04" >&#62;</a>
        </div>
    </div>



    <div cla>

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

        name: "QuartoCarrosel",
        methods:{
            mover(){
                this.marginLeft -=1170
                this.esquerda = true
                this.contador1++; 

                if(this.contador1 == 2){
                    this.cor1 = "rgb(228, 228, 228)"
                    this.cor2 = "rgb(36, 122, 252)"
                    //this.direita = false
                    console.log(this.contador1)
                    
                } else if(this.contador1 == 3){
                    this.cor1 = "rgb(228, 228, 228)",
                    this.cor2 = "rgb(228, 228, 228)",
                    this.cor3 = "rgb(36, 122, 252)"

                } else if(this.contador1 == 4){
                    this.cor1 = "rgb(228, 228, 228)",
                    this.cor2 = "rgb(228, 228, 228)",
                    this.cor3 = "rgb(228, 228, 228)",
                    this.cor4 = "rgb(36, 122, 252)"
                    this.direita = false
                }
            },

            voltar(){
                this.marginLeft +=1170
                this.direita = true
                this.contador1--;
                if(this.contador1 == 3){
                    this.cor1 = "rgb(228, 228, 228)",
                    this.cor2 = "rgb(228, 228, 228)",
                    this.cor3 = "rgb(36, 122, 252)"
                    this.cor4 = "rgb(228, 228, 228)"
                    
                } else if(this.contador1 == 2){
                    this.cor1 = "rgb(228, 228, 228)",
                    this.cor2 = "rgb(36, 122, 252)"
                    this.cor3 = "rgb(228, 228, 228)",
                    this.cor4 = "rgb(228, 228, 228)"
                    
                } else if(this.contador1 == 1){
                    this.cor1 = "rgb(36, 122, 252)"
                    this.cor2 = "rgb(228, 228, 228)",
                    this.cor3 = "rgb(228, 228, 228)",
                    this.cor4 = "rgb(228, 228, 228)"
                    this.esquerda = false
                }
            },

        },
        data(){
            return{
                contador1: 1,
                cor1: "rgb(36, 122, 252)",
                cor2: "rgb(228, 228, 228)",
                cor3: "rgb(228, 228, 228)",
                cor4: "rgb(228, 228, 228)",

                marginLeft: -4,
                esquerda: false,
                direita: true,

                objetos4:[
                    {
                        "Titulo": "Compre seu favorito",
                        "img": 'img/blusa1.jfif',
                        "id": 1,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Visto recentemente",
                        "img": 'img/blusa2.jpg',
                        "id": 2,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Também te interessa",
                        "img": 'img/blusa3.jpg',
                        "id": 3,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis",
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 4,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Para sua casa",
                        "img": 'img/eletro2.jpg',
                        "id": 5,
                        "title": "Maquina de lavar Brastemp 13Kg ",
                        "de": "R$ 2.599",
                        "valor": "R$ 1.994",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 199,40",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 6,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Compre seu favorito",
                        "img": 'img/blusa1.jfif',
                        "id": 7,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Visto recentemente",
                        "img": 'img/blusa2.jpg',
                        "id": 8,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Também te interessa",
                        "img": 'img/blusa3.jpg',
                        "id": 9,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 10,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Para sua casa",
                        "img": 'img/eletro2.jpg',
                        "id": 11,
                        "title": "Maquina de lavar Brastemp 13Kg ",
                        "de": "R$ 2.599",
                        "valor": "R$ 1.994",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 199,40",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 12,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Compre seu favorito",
                        "img": 'img/blusa1.jfif',
                        "id": 13,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Visto recentemente",
                        "img": 'img/blusa2.jpg',
                        "id": 14,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Também te interessa",
                        "img": 'img/blusa3.jpg',
                        "id": 15,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 16,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Para sua casa",
                        "img": 'img/eletro2.jpg',
                        "id": 17,
                        "title": "Maquina de lavar Brastemp 13Kg ",
                        "de": "R$ 2.599",
                        "valor": "R$ 1.994",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 199,40",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 18,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Compre seu favorito",
                        "img": 'img/blusa1.jfif',
                        "id": 19,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Visto recentemente",
                        "img": 'img/blusa2.jpg',
                        "id": 20,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Também te interessa",
                        "img": 'img/blusa3.jpg',
                        "id": 21,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 22,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 2.599",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "Para sua casa",
                        "img": 'img/eletro2.jpg',
                        "id": 23,
                        "title": "Maquina de lavar Brastemp 13Kg ",
                        "de": "R$ 2.599",
                        "valor": "R$ 1.994",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 199,40",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                    {
                        "Titulo": "O que você quer",
                        "img": 'img/eletro1.jpg',
                        "id": 24,
                        "title": "Geladeira frost free Consul inoxidável 220V",
                        "de": "R$ 3.899",
                        "valor": "R$ 3.299",
                        "off": "10% OFF",
                        "parcelas": "em 10x R$ 329,90",
                        "gratis": "Frete grátis",
                        "style": {marginTop: '8px'}
                    },
                ],

            }
        }
    }
</script>

<style>

.areadireita4{
  border: solid 0px green;
  width: 90px;
  height: 100px;
  margin-top: 185px;
}

.areadireita4 a{
  font-size: 40px;
  color: rgb(36, 122, 252);
  margin-top: -30px;
  padding: 9px 22px;
  border-radius: 40px;
  font-weight: 300;
}

.areadireita4 .mover4{
  margin-left: 50px;
  position: relative;
}

.areadireita4 .mover04{
    margin-left: -28px;
}

.areadireita4 .mover4, .mover04{
  width: 100px;
  background-color: white;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  cursor: pointer;
}

.areadentro4{
        border: solid 0px black;
        width: 154px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .quarto{
        border: solid 0px black;
        background-color: rgb(228, 228, 228);
        height: 75px;
    }
    
                    .carro4-1, .carro5-1{
                        border: solid 0px black;
                        height: 390px;
                        display: flex;
                        justify-content: center;
                        background-color: rgb(228, 228, 228);
                    }
                    
                    .relacionado{
                        border: solid 0px blue;
                        width: 1190px;
                        height: 420px;
                        border-radius: 4px;
                        background-color: white;
                        overflow-x: hidden;
                        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    }

                    .l4{
                        border: solid 0px black;
                        width: 1158px;
                        display: flex;
                        justify-content: space-between;
                        align-items: baseline;
                    }

                    .carro4-1 h4{
                        margin-left: 15px;
                        margin-top: 20px;
                        font-size: 20px;
                        font-weight: 500;
                    }

                    .pontos{
                        display: flex;
                        margin-left: -100px;
                    }

                    .ponto1, .ponto2, .ponto3, .ponto4{
                        border: solid 0px black;
                        width: 6px;
                        height: 6px;
                        border-radius: 25px;
                        margin-left: 3px;
                    }


.area04{
    border: solid 0px black;
    width: 4780px;
    height: 320px;
    display: flex;
    margin-left: 0px;
    margin-top: 25px;
    transition: 0.3s;
}

                .produtol4{
                    border: solid 0px blue;
                    width: 184px;
                    border-radius: 4px;
                    height: 318px;
                    background-color: white;
                    margin-left: 11px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;
                }

                .primeiraimg4{
                    width: 154px;
                    height: 145px;
                    border-radius: 4px;
                    margin-top: 10px;
                    }

                    .de4{
                        font-size: 12px;
                        margin-left: -108px;
                        margin-top: 10px;
                        color: gray;
                        text-decoration: line-through;
                    }

                    .valor4{
                        font-size: 21px;
                        font-weight: 500;
                        margin-left: -73px;
                        margin-top: 0px;
                    }

                    .off4{
                        color: rgb(0, 179, 45);
                        font-weight: 500;
                        position: relative;
                        margin-top: -24px;
                        margin-left: 80px;
                        font-size: 14px;
                    }

                    .parcelas4{
                        font-size: 13px;
                        margin-left: -51px;
                        margin-top: 5px;
                    }

                    .gratis4{
                        margin-left: -72px;
                        margin-top: 20px;
                        font-weight: 500;
                        color: rgb(0, 179, 45);
                    }

</style>