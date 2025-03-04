<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button style radios -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Button style radios"
    subtitle="Render radios with the look of buttons by setting the prop buttons to true on <b-form-radio-group>."
    modalid="modal-6"
    modaltitle="Button style radios"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">

        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group label="Button style radios" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="btn-radios-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          button-variant="primary"
          name="radios-btn-default"
          buttons
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label="Button style radios with outline-primary variant and size lg"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          id="btn-radios-2"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          button-variant="info"
          size="lg"
          name="radio-btn-outline"
          buttons
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label="Stacked button style radios"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          id="btn-radios-3"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          button-variant="primary"
          name="radio-btn-stacked"
          buttons
          stacked
        ></b-form-radio-group>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "RadiowithButton",

  data: () => ({
    selected: "radio1",
    options: [
      { text: "Radio 1", value: "radio1" },
      { text: "Radio 3", value: "radio2" },
      { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
      { text: "Radio 4", value: "radio4" },
    ],
  }),
  components: { BaseCard },
};
</script>