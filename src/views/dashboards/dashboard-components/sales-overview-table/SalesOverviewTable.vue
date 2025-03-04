<template>
  <div class="table-responsive">
    <b-table
      :fields="fields"
      hover
      thead-tr-class="text-uppercase border-bottom-0"
      :items="items"
      class="mb-0 text-nowrap"
    >
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(projectname)="data">
        <span class="font-weight-normal text-muted">{{ data.value.name }}</span>
      </template>
      <template #cell(productstatus)="data">
        <span
          :class="'text-uppercase badge text-white bg-' + data.value.bgstatus"
          >{{ data.value.text }}</span
        >
      </template>
      <template #cell(projectdate)="data">
        <span class="font-weight-normal text-muted">{{ data.value.date }}</span>
      </template>
      <template #cell(priceproduct)="data">
        <span :class="'text-' + data.value.statusbg">
          {{ data.value.percent }}
          <i :class="'fas fa-caret-' + data.value.arrow"></i>
        </span>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  name: "SalesOverviewTable",
  data: () => ({
    title: "SalesOverviewTable",
    fields: [
      { key: "index", label: "#" },
      { key: "projectname", label: "Name" },
      { key: "productstatus", label: "Status" },
      { key: "projectdate", label: "Date" },
      { key: "priceproduct", label: "Price" },
    ],
    items: [
      {
        projectname: {
          name: "Elite admin",
        },
        projectdate: {
          date: "April 18, 2020",
        },
        productstatus: {
          bgstatus: "success",
          text: "Sale",
        },
        priceproduct: {
          statusbg: "success",
          percent: "$24",
          arrow: "up",
        },
      },
      {
        projectname: {
          name: "Real Homes WP Theme",
        },
        projectdate: {
          date: "April 19, 2020",
        },
        productstatus: {
          bgstatus: "info",
          text: "Extended",
        },
        priceproduct: {
          statusbg: "info",
          percent: "$1250",
          arrow: "up",
        },
      },
      {
        projectname: {
          name: "Ample Admin",
        },
        projectdate: {
          date: "April 19, 2020",
        },
        productstatus: {
          bgstatus: "info",
          text: "Extended",
        },
        priceproduct: {
          statusbg: "info",
          percent: "$1250",
          arrow: "up",
        },
      },
      {
        projectname: {
          name: "Medical Pro WP Theme",
        },
        projectdate: {
          date: "April 20, 2020",
        },
        productstatus: {
          bgstatus: "danger",
          text: "Tax",
        },
        priceproduct: {
          statusbg: "danger",
          percent: "-$24",
          arrow: "down",
        },
      },
      {
        projectname: {
          name: "Hosting press html",
        },
        projectdate: {
          date: "April 21, 2020",
        },
        productstatus: {
          bgstatus: "warning",
          text: "Sale",
        },
        priceproduct: {
          statusbg: "success",
          percent: "$24",
          arrow: "up",
        },
      },
      {
        projectname: {
          name: "Digital Agency PSD",
        },
        projectdate: {
          date: "April 21, 2020",
        },
        productstatus: {
          bgstatus: "success",
          text: "Sale",
        },
        priceproduct: {
          statusbg: "danger",
          percent: "-$14",
          arrow: "down",
        },
      },
      {
        projectname: {
          name: "Elite admin",
        },
        projectdate: {
          date: "April 18, 2020",
        },
        productstatus: {
          bgstatus: "success",
          text: "Sale",
        },
        priceproduct: {
          statusbg: "success",
          percent: "$24",
          arrow: "up",
        },
      },
    ],
  }),
};
</script>