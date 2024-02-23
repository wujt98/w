---
outline: [2, 3]
---

# Grid 布局

Grid 布局即网格布局，是一种新的 CSS 布局模型，比较擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系。号称是最强大的 CSS 布局方案，是目前唯一一种 CSS 二维布局。利用 Grid 布局，我们可以轻松实现类似下图布局。资料参考[阮一峰的网络日志](http://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

<img src="/CSS/grid.png" style="border-radius:8px; "/>

## 容器的属性

### display

> 指定一个容器采用网格布局

```CSS
.container {
    display: grid;
}
```

<GridContainer />

### grid-template-columns <br /> grid-template-rows 

> 容器指定了网格布局以后，接着就要划分行和列。 `grid-template-columns` 属性定义每一列的 `列宽` ， `grid-template-rows` 属性定义每一行的 `行高`

::: info 下面是一个三行三列的网格, 列宽和行高都是 `100px`

```CSS
.container {
    display: flex;
    grid-template-columns: '100px 100px 100px';
    grid-template-rows: '100px 100px 100px';
}
```

<GridContainer grid-template-columns="100px 100px 100px" grid-template-rows="100px 100px 100px"/>

:::

::: info 除了可以使用绝对值，还可以使用百分比

```CSS
.container {
    display: flex;
    grid-template-columns: '33.33% 33.33% 33.33%';
    grid-template-rows: '33.33% 33.33% 33.33%';
}
```

<GridContainer grid-template-columns="33.33% 33.33% 33.33%" grid-template-rows="33.33% 33.33% 33.33%" width="300px" height="300px"/>

:::

::: info `repeat()` 函数, 可以简化重复的值。

> 需要传两个参数，第一个参数是重复的次数，第二个参数是所要重复的值

```CSS
.container {
    display: flex;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
}
```

<GridContainer grid-template-columns="repeat(3, 33.33%)" grid-template-rows="repeat(3, 33.33%)"  width="300px" height="300px"/>

> 下面定义了6列，第一列和第四列是 `100px` ，第二列和第五列是 `40px` ，第三列和第六列是 `80px` 。

```CSS
.container {
    display: flex;
    grid-template-columns: repeat(2, 100px 40px 80px);
}
```

<GridContainer grid-template-columns="repeat(2, 100px 40px 80px)" grid-template-rows="repeat(2, 100px)"  />

:::

::: info `auto-fill` 关键字

> 有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 `auto-fill` 关键字表示自动填充。

```CSS
.container {
    display: flex;
    grid-template-columns: repeat(auto-fill, 100px);
}
```

<GridContainer grid-template-columns="repeat(auto-fill, 100px)" grid-template-rows="repeat(2, 100px)" />

::: danger ⚠️注意
除了 `auto-fill` ，还有一个关键字 `auto-fit` ，两者的行为基本是相同的。只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有行为差异： `auto-fill` 会用空格子填满剩余宽度， `auto-fit` 则会尽量扩大单元格的宽度。
:::

::: info `fr` 关键字

> 为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为 `1fr` 和 `2fr` ，就表示后者是前者的两倍。

```CSS
.container {
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
}
```

<GridContainer grid-template-columns="1fr 1fr 1fr" />

> `fr` 还能和绝对长度的单位结合使用，下面第一列的宽度为 `60px` ，第二列的宽度是第三列的一半

```CSS
.container {
    display: flex;
    grid-template-columns: 60px 1fr 2fr;
}
```

<GridContainer grid-template-columns="60px 1fr 2fr" />

:::

::: info `minmax()` 函数，产生一个长度范围，表示长度就在这个范围之中。

> 需要传两个参数，分别为最小值和最大值 <br /> 下面代码中， `minmax(120px, 1fr)` 表示列宽不小于 `120px` ，不大于 `1fr` 。

```CSS
.container {
    display: flex;
    grid-template-columns: 1fr 1fr minmax(120px, 1fr);
}
```

<GridContainer  grid-template-columns="1fr 1fr  minmax(120px, 1fr)" width="300px" />

:::

::: info `auto` 关键字，表示由浏览器自己决定长度。

> 下面第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了 `min-width` ，且这个值大于最大宽度 。

```CSS
.container {
    display: flex;
    grid-template-columns: 90px auto 90px;
}
```

<GridContainer grid-template-columns="90px auto 90px" />

:::

::: info 网格线的名称

> `grid-template-columns` 属性和 `grid-template-rows` 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。<br />下面指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。网格布局允许同一根线有多个名字，比如 `[fifth-line row-5]` 。

```CSS
.container {
    display: grid;
    grid-template-columns: [c1] 90px [c2] auto [c3] 90px [c4];
    grid-template-rows: [r1] 90px [r2] auto [r3] 90px [r4];
}
```

<GridContainer grid-template-columns="[c1] 90px [c2] auto [c3] 90px [c4]" grid-template-rows="[r1] 90px [r2] auto [r3] 90px [r4]"/>

:::

### grid-row-gap <br /> grid-column-gap <br /> grid-gap 

> `grid-row-gap` 属性设置行与行的间隔(行间距)， `grid-column-gap` 属性设置列与列的间隔(列间距)。

::: info 下面是一个三行三列的网格，并且行列间距都为 `10px`

```CSS
.container {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
}
```

<GridContainer grid-row-gap="10px" grid-column-gap="10px" />
:::

> `grid-gap` 属性是 `grid-row-gap` 和 `grid-column-gap` 的合并简写形式

::: info 上面的一段 CSS 代码等同于下面的代码，如果 `grid-gap` 省略了第二个值，浏览器会认为第二个值等于第一个值

```CSS
.container {
    display: grid;
    grid-gap: 10px 10px;
}
```

:::

::: danger ⚠️注意
根据最新标准，上面三个属性名的 `grid-` 前缀已经删除， `grid-column-gap` 和 `grid-row-gap` 写成 `column-gap` 和 `row-gap` ， `grid-gap` 写成 `gap`

:::

### grid-template-areas 

> 网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。 `grid-template-areas` 属性用于定义区域。

::: info 下面代码先划分出9个单元格，然后将其定名为 `a` 到 `i` 的九个区域，分别对应这九个单元格。

```CSS
.container {
    display: grid;
    grid-template-areas:
        'a b c'
        'd e f'
        'g h i';
}
```

:::

::: info 多个单元格合并成一个区域, 代码将 9 个单元格分成 `a` 、 `b` 、 `c` 三个区域。

```CSS
.container {
    display: grid;
    grid-template-areas:
        'a a a'
        'b b b'
        'c c c';
}
```

:::

::: info 下面是一个布局实例。顶部是页眉区域 `header` ，底部是页脚区域 `footer` ，中间部分则为 `main` 和 `sidebar`

```CSS
.container {
    display: grid;
    grid-template-areas:
        'header header header'
        'main main sidebar'
        'footer footer footer';
}
```

:::

::: info 如果某些区域不需要利用，则使用"点"（ `.` ）表示没有用到该单元格，或者该单元格不属于任何区域。

```CSS
.container {
    display: grid;
    grid-template-areas:
        'a . c'
        'd . e'
        'f . i';
}
```

:::

::: danger ⚠️注意

区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为 `区域名-start` ，终止网格线自动命名为 `区域名-end` 。
比如，区域名为 `header` ，则起始位置的水平网格线和垂直网格线叫做 `header-start` ，终止位置的水平网格线和垂直网格线叫做 `header-end`

:::

### grid-auto-flow

> 划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。

::: info 这个顺序由 `grid-auto-flow` 属性决定，默认值是 `row` ，即"先行后列"。也可以将它设成 `column` ，变成"先列后行"。

<GridContainer  />

> 当上面的代码设置了 `grid-auto-flow: column;` 后，放置顺序就变成下面的了

<GridContainer grid-auto-flow="column"/>

:::

>  

::: info `grid-auto-flow` 属性除了设置成 `row` 和 `column` ，还可以设成 `row dense` 和 `column dense` 。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。

> 下面的例子让1号项目和2号项目各占据两个单元格，然后在默认的 `grid-auto-flow: row;` 情况下，会产生下面这样的布局，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面。

```CSS
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    grid-auto-flow: row;
}

.container :nth-child(1),
.container :nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 3;
}
```

<GridContainer :gridItem="gridItem1" width="300px" height="400px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)"/>

> 修改设置，设为 `grid-auto-flow:row dense` ，表示"先行后列"，并且尽可能紧密填满。会先填满第一行，再填满第二行，所以3号项目就会紧跟在1号项目的后面。8号项目和9号项目就会排到第四行。

<GridContainer :gridItem="gridItem1" width="300px" height="400px" grid-auto-flow="row dense" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)"/>

