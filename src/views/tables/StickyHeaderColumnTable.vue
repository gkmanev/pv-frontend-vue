<template>
  <b-row>
    <b-col cols="12">
      <!-- 20 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Sticky columns and headers</h5>
          <div class="mt-3">
            <b-form-checkbox v-model="stickyHeader" inline
              >Sticky header</b-form-checkbox
            >
            <b-form-checkbox v-model="noCollapse" inline
              >No border collapse</b-form-checkbox
            >
          </div>
        </b-card-body>
        <b-table
          :sticky-header="stickyHeader"
          :no-border-collapse="noCollapse"
          responsive
          :items="items"
          :fields="fields"
          class="mb-0 text-nowrap"
        >
          <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
          <template #head(id)="">
            <div class="text-nowrap">Row ID</div>
          </template>

          <!-- <template #head()="scope">
            <div class="text-nowrap">Heading {{ scope.label }}</div>
          </template> -->
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
          <template #cell(completion)="data">
            <b-progress
              height="12px"
              :value="data.item.completion.value"
              :max="data.item.completion.max"
              show-value
              :variant="data.item.completion.color"
            ></b-progress>
          </template>
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "StickyHeaderColumnTable",

  data: () => ({
    page: {
      title: "StickyHeaderColumnTable",
    },
    stickyHeader: true,
    noCollapse: false,
    fields: [
      { key: "id", stickyColumn: true, isRowHeader: true, variant: "primary" },
      {
        key: "user",
        label: "Full Name",
      },
      {
        key: "project",
        label: "Project Name",
        stickyColumn: true,
        variant: "info",
      },
      {
        key: "team",
        label: "Team Members",
      },
      "role",
      "email",
      "completion",
      "salary",
      "experience",
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
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "danger", statustype: "Pending" },
        completion: { value: 80, max: 100, color: "primary" },
        salary: "$3400",
        experience: "3 years",
      },
      {
        id: "451",
        user: { image: "2.jpg", first: "Larsen", last: "Shaw" },
        project: "Severny Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Front end Developer",
        status: { statusbg: "success", statustype: "Completed" },
        completion: { value: 45, max: 100, color: "danger" },
        salary: "$3000",
        experience: "4 years",
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
        email: "macnald@gmail.com",
        role: "Backend Developer",
        status: { statusbg: "danger", statustype: "Pending" },
        completion: { value: 80, max: 100, color: "primary" },
        salary: "$5000",
        experience: "7 years",
      },
      {
        id: "343",
        user: { image: "4.jpg", first: "Jami", last: "Carney" },
        project: "Adminwrap Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Graphics Designer",
        status: { statusbg: "info", statustype: "Start" },
        completion: { value: 80, max: 100, color: "warning" },
        salary: "$7800",
        experience: "9 years",
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
        email: "macnald@gmail.com",
        role: "HR Manager",
        status: { statusbg: "success", statustype: "Completed" },
        completion: { value: 33.333333333, max: 100, color: "info" },
        salary: "$4500",
        experience: "1 years",
      },
      {
        id: "678",
        user: { image: "6.jpg", first: "Larsen", last: "Shaw" },
        project: "Ample React Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "success", statustype: "Completed" },
        completion: { value: 80, max: 100, color: "warning" },
        salary: "$6500",
        experience: "2 years",
      },
      {
        id: "456",
        user: { image: "7.jpg", first: "Geneva", last: "Wilson" },
        project: "Materialpro Vuetify Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Front end Developer",
        status: { statusbg: "success", statustype: "Completed" },
        completion: { value: 45, max: 100, color: "danger" },
        salary: "$1200",
        experience: "4 years",
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
        email: "macnald@gmail.com",
        role: "Backend Developer",
        status: { statusbg: "info", statustype: "Start" },
        completion: { value: 80, max: 100, color: "primary" },
        salary: "$8000",
        experience: "1 years",
      },
      {
        id: "200",
        user: { image: "2.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Adminpro React Redux Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "warning", statustype: "Pause" },
        completion: { value: 33.333333333, max: 100, color: "info" },
        salary: "$6511",
        experience: "1 years",
      },
      {
        id: "245",
        user: { image: "3.jpg", first: "Larsen", last: "Shaw" },
        project: "Elegant Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Hacker",
        status: { statusbg: "info", statustype: "Start" },
        completion: { value: 45, max: 100, color: "danger" },
        salary: "$7800",
        experience: "2 years",
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
        email: "macnald@gmail.com",
        role: "Graphics Designer",
        status: { statusbg: "danger", statustype: "Pending" },
        completion: { value: 33.333333333, max: 100, color: "info" },
        salary: "$9000",
        experience: "3 years",
      },
      {
        id: "654",
        user: { image: "5.jpg", first: "Jami", last: "Carney" },
        project: "Xtreme Vuesax Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "warning", statustype: "Pause" },
        completion: { value: 80, max: 100, color: "primary" },
        salary: "$7800",
        experience: "3 years",
      },
      {
        id: "120",
        user: { image: "6.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Monster Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Front end Developer",
        status: { statusbg: "info", statustype: "Start" },
        completion: { value: 33.333333333, max: 100, color: "info" },
        salary: "$1200",
        experience: "1 years",
      },
      {
        id: "130",
        user: { image: "7.jpg", first: "Larsen", last: "Shaw" },
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "danger", statustype: "Pending" },
        completion: { value: 45, max: 100, color: "danger" },
        salary: "$9000",
        experience: "1 years",
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
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "warning", statustype: "Pause" },
        completion: { value: 80, max: 100, color: "primary" },
        salary: "$5600",
        experience: "1 years",
      },
      {
        id: "418",
        user: { image: "2.jpg", first: "Jami", last: "Carney" },
        project: "Elite Bootstrap Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Backend Developer",
        status: { statusbg: "success", statustype: "Completed" },
        completion: { value: 45, max: 100, color: "danger" },
        salary: "$7000",
        experience: "2 years",
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
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "danger", statustype: "Pending" },
        completion: { value: 80, max: 100, color: "warning" },
        salary: "$4600",
        experience: "1 years",
      },
      {
        id: "152",
        user: { image: "4.jpg", first: "Larsen", last: "Shaw" },
        project: "Ample Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Backend Developer",
        status: { statusbg: "info", statustype: "Start" },
        completion: { value: 33.333333333, max: 100, color: "info" },
        salary: "$7000",
        experience: "1 years",
      },
      {
        id: "300",
        user: { image: "5.jpg", first: "Geneva", last: "Wilson" },
        project: "Nice Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Designer",
        status: { statusbg: "success", statustype: "Completed" },
        completion: { value: 45, max: 100, color: "danger" },
        salary: "$9000",
        experience: "1 years",
      },
      {
        id: "480",
        user: { image: "6.jpg", first: "Jami", last: "Carney" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        email: "macnald@gmail.com",
        role: "Hacker",
        status: { statusbg: "warning", statustype: "Pause" },
        completion: { value: 80, max: 100, color: "warning" },
        salary: "$8000",
        experience: "1 years",
      },
    ],
  }),
  components: {},
};
</script>
