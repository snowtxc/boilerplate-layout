<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <SidebarApp :open="openSidebar" @closeSidebar="openSidebar = false"/>

    <div class="flex-1 flex flex-col overflow-hidden">
      <HeaderApp @toggleSidebar="openSidebar=!openSidebar"/>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>


import HeaderApp from '@/shared/Header';
import SidebarApp from '@/shared/Sidebar'

export default {
  name: 'MainLayout',
  data() {
    return {
      openSidebar: false
    }
  },
  components:{
    HeaderApp,
    SidebarApp
  }

  
}
</script>

<style>

</style>