> 如果将设置改为 `column dense` ，表示"先列后行"，并且尽量填满空格。会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列。

<GridContainer :gridItem="gridItem1" width="400px" height="300px" grid-auto-flow="column dense" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)"/>
:::

### justify-items 

> `justify-items` 属性设置单元格内容的水平位置（左中右）。

* `stretch *` 拉伸，占满单元格的整个宽度
* `start` 对齐单元格的起始边缘
* `end` 对齐单元格的结束边缘
* `center` 单元格内部居中
<!-- ::: info 单元格的内容左对齐

```CSS
.container {
    justify-items: start;
}
```

<GridContainer width="300px" height="300px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-items="start"/>
::: -->

::: info 尝试更改一下 `justify-items` 的属性吧

<pre class="pre">

	<GridContainer width="314px" height="314px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" :justify-items="justifyItems">
		<template #control>
			<div class="control">
				<el-radio-group v-model="justifyItems">
					<el-radio  v-for="item in items" :key="item" :label="item" size="large">
						<span style="font-size: 16px;">{{ item }}</span>
					</el-radio>
				</el-radio-group>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### align-items 

> `align-items` 属性设置单元格内容的垂直位置（上中下）。

* `stretch *` 拉伸，占满单元格的整个宽度
* `start` 对齐单元格的起始边缘
* `end` 对齐单元格的结束边缘
* `center` 单元格内部居中

