<template>
  <b-card class="d-flex flex-row contact-app" no-body>
    <!-- ====================================== -->
    <!-- Left Part -->
    <!-- ====================================== -->
    <div
      class="left-part border-right"
      :class="showleftpart ? '' : 'show-left-part'"
    >
      <div class="p-3 text-right border-bottom d-block d-lg-none">
        <i class="mdi mdi-close" @click="toggleSide"></i>
      </div>
      <div class="p-3 border-bottom">
        <b-form-input
          class=""
          id="srhc"
          type="text"
          v-model="search"
          placeholder="Search Contact"
          required
        ></b-form-input>
      </div>
      <ul class="p-0 m-0 pb-2">
        <li
          v-for="(item, i) in menuItems"
          :key="i"
          :class="item.slug === activeMenu ? 'active' : ''"
          class="d-flex align-items-start list-item p-3"
          @click="activeMenu = item.slug"
        >
          <feather :type="item.icon" class="feather-sm"></feather>
          <h6 class="mx-2 mb-0">{{ item.title }}</h6>
        </li>
      </ul>
    </div>
    <!-- ====================================== -->
    <!-- Right Part -->
    <!-- ====================================== -->
    <div class="right-part min-h">
      <div class="p-3 d-flex align-items-center border-bottom">
        <h3 class="d-block d-lg-none mb-0">
          <i class="mr-2 mdi mdi-menu" @click="toggleSide"></i>
        </h3>
        <b-dropdown
          variant="primary"
          :text="showBulkActionOptions ? 'Selected' : 'Choose an Option'"
        >
          <b-dropdown-item @click="selectAll">Select All </b-dropdown-item>
          <b-dropdown-item @click="unselectAll">UnSelect All</b-dropdown-item>
        </b-dropdown>
        <b-button
          variant="danger"
          class="mx-2"
          @click="contacts = unselectedContacts"
          :disabled="!showBulkActionOptions"
          ><i class="mdi mdi-delete"></i
        ></b-button>
        <b-button variant="success" class="ml-auto" @click="addContact"
          ><i class="mdi mdi-plus"></i>Contact</b-button
        >
      </div>
      <div class="table-responsive">
        <table class="table contact-table">
          <thead class="table-light">
            <tr>
              <th class="border-bottom text-center" width="60">#</th>
              <th class="border-bottom">Name</th>
              <th class="border-bottom">Email</th>
              <th class="border-bottom">Phone</th>
              <th class="border-bottom text-center" width="60">Important</th>
              <th class="border-bottom text-center" width="100">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in listContact">
              <tr :key="`${index}-listcontact`">
                <td class="text-center">
                  <b-form-checkbox v-model="item.selected"></b-form-checkbox>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <b-img
                      :src="item.avatar"
                      rounded="circle"
                      :alt="item.avatar"
                      width="40"
                    />
                    <span class="mx-2">{{ item.name }}</span>
                  </div>
                </td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td class="text-center">
                  <h4
                    @click.stop="item.is_important = !item.is_important"
                    class="cursor-pointer"
                  >
                    <i
                      :class="
                        item.is_important
                          ? 'mdi mdi-star text-warning'
                          : 'mdi mdi-star'
                      "
                    ></i>
                  </h4>
                </td>
                <td class="text-center">
                  <div class="justify-content-center d-flex">
                    <h4
                      @click="editContact(item)"
                      class="cursor-pointer mx-1 mb-0"
                    >
                      <feather type="eye" class="feather-sm"></feather>
                    </h4>
                    <h4
                      @click="deleteContactDialogHandler(item)"
                      class="cursor-pointer mb-0 ml-1"
                    >
                      <feather
                        type="trash-2"
                        class="text-danger feather-sm"
                      ></feather>
                    </h4>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ====================================== -->
    <!-- Delete Contact confirmbox -->
    <!-- ====================================== -->
    <b-modal
      ref="delete-modal"
      hide-header
      ok-title="Delete"
      ok-variant="danger"
      @ok="remove"
    >
      <h3 class="mt-2">Are you Sure?</h3>
      <h6>You want to delete this contact?</h6>
    </b-modal>
    <!-- ====================================== -->
    <!-- Add Contact Popup -->
    <!-- ====================================== -->
    <b-modal
      ref="addEdit-modal"
      id="addEdit-modal"
      title="Contact"
      header-bg-variant="light"
      hide-footer
    >
      <div>
        <b-img
          v-if="form.avatar"
          :src="form.avatar"
          width="60"
          rounded="circle"
          class="mb-3"
        />
        <b-form-file
          @change="onFileChange"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
          class="mb-3"
        ></b-form-file>
        <b-form-group id="name-group" label="Name" label-for="name-group">
          <b-form-input
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            placeholder="Enter your name"
            name="name-group"
            aria-describedby="nameg-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="nameg-feedback"
            >This is a required field and must be at least 3
            characters.</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group id="email-group" label="Email" label-for="email-group">
          <b-form-input
            v-model="$v.form.email.$model"
            :state="validateState('email')"
            placeholder="Enter your email"
            name="email-group"
            aria-describedby="emailg-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="emailg-feedback"
            >Email must be valid</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group id="phone-group" label="Phone" label-for="email-group">
          <b-form-input
            v-model="$v.form.phone.$model"
            :state="validateState('phone')"
            placeholder="Enter your phone"
            name="phone-group"
            aria-describedby="phoneg-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="phoneg-feedback"
            >Phone number must be a valid number</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group
          id="company-group"
          label="Company"
          label-for="company-group"
        >
          <b-form-input
            v-model="$v.form.company.$model"
            :state="validateState('company')"
            placeholder="Enter your company"
            name="company-group"
            aria-describedby="companyg-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="companyg-feedback"
            >This is a required field</b-form-invalid-feedback
          >
        </b-form-group>
        <div class="mb-2 pt-2">
          <b-button
            variant="primary"
            v-if="isEditformMod"
            @click="updateContact()"
            >Save</b-button
          >
          <b-button
            variant="success"
            :disabled="$v.form.$invalid"
            v-else
            @click="createNewContact()"
            >Add Contact</b-button
          >
        </div>
      </div>
    </b-modal>
  </b-card>
