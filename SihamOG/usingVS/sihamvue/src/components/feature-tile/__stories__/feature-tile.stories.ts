import FeatureTiles from "../feature-tile.vue";
import type { FeatureTileList, FeatureTileProps } from "../types";
import { FEATURE_TILE_TYPE } from "../types";
import { action } from "@storybook/addon-actions";
import "@ado/sass-base/app-base.scss";
import type { Story } from "@storybook/vue3";

export default {
	title: "feature-tile",
	component: FeatureTiles,
};

const Template: Story<FeatureTiles> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { FeatureTiles },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: '<feature-tiles :featureTile="args"/>',
});

const featuresProp: FeatureTileProps[] = [
	{
		name: "Comprehensive document library",
		description: "Find all the legal documents you need in seconds",
		icon: "/images/myAccountUtility/documents-paper-clip-plus-circle.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Unlimited editing and revisions",
		description: "Edit your documents anytime, from anywhere",
		icon: "/images/myAccountUtility/screen-input-cursor.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Simple and quick business incorporations",
		description: "Incorporate and register your Canadian business online",
		icon: "/images/myAccountUtility/certificate-ribbon-checkmark.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Free resources and guides",
		description: "Learn all about the laws and legal documents that impact you",
		icon: "/images/myAccountUtility/document-paper-clip-info.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Live chat and phone support",
		description: "Get help from our trained customer service specialists",
		icon: "/images/myAccountUtility/person-head-set.svg",
		onClick: () => {
			action("button-click");
		},
	},
];

const partnerOffersProp: FeatureTileProps[] = [
	{
		name: "Talk to a lawyer with JustAnswer",
		icon: "/images/myAccountUtility/person-tie-speech-bubble.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "File for a divorce online with CompleteCase",
		icon: "/images/myAccountUtility/rings-certified-circle.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Manage your bookkeeping with Freshbooks",
		icon: "/images/myAccountUtility/document-pencil-calculator.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Hire a freelancer with Fivver",
		icon: "/images/myAccountUtility/person-laptop-clock-sparkle-circle.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Build a website with Wix",
		icon: "/images/myAccountUtility/computer-input-cursor.svg",
		onClick: () => {
			action("button-click");
		},
	},
	{
		name: "Save on business supplies with Vistaprint",
		icon: "/images/myAccountUtility/document-envelope-business-card.svg",
		onClick: () => {
			action("button-click");
		},
	},
];

const args1: FeatureTileList = {
	featureTileList: featuresProp,
	tileType: FEATURE_TILE_TYPE.FEATURE_SERVICE,
	title: "Features and Services",
	arrowIcon: "/images/icons/arrow-forward.svg",
};

const args2: FeatureTileList = {
	featureTileList: partnerOffersProp,
	tileType: FEATURE_TILE_TYPE.PARTNER_OFFERS,
	title: "Partner Offers",
	arrowIcon: "/images/icons/arrow-forward.svg",
};

export const Features = Template.bind({});
Features.args = args1;

export const Partners = Template.bind({});
Partners.args = args2;
