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
				<van-cell v-for="(item,index) in newsList" :key="index" :border="false" class="lincoapp-graphic-list2">
					<div class="noimg" v-if="!(item.typeImg)">
						<a :href="item.url" class="a-lk">
							<div class="detail">
								<strong class="tit">{{item.title}}</strong>
								<div class="info">
									<span class="icon type7">{{item.channelName}}</span>
									<span class="date">3小时前</span>
								</div>
							</div>
						</a>
					</div>
					<div v-else>
						<a :href="item.url" class="a-lk">
							<div class="detail">
								<strong class="tit">{{item.title}}</strong>
								<div class="info">
									<span class="date">53分钟前</span>
								</div>
							</div>
							<span class="u-img">
								<span class="img-wrap">
									<img :src="'http://localhost:8080'+(item.typeImg)" class="img" :alt="item.title">
								</span>
							</span>
						</a>
					</div>
					<div v-if="false">
						<a href="//c.gdt.qq.com/gdt_mclick.fcg?viewid=npu8IzgGOAfEnQBWhLQ25LTd5sUL3oEwh4bY885KSDgd8ic!aUkmGE5KI8RnqerDMtpnm_AUwYu5W1PNvChowtqWPRh8PSHRaqZx76dC_UGeO5HgK3CmiJ8EBtNrEnfxThtkHO5AQK5Jo9fcAWFhA0PumzRJiSVl&amp;jtype=0&amp;i=1&amp;os=2&amp;asi=%7B%22mf%22%3A%22MX4%22%7D&amp;clklpp=__CLICK_LPP__&amp;xp=3"
							class="a-lk  multi ">
							<strong class="tit">有点贵，怪面料太好！穿着倍有面，验货付款</strong>
							<div class="u-img">
								<span class="img-wrap">
									<img src="//pgdt.gtimg.cn/gdt/0/DAAmNNhADwAC0AAGBcwpsHBSvAm7xr.jpg/0?ck=4261ff518416d66dc974f584c73431e5"
										alt="" class="img">
								</span>
								<span class="img-wrap">
									<img src="//pgdt.gtimg.cn/gdt/0/DAAmNNhADwAC0AAGBcwpvmCGU0bF6W.jpg/0?ck=25aec2dc7201dd80ae23214a96ce6bcb"
										alt="" class="img">
								</span>
								<span class="img-wrap">
									<img src="//pgdt.gtimg.cn/gdt/0/DAAmNNhADwAC0AAFBcwpsKDMQ99ndO.jpg/0?ck=c5426e3d4ddab631acaa25f6bab150fe"
										alt="" class="img">
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
		name: "Follow",
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
					},
					{
						title: "2希望呢速度加快立法和了2希望呢速度加快立法和了",
						imgUrl: "http://www.xiaogan.gov.cn/u/cms/www/201812/25085123k5u8.jpg",
						url: "https://www.baidu.com"
					},
					{
						title: "",
						imgUrl: "http://www.xiaogan.gov.cn/u/cms/www/201904/04165914spyx.jpg",
						url: "https://www.baidu.com"
					}
				],
				newsList: [],
				loading: false,
				finished: false,
				// 通知公告
				notices: [{
						text: "1黄楚平在全省重大项目建设砂石料供应保障现场会上要求",
						link: "https://www.baidu.com"
					},
					{
						text: "2黄楚平在全省重大项目建设砂石料供应保障现场会上要求",
						link: "https://www.taobao.com"
					}
				]
			};
		},
		mounted() {
			// this.getData();
		},
		methods: {
			onLoad() {
				// 异步更新数据
				let _this = this;
				_this.$axios
						.post(_this.$api.contentList, {
							format:1,
							siteIds: 1,
							count: _this.newsList.length + 15,
							channelIds: 75,
							https: 0
						})
						.then(res => {
							console.log(res);
							let list = res.body;
							for (let i = _this.newsList.length; i < list.length; i++) {
								_this.newsList.push(list[i]);
							}
							// 加载状态结束
							_this.loading = false;
						})
						.catch(error => {
							console.log(error);
						});
					if (this.newsList.length >= 40) {
						this.finished = true;
					}
				setTimeout(() => {
					
				}, 500);
			},
			noticeClick() {
				alert("a");
			},
			getData() {
				this.$axios
					.post(this.$api.contentList, {
						format:1,
						siteIds: 1,
						count: 15,
						channelIds: 75,
						https: 0
					})
					.then(res => {
						console.log(res);
						this.newsList = res.body;
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
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
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 16px;
		margin: 0;
		line-height: 22px;
		text-align: center;
		font-size: 17px;
		color: #ffffff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.news-list {
		padding-bottom: 50px;
	}
</style>