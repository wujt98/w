<template>
	<div class="container">
		<div class="control">
			<div class="title">align-items:</div>
			<el-select v-model="alignItems" placeholder="align-items" size="small" style="width: 150px">
				<el-option v-for="item in arr" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer :align-items="alignItems" min-height="202px" />
	</div>
</template>

<script lang="ts" setup name="AlignItems">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']
const alignItems = ref('stretch')
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
