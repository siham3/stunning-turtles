<template>
	<feature-tile :featureTile="featuresTilesList" />
	<feature-tile :featureTile="partnerTilesList" />
	<feature-tile :featureTile="test" />
</template>
<script setup lang="ts">
import FeatureTile from "../feature-tile.vue";
import {
	type FeatureTileList,
	type FeatureTileProps,
	FEATURE_TILE_TYPE,
} from "../types";

const featuresProp: FeatureTileProps[] = [
	{
		name: "Comprehensive document library",
		description: "Find all the legal documents you need in seconds",
		icon: "/images/myAccountUtility/documents-paperclip-plus-circle.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Unlimited editing and revisions",
		description: "Edit your documents anytime, from anywhere",
		icon: "/images/myAccountUtility/screen-input-cursor.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Simple and quick business incorporations",
		description: "Incorporate and register your Canadian business online",
		icon: "/images/myAccountUtility/certificate-ribbon-checkmark.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Free resources and guides",
		description: "Learn all about the laws and legal documents that impact you",
		icon: "/images/myAccountUtility/document-paperclip-info.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Live chat and phone support",
		description: "Get help from our trained customer service specialists",
		icon: "/images/myAccountUtility/person-head-set.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
];

const partnerOffersProp: FeatureTileProps[] = [
	{
		name: "Talk to a lawyer with <strong>JustAnswer</strong>",
		icon: "/images/myAccountUtility/person-tie-speech-bubble.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "File for a divorce online with CompleteCase",
		icon: "/images/myAccountUtility/rings-certified-circle.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Manage your bookkeeping with Freshbooks",
		icon: "/images/myAccountUtility/document-pencil-calculator.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Hire a freelancer with Fivver",
		icon: "/images/myAccountUtility/person-laptop-clock-sparkle-circle.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Build a website with Wix",
		icon: "/images/myAccountUtility/computer-input-cursor.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
	{
		name: "Save on business supplies with Vistaprint",
		icon: "/images/myAccountUtility/document-envelope-business-card.svg",
		onClick: () => {
			window.open("https://www.lawdepot.com/contracts/groups/", "_self");
		},
	},
];

const featuresTilesList: FeatureTileList = {
	featureTileList: featuresProp,
	tileType: FEATURE_TILE_TYPE.FEATURE_SERVICE,
	title: "Features and Services",
	arrowIcon: "/images/icons/arrow-forward.svg",
};

const partnerTilesList: FeatureTileList = {
	featureTileList: partnerOffersProp,
	tileType: FEATURE_TILE_TYPE.PARTNER_OFFERS,
	title: "Partner Offers",
	arrowIcon: "/images/icons/arrow-forward.svg",
};
const test: [] = [];
</script>
