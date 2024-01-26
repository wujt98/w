<template>
	<div class="container">
		<div class="control">
			<div class="title">flex-direction:</div>
			<el-select v-model="flexDirection" placeholder="flex-direction" size="small" style="width: 150px">
				<el-option v-for="item in arr1" :key="item" :label="item" :value="item" />
			</el-select>
		</div>
		<div class="control">
			<div class="title">flex-wrap:</div>
			<el-select v-model="flexWrap" placeholder="flex-wrap" size="small" style="width: 150px">
				<el-option v-for="item in arr2" :key="item" :label="item" :value="item" />
			</el-select>
		</div>
		<div class="control">
			<div class="title">flex-flow:</div>
			<el-select v-model="flexDirection" placeholder="flex-direction" size="small" style="width: 150px">
				<el-option v-for="item in arr1" :key="item" :label="item" :value="item" />
			</el-select>
			<el-select v-model="flexWrap" placeholder="flex-wrap" size="small" style="width: 150px; margin-left: 10px">
				<el-option v-for="item in arr2" :key="item" :label="item" :value="item" />
			</el-select>
		</div>
		<div class="control">
			<div class="title">justify-content:</div>
			<el-select v-model="justifyContent" placeholder="justify-content" size="small" style="width: 150px">
				<el-option v-for="item in arr3" :key="item" :label="item" :value="item" />
			</el-select>
		</div>
		<div class="control">
			<div class="title">align-items:</div>
			<el-select v-model="alignItems" placeholder="align-items" size="small" style="width: 150px">
				<el-option v-for="item in arr4" :key="item" :label="item" :value="item" />
			</el-select>
		</div>
		<div class="control">
			<div class="title">align-content:</div>
			<el-select v-model="alignContent" placeholder="align-content" size="small" style="width: 150px">
				<el-option v-for="item in arr5" :key="item" :label="item" :value="item" />
			</el-select>
		</div>

		<FlexContainer
			:flex-direction="flexDirection"
			:flex-wrap="flexWrap"
			:justify-content="justifyContent"
			:align-items="alignItems"
			:align-content="alignContent"
			:number="8"
			min-height="302px"
		/>
	</div>
</template>

<script lang="ts" setup name="FlexContainerAll">
import { ElSelect, ElOption } from 'element-plus'
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue'

const arr1 = ['row', 'row-reverse', 'column', 'column-reverse']
const flexDirection = ref('row')

const arr2 = ['nowrap', 'wrap', 'wrap-reverse']
const flexWrap = ref('nowrap')

const arr3 = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
const justifyContent = ref('flex-start')

const arr4 = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']
const alignItems = ref('stretch')

const arr5 = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
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
		& + .control {
			margin-top: 10px;
		}
	}
}
</style>
