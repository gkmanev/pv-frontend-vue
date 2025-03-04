<template>
  <div>
    <TotalVisitsMap />
  </div>
</template>
<script>
import TotalVisitsMap from "./TotalVisitsMap";

export default {
  name: "TotalVisits",
  data: () => ({
    title: "TotalVisits",
  }),
  components: {
    TotalVisitsMap,
  },
};
</script>