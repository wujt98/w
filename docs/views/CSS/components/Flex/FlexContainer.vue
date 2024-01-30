<template>
	<div class="cantainer" :style="{ flexDirection, flexWrap, justifyContent, alignItems, alignContent, minHeight }">
		<template v-if="flexBox.length">
			<flex-box
				v-for="(item, index) in flexBox"
				:key="index"
				:keys="item.keys"
				:text="item.id || index + 1"
				:width="item.width"
				:height="item.height"
				:order="item.order"
				:flex-grow="item.flexGrow"
				:flex-shrink="item.flexShrink"
				:flex-basis="item.flexBasis"
				:align-self="item.alignSelf"
			></flex-box>
		</template>
		<template v-else>
			<flex-box v-for="item in number" :key="item" :text="item"></flex-box>
		</template>
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
	flexBox: () => []
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
