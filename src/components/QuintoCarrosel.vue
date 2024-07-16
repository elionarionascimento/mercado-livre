<template>
    <div class="cinco"></div>

    <div class="carro5-1" v-if="state.showComponent">

        <div class="areadireita5">
              <a v-if="esquerda" @click="voltar" class="mover5" >&#60;</a>
        </div>

        <div class="selecionado">

            <div class="l5">
                    <h4>Também pode se interessar</h4>

                    <div class="pontos">
                        <div :style="{backgroundColor: cor1}" class="ponto1"></div>
                        <div :style="{backgroundColor: cor2}" class="ponto2"></div>
                        <div :style="{backgroundColor: cor3}" class="ponto3"></div>
                        <div :style="{backgroundColor: cor4}" class="ponto4"></div>
                    </div>
            </div>



            <div class="area05" :style="{marginLeft: marginLeft + 'px'}">
                            <div class="produtol5" v-for="obj4 in objetos4" :key="obj4.id">

                                <div class="areadentro5">
                                    <img class="primeiraimg5" :src="obj4.img">  <br>

                                    <p class="descri">{{ obj4.title }}</p> 

                                    <p class="de5">{{ obj4.de }}</p>
                                    <p class="valor5">{{ obj4.valor }} </p>
                                    <p class="off5">{{ obj4.off }}</p>
                                    <p class="parcelas5">{{ obj4.parcelas }}</p>
                                    <p class="gratis5" :style="obj4.style">{{ obj4.gratis }}</p>

                                </div>
                            </div>
            </div>

        </div>

        <div class="areadireita5">
              <a v-if="direita" @click="mover" class="mover05" >&#62;</a>
        </div>
    </div>




    <div class="rodape" :style="{marginBottom: subir + 'px'}">
        <div class="info3">
                <div class="quadro">
                    <img class="pagar" :src="pagar">
                    <p class="titulopagar">Escolha como pagar</p>
                    <p class="descripagar">Com o Mercado Pago, você paga
                    com cartão, boleto ou Pix. Você 
                    também pode pagar em até 12x no
                    boleto com o Mercado Crédito.</p>

                    <a class="botaopagar" href="#">Como pagar com mercado livre</a>
                </div>
                    
                    <hr class="vertical">
                
                <div class="quadro">
                    <img class="pagar" :src="frete">
                    <p class="titulopagar">Frete grátis a partir de R$ 79</p>
                    <p class="descripagar">Ao se cadastrar no Mercado Livre, 
                        você tem frete grátis em milhares de produtos.</p>
                </div>
                    
                    <hr class="vertical">

                <div class="quadro">
                    <img class="pagar" :src="seguranca">
                    <p class="titulopagar">Segurança do início ao fim</p>
                    <p class="descripagar">Você não gostou do que comprou? Devolva! 
                        No Mercado Livre não há nada que você não possa fazer, 
                       porque você está sempre protegido.</p>
                    <a class="botaopagar" href="#">Como pagar com mercado livre</a>                    
                </div>
            </div>

            <div class="botaobaixo" @click.prevent="dsc">
                <a  href="#" >Mais informações</a>

                <img class="cima" :src="cima" :class="{ 'flipped-image': isFlipped }">
            </div>
    </div>


    <div class="maisinfo">

    <div class="sobreinfo2" >
        <div class="sobre">
                <p class="sob-o">Sobre o</p>
                <a href="#">Mercado livre</a>
                <a href="#">Investor relations</a>
                <a href="#">Tendências</a>
                <a href="#">Sustentabilidade</a>
                <a href="#">Blog</a>
        </div>

        <div class="outros">
                <p class="sob-o">Outros sites</p>
                <a href="#">Desenvolvedores</a>
                <a href="#">Mercado Pago</a>
                <a href="#">Envios</a>
                <a href="#">Mercado Shops</a>
                <a href="#">Mercado Ads</a>
        </div>

        <div class="sobre">
                <p class="sob-o">Contato</p>
                <a href="#">Comprar</a>
                <a href="#">Vender</a>
                <a href="#">Solução de problemas</a>
                <a href="#">segurança</a>
        </div>

        <div class="sobre"> 
                <p class="sob-o">Redes sociais</p>
                <a href="#">X</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">YouTube</a>
            </div>
            <div class="outros">
                <p class="sob-o">Minha conta</p>
                <a href="#">Resumo</a>
                <a href="#">Favoritos</a>
                <a href="#">Vender</a>
            </div>
            <div class="contato">
                <p class="sob-o">Assinaturas</p>
                <a href="#">Meli+</a>
                <a href="#">Disney+</a>
                <a href="#">Star+</a>
                <a href="#">Deezer Premium</a>
                <a href="#">Max</a>
                <a href="#">Paramount+</a>
            </div>
    </div>

