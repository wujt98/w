export interface FlexContainer {
	number?: number
	minHeight?: string
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
	alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
	flexBox?: FlexContainerItem
}
export interface FlexContainerItem {
	width?: string
	height?: string
	text?: string | number
	order?: number
	flexGrow?: number
	flexShrink?: number
	flexBasis?: string | 'auto'
	flex?: 'auto' | 'none' | [number, number?, (string | 'auto')?]
	alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}
