<template>
	<section
		id="services-overview"
		class="py-12"
	>
		<v-container fluid>
			<v-row>
				<v-col cols="12">
					<h2 class="text-h4 font-weight-bold mb-8 text-center">
						Our Services
					</h2>
				</v-col>

				<v-col
					v-for="(service, index) in SERVICES_OVERVIEW"
					:key="index"
					cols="12"
					md="4"
				>
					<v-card
						elevation="4"
						class="rounded-lg"
						link
					>
						<v-img
							:src="service.image"
							height="200px"
							cover
						></v-img>

						<v-card-title>{{ service.title }}</v-card-title>

						<v-card-actions>
							<v-btn
								color="primary"
								variant="text"
								>Learn More</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script setup lang="ts">
import { SERVICES_OVERVIEW } from '../data/services-overview'
</script>
