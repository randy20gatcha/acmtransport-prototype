<template>
  <v-container class="py-10" fluid>
     <Header
       title="Trims and Accessories"
       description="Discover our collection of belts, bags, and customizable vehicle trims crafted to match your personal style. Enhance both the look and functionality of your vehicle with our premium-quality trims and accessories."
     />

     <v-card
       class="mx-auto"
       color="surface-variant"
       :image="trims"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import trims from "../assets/trims.jpg";
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "./components/Header.vue";
</script>