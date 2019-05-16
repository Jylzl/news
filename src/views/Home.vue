<template>
	<div>
		<van-nav-bar class="p-header" @click-right="onClickRight">
			<h1 slot="left" class="p-logo"><span>手机网站</span></h1>
			<van-icon name="search" slot="right" class="p-search" />
		</van-nav-bar>
		<van-tabs v-model="active" background="#edf5fa" title-active-color="#03a9f4" :ellipsis="true"
			:lazy-render="true" :animated="true" sticky>
			<van-tab title="关注">
				<Follow />
			</van-tab>
			<van-tab title="推荐">内容 2</van-tab>
			<van-tab title="资讯">内容 3</van-tab>
			<van-tab title="政务">内容 4</van-tab>
			<van-tab title="专题">内容 4</van-tab>
			<van-tab title="服务">内容 4</van-tab>
			<van-tab title="互动">内容 4</van-tab>
			<van-tab title="数据">内容 4</van-tab>
			<van-tab title="市情">内容 4</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Follow from '@/components/index/Follow.vue'

	export default {
		name: 'home',
		components: {
			Follow
		},
		data() {
			return {
				active: 0
			}
		},
		methods: {
			onClickRight() {
				this.$router.push({
					path: '/search',
					name: 'search',
					query: {
						q: '孝感'
					}
				})
			}
		}

	}
</script>
<style>
	.van-tab--active .van-ellipsis {
		font-weight: bold !important;
	}
</style>


<style scoped>
	.p-header {
		background-color: #277de2;
	}

	.p-header .van-nav-bar__title {
		color: #fff;
	}

	.p-logo {
		margin: 0;
		padding: 7px 0;
	}

	.p-logo span {
		display: block;
		width: 187.5px;
		height: 32px;
		background: url(../assets/img/sp-ico22.png) no-repeat -1px -301px;
		background-size: 375px auto;
		overflow: hidden;
		text-indent: -200%;
	}

	.p-search {
		font-size: 26px;
		color: #ffffff !important;
	}
</style>