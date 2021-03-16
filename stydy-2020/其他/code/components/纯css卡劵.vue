<template>
	<div
		className="example"
		:style="{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '600px'
		}"
	>
		<div className="parent">
			<div className="child">666</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>

<style lang="less">
/**
{@width, @height} 父元素的大小
{@r}  两边椭圆的半径
{@top} 椭圆的位置
{@color} 卡劵的颜色
 */
.ordinary-mixins-ticket-horizontal(@width, @height, @r, @top, @color) {
	position: relative;
	box-sizing: border-box;
	padding: 0 @r;
	width: @width;
	height: @height;
	background-clip: content-box;
	background-color: @color;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		display: block;
		width: @r + 1px;
		height: 100%;
		background: radial-gradient(
			@r circle at left @top,
			transparent @r,
			@color @r + 1px
		);
	}

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		content: "";
		display: block;
		//这里的 @r + 1px 是为了避免某些百分百比缩放页面时，出现空隙
		width: @r + 1px;
		height: 100%;
		//这里的 @r + 1px 是为了防止出现锯齿
		background: radial-gradient(
			@r circle at right @top,
			transparent @r,
			@color @r + 1px
		);
	}
}
//circle  径向渐变
// radial-gradient(圆的大小,circle:确定圆的类型,左右方向,上下方向,开始颜色,结束颜色)

.parent {
	.ordinary-mixins-ticket-horizontal(200px, 200px, 20px, 150px, #fc3a28);
}

.child {
	line-height: 200px;
}


</style>
