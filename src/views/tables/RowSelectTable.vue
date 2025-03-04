<template>
  <b-row>
    <b-col cols="12">
      <!-- 22 -->
      <b-card class="mb-4">
        <h5 class="card-title mb-3">Row Select Table</h5>

        <b-form-group
          label="Selection mode:"
          label-for="table-select-mode-select"
          label-cols-md="4"
          label-cols-lg="9"
        >
          <b-form-select
            id="table-select-mode-select"
            v-model="selectMode"
            :options="modes"
            class="mb-3"
          ></b-form-select>
        </b-form-group>

        <b-table
          :items="items"
          :fields="fields"
          :select-mode="selectMode"
          responsive="sm"
          ref="selectableTable"
          selectable
          @row-selected="onRowSelected"
        >
          <!-- Example scoped slot for select state illustrative purposes -->
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
            #{{ data.item.id }}
          </template>
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
        <p class="btn-grp">
          <b-button size="sm" variant="outline-primary" @click="selectAllRows"
            >Select all</b-button
          >
          <b-button size="sm" variant="outline-danger" @click="clearSelected"
            >Clear selected</b-button
          >
          <b-button size="sm" variant="outline-primary" @click="selectThirdRow"
            >Select 3rd row</b-button
          >
          <b-button
            size="sm"
            variant="outline-primary"
            @click="unselectThirdRow"
            >Unselect 3rd row</b-button
          >
        </p>
        <p>
          Selected Rows:<br />
          {{ selected }}
        </p>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "RowSelectTable",

  data: () => ({
    page: {
      title: "RowSelectTable",
    },
    modes: ["multi", "single", "range"],
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
          teamimg1: "1.jpg",
          teamimg2: "2.jpg",
          teamimg3: "6.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "234",
        user: { image: "3.jpg", first: "Geneva", last: "Wilson" },
        project: "Adminpro Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "343",
        user: { image: "4.jpg", first: "Jami", last: "Carney" },
        project: "Adminwrap Admin",
        team: {
          teamimg1: "1.jpg",
          teamimg2: "2.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "134",
        user: { image: "5.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "4.jpg",
          teamimg2: "5.jpg",
          teamimg3: "6.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
    ],
    selectMode: "multi",
    selected: [],
  }),
  components: {},
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
  },
};
</script>