<!-- ::: info 单元格的内容头部对齐

```CSS
.container {
    align-items: start;
}
```

<GridContainer width="300px" height="300px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-items="start"/>
::: -->
::: info 尝试更改一下 `align-items` 的属性吧

<pre class="pre">

	<GridContainer width="314px" height="314px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" :align-items="alignItems">
		<template #control>
			<div class="control">
				<el-radio-group v-model="alignItems">
					<el-radio  v-for="item in items" :key="item" :label="item" size="large">
						<span style="font-size: 16px;">{{ item }}</span>
					</el-radio>
				</el-radio-group>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### place-items

> `place-items` 是 `align-items ` 和 `justify-items` 的合并简写形式： `place-items: <align-items> <justify-items>;` ，如果省略第二个值，则浏览器认为与第一个值相等。

<!-- ::: info 单元格的内容中间对齐

```CSS
.container {
    place-items: center center;
}
```

<GridContainer width="300px" height="300px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-items="center" align-items="center"/>
::: -->
::: info 尝试更改一下 `place-items` 的属性吧

<pre class="pre">

	<GridContainer width="314px" height="314px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" :align-items="placeItems[0]" :justify-items="placeItems[1]" >
		<template #control>
			<div class="control">
				<div class="title">place-items:</div>
				<el-select class="select" v-model="placeItems[0]" placeholder="place-items" size="small">
					<el-option v-for="item in items" :key="item" :label="item" :value="item" />
				</el-select>
				<el-select class="select" v-model="placeItems[1]" placeholder="place-items" size="small">
					<el-option v-for="item in items" :key="item" :label="item" :value="item" />
				</el-select>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### justify-content

> `justify-content` 属性是整个内容区域在容器里面的水平位置（左中右）。

<!-- ::: info `start` 对齐容器的起始边框

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="start"/>

:::

::: info `end` 对齐容器的结束边框

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="end"/>

:::

::: info `center` 容器内部居中

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="center"/>

:::

::: info `stretch` 项目大小没有指定时，拉伸占据整个网格容器

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="stretch"/>

:::

::: info `space-around` 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="space-around"/>

:::

::: info `space-between` 项目与项目的间隔相等，项目与容器边框之间没有间隔

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="space-between"/>

:::

::: info `space-evenly` 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

<GridContainer width="410px" height="310px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" justify-content="space-evenly"/>

::: -->

* `start` 对齐容器的起始边框
* `end` 对齐容器的结束边框
* `center` 容器内部居中
* `stretch` 项目大小没有指定时，拉伸占据整个网格容器
* `space-around` 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍
* `space-between` 项目与项目的间隔相等，项目与容器边框之间没有间隔
* `space-evenly` 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

