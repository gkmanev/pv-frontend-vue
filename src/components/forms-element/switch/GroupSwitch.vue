<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Grouped switch -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Grouped switch"
    subtitle="Render groups of checkboxes with the look of a switches by setting the prop switches on <b-form-checkbox-group>."
    modalid="modal-2"
    modaltitle="Grouped switch"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group
      label=&quot;Inline switch style checkboxes&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        switches
      &gt;&lt;/b-form-checkbox-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group
      label=&quot;Stacked (vertical) switch style checkboxes&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-checkbox-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        switches
        stacked
      &gt;&lt;/b-form-checkbox-group&gt;
    &lt;/b-form-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Red', value: 'red' },
          { text: 'Green', value: 'green' },
          { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
          { text: 'Blue', value: 'blue' }
        ]
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group
        label="Inline switch style checkboxes"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          switches
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group
        label="Stacked (vertical) switch style checkboxes"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          switches
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "GroupSwitch",

  data: () => ({
    selected: [], // Must be an array reference!
    options: [
      { text: "Red", value: "red" },
      { text: "Green", value: "green" },
      { text: "Yellow (disabled)", value: "yellow", disabled: true },
      { text: "Blue", value: "blue" },
    ],
  }),
  components: { BaseCard },
};
</script>