</div>

    <div class="autor">
        <p>Elionário&reg;</p>
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

        name: "CincoCarrosel",

        props:["pagar", "frete", "seguranca", "cima"],

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

            apertar(){
                this.crescer += 100
            },

            dsc(){
                if(this.subir == -100){
                    this.subir = 78
                    this.virar = !this.virar

                }else if(this.subir == 78){
                    this.subir = -100
                }
            }
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
                subir: -100,
                virar: false,
                             

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
.rodape{
    border: solid 0px black;
    background-color: white;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.9s;

}

.info3{
    border: solid 0px green;
    width: 1170px;
    height: 200px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.quadro{
    border: solid 0px blue;
    width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pagar{
    width: 50px;
    height: 50px;
}

.vertical{
    height: 70px;
    margin-top: 50px;
}

.titulopagar{
    font-size: 18px;
    margin-top: 5px;
}

.descripagar{
    text-align: center;
    font-size: 15px;
    color: rgb(63, 63, 63);
}

.botaopagar{
    color: rgb(36, 122, 252);
    font-size: 14px;
    margin-top: 5px;
}

.maisinfo{
    border: solid 0px green;
    display: flex;
    justify-content: center;
    background-color: white;
    /*background-color: rgb(238, 238, 238);*/
    margin-top: 0px;
}

.sobreinfo2{
    border: solid 0px blue;
    background-color: white;
    width: 1190px;
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -78px;
}

.sobre, .outros, .contato{
    display: flex;
    flex-direction: column;
}

        .sob-o{
            font-weight: 600;
            margin-bottom: 10px;
        }

        .sobre, .outros, .contato, a{
            font-size: 14px;
            color: gray;
            font-weight: 400;
        }


.botaobaixo{
    width: 200px;
    height: 30px;
    border-left: solid 1px gray;
    border-right: solid 1px gray;
    border-top: solid 1px gray;
    border-left: solid 1px gray;
    border-radius: 6px 6px  0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.botaobaixo a{
    color: black;
    font-weight: 500;
}

.cima{
    width: 20px;
    height: 13px;
    margin-left: 10px;
    margin-top: 5px;

}

.autor{
    border-top: solid 1px gray;
    display: flex;
    justify-content: center;
}






.flipped-image {
  transform: rotate(180deg);
  transition: transform 0.5s;
}



















.areadireita5{
  border: solid 0px green;
  width: 90px;
  height: 100px;
  margin-top: 185px;
}

.areadireita5 a{
  font-size: 40px;
  color: rgb(36, 122, 252);
  margin-top: -30px;
  padding: 9px 22px;
  border-radius: 40px;
  font-weight: 300;
}

.areadireita5 .mover5{
  margin-left: 50px;
  position: relative;
}

.areadireita5 .mover05{
    margin-left: -28px;
}

.areadireita5 .mover5, .mover05{
  width: 100px;
  background-color: white;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  cursor: pointer;
}

.areadentro5{
        border: solid 0px black;
        width: 154px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .cinco{
        border: solid 0px black;
        background-color: rgb(228, 228, 228);
        height: 75px;
    }
    
                    .carro5-1, .carro5-1{
                        border: solid 0px black;
                        height: 470px;
                        display: flex;
                        justify-content: center;
                        background-color: rgb(228, 228, 228);
                    }
                    
                    .selecionado{
                        border: solid 0px blue;
                        width: 1190px;
                        height: 420px;
                        border-radius: 4px;
                        background-color: white;
                        overflow-x: hidden;
                        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    }

                    .l5{
                        border: solid 0px black;
                        width: 1158px;
                        display: flex;
                        justify-content: space-between;
                        align-items: baseline;
                    }

                    .carro5-1 h4{
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


.area05{
    border: solid 0px black;
    width: 4780px;
    height: 320px;
    display: flex;
    margin-left: 0px;
    margin-top: 25px;
    transition: 0.3s;
}

                .produtol5{
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

                .primeiraimg5{
                    width: 154px;
                    height: 145px;
                    border-radius: 4px;
                    margin-top: 10px;
                    }

                    .de5{
                        font-size: 12px;
                        margin-left: -108px;
                        margin-top: 10px;
                        color: gray;
                        text-decoration: line-through;
                    }

                    .valor5{
                        font-size: 21px;
                        font-weight: 500;
                        margin-left: -73px;
                        margin-top: 0px;
                    }

                    .off5{
                        color: rgb(0, 179, 45);
                        font-weight: 500;
                        position: relative;
                        margin-top: -24px;
                        margin-left: 80px;
                        font-size: 14px;
                    }

                    .parcelas5{
                        font-size: 13px;
                        margin-left: -51px;
                        margin-top: 5px;
                    }

                    .gratis5{
                        margin-left: -72px;
                        margin-top: 20px;
                        font-weight: 500;
                        color: rgb(0, 179, 45);
                    }


</style>