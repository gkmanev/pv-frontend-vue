<template>
  <aside class="horizontal-left-sidebar" :class="Sidebar_drawer ? `show-sidebar bg-${SidebarColor}` : `bg-${SidebarColor}`">
      <div class="container-fluid">
      <div :class="`bg-${logoColor} navbar-header d-block d-lg-none`">
          <LogoDark v-if="logoColor == 'white'" />
          <LogoLight v-else />
          <span class="d-block d-lg-none close-sidebar-btn" @click="showMobileSidebar"><i class="ti ti-close"></i></span>
      </div>
      <div class="scrlbar">
      <ul class="nav mb-0">
        <template v-for="(route, i) in routes">
        <!---Sub Menu -->
        <li class="nav-item first-dd" :class="route.dd" :key="route.title" v-if="route.childern">
          <a class="nav-link d-flex">
            <!--<i  :class="route.icon"></i>-->
            <feather :type="route.icon"></feather>
            <span class="hide-text">{{$t(route.i18n) || route.title}}</span>
            <i class="ti ti-angle-down dd-arrow hide-text"></i>
          </a>
          
            <ul class="nav flex-column sub-menu" :class="`bg-${SidebarColor}`">
              <template v-for="(subroute, i) in route.childern">
              <li class="nav-item" :key="i" @click="showMobileSidebar">
                <router-link class="nav-link d-flex"  :to="`${subroute.to}`">
                  <i  :class="subroute.icon"></i>
                  <span class="hide-text">{{subroute.title}}</span>
                </router-link>
              </li>
              </template>
            </ul>
          
        </li> 
        <!---Single Menu -->
        <li class="nav-item" :key="i" v-if="!route.childern && !route.header" @click="showMobileSidebar">
          <router-link :to="`${route.to}`" class="nav-link d-flex" >
              <!--<i  :class="route.icon"></i>-->
            <feather :type="route.icon"></feather>
              <span class="hide-text">{{route.title}}</span>
          </router-link>
        </li>
        
        </template>
      </ul>
    </div>
     </div> 
  </aside>   
</template>

<script>
import LogoDark from '../logo-dark/LogoDark'
import LogoLight from '../logo-light/LogoLight'
import { mapState } from "vuex";
import SidebarData from './SidebarData'
export default {
    name: "HorizontalSidebar",
    components:{
      LogoDark,
      LogoLight,
      
    },
    data:()=>({
      initialShow: true,
      routes: SidebarData
    
    }),
    computed: {
      ...mapState(["logoColor", "Sidebar_drawer", "SidebarColor"]),
      
    },
    methods:{
      showMobileSidebar(){
        this.$store.commit("SET_SIDEBAR_DRAWER", false);
      },
    }
}
</script>

<style>

</style>