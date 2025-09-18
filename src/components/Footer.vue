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
             alt="acmtransport logo"
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
                class="px-0"
              >
                {{ link.label }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="6">
          <v-card class="pa-4 text-center" elevation="2" title="Contact Us">
            <div class="text-body-2">
              <div>
                <v-btn class="drawer-item" flat>
                 <template #prepend>
                   <v-icon>mdi-phone</v-icon>
                 </template>        
                 <span class="text-h6">03 8679 6888</span>
               </v-btn>
              </div>
              <div class="mt-2">
               <v-list>
                 <v-list-item
                   v-for="contact in contacts"
                   :key="contact.label"
                   :title="contact.label"
                   :lines="contact.children ? false : 'two'"
                 >
                   <!-- Default case: subtitle is just a string -->
                   <template v-if="contact.value" #subtitle>
                     {{ contact.value }}
                   </template>
               
                   <!-- Special case: HOURS with children -->
                   <template v-else-if="contact.children" #subtitle>
                     <div v-for="(child, i) in contact.children" :key="i">
                       <strong>{{ child.label }}:</strong> {{ child.hours }}
                     </div>
                   </template>
                 </v-list-item>
               </v-list>
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
import logo from "../assets/acmtransport-logo.png";
import { ROUTE_NAME } from "../router/index";

const links = [
  { label: 'HOME', routeName: ROUTE_NAME.HOME},
  { label: 'ABOUT US', routeName: ROUTE_NAME.ABOUT_US },
  { label: 'SERVICES',
    children: [
     { label: 'DESIGN AND ENGINEERING', routeName: ROUTE_NAME.DESIGN_ENGINEERING },
     { label: 'MANUFACTURING', routeName: ROUTE_NAME.MANUFACTURING },
     { label: 'BUILDS AND FIT OUTS', routeName: ROUTE_NAME.BUILDS_FITOUTS },
     { label: 'TRIMS AND ACCESSORIES', routeName: ROUTE_NAME.TRIMS_ACCESSORIES },
     { label: 'AUTO ELECTRICS', routeName: ROUTE_NAME.AUTO_ELECTRICS },
     { label: 'SERVICING AND MAINTENANCE', routeName: ROUTE_NAME.SERVICING_MAINTENANCE }
    ]
  },
  { label: 'SPECIALISATION', routeName: "" },
  { label: 'CONTACT US', routeName: "" }
]

const contacts = [
  { label: "ADDRESS", value: "25 Castro Way, Derrimut, Vic, 3026 AUS" },
  { label: "EMAIL", value: "info@acmtransport.com.au"},
  { label: "HOURS",
    children: [
      { label: "Mon - Thurs", hours: "7AM - 3:30PM" },
      { label: "Fri - Sat", hours: "7AM - 1PM" },
      { label: "Sun", hours: "CLOSED"}
    ]
  }
]
</script>
