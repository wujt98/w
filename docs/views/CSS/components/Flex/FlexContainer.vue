<template>
	<div class="cantainer" :style="{ flexDirection, flexWrap, justifyContent, alignItems, alignContent, minHeight }">
		<FlexBox
			v-for="item in number"
			:key="item"
			:text="item"
			:width="flexBox?.width"
			:height="flexBox?.height"
			:order="flexBox?.order"
			:flex-grow="flexBox?.flexGrow"
			:flex-shrink="flexBox?.flexShrink"
			:flex-basis="flexBox?.flexBasis"
			:flex="flexBox?.flex"
			:align-self="flexBox?.alignSelf"
		/>
	</div>
</template>

<script lang="ts" setup name="FlexContainer">
import FlexBox from './FlexBox.vue'
import { FlexContainer } from '../type'

withDefaults(defineProps<FlexContainer>(), {
	number: 5,
	minHeight: 'auto',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
	alignItems: 'stretch',
	alignContent: 'stretch',
	flexBox: () => ({})
})
</script>

<style lang="scss" scoped>
.cantainer {
	display: flex;
	max-width: 502px;
	max-height: 502px;
	margin: 10px 0;
	border: 1px solid #ff00ff;
}
</style>
