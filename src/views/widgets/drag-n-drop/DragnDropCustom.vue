<template>
  <div>
    <b-row class="justify-content-center d-flex">
      <b-col lg="4" cols="12">
        <h4 class="card-title mb-3">List 1</h4>
        <draggable
          :list="customlist1"
          group="custom"
          class="cursor-move todo-cards"
        >
          <b-card
            v-for="(clist, index) in customlist1"
            :key="index"
            class="mb-3 bg-light-info"
          >
            <b-card-text>
              <div class="d-flex align-center">
                <h5 class="card-title mb-1">
                  {{ clist.todotitle }}
                </h5>
                <div class="ml-auto">
                  <span :class="clist.badgeactive">
                    <feather
                      type="heart"
                      class="text-danger feather-sm"
                    ></feather>
                  </span>
                </div>
              </div>

              <p class="font-weight-light mb-0">
                {{ clist.todosubtitle }}
              </p>
            </b-card-text>
          </b-card>
        </draggable>
      </b-col>
      <b-col lg="4" cols="12">
        <h4 class="card-title mb-3">List 2</h4>
        <draggable
          :list="customlist2"
          group="custom"
          class="cursor-move completed-cards"
        >
          <b-card
            v-for="(clist, index) in customlist2"
            :key="index"
            class="mb-3 bg-light-success"
          >
            <b-card-text>
              <div class="d-flex align-center">
                <h5 class="card-title mb-1">
                  {{ clist.todotitle }}
                </h5>
                <div class="ml-auto">
                  <span :class="clist.badgeactive">
                    <feather
                      type="heart"
                      class="text-danger feather-sm"
                    ></feather>
                  </span>
                </div>
              </div>
              <p class="font-weight-light mb-0">
                {{ clist.todosubtitle }}
              </p>
            </b-card-text>
          </b-card>
        </draggable>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "DragnDropCustom",
  data: () => ({
    title: "DragnDropCustom",
    customlist1: [
      {
        todotitle: "Book a Ticket",
        todosubtitle:
          "Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.",
        badgeactive: "d-none",
      },
      {
        todotitle: "Launch new template ",
        todosubtitle:
          "Integer posuere erat a ante vene natis.Blandit tempus porttitor aasfs.",
        badgeactive: "",
      },
      {
        todotitle: "Task review",
        todosubtitle:
          "Commodo luctus, nisi erat porttitor. Integer posuere erat a ante venenatis.",
        badgeactive: "d-none",
      },
      {
        todotitle: "Website Design",
        todosubtitle:
          "Dapibus ac facilisis in, egestas eget quam.Blandit tempus porttitor aasfs.",
        badgeactive: "",
      },
    ],
    customlist2: [
      {
        todotitle: "Book London Tickets",
        todosubtitle:
          "Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.",
        badgeactive: "",
      },
      {
        todotitle: "Launch new template ",
        todosubtitle:
          "Integer posuere erat a ante vene natis.Blandit tempus porttitor aasfs.",
        badgeactive: "d-none",
      },
      {
        todotitle: "Task review",
        todosubtitle:
          "Commodo luctus, nisi erat porttitor. Integer posuere erat a ante venenatis.",
        badgeactive: "d-none",
      },
      {
        todotitle: "Website Design",
        todosubtitle:
          "Dapibus ac facilisis in, egestas eget quam.Blandit tempus porttitor aasfs.",
        badgeactive: "d-none",
      },
    ],
  }),
  components: {
    draggable,
  },
};
</script>