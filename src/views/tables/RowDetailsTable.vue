<template>
  <b-row>
    <b-col cols="12">
      <!-- 21 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Row Details Table</h5>
        </b-card-body>
        <b-table
          :fields="fields"
          class="mb-0"
          hover
          head-variant="light"
          :items="items"
          responsive="sm"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
          <template #cell(show_details)="row">
            <div class="d-flex align-items-center">
              <!-- <b-button
                size="sm"
                variant="primary"
                @click="row.toggleDetails"
                class="mr-2"
              >
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button> -->

              <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
              <b-form-checkbox
                v-model="row.detailsShowing"
                @change="row.toggleDetails"
              >
                Show
              </b-form-checkbox>
            </div>
          </template>

          <template #row-details="row">
            <b-card class="border">
              <b-row>
                <b-col cols="12" md="3">
                  <div class="px-4">
                    <h6 class="mb-3">Team</h6>
                    <!-- <b-badge pill variant="primary" class="pr-2">
                      <b-img
                        :src="
                          require('@/assets/images/users/' +
                            row.item.team.teamimg1)
                        "
                        rounded="circle"
                        :alt="row.item.team.teamimg1"
                        width="25"
                      />
                      {{ row.item.team.team1text }}
                    </b-badge>
                    <b-badge pill variant="info" class="pr-2 ml-2">
                      <b-img
                        :src="
                          require('@/assets/images/users/' +
                            row.item.team.teamimg2)
                        "
                        rounded="circle"
                        :alt="row.item.team.teamimg2"
                        width="25"
                      />
                      {{ row.item.team.team2text }}
                    </b-badge> -->
                    <b-img
                      :src="
                        require('@/assets/images/users/' +
                          row.item.team.teamimg1)
                      "
                      rounded="circle"
                      :alt="row.item.team.teamimg1"
                      width="35"
                      class="mr-n2 border border-white"
                    />
                    <b-img
                      :src="
                        require('@/assets/images/users/' +
                          row.item.team.teamimg2)
                      "
                      rounded="circle"
                      :alt="row.item.team.teamimg2"
                      width="35"
                      class="mr-n2 border border-white card-hover"
                    />
                    <b-img
                      :src="
                        require('@/assets/images/users/' +
                          row.item.team.teamimg3)
                      "
                      rounded="circle"
                      :alt="row.item.team.teamimg3"
                      width="35"
                      class="border border-white"
                    />
                  </div>
                </b-col>
                <b-col cols="12" md="3" class="border-left">
                  <div class="px-4">
                    <h6 class="mb-3">Project Name</h6>
                    <div class="d-flex align-items-center">
                      <feather
                        type="file-text"
                        class="feather-sm mr-1"
                      ></feather>
                      {{ row.item.project }}
                    </div>
                  </div>
                </b-col>
                <b-col cols="12" md="3" class="border-left">
                  <div class="px-4">
                    <h6 class="mb-3">Completion</h6>
                    <b-progress
                      height="12px"
                      :value="row.item.value"
                      :max="row.item.max"
                      show-value
                      :variant="row.item.color"
                    ></b-progress>
                  </div>
                </b-col>
                <b-col cols="12" md="3" class="border-left text-center">
                  <b-button
                    variant="outline-secondary"
                    size="sm"
                    @click="row.toggleDetails"
                    >Hide Details</b-button
                  >
                </b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "RowDetailsTable",

  data: () => ({
    page: {
      title: "RowDetailsTable",
    },
    // fields: ["first_name", "last_name", "show_details"],
    fields: [
      "id",

      {
        key: "user",
        label: "Full Name",
      },
      "role",
      "email",
      {
        key: "status",
        label: "Status",
      },
      "show_details",
    ],
    items: [
      {
        id: "123",
        user: { image: "1.jpg", first: "Dickerson", last: "Macdonald" },
        role: "Designer",
        email: "macnald@gmail.com",
        project: "Xtreme Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
        value: 33.333333333,
        max: 100,
        color: "info",
      },
      {
        id: "451",
        user: { image: "2.jpg", first: "Larsen", last: "Shaw" },
        role: "Front end Developer",
        email: "shaw@gmail.com",
        project: "Severny Admin",
        team: {
          teamimg1: "1.jpg",
          teamimg2: "2.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
        value: 53.111,
        max: 100,
        color: "primary",
      },
      {
        id: "234",
        user: { image: "3.jpg", first: "Geneva", last: "Wilson" },
        role: "Backend Developer",
        email: "geneva@gmail.com",
        project: "Adminpro Admin",
        team: {
          teamimg1: "d2.jpg",
          teamimg2: "2.jpg",
          teamimg3: "d1.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
        value: 45,
        max: 100,
        color: "danger",
      },
      {
        id: "343",
        user: { image: "4.jpg", first: "Jami", last: "Carney" },
        role: "Graphics Designer",
        email: "jami@gmail.com",
        project: "Adminwrap Admin",
        team: {
          teamimg1: "1.jpg",
          teamimg2: "2.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
        value: 53.111,
        max: 100,
        color: "success",
      },
      {
        id: "134",
        user: { image: "5.jpg", first: "Dickerson", last: "Macdonald" },
        role: "HR Manager",
        email: "dickerson@gmail.com",
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "4.jpg",
          teamimg2: "5.jpg",
          teamimg3: "6.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
        value: 33.333333333,
        max: 100,
        color: "danger",
      },
    ],
  }),
  components: {},
};
</script>
