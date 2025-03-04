<template>
  <div class="card-body">
    <div
      v-for="earning in earnings"
      :key="earning.name"
      class="d-flex align-items-center py-2 mb-2"
    >
      <img
        :src="require('@/assets/images/users/' + earning.imgsrc)"
        class="rounded-circle"
        width="50"
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
  name: "TotalEarnings",
  data: () => ({
    title: "Total Earnings",
    earnings: [
      {
        imgsrc: "1.jpg",
        name: "Andrew Simon",
        color: "info",
        count: "2300",
      },
      {
        imgsrc: "2.jpg",
        name: "Daniel Kristeen",
        color: "success",
        count: "3300",
      },
      {
        imgsrc: "3.jpg",
        name: "Dany John",
        color: "primary",
        count: "4300",
      },
      {
        imgsrc: "4.jpg",
        name: "Chris gyle",
        color: "warning",
        count: "5300",
      },
      {
        imgsrc: "5.jpg",
        name: "Denial Peter",
        color: "danger",
        count: "3000",
      },
      {
        imgsrc: "6.jpg",
        name: "Johnson Denny",
        color: "info",
        count: "7889",
      },
    ],
  }),
};
</script>