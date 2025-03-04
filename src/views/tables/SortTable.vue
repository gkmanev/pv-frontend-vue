<template>
  <b-row>
    <b-col cols="12">
      <!-- 16 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Sort Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          hover
          :fields="fields"
          head-variant="light"
          :items="items"
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
  name: "SortTable",

  data: () => ({
    page: {
      title: "SortTable",
    },
    fields: [
      {
        key: "id",
        sortable: true,
      },
      {
        key: "user",
        label: "Full Name",
        sortable: true,
      },
      {
        key: "project",
        label: "Project Name",
        sortable: true,
      },
      {
        key: "team",
        label: "Team Members",
        sortable: false,
      },
      {
        key: "status",
        label: "Status",
        sortable: false,
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
    ],
  }),
  components: {},
};
</script>
