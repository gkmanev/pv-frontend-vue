<template>
  <div :class="`${LayoutType} ${Theme}`">
    <!-- ---------------------------------- -->
    <!--- Vertical Header part -->
    <!-- ---------------------------------- -->
    <VerticalSidebar v-if="!setHorizontalLayout" />
    <aside
      :class="
        setHorizontalLayout == true ? 'horizontal-page-wrapper' : 'page-wrapper'
      "
    >
      <VerticalHeader v-if="!setHorizontalLayout" />
      <HorizontalHeader v-if="setHorizontalLayout" />
      <HorizontalSidebar v-if="setHorizontalLayout" />
      <div
        class="min-height"
        :class="
          setHorizontalLayout == true
            ? 'container-fluid content-wrapper'
            : 'container-fluid content-wrapper'
        "
      >
        <h3 class="mb-0" v-if="$route.path !== '/starter'">
          {{ $route.name }}
        </h3>
        <b-breadcrumb class="p-0" v-if="$route.path !== '/starter'">
          <b-breadcrumb-item href="/" custom> Home </b-breadcrumb-item>
          <b-breadcrumb-item active>{{ $route.name }}</b-breadcrumb-item>
        </b-breadcrumb>
        <router-view />
      </div>
      <!-- <Customizer /> -->
      <Footer />
    </aside>
  </div>
</template>

<script>
import VerticalHeader from "./vertical-header/VerticalHeader";
import HorizontalHeader from "./horizontal-header/HorizontalHeader";
import HorizontalSidebar from "./horizontal-sidebar/HorizontalSidebar";
import VerticalSidebar from "./vertical-sidebar/VerticalSidebar";
// import Customizer from "./Customizer/Customizer";
import Footer from "./footer/Footer";
import { mapState } from "vuex";
export default {
  name: "FullLayout",
  components: {
    VerticalHeader,
    VerticalSidebar,
    // Customizer,
    HorizontalSidebar,
    HorizontalHeader,
    Footer,
  },
  data: () => ({
    // cpath: this.currentRoute.path,
    items: [
      {
        text: "Dashboard",
        href: "/",
      },
      {
        text: "",
        active: true,
      },
    ],
  }),
  computed: {
    ...mapState(["LayoutType", "Theme", "setHorizontalLayout"]),
    currentRouteName() {
      
      return this.$route.name;
    },
  },
  methods: {
    //define below method first.
    winWidth: function () {
      setInterval(() => {
        var w = window.innerWidth;

        if (w < 992) {
          this.$store.commit("SET_LAYOUT_TYPE", "mini-sidebar");
        }
      }, 100);
    },
  },
  mounted() {
   
    //callback once mounted
    this.winWidth();
  },
  watch: {},
};
</script>

<style>
</style>