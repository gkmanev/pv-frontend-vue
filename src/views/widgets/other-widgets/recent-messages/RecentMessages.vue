<template>
  <div>
    <div class="mailbox">
      <div
        v-for="(item, i) in messages"
        :key="i"
        @click="href"
        class="border-bottom py-3"
      >
        <div class="d-flex align-items-center">
          <b-avatar
            :src="item.btnbg"
            variant="none"
            class="rounded-circle"
            badge
            :badge-variant="item.badgebg"
          >
          </b-avatar>
          <div class="ml-3 w-75">
            <h5 class="fw-medium mb-0">{{ item.title }}</h5>
            <span class="text-truncate d-block text-muted">{{
              item.subtext
            }}</span>
            <small class="text-muted">{{ item.time }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../../../assets/images/users/1.jpg";
import img2 from "../../../../assets/images/users/2.jpg";
import img3 from "../../../../assets/images/users/3.jpg";
import img4 from "../../../../assets/images/users/4.jpg";
export default {
  name: "RecentMessages",
  props: {
    comment: Object,
  },
  data: () => ({
    title: "RecentMessages",
    // Data For Chats
    messages: [
      {
        btnbg: img1,
        badgebg: "danger",
        title: "Launch Admin",
        subtext: "Just see the my new admin!",
        time: "9:30AM",
      },
      {
        btnbg: img2,
        badgebg: "success",
        title: "Event today",
        subtext: "Just a reminder that you have event",
        time: "1:30PM",
      },
      {
        btnbg: img3,
        badgebg: "primary",
        title: "Settings",
        subtext: "You can customize this template as you want",
        time: "9:30AM",
      },
      {
        btnbg: img4,
        badgebg: "warning",
        title: "New Message",
        subtext: "Sent you an notification",
        time: "1:30PM",
      },
    ],
    href() {
      return undefined;
    },
  }),
};
</script>