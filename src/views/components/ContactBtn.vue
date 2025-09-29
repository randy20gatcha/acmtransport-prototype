<template v-slot:actions>
	<div class="d-flex justify-center w-100">
		<v-btn
			class="contact-btn text-white"
			prepend-icon="mdi-phone"
			color="amber darken-3"
			variant="flat"
			rounded
			style="bottom: -100px"
			href="tel:+639229230158"
		>
			Contact us now
		</v-btn>
	</div>
</template>

<style scoped>
.contact-btn {
	transition: transform 0.25s ease; /* smooth animation */
}

.contact-btn:hover {
	transform: scale(1.1); /* enlarge by 10% */
}
</style>
