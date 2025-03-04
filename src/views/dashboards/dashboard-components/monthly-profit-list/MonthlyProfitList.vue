<template>
  <div class="card-body">
    <b-row>
      <b-col
        class="text-center"
        cols="12"
        v-for="(totalincome, index) in totalincomes"
        :key="index"
        :class="[totalincome.gridlg, totalincome.gridsm]"
      >
        <div>
          <h1 class="mb-0 font-weight-light">{{ totalincome.money }}</h1>
          <h6 class="text-muted">{{ totalincome.text }}</h6>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "MonthlyProfitList",
  props: {
    totalincomes: {
      type: Array,
      required: true,
    },
    gridlg: {
      type: String,
      default: "",
    },
    gridsm: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    money: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    title: "MonthlyProfitList",
  }),
  components: {},
};
</script>