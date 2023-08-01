<template>
	<div>
		<div class="tile" @click="props.item?.onClick">
			<img
				:class="serviceStyle ? 'item-icon' : 'item-icon-service'"
				:src="props.item?.icon"
			/>
			<div class="content">
				<div
					:class="serviceStyle ? 'item-name' : 'item-name-service'"
					v-html="props.item?.name"
				></div>
				<div v-if="serviceStyle" class="item-description">
					{{ props.item?.description }}
				</div>
			</div>
			<img class="item-icon-arrow" :src="props.arrowIcon" />
		</div>
		<div class="feature-divider" />
	</div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import { FEATURE_TILE_TYPE } from "./types";
import type { FeatureTileProps } from "./types";

const props = defineProps({
	item: {
		type: Object as PropType<FeatureTileProps>,
		required: true,
	},
	variant: {
		type: String as PropType<FEATURE_TILE_TYPE>,
		default: FEATURE_TILE_TYPE.FEATURE_SERVICE,
	},
	arrowIcon: {
		type: String,
		required: false,
	},
});

const serviceStyle =
	props.variant === FEATURE_TILE_TYPE.FEATURE_SERVICE ? true : false;
</script>
<style lang="scss" scoped>
@use "@ado/sass-base/common" as sass-base;
@use "@ado/sass-base/colors" as colors;
$border-color: colors.$grey-cccccc;
$hover-background-color: colors.$grey-f2f2f2;

.tile {
	display: flex;
	width: 100%;

	&:hover {
		background-color: $hover-background-color;
	}

	.item-icon {
		width: 48px;
		margin: 16px 22px 16px 29px;
	}

	.item-icon-service {
		width: 55px;
		margin: 16px 16px 16px 23px;
	}

	.content {
		width: 462px;
		padding: 16px 0;
		align-items: center;

		.item-name {
			width: 80%;
			@include sass-base.font(18px, "regular");
		}

		.item-name-service {
			width: 80%;
			padding: inherit;
			@include sass-base.font(18px, "regular");
			@include sass-base.breakpoint(sm, "smaller");
		}

		.item-description {
			@include sass-base.font(16px, "regular");

			color: colors.$blue-cyan-grey-808285;
			padding: 8px 0 0;
			@include sass-base.breakpoint(sm, "smaller") {
				padding: 4px 0 0;
			}
		}
	}

	.item-icon-arrow {
		width: 24px;
		margin: 0 24px 0 32px;
		margin-left: auto;
	}
}

.feature-divider {
	background-color: $border-color;
	height: 1px;
	margin: -1px 15px;
}
</style>
