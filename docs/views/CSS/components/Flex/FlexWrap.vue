<template>
	<div class="container">
		<div class="control">
			<div class="title">flex-wrap:</div>
			<el-select v-model="flexWrap" placeholder="flex-wrap" size="small" style="width: 150px">
				<el-option v-for="item in arr" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer :flex-wrap="flexWrap" :number="8" />
	</div>
</template>

<script lang="ts" setup name="FlexWrap">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr = ['nowrap', 'wrap', 'wrap-reverse']
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
