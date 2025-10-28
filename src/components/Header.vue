<template>
	<v-app-bar
		app
		flat
		color="#c3c09d"
		class="px-4"
		height="150"
	>
		<!-- Logo -->
		<a
			class="logo-link"
			href="/"
			rel="noopener noreferrer"
			style="text-decoration: none; display: block; line-height: 0"
		>
			<img
				:src="logo"
				alt="ACM Transport Tech Logo"
				height="150"
				width="280"
				contain
			/>
		</a>

		<!-- Desktop Navigation -->
		<v-spacer />
		<div class="d-none d-lg-flex align-center text-h2">
			<div v-for="item in navItems">
				<v-btn
					:key="item.label"
					v-if="!item.children"
					variant="text"
					class="text-button mx-2"
					:class="{
						'is-home-active': route.path === '/' && item.label === 'HOME',
					}"
					size="x-large"
					@click="goToRoute(item.routeName)"
				>
					<span class="text-h6">{{ item.label }}</span>
				</v-btn>

				<!-- Dropdown for SERVICES -->
				<v-menu v-else>
					<template #activator="{ props }">
						<v-btn
							text
							class="text-button mx-2"
							v-bind="props"
						>
							<span class="text-h6">{{ item.label }}</span>
							<v-icon
								size="18"
								class="ml-1"
								>mdi-chevron-down</v-icon
							>
						</v-btn>
					</template>
					<v-list>
						<v-list-item
							v-for="child in item.children"
							:key="child.label"
							:title="child.label"
							@click="goToRoute(child.routeName)"
						/>
					</v-list>
				</v-menu>
			</div>

			<!-- Phone Button -->
			<v-btn class="drawer-item">
				<template #prepend>
					<v-icon>mdi-phone</v-icon>
				</template>
				<span class="text-h6">03 8679 6888</span>
			</v-btn>
		</div>

		<!-- Mobile Menu Button -->
		<v-btn
			icon
			class="d-lg-none"
			@click="drawer = !drawer"
		>
			<v-icon>mdi-menu</v-icon>
		</v-btn>
	</v-app-bar>

	<!-- Mobile Navigation Drawer -->
	<v-navigation-drawer
		app
		v-model="drawer"
		temporary
		location="right"
	>
		<v-list>
			<template
				v-for="(item, i) in navItems"
				:key="item.label"
			>
				<!-- If no children: normal item -->
				<v-list-item
					v-if="!item.children"
					:title="item.label"
					class="drawer-item"
					@click="goToRoute(item?.routeName ?? '')"
				/>

				<!-- If has children: use v-list-group -->
				<v-list-group
					v-else
					:opened="activeIndex === i"
					@update:opened="toggleGroup(i)"
				>
					<template #activator="{ props }">
						<v-list-item
							v-bind="props"
							:title="item.label"
							class="drawer-item"
						/>
					</template>

					<!-- children items -->
					<v-list-item
						v-for="child in item.children"
						:key="child.label"
						:title="child.label"
						class="drawer-subitem"
						@click="navigate(child.routeName, true)"
					/>
				</v-list-group>
			</template>

			<v-list-item
				href="tel:+639229230158"
				title="1800 333 539"
				class="drawer-item"
			>
				<template #prepend>
					<v-icon>mdi-phone</v-icon>
				</template>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '../assets/acmtransport-logo.png'
import { ROUTE_NAME } from '../router/index'
import router from '../router'
import { useRoute } from 'vue-router'

const activeIndex = ref<number | null>(null)
const drawer = ref(false)
const route = useRoute()

const navigate = (routeName: string, closeAfter = false) => {
  if (routeName) {
    goToRoute(routeName)
  }
  if (closeAfter) drawer.value = false // auto-close drawer
}

const navItems = [
	{ label: 'HOME', routeName: ROUTE_NAME.HOME },
	{ label: 'ABOUT US', routeName: ROUTE_NAME.ABOUT_US },
	{
		label: 'SERVICES',
		children: [
			{
				label: 'DESIGN AND ENGINEERING',
				routeName: ROUTE_NAME.DESIGN_ENGINEERING,
			},
			{ label: 'MANUFACTURING', routeName: ROUTE_NAME.MANUFACTURING },
			{ label: 'BUILDS AND FIT OUTS', routeName: ROUTE_NAME.BUILDS_FITOUTS },
			{
				label: 'TRIMS AND ACCESSORIES',
				routeName: ROUTE_NAME.TRIMS_ACCESSORIES,
			},
			{ label: 'AUTO ELECTRICS', routeName: ROUTE_NAME.AUTO_ELECTRICS },
			{
				label: 'SERVICING AND MAINTENANCE',
				routeName: ROUTE_NAME.SERVICING_MAINTENANCE,
			},
		],
		open: false,
	},
	{ label: 'SPECIALISATION', 
      children: [
		{
			label: 'ACCESSIBILITY FIT OUT',
			routeName: '',
		},
		{ 
			label: 'CUSTOM WORKS AND BUILD', 
			routeName: ''
		},
		{ 
			label: 'EMERGENY AND NON EMERGENCY AMBULANCE', 
			routeName: '' 	
		},
		{
			label: 'LAW ENFORCEMENT CUSTODIAL VEHICLES',
			routeName: '',
		},
		{ 
			label: 'SPECIALISED PATIENT TRANSPORT', 
			routeName: ''
		},
	  ],
	  open: false,
	},
	{ label: 'CONTACT US', routeName: ROUTE_NAME.CONTACT_US },
	{ label: 'CAREERS', routeName: ROUTE_NAME.CAREERS },
]

const toggleGroup = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const goToRoute = (routeName: string) => {
	router.push({
		name: routeName.toLowerCase(),
	})
}
</script>

<style scoped>
.logo-link {
	display: block;
	line-height: 0;
	text-decoration: none;
	transition: background-color 0.3s ease;
}

.logo-link:hover {
	background-color: #f0f0f0;
}

.drawer-item {
	transition: background-color 0.3s ease;
}

.drawer-subitem {
	padding-left: 16px !important; /* default is usually 32px */
}

.drawer-item:hover {
	background-color: #f0f0f0;
}
.drawer-item:active {
	background-color: #e0e0e0;
}

/* More specific target to beat Vuetify’s reset styles */
.v-btn.is-home-active .v-btn__content > span {
	text-decoration: underline !important;
	text-underline-offset: 3px;
	text-decoration-thickness: 2px;
}
</style>
