<template>  

<MercadoLivre :logoml="fotoml" :local="localiza" 
:disney="logodisney" :lupa="lupaicone" :avisos="avs" :carrinho="car"/>

<CarroImg/>
<PrimeiroCarrose/>
<SegundoCarrosel/>
<TerceiroCarrosel :freteg="fretegratis" :dsg="dsgratis" :dzg="dzgratis" :bng="bngratis"/>
<QuartoCarrosel/>  
<QuintoCarrosel :pagar="cartao" :frete="gratis" :seguranca="escudo" :cima="alto"/>
<router-view/>
</template>

<script>
import MercadoLivre from "./components/MercadoLivre.vue"
import CarroImg from "./components/CarroImg.vue"
import PrimeiroCarrose from "./components/PrimeiroCarrose.vue"
import SegundoCarrosel from "./components/SegundoCarrosel.vue"
import TerceiroCarrosel from "./components/TerceiroCarrosel.vue"
import QuartoCarrosel from "./components/QuartoCarrosel.vue"
import QuintoCarrosel from "./components/QuintoCarrosel.vue"
export default{

    components:{
      MercadoLivre,
      CarroImg,
      PrimeiroCarrose,
      SegundoCarrosel,
      TerceiroCarrosel,
      QuartoCarrosel,
      QuintoCarrosel
    },

    data(){
      return{
       fotoml:"./img/logomlivre.png",
       localiza: "./img/localizacao.png",
       logodisney: "./img/combo.png",
       lupaicone: "./img/lupa.png",
       avs: "./img/avisosML.png",
       car: "./img/carrinho.png",
       fretegratis: "./img/fgratis.png",
       dsgratis: "./img/dscombo.jpg",
       dzgratis: "./img/deezer.png",
       bngratis: "./img/mercadopago.png",
       cartao: "./img/cartaofrente.png",
       gratis: "./img/pacote.png",
       escudo: "./img/escudo.png",
       alto: "./img/cima.png"
      }
    }
  }
</script>

<style>




</style>