::: info 尝试更改一下 `justify-content` 的属性吧

<pre class="pre">

	<GridContainer width="364px" height="364px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" :justify-content="justifyContent">
		<template #control>
			<div class="control">
				<el-radio-group v-model="justifyContent">
					<el-radio  v-for="item in content" :key="item" :label="item" size="large">
						<span style="font-size: 16px;">{{ item }}</span>
					</el-radio>
				</el-radio-group>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### align-content

> `align-content` 属性是整个内容区域在容器里面的垂直位置（上中下）。

<!-- ::: info `start` 对齐容器的起始边框

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="start"/>

:::

::: info `end` 对齐容器的结束边框

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="end"/>

:::

::: info `center` 容器内部居中

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="center"/>

:::

::: info `stretch` 项目大小没有指定时，拉伸占据整个网格容器

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="stretch"/>

:::

::: info `space-around` 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="space-around"/>

:::

::: info `space-between` 项目与项目的间隔相等，项目与容器边框之间没有间隔

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="space-between"/>

:::

::: info `space-evenly` 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

<GridContainer width="310px" height="410px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" align-content="space-evenly"/>

::: -->

* `start` 对齐容器的起始边框
* `end` 对齐容器的结束边框
* `center` 容器内部居中
* `stretch` 项目大小没有指定时，拉伸占据整个网格容器
* `space-around` 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍
* `space-between` 项目与项目的间隔相等，项目与容器边框之间没有间隔
* `space-evenly` 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

::: info 尝试更改一下 `align-content` 的属性吧

<pre class="pre">

	<GridContainer width="364px" height="364px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" :align-content="alignContent">
		<template #control>
			<div class="control">
				<el-radio-group v-model="alignContent">
					<el-radio  v-for="item in content" :key="item" :label="item" size="large">
						<span style="font-size: 16px;">{{ item }}</span>
					</el-radio>
				</el-radio-group>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### place-content

> `place-content` 是 `align-content ` 和 `justify-content` 的合并简写形式： `place-content: <align-content> <justify-content>;` ，如果省略第二个值，则浏览器认为与第一个值相等。

::: info 尝试更改一下 `place-content` 的属性吧

<pre class="pre">

	<GridContainer width="364px" height="364px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" :align-content="placeContent[0]" :justify-content="placeContent[1]" >
		<template #control>
			<div class="control">
				<div class="title">place-content:</div>
				<el-select class="select" v-model="placeContent[0]" placeholder="place-content" size="small">
					<el-option v-for="item in content" :key="item" :label="item" :value="item" />
				</el-select>
				<el-select class="select" v-model="placeContent[1]" placeholder="place-content" size="small">
					<el-option v-for="item in content" :key="item" :label="item" :value="item" />
				</el-select>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### grid-auto-columns <br />grid-auto-rows 

> `grid-auto-columns` 属性和 `grid-auto-rows` 属性是浏览器用来自动创建的多余网格的列宽和行高。它们的写法与 `grid-template-columns` 和 `grid-template-rows` 完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

::: info 下面代码中，划分好的网格是3行 x 3列，但是，8号项目指定在第4行，9号项目指定在第5行。指定新增的行高统一为50px（原始的行高为100px）。

```CSS
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-auto-rows: 50px;
}
```

<GridContainer :gridItem="gridItem2" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)" grid-auto-rows="50px"  />
:::

### grid-template <br /> grid

* `grid-template`属性是`grid-template-columns`、`grid-template-rows`和`grid-template-areas`这三个属性的合并简写形式。

* `grid`属性是`grid-template-rows`、`grid-template-columns`、`grid-template-areas`、 `grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow`这六个属性的合并简写形式。

::: danger ⚠️注意
从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。
:::

## 项目的属性

### grid-column-start <br /> grid-column-end <br /> grid-row-start <br /> grid-row-end 

> 项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

* `grid-column-start` 左边框所在的垂直网格线
* `grid-column-end` 右边框所在的垂直网格线
* `grid-row-start` 上边框所在的水平网格线
* `grid-row-end` 下边框所在的水平网格线

::: info 下面代码中，1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。

```CSS
.item-1 {
    grid-column-start: 2;
    grid-column-end: 4;
}
```

