import Vue from 'vue'
import App from './App'
import sunUiBasic from './components/sunui-upimg/sunui-upimg-basic.vue'
import sunUiOos from './components/sunui-upimg/sunui-upimg-alioos.vue'
import sunUiqiNiu from './components/sunui-upimg/sunui-upimg-qiniu.vue'
import sunUiCos from './components/sunui-upimg/sunui-upimg-tencent.vue'
Vue.component('sunui-upbasic',sunUiBasic)
Vue.component('sunui-upoos',sunUiOos)
Vue.component('sunui-upqiniu',sunUiqiNiu)
Vue.component('sunui-upcos',sunUiCos)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
