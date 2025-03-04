<template>
  <div>
    <div
      v-for="feed in feeds"
      :key="feed.id"
      class="d-md-flex align-items-center py-2 mb-2"
    >
      <div class="d-flex align-items-center">
        <b-button
          :class="
            'b-avatar d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle btn btn-light-' +
            feed.color +
            ' text-' +
            feed.color
          "
        >
          <feather :type="feed.icon" class="feather-sm"></feather>
        </b-button>
        <div class="ml-4">
          <span class="text-dark fw-medium">{{ feed.task }}</span>
        </div>
      </div>
      <div
        class="justify-content-end text-truncate ml-5 ml-md-auto pl-3 pl-md-0"
      >
        <span class="font-12 text-muted">{{ feed.time }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feeds",
  data: () => ({
    title: "Feeds",
    feeds: [
      {
        icon: "bell",
        task: "You have 4 pending tasks. ",
        color: "info",
        time: "Just Now",
      },
      {
        icon: "database",
        task: "Server #1 overloaded",
        color: "success",
        time: "2 Hours ago",
      },
      {
        icon: "shopping-cart",
        task: "New order received.",
        color: "warning",
        time: "31 May",
      },
      {
        icon: "users",
        task: "New user registered.",
        color: "danger",
        time: "30 May",
      },
      {
        icon: "users",
        task: "New Version just arrived.",
        color: "primary",
        time: "27 May",
      },
      {
        icon: "bell",
        task: "You have 4 pending tasks.",
        color: "info",
        time: "Just Now",
      },
      {
        icon: "database",
        task: "Server #1 overloaded",
        color: "success",
        time: "2 Hours ago",
      },
      {
        icon: "shopping-cart",
        task: "New order received.",
        color: "warning",
        time: "31 May",
      },
    ],
  }),
};
</script>