<template>
	<div class="lincoapp-fixed-btn" id="jumphelper">
		<div class="lincoapp-home-jumphelper" v-show="visible" @click="backToTop"><span class="gotop">∧</span></div>
		<div class="lincoapp-btn-refresh" @click="refresh"><span></span></div>
	</div>
</template>

<script>
export default {
	name: "RightBar",
	props: {
		visibilityHeight: {
			type: Number,
			default: 400
		},
		backPosition: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			visible: false,
			interval: null,
			isMoving: false
		};
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
		if (this.interval) {
			clearInterval(this.interval);
		}
	},
	methods: {
		refresh() {
			this.$router.go(0);
		},
		handleScroll() {
			this.visible = window.pageYOffset > this.visibilityHeight;
		},
		backToTop() {
			if (this.isMoving) return;
			const start = window.pageYOffset;
			let i = 0;
			this.isMoving = true;
			this.interval = setInterval(() => {
				const next = Math.floor(
					this.easeInOutQuad(10 * i, start, -start, 500)
				);
				if (next <= this.backPosition) {
					window.scrollTo(0, this.backPosition);
					clearInterval(this.interval);
					this.isMoving = false;
				} else {
					window.scrollTo(0, next);
				}
				i++;
			}, 16.7);
		},
		easeInOutQuad(t, b, c, d) {
			if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
			return (-c / 2) * (--t * (t - 2) - 1) + b;
		}
	}
};
</script>
<style scoped>
.lincoapp-fixed-btn {
	position: fixed;
	right: 16px;
	bottom: 54px;
	width: 36px;
	z-index: 10;
}

.lincoapp-home-jumphelper span {
	display: block;
	box-sizing: border-box;
	width: 36px;
	height: 36px;
	background: url(../../assets/img/sp-ico22.png) no-repeat -180px -61px;
	background-size: 300px auto;
	-webkit-background-size: 300px auto;
	margin-top: 10px;
	overflow: hidden;
	text-indent: -100%;
}

.lincoapp-btn-refresh span {
	display: block;
	box-sizing: border-box;
	width: 36px;
	height: 36px;
	background: url(../../assets/img/refresh.png) no-repeat;
	-webkit-background-size: 36px auto;
	background-size: 36px auto;
}
</style>