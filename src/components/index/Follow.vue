<template>
	<section>
		<van-notice-bar left-icon="volume-o" mode="closeable" ellipsis="true" class="notice">
			<template v-for="(notice, index) in notices">
				<a :href="notice.link" :key="index">{{notice.text}}</a>
			</template>
		</van-notice-bar>
		<van-swipe :autoplay="3000" class="swipe">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<div class="">
					<a href="#">
						<img v-lazy="image" />
					</a>
				</div>
			</van-swipe-item>
		</van-swipe>
		<div>
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<div class="lincoapp-home-title">
					<h2 class="channel-title">要闻</h2>
				</div>
				<van-cell v-for="item in list" :key="item" :border="false" class="lincoapp-graphic-list2">
					<div class="noimg">
						<a href="http://view.inews.qq.com/a/PEG2019051500369400?id=755193875627693585&amp;flag=top&amp;icfa=home_touch&amp;f_pid=135&amp;iarea=380"
							class="a-lk">
							<div class="detail">
								<strong class="tit">习近平在亚洲文明对话大会开幕式上的主旨演讲（全文）</strong>
								<div class="info">
									<span class="icon type7">置顶</span>
									<span class="date">3小时前</span>
								</div>
							</div>
						</a>
					</div>
				</van-cell>
			</van-list>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Follow',
		props: {
			msg: String
		},
		data() {
			return {
				active: 2,
				images: [
					'https://img.yzcdn.cn/2.jpg',
					'https://img.yzcdn.cn/2.jpg'
				],
				list: [],
				loading: false,
				finished: false,
				notices: [{
					text: "1黄楚平在全省重大项目建设砂石料供应保障现场会上要求",
					link: "https://www.baidu.com"
				}, {
					text: "2黄楚平在全省重大项目建设砂石料供应保障现场会上要求",
					link: "https://www.taobao.com"
				}]
			}
		},
		methods: {
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			},
			noticeClick() {
				alert("a")
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import url(../../assets/css/index/style.css);
	.swipe {
		width: 100%;
		height: 200px;
	}

	.swipe a,
	.swipe a img {
		display: block;
		width: 100%;
	}

	.notice a {
		color: inherit;
		margin: 0 10px;
	}

	.lincoapp-home-title {
		padding: 10px 16px 4px 16px;
	}

	.channel-title {
		margin: 0;
		font-size: 22px;
		text-align: left;
		color: #277de2;
		font-weight: 700;
	}
</style>