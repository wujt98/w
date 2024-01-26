<template>
	<div class="container">
		<div class="container-control">
			<div class="control" v-for="(item, index) in 5" :key="index">
				<div class="title">box{{ index + 1 }}</div>
				<el-slider v-model="obj[`box${index}`][key]" :min="0" :max="5" style="width: 100px" />
			</div>
		</div>

		<div class="container-box">
			<div
				class="box"
				v-for="(item, index) in list"
				:key="index"
				:style="{
					width: item?.width,
					height: item?.height,
					order: item.order,
					flexGrow: item.flexGrow,
					flexShrink: item.flexShrink,
					flexBasis: item.flexBasis,
					flex: item.flex as string,
					alignSelf: item.alignSelf
				}"
			>
				<span>{{ index + 1 }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="Order">
import { ref } from 'vue'
import { ElSlider } from 'element-plus'
import { FlexContainerItem } from '../type'
const boxItem: FlexContainerItem = {
	width: '80px',
	height: '80px',
	text: '',
	order: 0,
	flexGrow: 0,
	flexShrink: 1,
	flexBasis: 'auto',
	flex: [0, 1, 'auto'],
	alignSelf: 'auto'
}
const obj = ref({})
const list = ref<FlexContainerItem[]>([])
const key = 'order'
const flex = (val: any): FlexContainerItem['flex'] => {
	if (typeof val == 'string') return val as FlexContainerItem['flex']
	return val?.join(' ')
}

boxItem.flex = flex(boxItem.flex)
for (let i = 0; i < 5; i++) {
	const newItem = JSON.parse(JSON.stringify(boxItem))
	obj.value[`box${i}`] = newItem
	list.value.push(newItem)
}
console.log('======>', list.value)
</script>

<style lang="scss" scoped>
.container {
	margin: 10px 0;
	.container-control {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		.control {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin: 5px;
			.title {
				width: 50px;
				font-size: 16px;
				font-weight: 600;
			}
		}
	}
	.container-box {
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
}
</style>
