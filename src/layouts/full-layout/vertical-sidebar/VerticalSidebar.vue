<template>
  <aside
    class="left-sidebar"
    :class="Sidebar_drawer ? `show-sidebar bg-${SidebarColor}` : `bg-${SidebarColor}`"
  >
    <div :class="`bg-${logoColor} navbar-header`">
      <LogoDark v-if="logoColor == 'white'" />
      <LogoLight v-else />
      <span
        class="d-block d-lg-none close-sidebar-btn"
        @click="showMobileSidebar"
        ><i class="ti ti-close"></i
      ></span>
    </div>
    
      <VuePerfectScrollbar class="scrlbar" >
      <ul class="nav flex-column mb-0">
        <template v-for="(route, i) in routes">
          <!---Menu Title -->
          <li class="nav-item" :key="route.header" v-if="route.header">
            <div class="d-flex nav-small-cap">
              <i :class="route.icon"></i>
              <span class="hide-text">{{ route.header }}</span>
            </div>
          </li>
          <!---Sub Menu -->
          <li class="nav-item" :key="route.title" v-if="route.childern">
            <a class="nav-link d-flex" v-b-toggle="route.id">
              <feather :type="route.icon"></feather>
              <span class="hide-text">{{ $t(route.i18n) || route.title }}</span>
              <i class="ti ti-angle-down dd-arrow ml-auto hide-text"></i>
            </a>
            <b-collapse :id="route.id" accordion="sidebar-accordion" :visible="$route.path == `${route.name + $route.name.replace(/\s+/g, '-').toLowerCase()}`">
              <ul class="nav flex-column sub-menu">
                <template v-for="(subroute, i) in route.childern">
                  <li class="nav-item" :key="i">
                    <router-link class="nav-link d-flex" :to="`${subroute.to}`">
                      <i :class="subroute.icon"></i>
                      <span class="hide-text">{{ subroute.title }}</span>
                    </router-link>
                  </li>
                </template>
              </ul>
            </b-collapse>
          </li>
          <!---Single Menu -->
          <li class="nav-item" :key="i" v-if="!route.childern && !route.header">
            <router-link :to="`${route.to}`" class="nav-link d-flex">
              <feather :type="route.icon"></feather>
              <span class="hide-text">{{ $t(route.i18n) || route.title }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </VuePerfectScrollbar>
  </aside>
</template>

<script>
import LogoDark from "../logo-dark/LogoDark";
import LogoLight from "../logo-light/LogoLight";
import { mapState } from "vuex";
import SidebarData from "./SidebarData";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: "VerticalSidebar",
  components: {
    LogoDark,
    LogoLight,
    VuePerfectScrollbar
  },
  data: () => ({
    initialShow: true,
    routes: SidebarData,
    
  }),
  computed: {
    ...mapState(["logoColor", "Sidebar_drawer", "SidebarColor"]),
    check(){
      return console.log(this.$router.history.current);
    }
  },
  methods: {
    showMobileSidebar() {
      this.$store.commit("SET_SIDEBAR_DRAWER", false);
      
    },
  }
};
</script>

<style>
</style>