<GridContainer height="320px" width="320px" :gridItem="gridItem3"/>

> 上图中，只指定了1号项目的左右边框，没有指定上下边框，所以会采用默认位置，即上边框是第一根水平网格线，下边框是第二根水平网格线。<br /> 除了1号项目以外，其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的 `grid-auto-flow` 属性决定，这个属性的默认值是 `row` ，因此会"先行后列"进行排列。

:::

::: info 下面代码是指定四个边框位置的效果。

```CSS
.item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
}
```

<GridContainer height="320px" width="320px" :gridItem="gridItem4"/>
:::

::: info 这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。

```CSS
.item-1 {
    grid-column-start: header-start;
    grid-column-end: header-end;
}
```

:::

::: info 这四个属性的值还可以使用 `span` 关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

```CSS
.item-1 {
    grid-column-start: span 2;
}
```

> 上面代码表示，1号项目的左边框距离右边框跨越2个网格

<GridContainer height="320px" width="320px" :gridItem="gridItem5"/>

> 这与下面的代码效果完全一样

```CSS
.item-1 {
    grid-column-end: span 2;
}
```

> 使用这四个属性，如果产生了项目的重叠，则使用 `z-index` 属性指定项目的重叠顺序。

:::

### grid-column <br /> grid-row

> `grid-column` 属性是 `grid-column-start` 和 `grid-column-end` 的合并简写形式， `grid-row` 属性是 `grid-row-start` 属性和 `grid-row-end` 的合并简写形式。

```CSS
.item {
    grid-column: <start-line> / <end-line>;
    grid-row: <start-line> / <end-line>;
}
```

::: info 下面例子中，项目 `item-1` 占据第一行，从第一根列线到第三根列线。

```CSS
.item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}

/* 等同于 */
.item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
}
```

<GridContainer height="320px" width="320px" :gridItem="gridItem6"/>
:::

> 这两个属性之中，也可以使用 `span` 关键字，表示跨越多少个网格。

::: info 下面例子中，项目 `item-1` 占据的区域，包括第一行 + 第二行、第一列 + 第二列。

```CSS
.item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

/* 等同于 */
.item-1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
}
```

<GridContainer height="320px" width="320px" :gridItem="gridItem7"/>

:::

::: info 斜杠以及后面的部分可以省略，默认跨越一个网格。下面代码表示，项目 `item-1` 占据左上角第一个网格。

```CSS
.item-1 {
    grid-column: 1;
    grid-row: 1;
}
```

:::

### grid-are

> `grid-area` 属性指定项目放在哪一个区域。

::: info 下面例子中，1号项目位于 `e` 区域

```CSS
.container {
    display: grid;
    grid-template-columns: 80px 80px 80px;
    grid-template-rows: 80px 80px 80px;
    grid-template-areas:
        'a b c'
        'd e f'
        'g h i';
}

.item-1 {
    grid-area: e;
}
```

<GridContainer :gridItem="gridItem8" height="240px" width="240px" grid-template-areas=" 'a b c' 'd e f' 'g h i'" />

:::

> `grid-area` 属性还可用作 `grid-row-start` 、 `grid-column-start` 、 `grid-row-end` 、 `grid-column-end` 的合并简写形式，直接指定项目的位置

