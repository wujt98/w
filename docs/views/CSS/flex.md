---
outline: [2, 3]
---

# Flex 布局

Flexible Box 模型，通常被称为 flexbox，它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。

::: warning 注意
设置为 Flex 布局后，子元素的 `float` 、 `clear` 和 `vertical-align` 属性会失效
:::

<img src="/CSS/flex%20container.png" style="border-radius:8px; "/>

容器默认存在两根轴：水平的主轴 (main axis) 和垂直的交叉轴 (cross axis)。主轴的开始位置 (与边框的交叉点) 叫做 `main start` ，结束位置叫做 `main end` ; 交叉轴的开始位置叫做 `cross start` ，结束位置叫做 `cross end` 。
项目默认沿主轴排列。单个项目占据的主轴空间叫做 `main size` ，占据的交叉轴空间叫做 `cross size`

## 容器的属性

* `flex-direction` (主轴的方向，即项目的排序方向)

    - `row *` (主轴为水平方向，起点在左端)
    - `row-reverse` (主轴为水平方向，起点在右端)
    - `column` (主轴为垂直方向，起点在上沿)
    - `column-reverse` (主轴为垂直方向，起点在下沿)

* `flex-wrap` (轴线上如何换行)

    - `nowrap *` (不换行)
    - `wrap` (换行，第一行在上方)
    - `wrap-reverse` (换行，第一行在下方)

* `flex-flow` ( `flex-direction` 和 `flex-wrap` 的简写形式，默认值 `row nowrap` )

* `justify-content` (定义了项目在主轴上的对齐方式)
    - `flex-start *` (左对齐)
    - `flex-end` (右对齐)
    - `center` (居中)
    - `space-between` (两端对齐，项目之间的间隔都相等)
    - `space-around` (每个项目两侧的间隔相等。项目之间的间隔比项目与边框的间隔大一倍)
* `align-items` (定义项目在交叉轴上如何对齐)

    - `stretch *` (如果项目未设置高度或设为auto，将占满整个容器的高度)
    - `flex-start` (交叉轴的起点对齐)
    - `flex-end` (交叉轴的终点对齐)
    - `center` (交叉轴的中点对齐)
    - `baseline` (项目的第一行文字的基线对齐)

* `align-content` (定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用)
    - `stretch *` (轴线占满整个交叉轴)
    - `flex-start` (与交叉轴的起点对齐)
    - `flex-end` (与交叉轴的终点对齐)
    - `center` (与交叉轴的中点对齐)
    - `space-between` (与交叉轴两端对齐，轴线之间的间隔平均分布)
    - `space-around` (每根轴线两侧的间隔都相等。轴线之间的间隔比轴线与边框的间隔大一倍)

### flex-description 属性

::: info 尝试更改一下 `flex-description` 的属性吧

* `row *` (主轴为水平方向，起点在左端)
* `row-reverse` (主轴为水平方向，起点在右端)
* `column` (主轴为垂直方向，起点在上沿)
* `column-reverse` (主轴为垂直方向，起点在下沿)
<FlexDirection />
:::

### flex-wrap 属性

::: info 尝试更改一下 `flex-wrap` 的属性吧

* `nowrap *` (不换行)
* `wrap` (换行，第一行在上方)
* `wrap-reverse` (换行，第一行在下方)
<FlexWrap />
:::

### flex-flow 属性

::: info 尝试更改一下 `flex-flow` 的属性吧
<FlexFlow />
:::

### justify-content 属性

::: info 尝试更改一下 `justify-content` 的属性吧

* `flex-start *` (左对齐)
* `flex-end` (右对齐)
* `center` (居中)
* `space-between` (两端对齐，项目之间的间隔都相等)
* `space-around` (每个项目两侧的间隔相等。项目之间的间隔比项目与边框的间隔大一倍)
<JustifyContent />
:::

### align-items 属性

::: info 尝试更改一下 `align-items` 的属性吧

* `stretch *` (如果项目未设置高度或设为auto，将占满整个容器的高度)
* `flex-start` (交叉轴的起点对齐)
* `flex-end` (交叉轴的终点对齐)
* `center` (交叉轴的中点对齐)
* `baseline` (项目的第一行文字的基线对齐)
<AlignItems />
:::

### align-content 属性

::: info 尝试更改一下 `align-content` 的属性吧

* `stretch *` (轴线占满整个交叉轴)
* `flex-start` (与交叉轴的起点对齐)
* `flex-end` (与交叉轴的终点对齐)
* `center` (与交叉轴的中点对齐)
* `space-between` (与交叉轴两端对齐，轴线之间的间隔平均分布)
* `space-around` (每根轴线两侧的间隔都相等。轴线之间的间隔比轴线与边框的间隔大一倍)
<AlignContent />
:::

### flex 容器实例

::: info 改改属性，看看效果吧
<FlexContainerAll />
:::

<BackTop />

<script lang="ts" setup>
import BackTop from '/components/BackTop.vue'
import FlexDirection from '/components/Flex/FlexDirection.vue'
import FlexWrap from '/components/Flex/FlexWrap.vue'
import FlexFlow from '/components/Flex/FlexFlow.vue'
import JustifyContent from '/components/Flex/JustifyContent.vue'
import AlignItems from '/components/Flex/AlignItems.vue'
import AlignContent from '/components/Flex/AlignContent.vue'
import FlexContainerAll from '/components/Flex/FlexContainerAll.vue'
</script>
