<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPIconArrowRight from 'vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue'

defineProps<{
	icon?: DefaultTheme.FeatureIcon
	title: string
	details?: string
	link?: string
	linkText?: string
	rel?: string
	target?: string
}>()
</script>

<template>
	<VPLink class="VPFeature" :href="link" :rel="rel" :target="target" :no-icon="true" :tag="link ? 'a' : 'div'">
		<article class="box">
			<div class="box-title">
				<div v-if="typeof icon === 'object' && icon.wrap" class="icon">
					<VPImage :image="icon" :alt="icon.alt" :height="icon.height || 48" :width="icon.width || 48" />
				</div>
				<VPImage
					v-else-if="typeof icon === 'object'"
					:image="icon"
					:alt="icon.alt"
					:height="icon.height || 48"
					:width="icon.width || 48"
				/>
				<div v-else-if="icon" class="icon" v-html="icon"></div>
				<h2 class="title" v-html="title"></h2>
			</div>
			<p v-if="details" class="details" v-html="details"></p>
			<div v-if="linkText" class="link-text">
				<p class="link-text-value">{{ linkText }} <VPIconArrowRight class="link-text-icon" /></p>
			</div>
		</article>
	</VPLink>
</template>

<style scoped>
.VPFeature {
	display: block;
	height: 100%;
	background-color: var(--vp-c-bg-soft);
	border: 1px solid var(--vp-c-bg-soft);
	border-radius: 12px;
	transition:
		border-color 0.25s,
		background-color 0.25s;
}
.VPFeature.link:hover {
	border-color: var(--vp-c-brand-1);
}
.box {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 24px;
}
.box-title {
	display: flex;
	align-items: center;
}
.box-title > :deep(.VPImage) {
	margin-right: 20px;
	border-radius: 50%;
}
.icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	margin-right: 20px;
	font-size: 24px;
	background-color: var(--vp-c-default-soft);
	border-radius: 6px;
	transition: background-color 0.25s;
}
.title {
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
}
.details {
	flex-grow: 1;
	padding-top: 8px;
	font-size: 14px;
	font-weight: 500;
	line-height: 24px;
	color: var(--vp-c-text-2);
}
.link-text {
	padding-top: 8px;
}
.link-text-value {
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	color: var(--vp-c-brand-1);
}
.link-text-icon {
	display: inline-block;
	width: 14px;
	height: 14px;
	margin-left: 6px;
	fill: currentColor;
}
</style>
