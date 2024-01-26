<template>
	<div class="container">
		<div class="control">
			<div class="title">align-content:</div>
			<el-select v-model="alignContent" placeholder="align-content" size="small" style="width: 150px">
				<el-option v-for="item in arr" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer flex-wrap="wrap" :align-content="alignContent" :number="10" min-height="302px" />
	</div>
</template>

<script lang="ts" setup name="AlignContent">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
const alignContent = ref('stretch')
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
