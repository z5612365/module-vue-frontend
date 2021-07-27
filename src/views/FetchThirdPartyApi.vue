<template>
  <div class="fetchThirdPartyApi">
    <button v-on:click="fetchThirdPartyApi">fetchThirdPartyApi</button>
  <div>{{text}}</div>

  </div>
</template>

<script>
const axios = require('axios');
export default {
  data: function(){
    return {
      text: "content",
    };
  },
  methods:{
        fetchThirdPartyApi: function () { 
          this.text = axios.get('https://quoters.apps.pcfone.io/api/random')
            .then(function (response) {
              // handle success
              console.log(response);
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


