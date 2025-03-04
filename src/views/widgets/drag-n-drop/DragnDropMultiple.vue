<template>
  <div>
    <b-row class="d-flex justify-content-center">
      <b-col lg="6" cols="12">
        <h5 class="card-title text-primary pl-4">Branded Companies 1</h5>
        <b-list-group>
          <draggable :list="company1" group="people" class="cursor-move">
            <b-list-group-item
              v-for="(listItem, index) in company1"
              :key="index"
              @click.prevent
              class="d-flex align-items-center border-0"
            >
              <b-avatar variant="primary">
                <feather type="folder" class="feather-sm"></feather>
              </b-avatar>
              <div class="ml-3">
                <h5 class="mb-0 card-title">{{ listItem.name }}</h5>
                <span>{{ listItem.email }}</span>
              </div>
            </b-list-group-item>
          </draggable>
        </b-list-group>
      </b-col>
      <b-col lg="6" cols="12">
        <h5 class="card-title text-info pl-4">Branded Companies 2</h5>
        <b-list-group>
          <draggable :list="company2" group="people" class="cursor-move">
            <b-list-group-item
              v-for="(listItem, index) in company2"
              :key="index"
              @click.prevent
              class="d-flex align-items-center border-0"
            >
              <b-avatar variant="info">
                <feather type="folder" class="feather-sm"></feather>
              </b-avatar>

              <div class="ml-3">
                <h5 class="mb-0 card-title">{{ listItem.name }}</h5>
                <span>{{ listItem.email }}</span>
              </div>
            </b-list-group-item>
          </draggable>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "DragnDropMultiple",
  data: () => ({
    title: "DragnDropMultiple",
    company1: [
      {
        name: "Quantum Computer Services",
        email: "AOL",
      },
      {
        name: "BackRub ",
        email: "Google",
      },
      {
        name: "Sound of Music ",
        email: "Best Buy",
      },
      {
        name: "Apple Computers",
        email: "Apple, Inc.",
      },
    ],
    company2: [
      {
        name: "Research in Motion",
        email: "Blackberry",
      },
      {
        name: "Brad’s Drink",
        email: "Pepsi-Cola",
      },
      {
        name: "Tokyo Tsushin Kogyo",
        email: "Sony",
      },
      {
        name: "Blue Ribbon Sports",
        email: "Starbucks",
      },
    ],
  }),
  components: {
    draggable,
  },
};
</script>