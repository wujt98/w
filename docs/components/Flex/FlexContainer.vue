<template>
	<div class="cantainer" :style="{ flexDirection, flexWrap, justifyContent, alignItems, alignContent, minHeight }">
		<div v-for="item in number" :key="item" class="box">
			{{ item }}
		</div>
	</div>
</template>

<script lang="ts" setup name="FlexContainer">
withDefaults(
	defineProps<{
		number?: number
		minHeight?: string
		flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
		flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
		justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
		alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
		alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
	}>(),
	{
		number: 5,
		minHeight: 'auto',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		alignContent: 'stretch'
	}
)
</script>

<style lang="scss" scoped>
.cantainer {
	display: flex;
	max-width: 502px;
	max-height: 502px;
	margin: 10px 0;
	border: 1px solid #ff00ff;
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
}
</style>
