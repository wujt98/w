<template>
	<div>
		<slot name="control"></slot>
		<div
			class="grid-container"
			:style="{
				gridTemplateColumns,
				gridTemplateRows,
				gridTemplateAreas,
				gridRowGap,
				gridColumnGap,
				gridAutoFlow,
				justifyItems,
				alignItems,
				justifyContent,
				alignContent,
				gridAutoColumns,
				gridAutoRows,
				width,
				height,
				border,
				padding
			}"
		>
			<div v-for="item in 9" :key="item" :style="handleStyle(item)">
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="GridContainer">
import { computed } from 'vue'

interface GridContainer {
	gridTemplateColumns?: string
	gridTemplateRows?: string
	gridTemplateAreas?: string
	gridRowGap?: string
	gridColumnGap?: string
	gridAutoFlow?: string
	justifyItems?: 'stretch' | 'start' | 'end' | 'center'
	alignItems?: 'stretch' | 'start' | 'end' | 'center'
	justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
	alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
	gridAutoColumns?: string
	gridAutoRows?: string
	width?: string
	height?: string
	border?: string
	padding?: string
	gridItem?: GridContainerItem[]
}

interface GridContainerItem {
	id: number
	gridColumnStart?: number | string
	gridColumnEnd?: number | string
	gridRowStart?: number | string
	gridRowEnd?: number | string
}

const props = withDefaults(defineProps<GridContainer>(), {
	gridAutoFlow: 'row',
	justifyItems: 'stretch',
	alignItems: 'stretch'
})

const handleStyle = computed(() => {
	return index => {
		const style = {}
		if (props?.gridItem?.length) {
			const item = props.gridItem.find(({ id }) => id == index)
			if (item) {
				const newItem = JSON.parse(JSON.stringify(item))
				delete newItem.id
				Object.assign(style, newItem)
			}
		}
		return style
	}
})
</script>

<style lang="scss" scoped>
.grid-container {
	box-sizing: border-box;
	display: grid;
	grid-template-rows: 80px 80px 80px;
	grid-template-columns: 80px 80px 80px;
	margin: 10px;
	font-size: 30px;
	font-weight: bold;
	color: var(--vp-c-text-1);

	// max-width: 300px;
	// min-height: 300px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 30px;
		min-height: 30px;
		margin: 1px;
		border-radius: 8px;
	}
	:nth-child(1) {
		background-color: #ef3429;
	}
	:nth-child(2) {
		background-color: #f68f25;
	}
	:nth-child(3) {
		background-color: #4ba846;
	}
	:nth-child(4) {
		background-color: #0476c2;
	}
	:nth-child(5) {
		background-color: #c077af;
	}
	:nth-child(6) {
		background-color: #f8d29d;
	}
	:nth-child(7) {
		background-color: #b4a87f;
	}
	:nth-child(8) {
		background-color: #d0e4a8;
	}
	:nth-child(9) {
		background-color: #4dc7ec;
	}
}
</style>
