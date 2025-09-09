<template>
  <v-container class="py-10" fluid>
     <Header
       title="Auto Electrics"
       description="Expert auto-electric services you can trust—innovative solutions, reliable maintenance, and peak performance for your vehicle/’s electrical systems."
     />

     <v-card
       class="mx-auto"
       color="surface-variant"
       :image="auto_electrics"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import auto_electrics from "../assets/auto-electrical.jpg";
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "./components/Header.vue";
</script>