<template>
    <div class="area">
        <div class="area0">
            <div class="area1">
                <a href="http://localhost:8080/"> <img :src="logoml" class="logoml"> </a>

                <div class="area1-2">
                        <div class="area1-3">
                            <a href="#"> <img :src="local" class="local"> </a>

                            <div class="area1-4"> 
                                <a href="#"><p>Enviar para Usuário</p> </a> 
                                <a href="#"> <p>Cidade, Bairro, Rua</p> </a>
                            </div>
                        </div>
                </div>
            </div>

            <div class="area2" v-on:mouseover="fecharusu">
                <input type="text" @keydown.enter="toggle" 
                v-on:keydown.enter="search" v-on:keyup.enter="verde" v-model="searchQuery" placeholder="Buscar produtos, marcas e muito mais...">

                <a href="#"> <div class="linha"> <img :src="lupa" class="lupa"> </div> </a>

                
                <nav v-on:mouseover="fechartec">
                    <ul>
                        <a href="#" v-on:mouseover="abrircate"> <li> Categorias &darr;</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Ofertas</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Histórico</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Supermercado</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Moda</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Mercado Play</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Vender</li> </a>
                        <a @mouseover="fechar1" href="#"> <li> Contato</li> </a>
                    </ul>
                </nav>

        <div class="menus">
                <div class="menu2" v-if="aparece1" @mouseleave="fechar1" ref="tab">
                    <nav> 
                        <ul>
                            <a v-on:mouseover="fechartec" href="#"><li>Veículos</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Supermercado</li></a>
                            <a v-on:mouseover="abrirtec" @mouseleave="manteraberto" ref="tab2" ><li>Tecnologia &rarr;</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Casa e Móveis</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Eletrodomésticos</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Esporte e Fitnes</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Ferramentas</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Construções</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Indústria e Comércio</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Saúde</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Acessórios para veículos</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Beleza e cuidados pessoais</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Moda</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Bebês</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Brinquedos</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Móveis</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Compra internacional</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Produtos sustetáveis</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Mais vendidos</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Lojas oficiais</li></a>
                            <a v-on:mouseover="fechartec" href="#"><li>Mais vendidos</li></a>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="menu2-1" v-if="aparece2" v-on:mouseleave="fechartec" @mouseleave="fechar1" > 
                    <p class="tec">Tecnologia</p>
                    <hr class="l1">

                    <div class="itens">
                        <div class="item1">
                            <a class="titulo" href="#"> <p>Celulares e Telefone</p> </a>
                            <a href="#"> <p>Acessórios para Celulares</p> </a>
                            <a href="#"> <p>Peças para Celulares</p> </a>
                            <br>

                            <a class="titulo" href="#"> <p>Informática</p> </a>
                            <a href="#"> <p>Componentes para PC</p> </a>
                            <a href="#"> <p>Impressão</p> </a>
                            <a href="#"> <p>Acessórios para Notebook</p> </a>
                            <a href="#"> <p>Conectividade e Redes</p> </a>
                            <a href="#"> <p>Software</p> </a>
                        </div>

                        <br>
                        <div class="item1">
                            <a class="titulo" href="#"> <p>Câmeras e Acessórios</p> </a>
                            <a href="#"> <p>Acessórios para Câmeras</p> </a>
                            <a href="#"> <p>Cameras</p> </a> <br>
                            

                            <a class="titulo" href="#"> <p>Eletrônica</p> </a>
                            <a href="#"> <p>Acessórios para Áudio e Vídeo</p> </a>
                            <a href="#"> <p>Áudio Portátil e Acessórios</p> </a>
                            <a href="#"> <p>Componentes Eletrônicos</p> </a>
                            <a href="#"> <p>Equipamento para Djs</p> </a>
                            <a href="#"> <p>Som Automotivo</p> </a>
                        </div>

                        <br>
                        <div class="item1">
                            <a class="titulo" href="#"> <p>Games</p> </a>
                            <a href="#"> <p>Vídeo Games</p> </a>
                            <a href="#"> <p>Fliperamas e Arcade</p> </a>

                            <br>
                            <a class="titulo" href="#"> <p>Televisores</p> </a>
                        </div>
                    </div>
            </div>
        </div>

            <div class="area3" v-on:mouseover="fechartec" @:mouseover=fechar1>
                <div class="area3-1" v-on:mouseover="fecharfav" @:mouseover="fecharusu">
                    <a href="#"><img :src="disney" class="disney"></a>
                    <p>Assine o <b>meli+</b> por <strong>R$ 17,99</strong></p>
                </div>

                <div class="area3-2">
                    <ul>
                        <a v-on:mouseover="abrirusu" href="#"> <li>UsuárioML &darr;</li> </a>
                        <a v-on:mouseover="fecharusu" @:mouseover="fecharfav" href="#"> <li>Compras</li> </a>
                        <a @mouseover="abrirfav" v-on:mouseover="fecharusu" href="#"> <li>Favoritos &darr;</li> </a>
                        <a v-on:mouseover="fecharusu" @:mouseover="fecharfav" href="#"> <img :src="avisos" class="avisos"> </a>
                        <a v-on:mouseover="fecharusu" href="#"> <img :src="carrinho" class="carrinho"> </a>
                    </ul>
                </div>     
                
                <div class="area3-3" v-if="aparece3" v-on:mouseleave="fecharusu">
                        <div class="a3">
                            <div class="ml">ML</div>
                            <div class="usuml"><a href="#"> UsuárioML</a> <br>
                                <p> <a href="#"> Meu Perfil </a></p>
                            </div>
                        </div>   
                        
                        <a class="frete2" href="#"> <p class="a3frete">Frete grátis a partir de R$ 29 com <b>meli+</b></p> </a>  

                        <hr class="hr1">

                        <div class="a4">
                            <a href="#"> Compras</a>
                            <a href="#"> Perguntas</a> 
                            <a href="#"> Opiniões</a>
                        </div>

                        <hr class="h2">

                        <div class="a5">
                            <a href="#"> Cupons</a>
                            <a href="#"> Empréstimos</a> 
                            <a href="#"> Assinatura</a>
                            <a href="#"> Mercado Play</a>
                            <a href="#"> Faturamento</a>
                        </div>
                </div>

                <div class="area3-4" v-if="aparece4" v-on:mouseleave="fecharfav">
                    <p>Favoritos</p>
                    <hr>
                </div>
            </div>
        </div>
    </div>   

    <!----------Área de resultado após a busca---------->

    <div class="verde" v-if="verdeaparece">
        <div class="itemverde" v-for="item in filteredArray" :key="item.id">
        
        <div class="areadentroverde">
            <img class="imgbusca" :src="item.img">
            <hr>
            <div class="infobusca">
                <p >{{ item.title }}</p>
                <p class="valor1">{{ item.valor }}</p>
                <p class="parcelas1">{{ item.parcelas }}</p>
                <p class="gratis1">{{ item.gratis }}</p>
            </div>
        </div>
        
        
    </div>

    </div>
    


    <!----------Área de resultado após a busca---------->
