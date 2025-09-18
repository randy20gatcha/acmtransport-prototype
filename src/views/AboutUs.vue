<template>
  <v-container class="py-10" fluid>
			<Header
        title="About Us"
        description="At ACM Transport Technologies, we are dedicated to excellence, delivering premium services for both emergency and non-emergency vehicles. From our beginnings in producing trims and accessories for specialised vehicles, we have grown into a trusted leader in fit-outs, bodywork, modifications, conversions, design, engineering, and manufacturing.

        Our experienced team brings decades of industry expertise, ensuring every project is handled with precision, reliability, and the highest standards of quality—consistently exceeding client expectations.
        
        With a strong reputation and proven track record, ACM Transport Technologies is proud to serve clients such as Ambulance Victoria, Health Select – NEPT, the Australian Capital Territory Government, The Royal Children’s Hospital Melbourne, Victoria Police, Tasmanian Education, and Youth Justice.
        
        Experience the ACM Transport Technologies difference—where expertise and innovation come together to deliver unmatched vehicle solutions."
      />

			<v-card
       class="mx-auto"
       color="surface-variant"
       :image="about_us"
       width="60vw"
       height="50vh"
     >
       <ContactBtn />
     </v-card>
	</v-container>
</template>

<script setup lang="ts">
import about_us from "../assets/about_acm.jpg"
import ContactBtn from "../views/components/ContactBtn.vue";
import Header from "../views/components/Header.vue"
</script>
