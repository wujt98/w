<template>
	<div class="container">
		<div class="container-control">
			<template v-for="item in arr" :key="item.id">
				<div class="control" v-if="item.isControl">
					<div class="title">{{ item.id }}</div>
					<el-slider v-model="item.order" :min="0" :max="5" style="width: 100px" />
				</div>
			</template>
		</div>
		<FlexContainer :flex-box="arr" flex-wrap="wrap"></FlexContainer>
	</div>
</template>

<script lang="ts" setup name="Order">
import { ref } from 'vue'
import { ElSlider } from 'element-plus'
import FlexContainer from './FlexContainer.vue'
import { FlexContainerBoxItem } from '../type'

const arr = ref<FlexContainerBoxItem[]>([
	{ id: 'box1', isControl: false, keys: 'order', order: 1, width: '70px' },
	{ id: 'box2', isControl: true, keys: 'order', order: 1 },
	{ id: 'box3', isControl: false, keys: 'order', order: 1, width: '100px' },
	{ id: 'box4', isControl: true, keys: 'order', order: 1 },
	{ id: 'box5', isControl: false, keys: 'order', order: 1, width: '120px' }
])
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
				margin-right: 10px;
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