```CSS
.item {
    grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

::: info 下面是一个例子

```CSS
.item-1 {
    grid-area: 1 / 1 / 3 / 3;
}
```

<GridContainer :gridItem="gridItem9" height="320px" width="320px" />

:::

### justify-self 

> `justify-self` 属性设置单元格内容的水平位置（左中右），跟 `justify-items` 属性的用法完全一致，但只作用于单个项目。

* `stretch *` 拉伸，占满单元格的整个宽度
* `start` 对齐单元格的起始边缘
* `end` 对齐单元格的结束边缘
* `center` 单元格内部居中

::: info 尝试更改一下 `justify-self` 的属性吧

<pre class="pre">

	<GridContainer :gridItem="gridItem10" width="314px" height="314px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)">
		<template #control>
			<div class="control">
				<el-radio-group v-model="gridItem10[0].justifySelf">
					<el-radio  v-for="item in self" :key="item" :label="item" size="large">
						<span style="font-size: 16px;">{{ item }}</span>
					</el-radio>
				</el-radio-group>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### align-self 

> `align-self` 属性设置单元格内容的垂直位置（上中下），跟 `align-items` 属性的用法完全一致，也是只作用于单个项目。

* `stretch *` 拉伸，占满单元格的整个宽度
* `start` 对齐单元格的起始边缘
* `end` 对齐单元格的结束边缘
* `center` 单元格内部居中

::: info 尝试更改一下 `align-self` 的属性吧

<pre class="pre">

	<GridContainer :gridItem="gridItem11" width="314px" height="314px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)">
		<template #control>
			<div class="control">
				<el-radio-group v-model="gridItem11[0].alignSelf">
					<el-radio  v-for="item in self" :key="item" :label="item" size="large">
						<span style="font-size: 16px;">{{ item }}</span>
					</el-radio>
				</el-radio-group>
			</div>
		</template>
	</GridContainer>

</pre>

:::

### place-self 

> `place-self` 是 `align-self ` 和 `justify-self` 的合并简写形式： `place-self: <align-self> <justify-self>;` ，如果省略第二个值，则浏览器认为与第一个值相等。

::: info 尝试更改一下 `place-self` 的属性吧

<pre class="pre">

	<GridContainer :gridItem="gridItem12" width="314px" height="314px" border="1px dashed #f9943a" padding="5px" grid-template-columns="repeat(3, 100px)" grid-template-rows="repeat(3, 100px)">
		<template #control>
			<div class="control">
				<div class="title">place-self:</div>
				<el-select class="select" v-model="gridItem12[0].alignSelf" placeholder="place-self" size="small">
					<el-option v-for="item in self" :key="item" :label="item" :value="item" />
				</el-select>
				<el-select class="select" v-model="gridItem12[0].justifySelf" placeholder="place-self" size="small">
					<el-option v-for="item in self" :key="item" :label="item" :value="item" />
				</el-select>
			</div>
		</template>
	</GridContainer>

</pre>

:::

<BackTop />

<script lang="ts" setup>
import BackTop from "../../components/BackTop.vue"; 
import GridContainer from "./components/Grid/GridContainer.vue"
import { ElSelect, ElOption, ElRadioGroup, ElRadio } from 'element-plus'
import { ref } from 'vue'

const justifyItems = ref('stretch')
const alignItems = ref('stretch')
const placeItems = ref(['stretch', 'stretch'])
const items  = ['stretch', 'start', 'end', 'center']

const justifyContent = ref('start')
const alignContent = ref('start')
const placeContent = ref(['start', 'start'])
const content = ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly']

const self  = ['stretch', 'start', 'end', 'center']

const gridItem1 = [

	{ id: 1, gridColumnStart: 1, gridColumnEnd: 3 },
	{ id: 2, gridColumnStart: 1, gridColumnEnd: 3 }

]

const gridItem2 = [

	{ id: 8, gridColumnStart: 2,gridRowStart: 4 },
	{ id: 9, gridColumnStart: 3, gridRowStart: 5 }

]

const gridItem3 = [{ id: 1, gridColumnStart: 2, gridColumnEnd: 4 }]
const gridItem4 = [{ id: 1, gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 4 }]
const gridItem5 = [{ id: 1, gridColumnStart: 'span 2'}]
const gridItem6 = [{ id: 1, gridColumn: '1 / 3', gridRow: '1 / 2'}]
const gridItem7 = [{ id: 1, gridColumn: '1 / span 2', gridRow: '1 / span 2'}]
const gridItem8 = [{ id: 1, gridArea: 'e'}]
const gridItem9 = [{ id: 1, gridArea: '1 / 1 / 3 / 3'}]

const gridItem10 = ref([{ id: 5, justifySelf: 'stretch'}])
const gridItem11 = ref([{ id: 5, alignSelf: 'stretch'}])
const gridItem12 = ref([{ id: 5, justifySelf: 'stretch', alignSelf: 'stretch'}])

</script>

<style lang="scss" scoped>

.pre{

	margin:0;
	white-space: normal;

}

.select{

	width: 150px;
	& +.select {
		margin-left: 10px;
	}

}

.control {

	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 15px 10px;
	.title {
		margin-right: 10px;
		font-size: 16px;
		font-weight: 600;
	}
	& + .control {
		margin-top: 10px;
	}

}
</style>
