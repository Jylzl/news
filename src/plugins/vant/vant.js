import Vue from 'vue'
import { Button } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Swipe,SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { NoticeBar } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Button);
Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(Cell).use(CellGroup);