<template>
	<div class="feature-list">
		<div class="feature-header">{{ props.featureTile?.title }}</div>
		<feature-tile-item
			v-for="featureTile in props.featureTile?.featureTileList"
			:key="featureTile.name"
			:variant="props.featureTile.tileType"
			:item="featureTile"
			:arrowIcon="props.featureTile.arrowIcon"
		/>
	</div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { FeatureTileList } from "./types";
import FeatureTileItem from "./feature-tile-item.vue";

const props = defineProps({
	featureTile: {
		type: Object as PropType<FeatureTileList>,
		default: () => ({}),
	},
});
</script>
<style lang="scss" scoped>
@use "@ado/sass-base/common" as sass-base;
@use "@ado/sass-base/colors" as colors;

.feature-list {
	border: 1px solid colors.$grey-cccccc;
	opacity: 1;
	max-width: 800px;
	margin: 0 0 15px;

	.feature-header {
		padding: 16px 24px;
		@include sass-base.font(20px, "semibold");

		background-color: colors.$grey-f2f2f2;
		color: colors.$grey-333333;
		margin-bottom: 16px;
	}
}
</style>
