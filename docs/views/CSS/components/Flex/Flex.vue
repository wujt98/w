<template>
	<div class="container">
		<div class="container-control">
			<template v-for="item in arr" :key="item.id">
				<div class="control" v-if="item.isControl">
					<div class="title">{{ item.id }}</div>
					<el-select
						v-model="arr2[item.id as string]"
						placeholder="flex-grow"
						size="small"
						@change="flexChange($event, item)"
						style="width: 80px"
					>
						<el-option v-for="option in flexOptions" :key="option" :label="option" :value="option"></el-option>
					</el-select>
					<template v-if="visible[item.id as string]">
						<el-select v-model="item.flexShrink" placeholder="flex-shrink" size="small" style="width: 80px">
							<el-option v-for="option in 5" :key="option" :label="option" :value="option"></el-option>
						</el-select>
						<el-select v-model="item.flexBasis" placeholder="flex-basis" size="small" style="width: 80px">
							<el-option v-for="option in options" :key="option" :label="option" :value="option"></el-option>
						</el-select>
					</template>
				</div>
			</template>
		</div>
		<FlexContainer :flex-box="arr"></FlexContainer>
	</div>
</template>

<script lang="ts" setup name="FlexBasis">
import { ref } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import FlexContainer from './FlexContainer.vue'
import { FlexContainerBoxItem } from '../type'

const arr = ref<FlexContainerBoxItem[]>([
	{ id: 'box1', isControl: true, flexBasis: 'auto', flexShrink: 1, flexGrow: 1 },
	{ id: 'box2', isControl: true, flexBasis: 'auto', flexShrink: 0, flexGrow: 0 },
	{ id: 'box3', isControl: true, flexBasis: 'auto', flexShrink: 1, flexGrow: 1 }
])
const arr2 = ref({
	box1: 'auto',
	box2: 'none',
	box3: 1
})
const visible = ref({
	box1: false,
	box2: false,
	box3: true
})
const options = ['auto', '100px', '120px', '150px', '200px']
const flexOptions = ['auto', 'none', 0, 1, 2, 3, 4, 5]

const flexChange = (e: 'auto' | 'none' | number, item: FlexContainerBoxItem) => {
	const id = item.id as string
	switch (e) {
		case 'auto':
			item.flexGrow = 0
			item.flexShrink = 1
			item.flexBasis = 'auto'
			visible.value[id] = false
			break
		case 'none':
			item.flexGrow = 0
			item.flexShrink = 0
			item.flexBasis = 'auto'
			visible.value[id] = false
			break
		default:
			item.flexGrow = e
			visible.value[id] = true
			break
	}
}
</script>

<style lang="scss" scoped>
.container {
	margin: 10px 0;
	.container-control {
		display: flex;
		flex-flow: column wrap;
		align-items: flex-start;
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
.el-select + .el-select {
	margin-left: 10px;
}
</style>
