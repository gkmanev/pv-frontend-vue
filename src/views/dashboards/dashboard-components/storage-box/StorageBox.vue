<template>
  <div>
    <b-row>
      <b-col
        lg="3"
        cols="12"
        md="6"
        v-for="storage in storages"
        :key="storage.title"
      >
        <b-card class="mb-4">
          <div class="d-flex align-items-stretch">
            <div
              :class="
                'bg-light-' +
                storage.color +
                ' text-' +
                storage.color +
                ' d-inline-block px-4 py-3 rounded'
              "
            >
              <i :class="'display-6 ' + storage.icon"></i>
            </div>
            <div class="ml-auto">
              <b-dropdown
                variant="link"
                class="text-dark"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <feather type="more-horizontal"></feather>
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#"
                  >Something else here...</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </div>
          <!-- storage title -->
          <h4 class="card-title mt-5">{{ storage.title }}</h4>
          <b-progress
            :value="storage.percent"
            :variant="storage.color"
            max="100"
          ></b-progress>
          <div class="d-flex align-items-center mt-2 fw-medium">
            <span>{{ storage.remain }}GB</span>
            <div class="ml-auto">
              <span>15GB</span>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "StorageBox",
  data: () => ({
    title: "storages Card",
    storages: [
      {
        color: "warning",
        icon: "fab fa-google-drive",
        title: "Google Drive",
        percent: 80,
        remain: "13.1",
      },
      {
        color: "info",
        icon: "fab fa-dropbox",
        title: "Dropbox",
        percent: 70,
        remain: "7.5",
      },
      {
        color: "primary",
        icon: "fab fa-soundcloud",
        title: "One Drive",
        percent: 20,
        remain: "2",
      },
      {
        color: "danger",
        icon: "fab fa-amazon",
        title: "Amazon",
        percent: 90,
        remain: "4",
      },
    ],
  }),
};
</script>