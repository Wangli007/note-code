<template>
	<div class="data-container">
		<header>
			<div class="logout">
				<span class="iconfont icon-tuichu" style="margin-right: 10px;"></span
				>退出
			</div>
			<img class="l-img" src="../assets/svg/bg_blue.svg" alt="background" />
			<div class="title">生产数据看板</div>
			<img class="r-img" src="../assets/svg/bg_blue.svg" alt="background" />
			<div class="cur-time">{{ timeStr }}</div>
		</header>
		<div class="body">
			<div class="l-content">
				<div class="order-information">
					<div class="order-header">
						信息
					</div>
					<div class="order-body">
						<div class="order-num">订单编号：{{ workOrderNum }}</div>
						<div class="line">
							线<span style="visibility: hidden;">空格</span>别：{{
								productionLine
							}}
						</div>
						<div class="model">产品型号：{{ materialName }}</div>
					</div>
				</div>
				<div class="order-status">
					<div class="status-header">
						订单状态
					</div>
					<div class="status-body">
						<div class="top-status">
							<div class="t-left-content">
								<ul>
									<li v-for="(item, index) in statusArray" :key="index">
										<!-- {{ item.label }}  -->
									</li>
								</ul>
							</div>
							<div class="t-right-content">
								<div class="current-status">
									{{ workOrderStatus }}
								</div>
								<div class="status-text">当前订单状态</div>
							</div>
						</div>
						<div class="bottom-status">
							<ul>
								<li v-if="productStartTimeStr">
									<div class="dot" style="background-color:#24F4F6;"></div>
									<div class="text">生产</div>
									<div class="dashed"></div>
									<div class="time">{{ productStartTimeStr }}</div>
								</li>
								<li v-if="productStopTimeStr">
									<div class="dot" style="background-color:#227DCE;"></div>
									<div class="text">
										暂停<span style="font-size: .18rem">(最近)</span>
									</div>
									<div class="dashed"></div>
									<div class="time">{{ productStopTimeStr }}</div>
								</li>
								<li v-if="productAgainStartTimeStr">
									<div class="dot" style="background-color:#24F4F6;"></div>
									<div class="text">
										继续生产<span style="font-size: .18rem">(最近)</span>
									</div>
									<div class="dashed"></div>
									<div class="time">{{ productAgainStartTimeStr }}</div>
								</li>
								<li v-if="detectionTimeStr">
									<div class="dot" style="background-color:#DBCC39;"></div>
									<div class="text">已检</div>
									<div class="dashed"></div>
									<div class="time">{{ detectionTimeStr }}</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="r-content">
				<div class="t-content">
					<div class="t-l-content">
						<div class="t-l-t-content">
							<div class="good-count">
								<div class="good-title">
									<span class="dot"></span>
									<div class="good-text">良品数</div>
								</div>
								<div class="good-number">{{ goodProductsCount }}</div>
							</div>
							<div class="circle">
								<el-progress
									type="circle"
									:width="180"
									:percentage="percentPass"
									stroke-linecap="butt"
									:stroke-width="20"
								></el-progress>
							</div>
						</div>
						<div class="t-l-b-content">
							<div class="plan-count">
								<div class="title">计划生产数</div>
								<div class="count-number">{{ planCount }}</div>
							</div>
							<div class="actual-count">
								<div class="title">实际生产数</div>
								<div class="count-number">{{ practicalProductionCount }}</div>
							</div>
						</div>
					</div>
					<div class="t-r-content">
						<div class="product-header">
							生产
						</div>
						<div class="product-body">
							<div class="standard-beat">
								<div class="beat-title">标准生产节拍</div>
								<div class="progress">
									<div class="rate-line"></div>
									<div class="rate">{{ standardProductMeter }}s/pcs</div>
								</div>
							</div>
							<div class="actual-beat">
								<div class="beat-title">实际生产节拍</div>
								<div class="progress">
									<div class="rate-line" :style="`width:${actualWidth};`"></div>
									<div class="rate">{{ actualProductMeter }}s/pcs</div>
								</div>
							</div>
							<div class="plan-time">
								<span>计划生产时间：</span>{{ productionTimeQuantum }}
							</div>
						</div>
					</div>
				</div>
				<div class="b-content">
					<div
						class="problem"
						v-for="(item, index) in troubleData"
						:key="index"
					>
						<!-- <span class="name">{{ item.troubleName }}:</span> -->
						<!-- <span class="count">{{ item.count }}</span> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DataPanel",
	data() {
		return {
			id: null,
			workOrderNum: "",
			productionLine: "",
			brand: "",
			materialName: "",
			productionTimeQuantum: "",
			planCount: 0,
			practicalProductionCount: 0,
			goodProductsCount: 0,
			standardProductMeter: 0,
			actualProductMeter: 0,
			percentPass: 0,
			productStartTimeStr: "",
			productStopTimeStr: "",
			productAgainStartTimeStr: "",
			detectionTimeStr: "",
			troubleData: [],
			workOrderStatus: null,
			actualWidth: "",
			statusArray: [],
			timeStr: "",
			timer: null,
			timer2: null
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/common";
.data-container {
	@include fullScreen;
	$bgColor: #232944;
	background-color: $bgColor;
	position: relative;
	header {
		height: (100/1080) * 100vh;
		width: 100vw;
		background-image: url("../assets/svg/bg_top.svg");
		background-repeat: no-repeat;
		background-size: cover;
		.logout,
		.cur-time,
		.title {
			margin-top: (40/1080) * 100vh;
		}
		img {
			position: absolute;
			top: 57px;
		}
		.l-img {
			left: (375/1920) * 100vw;
		}
		.r-img {
			transform: rotateY(180deg);
			right: (375/1920) * 100vw;
		}
		.logout {
			color: #77f9fa;
			font-size: (24rem/100);
			float: left;
			margin-left: (30/1920) * 100vw;
			span {
				font-size: 0.24rem;
			}
		}
		.title {
			color: #6188ea;
			font-size: (40rem/100);
			font-weight: 600;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
		.cur-time {
			color: #1bcdca;
			font-size: (28rem/100);
			float: right;
			margin-right: (30/1920) * 100vw;
		}
	}
	.body {
		padding: (2000vh/1080) (3000vw/1920);
		height: (100- (100/1080)) vh;
		display: flex;
		.l-content {
			width: (51000vw/1920);
			margin-right: (2000vw/1920);
			.order-information {
				margin-bottom: (2000vh/1080);
				.order-header {
					height: (7600vh/1080);
					@include setTopAng();
					color: #5868d9;
					font-size: (36rem/100);
					font-weight: 500;
					background-color: #2e3561;
					padding: (2000vh/1080) (3000vw/1920);
				}
				.order-body {
					height: (238/1080) * 100vh;
					padding-top: (18vh/1080);
					padding-left: (2000vw/1920);
					@include setBottomAng();
					background-color: #1c2340;
					display: flex;
					flex-wrap: wrap;
					align-content: space-around;
					div {
						font-size: (28rem/100);
						color: #ffffff;
						line-height: (40/1080) * 100vh;
						margin-bottom: (10/1080) * 100vh;
						&:nth-child(2) {
							width: 60%;
						}
					}
				}
			}
			.order-status {
				.status-header {
					height: (7600vh/1080);
					color: #5868d9;
					font-size: (36rem/100);
					font-weight: 500;
					@include setTopAng();
					background-color: #2e3561;
					padding: (2000vh/1080) (3000vw/1920);
				}
				.status-body {
					height: (520/1080) * 100vh;
					@include setBottomAng();
					background-color: #1c2340;
					padding-left: (20/1920) * 100vw;
					.top-status {
						display: flex;
						padding-top: (34/1080) * 100vh;
						.t-left-content {
							margin-right: (48/1920) * 100vw;
							ul {
								li {
									width: (188/1920) * 100vw;
									height: (45/1080) * 100vh;
									display: flex;
									align-items: center;
									padding-left: (17/1920) * 100vw;
									background-image: url("../assets/svg/status-2_bg.svg");
									background-repeat: no-repeat;
									background-size: contain;
									margin-bottom: (13/1080) * 100vh;
									font-size: (20rem/100);
									color: #ffffff;
								}
							}
						}
						.t-right-content {
							.current-status {
								width: (230/1920) * 100vw;
								height: (230/1080) * 100vh;

								@include makeCenter;
								position: relative;
								font-size: (32rem/100);
								font-weight: 500;
								color: #11d0f9;
								&:before {
									content: "";
									position: absolute;
									width: 100%;
									height: 100%;
									z-index: 11;
									background-image: url("../assets/svg/C-status_bg.svg");
									background-repeat: no-repeat;
									background-size: contain;
									background-position: center center;
									animation: rotate 6s linear infinite;
								}
							}
							@keyframes rotate {
								0% {
									transform: rotateZ(0deg); /*从0度开始*/
								}
								100% {
									transform: rotateZ(360deg); /*360度结束*/
								}
							}
							.status-text {
								font-size: (24rem/100);
								font-weight: 500;
								color: #ffffff;
								width: (230/1920) * 100vw;
								text-align: center;
								margin-top: (11/1080) * 100vh;
							}
						}
					}
					.bottom-status {
						margin-top: (18/1080) * 100vh;
						ul {
							li {
								display: flex;
								height: (33/1080) * 100vh;
								align-items: center;
								margin-bottom: (12/1080) * 100vh;
								.dot {
									width: 8px;
									height: 8px;
									border-radius: 50%;
									background-color: #ffffff;
									margin-right: (16/1920) * 100vw;
								}
								.text {
									font-size: (24rem/100);
									font-weight: 500;
									width: (150/1920) * 100vw;
									color: #ffffff;
									margin-right: (9/1920) * 100vw;
								}
								.dashed {
									height: 0;
									width: (126/1920) * 100vw;
									border-bottom: 1px dashed #5868d9;
									margin-right: (12/1920) * 100vw;
								}
								.time {
									color: #00f6ff;
									font-size: (24rem/100);
									font-weight: 500;
									color: #00f6ff;
								}
							}
						}
					}
				}
			}
		}
		.r-content {
			width: 1330/1920vw;
			.t-content {
				display: flex;
				.t-l-content {
					display: flex;
					flex-direction: column;
					margin-left: (20/1920) * 100vw;
					.t-l-t-content {
						width: (727/1920) * 100vw;
						display: flex;
						.good-count {
							.good-title {
								display: flex;
								align-items: center;
								.dot {
									display: block;
									width: 17px;
									height: 17px;
									border-radius: 17px;
									background-color: #5868d9;
									margin-right: (30/1920) * 100vw;
								}
								.good-text {
									font-size: (40rem/100);
									color: #ffffff;
								}
							}
							.good-number {
								height: (168/1080) * 100vh;
								width: (277/1920) * 100vw;
								line-height: 168px;
								font-size: (120rem/100);
								font-weight: bold;
								color: #5868d9;
								letter-spacing: 3px;
							}
						}
						.circle {
							width: 190px;
							margin-left: (218/1920) * 100vw;
						}
					}
					.t-l-b-content {
						display: flex;
						margin-top: (40/1080) * 100vh;
						.plan-count {
							display: flex;
							width: (340/1920) * 100vw;
							height: (120/1080) * 100vh;
							overflow: hidden;
							border-radius: 8px;
							.title {
								font-size: (32rem/100);
								font-weight: 500;
								color: #ffffff;
								background-color: #448dff;
								@include makeCenter;
								flex: 1;
							}
							.count-number {
								font-size: (32rem/100);
								font-weight: 500;
								color: #ffffff;
								display: flex;
								align-items: center;
								background-color: #85bcff;
								width: (100/1920) * 100vw;
								position: relative;
								z-index: 20;
							}
							.count-number:after {
								content: "";
								width: 100%;
								height: 140%;
								position: absolute;
								left: -(25/1920) * 100vw;
								top: -(25/1080) * 100vh;
								z-index: -1;
								border-radius: 50% 0 0 50%;
								background: #85bcff;
							}
						}
						.actual-count {
							display: flex;
							width: (340/1920) * 100vw;
							height: (120/1080) * 100vh;
							overflow: hidden;
							border-radius: 8px;
							margin-left: (47/1920) * 100vw;
							.title {
								font-size: (32rem/100);
								font-weight: 500;
								color: #ffffff;
								background-color: #40ccdd;
								@include makeCenter;
								flex: 1;
							}
							.count-number {
								font-size: (32rem/100);
								font-weight: 500;
								color: #ffffff;
								background-color: #55e2f5;
								width: (100/1920) * 100vw;
								display: flex;
								align-items: center;
								position: relative;
								z-index: 20;
							}
							.count-number:after {
								content: "";
								width: 100%;
								height: 140%;
								position: absolute;
								left: -(25/1920) * 100vw;
								top: -(25/1080) * 100vh;
								z-index: -1;
								border-radius: 50% 0 0 50%;
								background: #55e2f5;
							}
						}
					}
				}
				.t-r-content {
					margin-left: 3.7vw;
					width: (510/1920) * 100vw;
					.product-header {
						height: (7600vh/1080);
						@include setTopAng();
						color: #5868d9;
						font-size: (36rem/100);
						font-weight: 500;
						background-color: #2e3561;
						padding: (2000vh/1080) (3000vw/1920);
					}
					.product-body {
						padding: (1800vh/1080) (2000vw/1920);
						height: (328/1080) * 100vh;
						width: 100%;
						@include setBottomAng();
						background-color: #1c2340;
						.standard-beat {
							.beat-title {
								font-size: (28rem/100);
								font-weight: 400;
								color: #f3f6fa;
							}
							.progress {
								display: flex;
								align-items: center;
								margin-top: (13/1080) * 100vh;
								.rate-line {
									width: (220/1920) * 100vw;
									height: 3vh;
									background: linear-gradient(270deg, #dc4f69, #f49b10);
									border-radius: 0px 10px 10px 0px;
								}
								.rate {
									margin-left: (5/1920) * 100vw;
									font-size: (24rem/100);
									font-weight: 400;
									text-align: left;
									color: #f29d31;
								}
							}
						}
						.actual-beat {
							.beat-title {
								margin-top: (22/1080) * 100vh;
								font-size: (28rem/100);
								font-weight: 400;
								color: #f3f6fa;
							}
							.progress {
								display: flex;
								align-items: center;
								margin-top: (13/1080) * 100vh;
								.rate-line {
									height: 3vh;
									background: linear-gradient(270deg, #6d53ff, #00b9fe);
									border-radius: 0px 10px 10px 0px;
								}
								.rate {
									margin-left: (5/1920) * 100vw;
									font-size: (24rem/100);
									font-weight: 400;
									text-align: left;
									color: #5c80dc;
								}
							}
						}
						.plan-time {
							width: (470/1920) * 100vw;
							height: (80/1080) * 100vh;
							color: #5868d9;
							font-size: (28rem/100);
							background: #292e48;
							border: 1px solid #000e32;
							border-radius: 8px;
							margin-top: (23/1080) * 100vh;
							@include makeCenter;
							span {
								color: #92949d;
							}
						}
					}
				}
			}
			.b-content {
				margin-top: (20/1080) * 100vh;
				width: (1330/1920) * 100vw;
				height: (506/1080) * 100vh;
				padding: (20/1080) * 100vh (20/1920) * 100vw;
				@include setAng();
				background-color: #1c2340;
				display: flex;
				flex-wrap: wrap;
				.problem {
					margin-right: (23/1920) * 100vw;
					margin-bottom: (9/1080) * 100vh;
					width: (239/1920) * 100vw;
					height: (86/1080) * 100vh;
					border: 1px solid #36549f;
					//border-image: linear-gradient(180deg, #6188ea, #36549f) 1 1;
					border-radius: 8px;
					overflow: hidden;
					background-color: #292e48;
					@include makeCenter;
					span.name {
						color: #92949d;
						font-size: (28rem/100);
					}
					span.count {
						color: #448dff;
						font-size: (28rem/100);
					}
					&:nth-child(5n) {
						margin-right: 0;
					}
					&:nth-last-child(-n + 5) {
						margin-bottom: 0;
					}
				}
			}
		}
	}
}
</style>

<style lang="scss">
.circle {
	.el-progress {
		.el-progress__text {
			font-size: (36rem/100) !important;
			//height: (54/1080)*100vh;
			color: #ffffff;
			font-weight: bold;
		}
	}
}
</style>
