<template>
  <div>
    <div class="table-responsive mt-4">
      <b-table
        :fields="fields"
        :items="items"
        :tbody-tr-class="rowClass"
        class="mb-0 hover-table"
      >
        <template #cell(member)="data">
          <div class="d-flex align-items-center">
            <img
              :src="require('@/assets/images/users/' + data.value.imgsrc)"
              class="rounded"
              width="40"
            />
            <div class="ml-3">
              <a href="#" class="link font-14 font-weight-normal d-block">
                {{ data.value.pname }}
              </a>
              <span
                :class="
                  'badge bg-light-' +
                  data.value.badgebg +
                  ' text-' +
                  data.value.badgebg +
                  ' font-weight-normal'
                "
                >{{ data.value.post }}</span
              >
            </div>
          </div>
        </template>
        <template #cell(teamclass)="data">
          <div class="d-flex align-items-center button-group">
            <b-button
              :class="
                'btn btn-light-' +
                data.value.team1color +
                ' text-' +
                data.value.team1color +
                ' rounded-circle mr-1'
              "
              >{{ data.value.teamname1 }}</b-button
            >
            <b-button
              :class="
                'btn btn-light-' +
                data.value.team2color +
                ' text-' +
                data.value.team2color +
                ' rounded-circle mr-1'
              "
              >{{ data.value.teamname2 }}</b-button
            >
          </div>
        </template>
      </b-table>
    </div>
    <div class="text-center">
      <b-button variant="success">Check More</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MemberActivity",
  data: () => ({
    title: "Member Activity",
    fields: [
      { key: "member", label: "Member" },
      "earnings",
      "posts",
      { key: "teamclass", label: "Team" },
    ],
    items: [
      {
        member: {
          imgsrc: "1.jpg",
          pname: "Kevin Peter",
          badgebg: "success",
          post: "designer",
        },
        earnings: "$325",
        teamclass: {
          team1color: "success",
          teamname1: "A",
          team2color: "danger",
          teamname2: "T",
        },
        posts: "45",
      },
      {
        member: {
          imgsrc: "2.jpg",
          pname: "John Smith",
          badgebg: "danger",
          post: "developer",
        },
        earnings: "$225",
        teamclass: {
          team1color: "warning",
          teamname1: "S",
          team2color: "primary",
          teamname2: "V",
        },
        posts: "35",
        status: "active",
      },
      {
        member: {
          imgsrc: "5.jpg",
          pname: "Harry Peter",
          badgebg: "primary",
          post: "manager",
        },
        earnings: "$185",
        teamclass: {
          team1color: "success",
          teamname1: "B",
          team2color: "info",
          teamname2: "M",
        },
        posts: "28",
      },
      {
        member: {
          imgsrc: "4.jpg",
          pname: "James Deo",
          badgebg: "success",
          post: "designer",
        },
        earnings: "$125",
        teamclass: {
          team1color: "success",
          teamname1: "A",
          team2color: "primary",
          teamname2: "B",
        },
        posts: "25",
      },
      {
        member: {
          imgsrc: "6.jpg",
          pname: "Willium Deo",
          badgebg: "danger",
          post: "developer",
        },
        earnings: "$225",
        teamclass: {
          team1color: "danger",
          teamname1: "L",
          team2color: "info",
          teamname2: "J",
        },
        posts: "35",
        status: "active",
      },
      // {
      //   member: {
      //     imgsrc: "4.jpg",
      //     pname: "Tenny Peter",
      //     badgebg: "primary",
      //     post: "manager",
      //   },
      //   earnings: "$125",
      //   teamclass: {
      //     priority: "Low",
      //     prioritycolor: "success",
      //   },
      //   posts: "25",
      // },
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