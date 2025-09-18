<template>
   <h2 class="text-h4 font-weight-bold mb-8 text-center">
     {{ title }}
   </h2>
    
   <v-card class="about-card mx-auto my-8 px-8 py-10" flat>
    <v-card-text class="text-body-1 text-center about-text">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()

</script>

<style scoped>
.about-card {
  max-width: 900px;
  background-color: #eae8d5; /* light beige background */
  border-radius: 8px;
  padding: 2px;
}

.about-text {
  white-space: pre-line; /* respects \n and \n\n for new paragraphs */
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75;
  color: #2b2b2b;
  text-align: left;
}
</style>
 