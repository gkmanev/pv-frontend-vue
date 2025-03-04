<template>
  <div>
    <ul
      class="message-center overflow-auto position-relative mb-0 pl-0"
      v-for="feeds in feedss"
      :feeds="feeds"
      :key="feeds.feedstitle"
    >
      <!-- Message -->
      <li class="d-flex align-items-center py-2 mb-2">
        <b-avatar :variant="feeds.btnbg">
          <i :class="feeds.btnicon"></i>
        </b-avatar>
        <div class="ml-3">
          <span>{{ feeds.feedsdesc }}</span>
        </div>
        <div class="ml-auto">
          <span class="text-muted font-12">{{ feeds.feeddate }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Feeds",
  props: {
    comment: Object,
  },
  data: () => ({
    title: "Feeds",
    feedss: [
      {
        btnbg: "primary",
        btnicon: "mdi mdi-inbox",
        feedsdesc: "You have 4 pending tasks.",
        feeddate: "Just Now",
      },
      {
        btnbg: "success",
        btnicon: "mdi mdi-incognito",
        feedstitle: "Event today",
        feedsdesc: "Server #1 overloaded.",
        feeddate: "2 Hours ago",
      },
      {
        btnbg: "warning",
        btnicon: "mdi mdi-image-filter-drama",
        feedstitle: "Settings",
        feedsdesc: "New order received.",
        feeddate: "31 May",
      },
      {
        btnbg: "danger",
        btnicon: "mdi mdi-face",
        feedstitle: "Pavan kumar",
        feedsdesc: "New user registered.",
        feeddate: "30 May",
      },
      {
        btnbg: "dark",
        btnicon: "mdi mdi-comment-text-outline",
        feedsdesc: "New Version just arrived.",
        feeddate: "27 May",
      },
      {
        btnbg: "primary",
        btnicon: "mdi mdi-inbox-arrow-up",
        feedsdesc: "You have 4 pending tasks.",
        feeddate: "Just Now",
      },
      {
        btnbg: "danger",
        btnicon: "mdi mdi-face",
        feedsdesc: "New user registered",
        feeddate: "30 May",
      },
    ],
  }),
};
</script>