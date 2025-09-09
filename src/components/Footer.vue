<template>
  <v-footer color="#fffca1" class="text-white pt-8">
    <v-container>
      <!-- Top centered logo card -->
      <v-row justify="center">
        <v-col cols="12" md="4" class="text-center">
         <a 
           href="https://example.com" 
           target="_blank" 
           style="display: inline-block;"
         >
           <v-img
             :src="logo"
             alt="FEELDX Logo"
             height="100"
             width="170"
             contain
             class="mx-auto cursor-pointer"
             cover
           />
         </a>
       </v-col>
      </v-row>

      <!-- Bottom row with 2 cards -->
      <v-row>
        <!-- Navigation Links -->
        <v-col cols="12" md="6" class="mb-6 mb-md-0">
          <v-card class="pa-4" elevation="2">
            <v-list density="compact" class="bg-transparent">
              <v-list-item
                v-for="link in links"
                :key="link.label"
                :href="link.href"
                class="px-0"
              >
                {{ link.label }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="2">
            <h4 class="text-subtitle-1 font-weight-medium">Contact Us</h4>
            <div class="text-body-2">
              <div>
                <v-icon size="18" class="mr-1">mdi-phone</v-icon>
                1800 333 539
              </div>
              <div class="mt-2">
                <v-icon size="18" class="mr-1">mdi-map-marker</v-icon>
                <span>WATERMAN BUSINESS CENTRE Suite 70,</span><br>
                <span class="ml-6">44 LAKEVIEW DR SCORESBY 3179</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Divider -->
      <v-divider class="my-4" />

      <!-- Bottom Bar -->
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center text-body-2 text-grey">
          &copy; {{ new Date().getFullYear() }} ACM Transport Technologies Pty Ltd. All rights reserved.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import logo from '../assets/acmtransport-logo.png'

const links = [
  { label: 'STUDIO', href: "_blank" },
  { label: 'PROJECT CONTROL', href: "_blank" },
  { label: 'SERVICES', href: "_blank" },
  { label: 'TECHNOLOGY', href: "_blank" },
  { label: 'OUR WORK', href: "_blank" },
  { label: 'CONTACT US', href: "_blank" },
  {
    label: 'ABOUT US',
    children: ['Our Team', 'Our Story'],
    href: "_blank"
  },
  { label: 'NEWS', href: "_blank" }
]
</script>
