<template>
  <div class="flex justify-center items-center h-screen">
  <h1>Oops</h1>
  <h3>The {{ res }} youre looking for , is not here.</h3>
  <router-link :to="{name:'home'}">Back To Home</router-link>
</div>
</template>
<script>
  export default {
    props: {
      res: {
        required: true,
        type: String,
        default:'page'
      },
    },
  };
</script>
