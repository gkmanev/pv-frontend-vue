<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BasicRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ReadonlyRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <VarientRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <SizeRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <NumberofStarsRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BorderlessRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ShowValueRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <PrecisionRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <MaximumValueRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InlineRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <DisabledRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <ClearButtonRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InputGroupRating />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <InternationalizationRating />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Rating",

  data: () => ({
    page: {
      title: "Rating",
    },
  }),
  components: {
    BasicRating: () => import("@/components/forms-element/rating/BasicRating"),
    SizeRating: () => import("@/components/forms-element/rating/SizeRating"),
    InternationalizationRating: () =>
      import("@/components/forms-element/rating/InternationalizationRating"),
    InputGroupRating: () =>
      import("@/components/forms-element/rating/InputGroupRating"),
    ClearButtonRating: () =>
      import("@/components/forms-element/rating/ClearButtonRating"),
    DisabledRating: () =>
      import("@/components/forms-element/rating/DisabledRating"),
    BorderlessRating: () =>
      import("@/components/forms-element/rating/BorderlessRating"),
    InlineRating: () =>
      import("@/components/forms-element/rating/InlineRating"),
    MaximumValueRating: () =>
      import("@/components/forms-element/rating/MaximumValueRating"),
    PrecisionRating: () =>
      import("@/components/forms-element/rating/PrecisionRating"),
    ShowValueRating: () =>
      import("@/components/forms-element/rating/ShowValueRating"),
    NumberofStarsRating: () =>
      import("@/components/forms-element/rating/NumberofStarsRating"),
    VarientRating: () =>
      import("@/components/forms-element/rating/VarientRating"),
    ReadonlyRating: () =>
      import("@/components/forms-element/rating/ReadonlyRating"),
  },
};
</script>
