<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Grouped radios -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Grouped radios"
    subtitle="The individual radio inputs in <b-form-radio-group> can be specified via the options prop, or via manual placement of the <b-form-radio> sub component. "
    modalid="modal-2"
    modaltitle="Grouped radios"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group label=&quot;Radios using options&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
      &lt;b-form-radio-group
        id=&quot;radio-group-1&quot;
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;radio-options&quot;
      &gt;&lt;/b-form-radio-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group label=&quot;Radios using sub-components&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
      &lt;b-form-radio-group
        id=&quot;radio-group-2&quot;
        v-model=&quot;selected&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;radio-sub-component&quot;
      &gt;
        &lt;b-form-radio value=&quot;first&quot;&gt;Toggle this custom radio&lt;/b-form-radio&gt;
        &lt;b-form-radio value=&quot;second&quot;&gt;Or toggle this other custom radio&lt;/b-form-radio&gt;
        &lt;b-form-radio value=&quot;third&quot; disabled&gt;This one is Disabled&lt;/b-form-radio&gt;
        &lt;b-form-radio :value=&quot;{ fourth: 4 }&quot;&gt;This is the 4th radio&lt;/b-form-radio&gt;
      &lt;/b-form-radio-group&gt;
    &lt;/b-form-group&gt;

    &lt;div class=&quot;mt-3&quot;&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'Toggle this custom radio', value: 'first' },
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'This one is Disabled', value: 'third', disabled: true },
          { text: 'This is the 4th radio', value: { fourth: 4 } }
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
      <b-form-group label="Radios using options" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="radio-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="radio-options"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label="Radios using sub-components"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          id="radio-group-2"
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="radio-sub-component"
        >
          <b-form-radio value="first">Toggle this custom radio</b-form-radio>
          <b-form-radio value="second"
            >Or toggle this other custom radio</b-form-radio
          >
          <b-form-radio value="third" disabled
            >This one is Disabled</b-form-radio
          >
          <b-form-radio :value="{ fourth: 4 }"
            >This is the 4th radio</b-form-radio
          >
        </b-form-radio-group>
      </b-form-group>

      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "GroupedRadio",

  data: () => ({
    selected: "first",
    options: [
      { text: "Toggle this custom radio", value: "first" },
      { text: "Or toggle this other custom radio", value: "second" },
      { text: "This one is Disabled", value: "third", disabled: true },
      { text: "This is the 4th radio", value: { fourth: 4 } },
    ],
  }),
  components: { BaseCard },
};
</script>