<template>
  <div>
    <b-button
      v-b-toggle.sidebar-1
      variant="danger"
      class="customizer-btn d-flex align-items-center justify-content-center py-3"
      size="lg"
      ><feather type="settings" class="feather-sm" animation="spin"></feather
    ></b-button>

    <b-sidebar
      id="sidebar-1"
      :text-variant="Theme == 'dark' ? 'light' : 'dark'"
      title="Sidebar"
      shadow
      backdrop
      no-header
      :right="Direction == 'ltr' ? true : false"
    >
      <div class="p-3 d-flex align-items-center border-bottom">
        <h4 class="mb-0">Layout Settings</h4>
        <i class="ti-close ml-auto" v-b-toggle.sidebar-1></i>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Sidebar Type</h5>
        <b-button-group>
          <b-button
            @click="setSidebarWidth('full-sidebar')"
            :class="LayoutType == 'full-sidebar' ? 'active' : ''"
            >Full</b-button
          >
          <b-button
            @click="setSidebarWidth('mini-sidebar')"
            :class="LayoutType == 'mini-sidebar' ? 'active' : ''"
            >Mini</b-button
          >
        </b-button-group>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Theme Type</h5>
        <b-button-group>
          <b-button
            @click="setTheme('light')"
            :class="Theme == 'light' ? 'active' : ''"
            >Light</b-button
          >
          <b-button
            @click="setTheme('dark')"
            :class="Theme == 'dark' ? 'active' : ''"
            >Dark</b-button
          >
        </b-button-group>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Horizontal Layout</h5>
        <b-button-group>
          <b-button
            @click="setHorizontalTheme(true)"
            :class="setHorizontalLayout == true ? 'active' : ''"
            >True</b-button
          >
          <b-button
            @click="setHorizontalTheme(false)"
            :class="setHorizontalLayout == false ? 'active' : ''"
            >False</b-button
          >
        </b-button-group>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Theme Direction</h5>
        <b-button-group>
          <b-button
            @click="setDirection('ltr')"
            :class="Direction == 'ltr' ? 'active' : ''"
            >LTR</b-button
          >
          <b-button
            @click="setDirection('rtl')"
            :class="Direction == 'rtl' ? 'active' : ''"
            >RTL</b-button
          >
        </b-button-group>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Logo Background</h5>
        <b-button-group>
          <b-button
            variant="primary"
            @click="setLogoBg('primary')"
            :class="logoColor == 'primary' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="info"
            @click="setLogoBg('info')"
            :class="logoColor == 'info' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="success"
            @click="setLogoBg('success')"
            :class="logoColor == 'success' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="dark"
            @click="setLogoBg('dark')"
            :class="logoColor == 'dark' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="danger"
            @click="setLogoBg('danger')"
            :class="logoColor == 'danger' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="light"
            @click="setLogoBg('white')"
            :class="logoColor == 'white' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
        </b-button-group>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Navbar Background</h5>
        <b-button-group>
          <b-button
            variant="info"
            @click="setNavbarBg('gradient-info')"
            :class="navbarColor == 'gradient-info' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="dark"
            @click="setNavbarBg('gradient-dark')"
            :class="navbarColor == 'gradient-dark' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="success"
            @click="setNavbarBg('gradient-success')"
            :class="navbarColor == 'gradient-success' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="cyan"
            @click="setNavbarBg('gradient-cyan')"
            :class="navbarColor == 'gradient-cyan' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="primary"
            @click="setNavbarBg('gradient-primary')"
            :class="navbarColor == 'gradient-primary' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="outline-secondary"
            @click="setNavbarBg('white')"
            :class="navbarColor == 'white' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
        </b-button-group>
      </div>
      <div class="p-3">
        <h5 class="mt-3">Sidebar Background</h5>
        <b-button-group>
          <b-button
            variant="primary"
            @click="setSidebarBg('primary')"
            :class="SidebarColor == 'primary' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="info"
            @click="setSidebarBg('info')"
            :class="SidebarColor == 'info' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="success"
            @click="setSidebarBg('success')"
            :class="SidebarColor == 'success' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="dark"
            @click="setSidebarBg('dark')"
            :class="SidebarColor == 'dark' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="danger"
            @click="setSidebarBg('danger')"
            :class="SidebarColor == 'danger' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
          <b-button
            variant="light"
            @click="setSidebarBg('white')"
            :class="SidebarColor == 'white' ? 'active' : ''"
            ><i class="mdi mdi-adjust"></i
          ></b-button>
        </b-button-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Customizer",
  data: () => ({}),
  computed: {
    ...mapState([
      "logoColor",
      "navbarColor",
      "Direction",
      "setHorizontalLayout",
      "SidebarColor",
      "LayoutType",
      "Theme",
    ]),
  },
  mounted() {
    //const {value} = this.Direction
    document.documentElement.setAttribute("dir", this.Direction);
  },
  methods: {
    setLogoBg(val) {
      this.$store.commit("SET_LOGO_COLOR", val);
    },
    setNavbarBg(val) {
      this.$store.commit("SET_NAVBAR_COLOR", val);
    },
    setSidebarBg(val) {
      this.$store.commit("SET_SIDEBAR_COLOR", val);
    },
    setSidebarWidth(val) {
      this.$store.commit("SET_LAYOUT_TYPE", val);
    },
    setTheme(val) {
      this.$store.commit("SET_THEME", val);
    },
    setDirection(val) {
      this.$store.commit("SET_DIRECTION", val);
      document.documentElement.setAttribute("dir", this.Direction);
    },
    setHorizontalTheme(val) {
      this.$store.commit("SET_LAYOUT", val);
    },
  },
};
</script>

<style>
.customizer-btn {
  position: fixed;
  right: -3px;
  top: 50%;
}
[dir="rtl"] .customizer-btn {
  left: -3px;
  right: auto;
}
.customizer-btn:hover {
  opacity: 0.7;
}
</style>