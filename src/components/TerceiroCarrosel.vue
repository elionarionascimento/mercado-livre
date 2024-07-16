<template>

    <div class="car3" v-if="state.showComponent"></div>

    <div class="carrosel30" v-if="state.showComponent">
        <div class="carrosel3-10">
            <div class="assinar">
                <div class="meli">
                    <p class="a3fret"><b>meli+</b> Assine por R$ 17,99/mês</p>
                    <a href="#">Assinar o Meli+</a>
                </div>
            </div>

            <div class="beneficios">
                <p>Conte com os melhores benefícios no Mercado Livre e do Mercado Pago</p>

                <div class="frete">
                    <div class="bene1">
                        <div class="freteg">
                            <img :src="freteg" class="fg">
                        </div>

                        <p>Frete grátis em milhões de <br>
                        produtos a partir de R$ 29</p>
                    </div>

                    <div class="bene1">
                        <div class="freteg">
                            <img :src="dsg" class="fg">
                        </div>

                        <p>Disney+ e star+ <br> sem custo</p>
                    </div>

                    <div class="bene1">
                        <div class="freteg">
                            <img :src="dzg" class="fg">
                        </div>

                        <p>Deezer Premium 12 meses <br> sem custo</p>
                    </div>

                    <div class="bene1">
                        <div class="freteg">
                            <img :src="bng" class="fg">
                        </div>

                        <p>60% OFF no Ultrapasse e <br> outros benefícios</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="areaplay" v-if="state.showComponent">
        <div class="play"> 
            <a href="#"> 
                <div class="mercadoplay">
                    <p>mercado<br>play</p>

                    <div class="agora">
                        <h3>Agora você pode assistir <br> Séries e filmes</h3> <br>

                        <p class="gratis">GRÁTIS</p>
                    </div>

                    <div class="acesse"> <a href="#">Acesse o Mercado Play</a> </div>
                </div>
                
            </a>
            <div class="play2">
                <a href="#">Reproduzir</a>
            </div>
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


        name: "TerceiroCarrosel",
        props:["freteg", "dsg", "dzg", "bng"],
        data(){
            return{
            }
        },

       
    }
</script>

<style>
    .car3{
        border: solid 0px black;
        height: 50px;
        background-color: rgb(228, 228, 228);
    }

    .carrosel30{
        border: solid 0px blue;
        height: 400px;
        background-color: rgb(228, 228, 228);
        display: flex;
        justify-content: center;
    }

            .assinar{
                border: solid 0px green;
                border-radius: 4px 4px 0 0;
                width: 1190px;
                height: 70px;
                background: linear-gradient(45deg, rgb(84, 0, 105), rgb(168, 0, 190) );
                display: flex;
                justify-content: center;
            }

            .meli{
                border: solid 0px white;
                width: 1145px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .meli p{
                font-size: 20px;
                color: white;
                font-weight: 500;
            }

            .meli p b{
                border: solid 1px white;
                    border-radius: 20px 20px 20px 0;
                    color: white;
                    font-size: 18px;
            }

            .meli a{
                padding: 5px 8px 8px 8px;
                border-radius: 4px;
                border: solid 0px white;
                background-color: rgba(221, 221, 221, 0.397);
                color: white;
            }

            .beneficios{
                border: solid 0px black;
                border-radius: 00px 0 8px 8px;
                height: 160px;
                background-color: white;
            }   

            .beneficios p{
                font-size: 18px;
                font-weight: 500;
                margin-left: 20px;
                padding-top: 20px;
            }

            .bene1{
                border: solid 0px blue;
                display: flex;
            }

            .bene1 p{
                font-size: 13px;
                margin-top: -10px;
            }

            .frete{
                border: solid 0px black;
                width: 1148px;
                height: 75px;
                margin-top: 20px;
                margin-left: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

                    .freteg{
                        border: solid 1px rgb(228 228 228);
                        border-radius: 4px;
                        width: 65px;
                        height: 55px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .fg{
                        border: solid 0px black;
                        width: 40px;
                        height: 40px;
                    }

        .areaplay{
            border: solid 0px black;
            background-color: rgb(228, 228, 228);
            height: 350px;
            display: flex;
            justify-content: center;
            margin-top: -100px;
        }

                .play{
                    border: solid 0px blue;
                    width: 1190px;
                    border-radius: 4px;
                    background-image: url('/public/img/catalogo.jpg');
                    background-size: cover;
                    display: flex;
                }

                .play2{
                    border: solid 0px orange;
                    width: 500px;
                    height: 310px;
                    margin-left: 285px;
                    margin-top: 20px;
                    background-color: rgba(63, 63, 63, 0.705);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                        .play2 a{
                            border: solid 0px blue;
                            padding: 8px 10px;
                            border-radius: 4px;
                            color: white;
                            font-weight: 500;
                            background-color: rgba(216, 216, 216, 0.39);
                        }

                .mercadoplay{
                    border: solid 0px white;
                    height: 347px;
                    width: 380px;
                }

               .acesse{
                background-color: rgba(221, 221, 221, 0.397);
                margin-top: 20px;
                width: 180px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                margin-left: 30px;
                margin-top: 50px;
               }

               .acesse a{
                color: white;
                font-weight: 500;
               }
                
                .mercadoplay p{
                    border: solid 1px rgb(255, 232, 0);
                    height: 45px;
                    width: 120px;
                    background-color: rgb(255, 232, 0);
                    color: rgb(0, 0, 126);
                    font-size: 15px;
                    font-weight: 700;
                    border-radius: 60px;
                    margin-left: 30px;
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .mercadoplay h3{
                    color: white;
                    margin-left: 30px;
                    font-size: 28px;
                    font-weight: 500;
                }

                .agora{
                    margin-top: 20px;
                }

                .agora .gratis{
                    border: solid 1px rgb(0, 160, 0);
                    background-color: rgb(0, 160, 0);
                    color: white;
                    width: 60px;
                    height: 25px;
                    font-size: 12px;
                    position: relative;
                    margin-top: -10px;
                }
</style>