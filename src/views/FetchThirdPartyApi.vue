<template>
  <div class="fetchThirdPartyApi">
    <button v-on:click="fetchThirdPartyApi">fetchThirdPartyApi</button>
    <div>fetchThirdPartyApiData: {{thirdPartyApiText}}</div>
    <button v-on:click="fetchSpringApi">fetchSpringApi</button>
    <div>fetchSpringApi: {{springApiText}}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return {
      thirdPartyApiText: "content",
      springApiText: "content",
    };
  },
  methods:{
        fetchThirdPartyApi: function () { 
          axios({
            method: 'get',
            baseURL: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD',
            //url: '/users',
            'Content-Type': 'application/json',
          }).then((response) => {
              // handle success
              console.log(response);
              this.thirdPartyApiText = response.data;
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        },
        fetchSpringApi(){
            axios.get('http://localhost:8090/greet/userName?userName=TOM')
            .then((response) => {
                // handle success
                console.log(response);
                this.springApiText = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            }); 
        }
  },
  mounted:function(){},
}
</script>


