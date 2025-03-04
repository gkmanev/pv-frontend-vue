<template>
  <div>
    <div
      v-for="earning in earnings"
      :key="earning.name"
      class="d-flex align-items-center py-2 mb-2"
    >
      <img
        :src="require('@/assets/images/browser/' + earning.imgsrc)"
        width="40"
      />
      <div class="ml-4">
        <span class="font-weight-normal">{{ earning.name }}</span>
      </div>
      <div class="ml-auto">
        <span
          :class="
            'badge py-1 text-' + earning.color + ' bg-light-' + earning.color
          "
          >${{ earning.count }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BrowserStats",
  data: () => ({
    title: "BrowserStats",
    earnings: [
      {
        imgsrc: "chrome-logo.png",
        name: "Google Chrome",
        color: "info",
        count: "23%",
      },
      {
        imgsrc: "internet-logo.png",
        name: "Mozila Firefox",
        color: "success",
        count: "15%",
      },
      {
        imgsrc: "firefox-logo.png",
        name: "Apple Safari",
        color: "primary",
        count: "07%",
      },
      {
        imgsrc: "internet-logo.png",
        name: "Internet Explorer",
        color: "warning",
        count: "09%",
      },
      {
        imgsrc: "opera-logo.png",
        name: "Opera mini",
        color: "danger",
        count: "23%",
      },
      {
        imgsrc: "internet-logo.png",
        name: "Microsoft edge",
        color: "info",
        count: "09%",
      },
    ],
  }),
};
</script>