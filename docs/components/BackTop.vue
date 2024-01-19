<template>
	<el-backtop class="backtop" :right="right" :bottom="bottom" :visibility-height="visibilityHeight" />
</template>

<script lang="ts" setup>
import { ElBacktop } from 'element-plus'
withDefaults(
	defineProps<{
		right?: number
		bottom?: number
		visibilityHeight?: number
	}>(),
	{
		right: 40,
		bottom: 40,
		visibilityHeight: 200
	}
)
</script>

<style lang="scss" scoped>
.backtop {
	border-radius: 4px;
}
</style>
