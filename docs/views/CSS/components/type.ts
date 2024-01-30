export interface FlexContainer {
	number?: number
	minHeight?: string
	flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
	alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
	flexBox?: FlexContainerBoxItem[]
}
export interface FlexContainerBox {
	width?: string | number
	height?: string | number
	text?: string | number
	order?: number
	flexGrow?: number
	flexShrink?: number
	flexBasis?: string | 'auto'
	flex?: 'auto' | 'none' | [number, number?, (string | 'auto')?]
	alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

export interface FlexContainerBoxItem extends FlexContainerBox {
	id?: string
	isControl?: boolean
	keys?: string
}
