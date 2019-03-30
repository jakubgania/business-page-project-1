<template>
	<v-app>
		<v-content>

			<navigation-drawer-component/>

			<v-container fluid>
				<nuxt/>
			</v-container>

			<footer-component/>

		</v-content>
	</v-app>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
	@import '../assets/scss/default.scss';
</style>