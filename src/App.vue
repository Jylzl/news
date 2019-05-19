<template>
	<div id="app">
		<router-view />
		<van-tabbar v-model="active" sticky>
			<van-tabbar-item icon="fire-o" :to="{name:'news'}">新闻</van-tabbar-item>
			<van-tabbar-item icon="video-o" to="search" info="20">视频</van-tabbar-item>
			<van-tabbar-item icon="aim" to="about" dot>同城汇</van-tabbar-item>
			<van-tabbar-item icon="friends-o" info="5">我的</van-tabbar-item>
		</van-tabbar>
		<RightBar></RightBar>
	</div>
</template>
<script>
	import RightBar from '@/components/tools/RightBar.vue'
	export default {
		components: {
			RightBar
		},
		data() {
			return {
				active: 0
			}
		}
	}
</script>

<style lang="scss">
/*!src/modules/reset/reset.less*/
body{font:400 14px/1.5 "\5FAE\8F6F\96C5\9ED1",Helvetica;color:#000;background-color:#fff;-webkit-user-select:none;-webkit-text-size-adjust:none}
body,div,dl,dt,dd,del,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,menu{margin:0;padding:0}
input[type=text],textarea{-webkit-appearance:none;outline:0}
button{outline:0}
table{border-collapse:collapse;border-spacing:0}
fieldset,img{border:0}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:400}
ol,ul,li{list-style:none}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400;font-style:normal}
q:before,q:after{content:''}
abbr,acronym{border:0}
header,section,footer{display:block;margin:0;padding:0}
a{color:#000;text-decoration:none}
.dn{display:none}
</style>