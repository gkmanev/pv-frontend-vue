<template>
  <b-card class="chat-app" no-body>
    <div
      class="left-part border-right"
      :class="showleftpart ? '' : 'show-left-part'"
    >
      <div class="p-3 border-bottom">
        <b-form-input
          class="mb-1"
          id="srhc"
          type="text"
          v-model="handleSearchInput"
          placeholder="Search Contact"
          required
        ></b-form-input>
      </div>
      <ul class="p-0 m-0 pb-2">
        <li
          v-for="(conversation, i) in filteredList"
          :key="i"
          class="d-flex align-items-start chat-list p-3 cursor-pointer"
          @click="(e) => openMessages(conversation, e)"
        >
          <b-img
            rounded="circle"
            :src="require(`@/assets/images/users/${conversation.image}`)"
            :alt="conversation.image"
            width="40"
          />
          <div class="mx-2 w-75" @click="toggleSide">
            <h5 class="mb-0">{{ conversation.name }}</h5>
            <div class="text-truncate">{{ conversation.lastMessage }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="right-part">
      <template v-if="conversation">
        <!---conversation header-->
        <div class="chat-topbar d-flex p-3 align-items-center">
          <i
            class="d-block d-lg-none mr-2 mdi mdi-menu"
            @click="toggleSide"
          ></i>
          <b-img
            rounded="circle"
            :src="require(`@/assets/images/users/${conversation.image}`)"
            width="40"
          />
          <div class="mx-2">
            <h5 class="mb-0">{{ conversation.name }}</h5>
          </div>
        </div>
        <!---conversation header-->
        <div class="chat-room min-h p-3 border-top">
          <div
            class="d-flex align-items-center mb-3"
            light
            v-for="message in conversation.messages"
            :key="message.id"
            :class="{ fromMe: message.fromMe, messageItem: true }"
          >
            <div class="thumb">
              <div v-if="message.fromMe">
                <b-img
                  src="@/assets/images/users/6.jpg"
                  rounded="circle"
                  alt="..."
                  width="40"
                />
              </div>
              <div class="" v-else>
                <b-img
                  rounded="circle"
                  :src="require(`@/assets/images/users/${conversation.image}`)"
                  width="40"
                  alt="..."
                />
              </div>
            </div>
            <div
              :class="
                message.fromMe
                  ? 'bg-primary text-white p-2 card mx-2'
                  : 'mx-2 card p-2 bg-light'
              "
            >
              {{ message.text }}
            </div>
          </div>
        </div>
        <!---Chat Room-->
        <div class="p-3 border-top">
          <b-form-input
            name="input-4-1"
            rows="2"
            placeholder="Type and hit Enter"
            @keydown="addMessage"
          ></b-form-input>
        </div>
      </template>
      <template v-else>
        <div
          class="d-flex justify-center min-h justify-content-center align-items-center"
        >
          <div>
            <b-button
              class="d-block d-lg-none btn bg-primary"
              @click="toggleSide"
              ><i class="mdi mdi-menu"></i
            ></b-button>
            <h4 class="mt-2">Start conversation</h4>
            <span>Click on the left sidebar contact and start</span>
          </div>
        </div>
      </template>
    </div>
  </b-card>
</template>

<script>
import chatdata from "./chatdata";
import Vue from "vue";
export default {
  name: "Chat",
  data: () => ({
    handleSearchInput: "",
    Chatdata: chatdata,
    conversation: "",
    showleftpart: true,
  }),
  methods: {
    openMessages(conversation) {
      Vue.set(this, "conversation", conversation);
    },
    toggleSide() {
      this.showleftpart = !this.showleftpart;
    },
    addMessage(e) {
      if (e.key === "Enter" && e.target.value) {
        const value = {
          text: e.target.value,
          fromMe: true,
        };

        Vue.set(
          this,
          "conversation",
          Object.assign({}, this.conversation, {
            messages: [...(this.conversation.messages || []), value],
          })
        );

        e.target.value = "";
      }
    },
  },
  computed: {
    filteredList() {
      return this.Chatdata.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(this.handleSearchInput.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss">
.chat-app {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

// .chat-list{
//     cursor: pointer;
//     &:hover, &.active{
//         background: rgba(0,0,0,0.03);
//     }
// }
.min-h {
  min-height: calc(100vh - 400px);
}
.chat-app .chat-room {
  .fromMe {
    flex-direction: row-reverse;
  }
}
</style>