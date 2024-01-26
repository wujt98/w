<template>
	<div class="container">
		<div class="control">
			<div class="title">justify-content:</div>
			<el-select v-model="justifyContent" placeholder="justify-content" size="small" style="width: 150px">
				<el-option v-for="item in arr" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer :justify-content="justifyContent" :number="3" />
	</div>
</template>

<script lang="ts" setup name="FlexWrap">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
const justifyContent = ref('flex-start')
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
