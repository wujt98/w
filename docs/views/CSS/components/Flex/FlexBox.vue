<template>
	<div
		class="box"
		:style="{
			width,
			height,
			order,
			flexGrow,
			flexShrink,
			flexBasis,
			alignSelf
		}"
	>
		<p v-if="text">{{ text }}</p>
	</div>
</template>

<script lang="ts" setup name="FlexBox">
import { FlexContainerBoxItem } from '../type'
withDefaults(defineProps<FlexContainerBoxItem>(), {
	width: '80px',
	height: '80px',
	text: '',
	keys: '',
	order: 0,
	flexGrow: 0,
	flexShrink: 1,
	flexBasis: 'auto',
	alignSelf: 'auto'
})
</script>

<style lang="scss" scoped>
.box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	margin: 5px;
	font-size: 18px;
	font-weight: bold;
	color: var(--vp-c-text-1);
	background-color: #ffd200;
	.key {
		margin: 0;
		font-size: 15px;
		font-weight: normal;
	}
}
</style>