</template>

<script>
import { users, authUser } from "./dummyData";
import { filter, findIndex } from "lodash";
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";

import { validNumber } from "./validators";

export default {
  name: "Contact",
  mixins: [validationMixin],
  components: {},
  data: () => ({
    showleftpart: true,
    isEditformMod: false,
    editIndex: null,
    isCreateformMod: false,
    search: "",
    selected: [1],
    contactlist: [1],
    listcontact: [],
    activeMenu: "all",
    menuItems: [
      {
        title: "All Contacts",
        isActive: true,
        slug: "all",
        icon: "users",
      },
      {
        title: "Recently Contacts",
        isActive: false,
        slug: "recent",
        icon: "user-check",
      },
      {
        title: "Important Contacts",
        isActive: false,
        slug: "important",
        icon: "user-x",
      },
    ],
    form: {
      name: "",
      phone: "",
      email: "",
      company: "",
      avatar: "",
      is_important: false,
      is_recent: false,
      selected: false,
    },
    authUser,
    contacts: users,
    confirmBox: {
      deleteContact: false,
      item: null,
    },
  }),

  validations: {
    form: {
      name: { required },
      email: { required, email },
      phone: {
        required,
        validNumber,
        maxLength: maxLength(15),
        minLength: minLength(7),
      },
      company: { required },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    toggleSide() {
      this.showleftpart = !this.showleftpart;
    },
    toggleImportant(item) {
      item.is_important = !item.is_important;
    },
    selectAll() {
      if (this.unselectedContacts) {
        this.contacts.forEach((element) => {
          element.selected = true;
        });
      }
    },
    // DeSelect all checkbox & item
    unselectAll() {
      if (this.selectedContacts) {
        this.contacts.forEach((element) => {
          element.selected = false;
        });
      }
    },
    // Remove Contacts
    remove() {
      let index = this.contacts.indexOf(this.confirmBox.item);
      this.contacts.splice(index, 1);
    },
    deleteContactDialogHandler(item) {
      this.confirmBox = {
        deleteContact: true,
        item,
      };
      this.$refs["delete-modal"].show();
    },
    // Edit Contact
    editContact(contact) {
      this.form = contact;
      this.isEditformMod = true;
      this.$refs["addEdit-modal"].show();
      this.editIndex = findIndex(
        this.contacts,
        (contact) => contact === this.form
      );
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.form.avatar = URL.createObjectURL(file);
    },
    // Reset to the default form
    resetContactForm() {
      this.form = {
        name: null,
        phone: null,
        email: null,
        company: null,
        avatar: "",
        is_important: false,
        is_recent: false,
        selected: false,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    addContact() {
      this.isEditformMod = false;
      this.resetContactForm();
      this.$refs["addEdit-modal"].show();
    },
    cancelEdit() {
      this.isEditformMod = false;
      this.$refs["addEdit-modal"].hide();
    },
    createNewContact() {
      this.isEditformMod = false;
      this.contacts.push(this.form);
      this.$refs["addEdit-modal"].hide();
    },
    updateContact() {
      const index = this.editIndex;
      this.contacts[index] = this.form;
      this.resetContactForm();
      this.$refs["addEdit-modal"].hide();
    },
  },
  computed: {
    listContact() {
      let list = this.contacts;
      switch (this.activeMenu) {
        case "recent":
          list = this.recentlyContacted;
          break;

        case "important":
          list = this.importantContacts;
          break;

        default:
          if (this.search) {
            // list = filter(this.contacts, (element) => element.first === this.search || element.last === this.search || element.email === this.search || element.phone === this.search)
            list = this.contacts.filter((contact) => {
              return (
                contact.name
                  .toLowerCase()
                  .includes(this.search.toLowerCase()) ||
                contact.email
                  .toLowerCase()
                  .includes(this.search.toLowerCase()) ||
                contact.phone.toLowerCase().includes(this.search.toLowerCase())
              );
            });
          } else {
            list = this.contacts;
          }
          break;
      }
      return list;
    },
    recentlyContacted() {
      return filter(this.contacts, (element) => element.is_recent);
    },
    importantContacts() {
      return filter(this.contacts, (element) => element.is_important);
    },
    selectedContacts() {
      return filter(this.contacts, (element) => element.selected);
    },
    unselectedContacts() {
      return filter(this.contacts, (element) => !element.selected);
    },
    showBulkActionOptions() {
      return this.selectedContacts && this.selectedContacts.length > 0;
    },
  },
};
</script>

<style lang="scss">
.contact-app {
  overflow: hidden;
}
.list-item {
  cursor: pointer;
  &:hover,
  &.active {
    background: rgba(0, 0, 0, 0.03);
  }
}
.contact-table td {
  vertical-align: middle;
}
.min-h {
  min-height: calc(100vh - 300px);
}
</style>