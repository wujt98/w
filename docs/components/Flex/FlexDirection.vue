<template>
	<div class="container">
		<div class="control">
			<div class="title">flex-direction:</div>
			<el-select v-model="flexDirection" placeholder="Select" size="small" style="width: 150px">
				<el-option v-for="item in arr" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer :flex-direction="flexDirection" />
	</div>
</template>

<script lang="ts" setup name="FlexDirection">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr = ['row', 'row-reverse', 'column', 'column-reverse']
const flexDirection = ref('row')
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
