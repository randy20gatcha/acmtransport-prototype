<template>
  <v-container class="py-10" fluid>
    <Header
      title="Servicing and Maintenance"
      description="Experience comprehensive care through our specialized servicing and maintenance. From routine inspections to essential repairs, our expert team ensures your vehicle’s health and performance are always at their best."
    />

     <v-card
       class="mx-auto"
       color="surface-variant"
       :image="servicing"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
  </v-container>
</template>

<script setup lang="ts">
import servicing from "../assets/servicing.jpg";
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "./components/Header.vue";
</script>