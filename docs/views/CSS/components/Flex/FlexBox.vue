<template>
	<div class="box" :style="{ width, height, order, flexGrow, flexShrink, flexBasis, alignSelf, flex: flex_ }">
		<span v-if="text">{{ text }}</span>
	</div>
</template>

<script lang="ts" setup name="FlexBox">
import { computed } from 'vue'
import { FlexContainerItem } from '../type'
const props = withDefaults(defineProps<FlexContainerItem>(), {
	width: '80px',
	height: '80px',
	text: '',
	order: 0,
	flexGrow: 0,
	flexShrink: 1,
	flexBasis: 'auto',
	flex: () => [0, 1, 'auto'],
	alignSelf: 'auto'
})

const flex_ = computed(() => {
	const { flex } = props
	if (typeof flex == 'string') return flex
	return flex.join(' ')
})
</script>

<style lang="scss" scoped>
.box {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	margin: 10px;
	font-size: 20px;
	font-weight: bold;
	color: var(--vp-c-text-1);
	background-color: #ffd200;
}
</style>
