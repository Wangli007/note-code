<template>
	<div>
        <h3>显示全文的例子</h3>
		<div class="wrap" ref="wrap">
			<div class="content" ref="content">
				<p class="text" ref="">
					{{ descText
					}}<a class="showAll" v-if="show" @click="hanleClick" href="#"
						>显示全部</a
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
/**
 * idea
 * 当超过3行时，显示出显示全文 点击显示全文时改变他的高度max-height
 * 注意点 一定要用wrap 套content 用两层dom来做这个效果
 */
const desc =
	"各地相继出台创业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政业补助政策，但似乎创业仍旧是勇敢者的游戏各地相继出台创业补助政";
export default {
	data() {
		return {
			desc,
			descText: desc,
			show: false
		};
	},
	mounted() {
		const contentDom = this.$refs.content;
		const wrapDom = this.$refs.wrap;
		console.log(contentDom.offsetHeight, wrapDom.offsetHeight);
		if (contentDom.offsetHeight > wrapDom.offsetHeight) {
			this.show = true;
			this.descText = this.desc.slice(0, 140) + "...";
		}
		console.log(this.show, "this.show");
	},
	methods: {
		hanleClick() {
			this.descText = this.desc;
			this.show = false;
			this.$refs.wrap.style.maxHeight = "1200px";
		}
	}
};
</script>

<style lang="less">
.wrap {
	max-height: 66px;
	overflow: hidden;
}
.content {
	.text {
		text-align: left;
		margin: 0;
		width: 792px;
		line-height: 22px;
		font-size: 16px;
		font-weight: 400;
		color: #333333;
		.showAll {
			color: #8590a6;
			text-decoration: none;
		}
	}
	&.show {
		height: auto;
	}
}
</style>
