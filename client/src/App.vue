<template>
  <div id="wrapper">
    <TheHeader/>
    <main>
      <router-view v-slot="{ Component }">
				<transition name="route" mode="out-in">
					<component :is="Component"></component>
				</transition>
			</router-view>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components:{
    TheHeader,
    TheFooter
  }
}
</script>