</template>

<script>
import { toggleComponent } from './state';

    export default{
        setup() {
            const toggle = () => {
            toggleComponent();
    };

    return{
        toggle,
    };
  },

        props:["logoml", "local", "disney", "lupa", "avisos", "carrinho"],
        data(){
            return{
                aparece1: false,
                aparece2: false,
                aparece3: false,
                aparece4: false,
                verdeaparece: false,

                searchQuery: '',
                items:[
                {
                        "Titulo": "Compre seu favorito",
                        "img": 'img/blusa1.jfif',
                        "id": 1,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "parcelas": "em 3x R$ 11,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Visto recentemente",
                        "img": 'img/blusa2.jpg',
                        "id": 2,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "parcelas": "em 3x R$ 11,00",
                        "gratis": "Frete grátis"
                    },
                    {
                        "Titulo": "Também te interessa",
                        "img": 'img/blusa3.jpg',
                        "id": 3,
                        "title": "Camiseta Dry Fit - academia",
                        "valor": "R$ 33,00",
                        "parcelas": "em 3x R$ 11,00",
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
                ],
                filteredArray:[]
            }
        },

        methods:{

            search(){
                this.filteredArray = this.items.filter(item =>
                    item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
                );

                if(this.filteredArray.value == ''){
                    console.log("nada encontrado")
                }
            },

            verde(){
                if(this.verdeaparece == false){
                    this.verdeaparece = true

                }else if(this.verdeaparece == true){
                    this.verdeaparece = false
                }
            },

            fechar1(event){
                const tabElement = this.$refs.tab;

                if (tabElement) {
                    const tabRect = tabElement.getBoundingClientRect();
                    const mouseX = event.clientX;
                    const mouseY = event.clientY;

                    // Fechar a aba se o mouse sair pela esquerda ou por baixo
                    if (mouseX < tabRect.left || mouseY > tabRect.bottom || mouseY < tabRect.top) {
                    this.aparece1 = false;
                    console.log("primeiras saídas")
                    
                }else if(mouseX > tabRect.right){
                    this.aparece1 = false
                    console.log("segunda saída")
                    }
                }
            },

            manteraberto(event){
                const tabElement2 = this.$refs.tab2;

                if(tabElement2){
                    const tabRect2 = tabElement2.getBoundingClientRect();
                    const mouseX2 = event.clientX2;

                    if(mouseX2 >= tabRect2.right){
                        this.aparece1 = true;
                        console.log("terceira saida")
                    }
                }
            },
            
            abrircate(){
                this.aparece1 = true
            },

            abrirtec(){
                this.aparece2 = true
            },

            fechartec(){
                this.aparece2 = false
            },

            abrirusu(){
                this.aparece3 = true
            },

            fecharusu(){
                this.aparece3 = false
            },

            abrirfav(){
                this.aparece4 = true
            },

            fecharfav(){
                this.aparece4 = false
            }
        }
    }
</script>

<style>

.areadentroverde{
    border: solid 2px white;
    margin-left: 10px;
    width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 50px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.imgbusca{
    width: 220px;
    height: 220px;
    margin-top: 5px;
}

.infobusca{
    border: solid 0px black;
    width: 240px;
    margin-top: 8px;
}

.valor1{
  font-size: 22px;
  font-weight: 500;
  
}

.parcelas1{
    font-size: 14px;
}

.gratis1{
    font-weight: 500;
    color: rgb(0, 179, 45);
    margin-top: 8px;
}



.verde{
    border: solid 0px black;
    height: 1000px;
    background-color: rgb(228, 228, 228);
    display: flex;
    justify-content: center;
}

body{
    overflow-y: scroll;
}
    *{
        margin: 0;
        padding: 0;
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .area{
        border: solid 0px black;
        display: flex;
        justify-content: center;
        height: 96px;
        background-color: rgb(255, 232, 0);
    }
    
    .area0{
        border: solid 0px blue;
        width: 1190px;
        display: flex;
        justify-content: center;
    }

    .area1{
        border: solid 0px green;
        width: 170px;
        margin-right: 30px;
    }

                .logoml{
                    width: 150px;
                }

                .area1-2{
                    border: solid 0px black;
                }

                .local{
                    width: 40px;
                }

                .area1-3{
                    display: flex;
                    align-items: center;
                }

                .area1-4 a{
                    font-size: 13px;
                    text-decoration: none;
                }

                .area1-3:hover{
                    border: solid 1px rgb(153, 153, 153);
                    border-radius: 4px;
                }

    .area2{
        border: solid 0px blue;
        width: 600px;
        margin-right: 54px;
    }
    
                .area2 input{
                    margin-top: 5px;
                    width: 578px;
                    height: 38px;
                    border: solid 1px white;
                    border-radius: 4px;
                    font-size: 18px;
                    padding-left: 20px;
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    outline: 0;
                }

                .area2 nav ul{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 28px;
                }

                .area2 nav a{
                    font-size: 14px;
                    text-decoration: none;
                    list-style-type: none;
                }

                .linha{
                    height: 26px;
                    border-left: 1px solid;
                    position: relative;
                    margin-top: -33px;
                    margin-left: 550px;
                }

                .lupa{
                    width: 20px;
                    position: relative;
                    margin-left: 12px;
                    margin-top: 3px;
                }


                                .menus{
                                    display: flex;
                                }

                                .menu2{
                                    border: solid 0px black;
                                    background-color: rgb(68, 68, 68);
                                    width: 250px;
                                    height: 890px;
                                    border-radius: 4px 0px 0px 4px;
                                    margin-top: 8px;
                                    margin-left: -12px;
                                    position: relative;
                                }

                                .menu2 nav ul{
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    padding-top: 0px;
                                }

                                .menu2 nav ul a li{
                                    height: 30px;
                                    color: white;
                                    padding-left: 30px;
                                    padding-top: 10px;
                                }

                                .menu2 nav ul li:hover{
                                    background-color: rgb(36, 122, 252);
                                }

                                        .menu2-1{
                                            border: solid 1px rgb(36, 122, 252);
                                            background-color: white;
                                            border-radius: 0px 4px 4px 0px;
                                            width: 880px;
                                            height: 886px;
                                            margin-top: -890px;
                                            margin-left: 238px;
                                            position: relative;
                                        }

                                        .tec{
                                            font-size: 22px;
                                            margin-top: 35px;
                                            margin-left: 35px;
                                        }

                                        .l1{
                                            width: 800px;
                                            margin-left:35px;
                                            margin-top: 10px
                                        }

                                        .itens{
                                            margin-left: 35px;
                                            margin-top: 30px;
                                            border: solid 0px green;
                                            width: 640px;
                                            display: flex;
                                            justify-content: space-between;
                                        }

                                        .item1 a {
                                            text-decoration: none;
                                            font-size: 14px;
                                        }

                                        .item1 a p:hover{
                                            color: rgb(36, 122, 252);
                                            transition: 0.2s;
                                        }
                                      

    .area3{
        border: solid 0px red;
        width: 314px;
    }

                .disney{
                    width: 90px;
                    margin-top: 5px;
                }

                .area3-1{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .area3-1 p{
                    width: 240px;
                    height: 33px;
                    line-height: 35px;
                    background: linear-gradient(45deg, rgb(84, 0, 105), rgb(168, 0, 190) );
                    color: white;
                    border-radius: 20px 20px 20px 0;
                    text-align: center;
                }

                .area3-1 p b{
                    border: solid 1px white;
                    border-radius: 20px 20px 20px 0;
                    width: 47px;
                    color: white;
                }

                .area3-1 p strong{
                    color: white;
                }

                .area3-2 ul{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    margin-top: 12px;
                }

                .area3-2 ul a{
                    text-decoration: none;
                    list-style-type: none;
                    font-size: 14px;
                }

                .avisos, .carrinho{
                    width: 32px;
                }

                .carrinho{
                    width: 22px;
                }

                .area3-3{
                    border: solid 1px rgb(36, 122, 252);
                    display: flex;
                    flex-direction: column;
                    margin-left: -130px;
                    position: relative;
                    width: 320px;
                    height: 450px;
                    border-radius: 4px;
                    background-color: white;
                }

                .a3{
                    border: solid 0px black;
                    display: flex;
                }

                .ml{
                    background-color: white;
                    border: solid 1px gray;
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 15px;
                    margin-top: 15px;
                }

                .usuml{
                    margin-top: 15px;
                    margin-left: 10px;
                }

                .usuml a{
                    text-decoration: none;
                    font-weight: 600;
                }

                .usuml p{
                    font-size: 12px;
                    font-weight: 200;
                }

                .a3frete{
                    width: 290px;
                    height: 33px;
                    line-height: 35px;
                    background: linear-gradient(45deg, rgb(84, 0, 105), rgb(168, 0, 190) );
                    color: white;
                    border-radius: 0px 20px 20px 20px;
                    text-align: center;
                    margin-left: 15px;
                    margin-top: 10px;
                }

                .area3-3 .frete {
                    text-decoration: none;
                }

                .area3-3 p{
                    font-size: 14px;
                }

                .area3-3 p b{
                    border: solid 1px white;
                    border-radius: 20px 20px 20px 0;
                    width: 47px;
                    color: white;
                }

                .hr1, .h2{
                    margin-top: 15px;
                }

                .a4, .a5{
                    border: solid 0px black;
                    width: 100px;
                    height: 100px;
                    margin-top: 10px;
                    margin-left: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                
                .a5{
                    height: 170px;
                }

                .a4, .a5, a{
                    font-size: 15px;
                    text-decoration: none;
                }

                .area3-4{
                    border: solid 1px rgb(36, 122, 252);
                    width: 330px;
                    height: 200px;
                    margin-left: 200px;
                    position: relative;
                    margin-left: -100px;
                    border-radius: 4px;
                    background-color: white;
                }

                .area3-4 p{
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px;
                }

                
</style>