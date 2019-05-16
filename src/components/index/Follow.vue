<template>
	<section>
		<van-notice-bar left-icon="volume-o" mode="closeable" ellipsis="true" class="notice">
			<template v-for="(notice, index) in notices">
				<a :href="notice.link" :key="index">{{notice.text}}</a>
			</template>
		</van-notice-bar>
		<van-swipe :autoplay="3000" indicator-color="#277de2" class="swipe">
			<van-swipe-item v-for="(carouselNew, index) in carouselNews" :key="index">
				<div class="carousel-news">
					<a :href="carouselNew.url" class="carousel-news-item">
						<img v-lazy="carouselNew.imgUrl" class="carousel-news-img" />
						<h6 class="carousel-news-title" v-if="carouselNew.title.length>0">{{carouselNew.title}}</h6>
					</a>
				</div>
			</van-swipe-item>
		</van-swipe>
		<div class="news-list">
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<div class="lincoapp-home-title">
					<h2 class="channel-title">要闻</h2>
				</div>
				<van-cell v-for="(item,index) in list" :key="index" :border="false" class="lincoapp-graphic-list2">
					<div class="noimg">
						<a :href="item.url" class="a-lk">
							<div class="detail">
								<strong class="tit">{{item.title}}</strong>
								<div class="info">
									<span class="icon type7">置顶</span>
									<span class="date">3小时前</span>
								</div>
							</div>
						</a>
					</div>
					<div>
						<a href="//info.3g.qq.com/g/s?aid=news_ss&amp;docId=5726408329741821066&amp;id=5726408329741821066&amp;icfa=home_touch&amp;f_pid=135&amp;iarea=380"
							class="a-lk">
							<div class="detail">
								<strong class="tit">河南周口4个月大男婴被盗 警方悬赏50000元征集破案线索</strong>
								<div class="info">
									<span class="date">53分钟前</span>
								</div>
							</div>
							<span class="u-img">
								<span class="img-wrap">
									<img src="http://www.xiaogan.gov.cn/u/cms/www/201905/10104136ncfd.jpg" class="img">
								</span>
							</span>
						</a>
					</div>
					<div>
						<a href="//c.gdt.qq.com/gdt_mclick.fcg?viewid=npu8IzgGOAfEnQBWhLQ25LTd5sUL3oEwh4bY885KSDgd8ic!aUkmGE5KI8RnqerDMtpnm_AUwYu5W1PNvChowtqWPRh8PSHRaqZx76dC_UGeO5HgK3CmiJ8EBtNrEnfxThtkHO5AQK5Jo9fcAWFhA0PumzRJiSVl&amp;jtype=0&amp;i=1&amp;os=2&amp;asi=%7B%22mf%22%3A%22MX4%22%7D&amp;clklpp=__CLICK_LPP__&amp;xp=3" class="a-lk  multi ">
							<strong class="tit">有点贵，怪面料太好！穿着倍有面，验货付款</strong>
							<div class="u-img">
								<span class="img-wrap">
									<img src="//pgdt.gtimg.cn/gdt/0/DAAmNNhADwAC0AAGBcwpsHBSvAm7xr.jpg/0?ck=4261ff518416d66dc974f584c73431e5" alt="" class="img">
								</span>
								<span class="img-wrap">
									<img src="//pgdt.gtimg.cn/gdt/0/DAAmNNhADwAC0AAGBcwpvmCGU0bF6W.jpg/0?ck=25aec2dc7201dd80ae23214a96ce6bcb" alt="" class="img">
								</span>
								<span class="img-wrap">
									<img src="//pgdt.gtimg.cn/gdt/0/DAAmNNhADwAC0AAFBcwpsKDMQ99ndO.jpg/0?ck=c5426e3d4ddab631acaa25f6bab150fe" alt="" class="img">
								</span>
							</div>
							<div class="detail">
								<div class="info">
									<span class="icon type3">图库</span>
									<span class="btn-infonews">AFQ</span>
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
				// 轮播新闻
				carouselNews: [{
					title: "1希望呢速度加快立法和了1希望呢速度加快立法和了",
					imgUrl: "http://www.xiaogan.gov.cn/u/cms/www/201905/10104136ncfd.jpg",
					url: "https://www.baidu.com"
				}, {
					title: "2希望呢速度加快立法和了2希望呢速度加快立法和了",
					imgUrl: "http://www.xiaogan.gov.cn/u/cms/www/201812/25085123k5u8.jpg",
					url: "https://www.baidu.com"
				}, {
					title: "",
					imgUrl: "http://www.xiaogan.gov.cn/u/cms/www/201904/04165914spyx.jpg",
					url: "https://www.baidu.com"
				}],
				list: [{
					title: "习近平在亚洲文明对话大会开幕式上的主旨演讲（全文）",
					type: 1,
					url: "https://www.baidu.com"
				}, {
					title: "全省重大项目建设砂石料供应保障现场会在我市召开",
					type: 1,
					url: "https://www.baidu.com"
				}, {
					title: "市脱贫攻坚指挥部第一次全体会议召开 潘启胜出席会议并讲话",
					type: 1,
					url: "https://www.baidu.com"
				}],
				loading: false,
				finished: false,
				// 通知公告
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
						this.list.push(this.list[0]);
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
<style>
	.van-swipe__indicator--active {
		width: 12px;
		border-radius: 3px;
	}
</style>

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

	.carousel-news {
		width: 100%;
		height: 100%;
	}

	.carousel-news .carousel-news-item {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		color: inherit;
	}

	.carousel-news-img {
		display: block;
		width: 100%;
		min-height: 100%;
	}

	.carousel-news-title {
		display: inline-block;
		box-sizing: border-box;
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		height: 32px;
		width: auto;
		padding: 5px 10px;
		background-color: rgba(0, 0, 0, .2);
		border-radius: 16px;
		margin: 0;
		line-height: 22px;
		text-align: center;
		font-size: 17px;
		color: #FFFFFF;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.news-list {
		padding-bottom: 50px;
	}
</style>