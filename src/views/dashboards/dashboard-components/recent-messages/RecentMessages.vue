
<template>
  <div class="mailbox mt-4">
    <VuePerfectScrollbar class="scrlbar" style="height: 500px">
      <div v-for="(item, i) in messages" :key="i" class="border-bottom">
        <a href="#" class="d-flex align-items-center p-3 w-100 hover-bg">
          <b-avatar
            :src="item.btnbg"
            variant="none"
            class="rounded-circle"
            badge
            :badge-variant="item.badgebg"
            badge-top
            badge-offset="2px"
            size="45px"
          >
          </b-avatar>
          <div class="ml-3 text-truncate d-flex align-items-center w-100">
            <div class="w-75">
              <h6 class="fw-medium mb-0">{{ item.title }}</h6>
              <span
                class="text-truncate d-block font-14 text-muted font-weight-light"
                >{{ item.subtext }}</span
              >
            </div>
            <div class="ml-auto">
              <small class="text-dark font-12 font-weight-normal">{{
                item.time
              }}</small>
            </div>
          </div>
        </a>
      </div>
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import img1 from "@/assets/images/users/1.jpg";
import img2 from "@/assets/images/users/2.jpg";
import img3 from "@/assets/images/users/3.jpg";
import img4 from "@/assets/images/users/4.jpg";
import img5 from "@/assets/images/users/5.jpg";
import img6 from "@/assets/images/users/6.jpg";
import img7 from "@/assets/images/users/7.jpg";

export default {
  name: "RecentMessages",
  data: () => ({
    title: "RecentMessages",
    messages: [
      {
        btnbg: img1,
        badgebg: "danger",
        title: "Pawan Kumar",
        subtext:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        time: "9:30AM",
      },
      {
        btnbg: img2,
        badgebg: "success",
        title: "Sonu Nigam",
        subtext: "I've sung a song! See you at",
        time: "1:30PM",
      },
      {
        btnbg: img3,
        badgebg: "primary",
        title: "Arijit Sinh",
        subtext: "Simply dummy text of the printing and typesetting industry.",
        time: "9:30AM",
      },
      {
        btnbg: img4,
        badgebg: "warning",
        title: "Sundar Pichhai",
        subtext: "Welcome to the Elite Admin",
        time: "1:30PM",
      },
      {
        btnbg: img5,
        badgebg: "success",
        title: "Team Cook",
        subtext: "Buy a new iPhone 12",
        time: "5:37PM",
      },
      {
        btnbg: img6,
        badgebg: "success",
        title: "John Deo",
        subtext: "I've sung a song! See you at",
        time: "1:30PM",
      },
      {
        btnbg: img7,
        badgebg: "warning",
        title: "Steve Jobs",
        subtext: "Simply dummy text of the printing and typesetting industry.",
        time: "12:30AM",
      },
    ],
  }),
  components: { VuePerfectScrollbar },
};
</script>