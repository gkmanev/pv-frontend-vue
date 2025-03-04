<template>
  <div>
    <div class="table-responsive mt-4">
      <b-table
        :fields="fields"
        :items="items"
        :tbody-tr-class="rowClass"
        class="mb-0 hover-table text-nowrap"
      >
        <template #cell(assignedperson)="data">
          <div class="d-flex align-items-center">
            <img
              :src="require('@/assets/images/users/' + data.value.imgsrc)"
              class="rounded-circle"
              width="45"
            />
            <div class="ml-3">
              <h6 class="fw-medium mb-0 nowrap">
                {{ data.value.pname }}
              </h6>
              <small class="text-muted no-wrap font-weight-light font-14">{{
                data.value.post
              }}</small>
            </div>
          </div>
        </template>
        <template #cell(priorityclass)="data">
          <span
            :class="
              'badge bg-light-' +
              data.value.prioritycolor +
              ' text-' +
              data.value.prioritycolor
            "
            >{{ data.value.priority }}</span
          >
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "SellingProduct",
  data: () => ({
    title: "SellingProduct",
    fields: [
      { key: "assignedperson", label: "Assigned" },
      "name",
      { key: "priorityclass", label: "Priority" },
      "budget",
    ],
    items: [
      {
        assignedperson: {
          imgsrc: "1.jpg",
          pname: "Sunil Joshi",
          post: "Web Designer",
        },
        name: "Elite Admin",
        priorityclass: {
          priority: "Low",
          prioritycolor: "success",
        },
        budget: "$3.9K",
      },
      {
        assignedperson: {
          imgsrc: "2.jpg",
          pname: "Andrew",
          post: "Project Manager",
        },
        name: "Real Homes	",
        priorityclass: {
          priority: "Medium",
          prioritycolor: "info",
        },
        budget: "$23.9K",
        status: "active",
      },
      {
        assignedperson: {
          imgsrc: "3.jpg",
          pname: "Bhavesh patel",
          post: "Developer",
        },
        name: "MedicalPro Theme	",
        priorityclass: {
          priority: "High",
          prioritycolor: "danger",
        },
        budget: "$12.9K",
      },
      {
        assignedperson: {
          imgsrc: "4.jpg",
          pname: "Nirav Joshi",
          post: "Frontend Eng	",
        },
        name: "Elite Admin	",
        priorityclass: {
          priority: "Low",
          prioritycolor: "success",
        },
        budget: "$10.9K",
      },
      {
        assignedperson: {
          imgsrc: "6.jpg",
          pname: "Johnathan",
          post: "Graphic",
        },
        name: "Digital Agency	",
        priorityclass: {
          priority: "High",
          prioritycolor: "danger",
        },
        budget: "$2.6K",
        status: "active",
      },
      {
        assignedperson: {
          imgsrc: "7.jpg",
          pname: "Micheal Doe",
          post: "Content Writer	",
        },
        name: "Helping Hands	",
        priorityclass: {
          priority: "Medium",
          prioritycolor: "info",
        },
        budget: "$12.9K",
      },
    ],
  }),
  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.status === "active") return "active";
    },
  },
};
</script>