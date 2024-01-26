<template>
	<div class="container">
		<div class="control">
			<div class="title">flex-flow:</div>
			<el-select v-model="flexDirection" placeholder="flex-direction" size="small" style="width: 150px">
				<el-option v-for="item in arr1" :key="item" :label="item" :value="item" />
			</el-select>
			<el-select v-model="flexWrap" placeholder="flex-wrap" size="small" style="width: 150px; margin-left: 10px">
				<el-option v-for="item in arr2" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer :flex-direction="flexDirection" :flex-wrap="flexWrap" :number="6" />
	</div>
</template>

<script lang="ts" setup name="FlexFlow">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr1 = ['row', 'row-reverse', 'column', 'column-reverse']
const flexDirection = ref('row')

const arr2 = ['nowrap', 'wrap', 'wrap-reverse']
const flexWrap = ref('nowrap')
</script>

<style lang="scss" scoped>
.container {
	margin: 10px 0;
	.control {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.title {
			margin-right: 10px;
			font-size: 16px;
			font-weight: 600;
		}
	}
}
</style>
