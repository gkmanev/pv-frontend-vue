<template>
  <div>
    <a
      href="javascript:void(0)"
      v-for="(item, i) in notifications"
      :key="i"
      class="border-bottom py-3 px-2 text-decoration-none d-block link"
    >
      <div class="d-flex align-items-start">
        <b-avatar :variant="item.btnbg" class="rounded-circle">
          <feather :type="item.btnicon" class="feather-sm"></feather>
        </b-avatar>
        <div class="ml-3 w-75">
          <h6 class="fw-medium mb-0">{{ item.title }}</h6>
          <span
            class="text-truncate font-12 d-block text-muted font-weight-normal mt-1"
            >{{ item.subtext }}</span
          >
          <span class="font-12 fw-medium">{{ item.time }}</span>
        </div>
      </div>
    </a>
  </div>
</template>


<script>
export default {
  name: "Notifications",
  data: () => ({
    notifications: [
      {
        btnbg: "primary",
        btnicon: "mail",
        title: "You have 3 new messages",
        subtext: "Daniel Kristeen, Hanna Giover, Jeffry Brown",
        time: "9:30AM",
      },
      {
        btnbg: "danger",
        btnicon: "globe",
        title: "Newsfeed available",
        subtext: "Todays headlines : Breakdancing Grandma Proves ..",
        time: "1:30PM",
      },
      {
        btnbg: "success",
        btnicon: "dollar-sign",
        title: "2 Invoices to pay",
        subtext: "$3500 from Krishnan, $2000 from Akhil",
        time: "9:08AM",
      },
      {
        btnbg: "info",
        btnicon: "message-square",
        title: "15 New comments",
        subtext: "Jhonny : Hey this stuff is awesome and how can i ..",
        time: "12:30PM",
      },
    ],
  }),
};
</script>