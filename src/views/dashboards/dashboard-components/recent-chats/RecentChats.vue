<template>
  <div>
    <!-- Header -->
    <div class="d-md-flex align-items-center mt-4">
      <div class="w-100">
        <VuePerfectScrollbar class="scrlbar" style="height: 430px">
          <div>
            <ul ref="chatLog" class="p-3 chat-list">
              <li
                class="d-flex align-items-start"
                :class="{
                  'flex-row-reverse right-msg': chat.fromMe,
                  'mt-4 left-msg': index,
                }"
                v-for="(chat, index) in chatConversation"
                :key="index"
              >
                <img
                  class="m-0 flex-no-shrink rounded-circle"
                  :class="chat.fromMe ? 'ml-3' : 'mr-3'"
                  width="45"
                  :src="
                    require(`@/assets/images/users/${chat.conversationImg}`)
                  "
                />
                <div
                  class="chat px-3 py-2 mb-2 font-weight-normal"
                  :class="{
                    'chat-sent-chat bg-primary text-white': chat.fromMe,
                    'bg-light': !chat.fromMe,
                  }"
                >
                  <span class="font-14">{{ chat.chat }}</span>
                </div>
              </li>
            </ul>
          </div>
        </VuePerfectScrollbar>
        <div class="d-flex border-top p-3">
          <b-form-input
            class="w-100 border-0"
            placeholder="Type Your Message Here"
            v-model="newMessage"
            type="text"
            @keyup.enter="addMessage"
          />
          <b-button
            variant="primary"
            class="float-right rounded-circle b-avatar"
            @click="addMessage"
          >
            <feather type="send" class="feather-sm"></feather>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "RecentChats",
  data: () => ({
    title: "RecentChats",
    newMessage: "",
    chatConversation: [
      {
        conversationImg: "1-old.jpg",
        chat: "Lorem Ipsum is dummy text of the printing setting.",
        fromMe: true,
      },
      {
        conversationImg: "2.jpg",
        chat: "It’s Great opportunity to work.😃",
        fromMe: false,
      },
      { conversationImg: "1-old.jpg", chat: "Yes", fromMe: true },
      {
        conversationImg: "2.jpg",
        chat: "I would love to join the team.",
        fromMe: false,
      },
      {
        conversationImg: "1-old.jpg",
        chat: "🥳 Whats budget of the new project.",
        fromMe: true,
      },
      {
        conversationImg: "2.jpg",
        chat: "Well we have good budget for the project👍",
        fromMe: false,
      },
    ],
  }),
  components: {
    VuePerfectScrollbar,
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        this.chatConversation.push({
          conversationImg: "1-old.jpg",
          chat: this.newMessage,
          fromMe: true,
        });
        this.newMessage = "";
      }
    },
  },
};
</script>