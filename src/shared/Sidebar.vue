<template>
 <div 
      :class="open ? 'block' : 'hidden'"
      @click="closeSidebar"
      class="fixed inset-0 z-5 transition-opacity bg-black opacity-50 lg:hidden"
></div>
<div :class="open ? 'translate-x-0 ease-out' : '-translate-x-full ease-in '" class="fixed lg:static z-10  lg:translate-x-0 ease-out ease-in py-10 h-screen bg-dark-blue-900  top-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl text-quartenary bg-primary   z-10 py-4  transition-all duration-300 ">
  <div class="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
    <div class="flex items-center p-5">
      <div>
        <img src="../assets/cryptocurrency.png" class="w-20 h-auto"/>
      </div>
      <a href="#" class="mt-2 text-center w-full inline-block">
        <h1 class="text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2">Crypto manager</h1>
      </a>
    </div>
    
    <div class="flex flex-col">
        <hr class="my-8 min-w-full text-white"/>
        
        <ul class="flex flex-col min-w-full  gap-2 list-none">
            <router-link to="/dashboard"  v-slot="{  isActive }" @click="clickItem">
                <li :class="[isActive ? activeClass : inactiveClass]" class=" mb-4 flex items-center gap-4 text-sm text-white font-light px-4 py-4  rounder-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white ">
                    <span class="material-icons  text-xl leading-none"><i class="fa-solid fa-gauge mr-3"></i>Dashboard</span>
                </li> 
              </router-link>


             <router-link to="/earnings"  v-slot="{  isActive }" @click="clickItem">
                <li :class="[isActive ? activeClass : inactiveClass]" class=" mb-4 flex items-center gap-4 text-sm text-white font-light px-4 py-4  rounder-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white ">
                    <span class="material-icons  text-xl leading-none"><i class="fa-solid fa-gauge mr-3"></i>Earns</span>
                </li> 
              </router-link>

        </ul>
        
    </div>

  
  </div>

  

</div>
    
</template>

<script>
export default {
  name: 'SidebarApp',

  data() {
    return {
      activeClass :   "bg-dark-blue-700 border-l-4",
      inactiveClass : "bg-dark-blue-900 border-none" 
    }
  },
  methods: {
     closeSidebar: function(){
        this.$emit("closeSidebar")
     },

     clickItem: function(){
       this.$emit("closeSidebar")
    }

  },
  props: {
     open: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
