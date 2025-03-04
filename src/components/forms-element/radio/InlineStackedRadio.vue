<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Inline or stacked radios -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Inline or stacked radios"
    subtitle="By default <b-form-radio-group> generates inline radio inputs, while <b-form-radio> generates stacked radios."
    modalid="modal-4"
    modaltitle="Inline or stacked radios"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group label=&quot;Inline radios (default)&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
      &lt;b-form-radio-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;radio-inline&quot;
      &gt;&lt;/b-form-radio-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group label=&quot;Stacked radios&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
      &lt;b-form-radio-group
        v-model=&quot;selected&quot;
        :options=&quot;options&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        name=&quot;radios-stacked&quot;
        stacked
      &gt;&lt;/b-form-radio-group&gt;
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
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
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
        label="Inline radios (default)"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="radio-inline"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group label="Stacked radios" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="radios-stacked"
          stacked
        ></b-form-radio-group>
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
  name: "InlineStackedRadio",

  data: () => ({
    selected: "first",
    options: [
      { text: "First radio", value: "first" },
      { text: "Second radio", value: "second" },
      { text: "Third radio", value: "third" },
    ],
  }),
  components: { BaseCard },
};
</script>