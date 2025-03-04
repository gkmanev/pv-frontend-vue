<template>
  <b-card>
    <div class="d-flex">
      <b-form-input
        id="filter-input"
        v-model="filter"
        type="search"
        class="col-md-4 col-xl-2"
        placeholder="Search Contact"
      ></b-form-input>
      <b-button class="mb-3 ml-auto" variant="success" v-b-modal.editModal
        >+ New Contact</b-button
      >
    </div>
    <b-table
      hover
      :filter="filter"
      responsive
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      class="contact-table"
    >
      <!-- A custom formatted column -->
      <template #cell(avataruserinfo)="data">
        <div class="d-flex align-items-center">
          <b-img :src="data.item.avatar" width="37" rounded="circle" />
          <h5 class="mx-2 mb-0">{{ data.item.name }}</h5>
        </div>
      </template>
      <!-- A custom formatted column -->
      <template #cell(role)="data">
        <b-badge :variant="data.item.rolestatus">{{ data.item.role }}</b-badge>
      </template>
      <!-- A custom formatted column -->
      <template #cell(Actions)="data" width="100" class="text-center">
        <a class="mx-1 cursor-pointer" @click="editItem(data.item)"
          ><feather type="eye" class="feather-sm"></feather
        ></a>
        <a
          class="mx-1 cursor-pointer text-danger"
          @click="deleteItem(data.item)"
          ><feather type="trash-2" class="text-danger feather-sm"></feather
        ></a>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <!-- ====================================== -->
    <!-- Edit Contact box -->
    <!-- ====================================== -->
    <b-modal
      ref="edit-modal"
      id="editModal"
      hide-header
      @ok="save"
      @cancel="close"
      ok-title="Save"
    >
      <h4 class="mb-4">{{ formTitle }}</h4>
      <b-row>
        <b-col cols="12" lg="12" class="mb-3">
          <h6>Profile Pic</h6>
          <b-img
            v-if="editedItem.avatar"
            :src="editedItem.avatar"
            width="37"
            rounded="circle"
          />
          <b-form-file
            @change="onFileChange"
            placeholder="Choose a file..."
          ></b-form-file>
        </b-col>
        <b-col cols="12" lg="6" class="mb-3">
          <h6>Id</h6>
          <b-form-input
            v-model="editedItem.id"
            placeholder="Id"
            name="name-group"
          ></b-form-input>
        </b-col>
        <b-col cols="12" lg="6" class="mb-3">
          <h6>Name</h6>
          <b-form-input
            v-model="editedItem.name"
            placeholder="Enter your name"
            name="name-group"
          ></b-form-input>
        </b-col>
        <b-col cols="12" lg="6" class="mb-3">
          <h6>Email</h6>
          <b-form-input
            v-model="editedItem.usermail"
            placeholder="Enter your email"
            name="name-group"
          ></b-form-input>
        </b-col>
        <b-col cols="12" lg="6" class="mb-3">
          <h6>Phone</h6>
          <b-form-input
            v-model="editedItem.phone"
            placeholder="Enter your Phone"
            name="name-group"
          ></b-form-input>
        </b-col>
        <b-col cols="12" lg="6" class="mb-3">
          <h6>Date of joining</h6>
          <b-form-datepicker
            id="example-datepicker"
            v-model="editedItem.jdate"
            :date-format-options="{
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }"
            class="mb-2"
          ></b-form-datepicker>
        </b-col>
        <b-col cols="12" lg="6" class="mb-3">
          <h6>Role</h6>
          <b-form-input
            v-model="editedItem.role"
            placeholder="Enter your name"
            name="name-group"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-modal>
  </b-card>
</template>

<script>
import { ContactData } from "./ContactData";
export default {
  name: "ContactTable",
  data: () => ({
    sortBy: "id",
    fields: [
      { key: "id", sortable: true },
      { key: "avataruserinfo", label: "Name" },
      "usermail",
      "phone",
      { key: "jdate", label: "Joining Date" },
      "role",
      "Actions",
    ],
    items: ContactData,
    filter: null,
    totalRows: 1,
    currentPage: 1,
    perPage: 5,
    url: null,
    editedIndex: -1,
    editedItem: {
      id: "",
      avatar: "",
      userinfo: "",
      usermail: "",
      phone: "",
      jdate: "",
      role: "",
    },
    defaultItem: {
      id: "",
      avatar: "",
      userinfo: "",
      usermail: "",
      phone: "",
      jdate: "",
      role: "",
    },
  }),
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.items = ContactData;
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.$refs["edit-modal"].show();
    },

    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.items.splice(index, 1);
    },
    close() {
      this.$refs["edit-modal"].hide();
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.editedItem.avatar = URL.createObjectURL(file);
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Contact" : "Edit Contact";
    },
    rows() {
      return this.items.length;
    },
  },
  watch: {},
};
</script>

<style>
.contact-table td {
  vertical-align: middle;
}
</style>