
<template>
 <v-app >
  <div class="Mainlogin">
    <router-view></router-view>
  </div>
 </v-app>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.Mainlogin{
  height: 100vh;
  background: rgb(25,0,0);
  background: linear-gradient(176deg, rgba(25,0,0,1) 36%, rgba(102,0,1,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
</style>