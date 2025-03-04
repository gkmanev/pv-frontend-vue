<template>
  <b-row>
    <b-col cols="12">
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Pagination Table</h5>
        </b-card-body>
        <div class="p-3 d-flex align-items-center">
          <b-form-group
            label="Per page"
            label-for="per-page-select"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="9"
            label-size="sm"
            label-class="fw-medium"
            class="mb-0"
          >
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
            ></b-form-select>
          </b-form-group>
          <div class="ml-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="fill"
              class="my-0"
            ></b-pagination>
          </div>
        </div>

        <b-table
          responsive
          class="mb-0"
          head-variant="light"
          :items="items"
          :current-page="currentPage"
          :per-page="perPage"
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
          <template #cell(team)="data">
            <!-- <b-badge pill variant="primary" class="pr-2">
              <b-img
                :src="
                  require('@/assets/images/users/' + data.item.team.teamimg1)
                "
                rounded="circle"
                :alt="data.item.team.teamimg1"
                width="25"
              />
              {{ data.item.team.team1text }}
            </b-badge>
            <b-badge pill variant="info" class="pr-2 ml-2">
              <b-img
                :src="
                  require('@/assets/images/users/' + data.item.team.teamimg2)
                "
                rounded="circle"
                :alt="data.item.team.teamimg2"
                width="25"
              />
              {{ data.item.team.team2text }}
            </b-badge> -->
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
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
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PaginationTable",

  data: () => ({
    page: {
      title: "PaginationTable",
    },
    fields: [
      "id",
      {
        key: "user",
        label: "Full Name",
      },
      {
        key: "project",
        label: "Project Name",
      },
      {
        key: "team",
        label: "Team Members",
      },
      {
        key: "status",
        label: "Status",
      },
    ],
    items: [
      {
        id: "123",
        user: { image: "1.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "451",
        user: { image: "2.jpg", first: "Larsen", last: "Shaw" },
        project: "Severny Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "234",
        user: { image: "3.jpg", first: "Geneva", last: "Wilson" },
        project: "Adminpro Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "343",
        user: { image: "4.jpg", first: "Jami", last: "Carney" },
        project: "Adminwrap Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "134",
        user: { image: "5.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "678",
        user: { image: "6.jpg", first: "Larsen", last: "Shaw" },
        project: "Ample React Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "456",
        user: { image: "7.jpg", first: "Geneva", last: "Wilson" },
        project: "Materialpro Vuetify Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "321",
        user: { image: "1.jpg", first: "Jami", last: "Carney" },
        project: "Monster Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "200",
        user: { image: "2.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Adminpro React Redux Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "warning", statustype: "Pause" },
      },
      {
        id: "245",
        user: { image: "3.jpg", first: "Larsen", last: "Shaw" },
        project: "Elegant Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "789",
        user: { image: "4.jpg", first: "Geneva", last: "Wilson" },
        project: "Severny Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "654",
        user: { image: "5.jpg", first: "Jami", last: "Carney" },
        project: "Xtreme Vuesax Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "warning", statustype: "Pause" },
      },
      {
        id: "120",
        user: { image: "6.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Monster Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "130",
        user: { image: "7.jpg", first: "Larsen", last: "Shaw" },
        project: "Xtreme Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "210",
        user: { image: "1.jpg", first: "Geneva", last: "Wilson" },
        project: "Materialpro Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "warning", statustype: "Pause" },
      },
      {
        id: "418",
        user: { image: "2.jpg", first: "Jami", last: "Carney" },
        project: "Elite Bootstrap Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "318",
        user: { image: "3.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "152",
        user: { image: "4.jpg", first: "Larsen", last: "Shaw" },
        project: "Ample Angular Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "300",
        user: { image: "5.jpg", first: "Geneva", last: "Wilson" },
        project: "Nice Angular Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "480",
        user: { image: "6.jpg", first: "Jami", last: "Carney" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "1.jpg",
          teamimg2: "2.jpg",
          teamimg3: "3.jpg",
        },
        status: { statusbg: "warning", statustype: "Pause" },
      },
    ],
    totalRows: 1,
    currentPage: 1,
    perPage: 5,
    pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
  }),
  components: {},
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
};
</script>
