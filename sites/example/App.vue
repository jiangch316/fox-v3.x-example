<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-10 11:24:49
-->
<script lang="ts">
import { ref, defineComponent } from 'vue'
import LinkNavigate from './pages/link-navigate-to/index.vue'
import ProgramNavigate from './pages/program-navigate/index.vue'
import ProgramNavigateOpen from './pages/program-navigate-open/index.vue'
import ProgramNavigateAppend from './pages/program-navigate-append/index.vue'
import ProgramNavigateAll from './pages/program-navigate-all/index.vue'
import ProgramNavigatePart from './pages/program-navigate-part/index.vue'
import ParamsPass from './pages/params-pass/index.vue'
import ParamsPassOptions from './pages/params-pass-options/index.vue'
import Guard from './pages/guard/index.vue'
import Bus from './pages/bus/index.vue'
import EffectScopeDemo from './pages/effect-scope/index.vue'
import SuspenseDemo from './pages/suspense/index.vue'
import SuspenseOpenDemo from './pages/suspense-open/index.vue'

export default defineComponent({
  components: {
    LinkNavigate,
    ProgramNavigate,
    ProgramNavigateOpen,
    ProgramNavigateAppend,
    ProgramNavigateAll,
    ProgramNavigatePart,
    ParamsPass,
    ParamsPassOptions,
    Guard,
    Bus,
    EffectScopeDemo,
    SuspenseDemo,
    SuspenseOpenDemo
  }
})
</script>

<script lang="ts" setup>
//当前导航索引key
const currentIndexKey = 'fox_currentIndex'

let index: number = 0
let s = window.localStorage.getItem(currentIndexKey)
if (s !== null && s.length > 0) {
  index = Number(s)
}
//导航列表
const navigateList = ref<{ text: string; component: string }[]>([
  {
    text: 'link导航',
    component: 'LinkNavigate'
  },
  {
    text: '编程导航(to)',
    component: 'ProgramNavigate'
  },
  {
    text: '编程导航(open)',
    component: 'ProgramNavigateOpen'
  },
  {
    text: '编程导航(append)',
    component: 'ProgramNavigateAppend'
  },
  {
    text: '编程导航(整体替换)',
    component: 'ProgramNavigateAll'
  },
  {
    text: '编程导航(局部替换)',
    component: 'ProgramNavigatePart'
  },
  {
    text: '参数传递',
    component: 'ParamsPass'
  },
  {
    text: '参数传递(options)',
    component: 'ParamsPassOptions'
  },
  {
    text: '导航守护',
    component: 'Guard'
  },
  {
    text: '数据存储(Bus)',
    component: 'Bus'
  },
  {
    text: 'EffectScope',
    component: 'EffectScopeDemo'
  },
  {
    text: 'Suspense',
    component: 'SuspenseDemo'
  },
  {
    text: 'Suspense(Open)',
    component: 'SuspenseOpenDemo'
  }
])

//设置当前组件
let current = ref(navigateList.value[index].component)
//设置当前描述
let currentName = ref(navigateList.value[index].text)

//导航
const navigate = (index: number) => {
  window.localStorage.setItem(currentIndexKey, `${index}`)
  let location = window.location
  location.hash = ''
  location.reload()
}
</script>

<template>
  <div class="fox-navigate-list" v-show="true">
    <template v-for="(item, index) in navigateList" :key="`nav-${index}`">
      <button class="fox-navigate-item" @click="navigate(index)">{{ item.text }}</button>
    </template>
  </div>
  <h1>{{ currentName }}</h1>
  <div class="fox-show-div">
    <component :is="current"></component>
  </div>
</template>

<style>
.fox-navigate-list {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}

.fox-navigate-item {
  margin-left: 10px;
  margin-bottom: 10px;
  width: 160px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.fox-show-div {
  padding: 50px;
}

.my-link {
  cursor: pointer;
  margin-right: 15px;
  color: #ebb563;
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: 0;
  padding: 0;
}

.my-button {
  margin-right: 10px;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 7px 15px;
  font-size: 14px;
  border-radius: 4px;
}

.my-router-view-div {
  margin-top: 10px;
}
</style>
