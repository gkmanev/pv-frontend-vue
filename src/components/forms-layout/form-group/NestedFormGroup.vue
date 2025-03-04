<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Nested form groups -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Nested form groups"
    subtitle="Feel free to nest <b-form-group> components to produce advanced form layouts and semantic grouping of related form controls"
    modalid="modal-4"
    modaltitle="Nested form groups"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div&gt;
  &lt;b-card bg-variant=&quot;light&quot;&gt;
    &lt;b-form-group
      label-cols-lg=&quot;3&quot;
      label=&quot;Shipping Address&quot;
      label-size=&quot;lg&quot;
      label-class=&quot;font-weight-bold pt-0&quot;
      class=&quot;mb-0&quot;
    &gt;
      &lt;b-form-group
        label=&quot;Street:&quot;
        label-for=&quot;nested-street&quot;
        label-cols-sm=&quot;3&quot;
        label-align-sm=&quot;right&quot;
      &gt;
        &lt;b-form-input id=&quot;nested-street&quot;&gt;&lt;/b-form-input&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group
        label=&quot;City:&quot;
        label-for=&quot;nested-city&quot;
        label-cols-sm=&quot;3&quot;
        label-align-sm=&quot;right&quot;
      &gt;
        &lt;b-form-input id=&quot;nested-city&quot;&gt;&lt;/b-form-input&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group
        label=&quot;State:&quot;
        label-for=&quot;nested-state&quot;
        label-cols-sm=&quot;3&quot;
        label-align-sm=&quot;right&quot;
      &gt;
        &lt;b-form-input id=&quot;nested-state&quot;&gt;&lt;/b-form-input&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group
        label=&quot;Country:&quot;
        label-for=&quot;nested-country&quot;
        label-cols-sm=&quot;3&quot;
        label-align-sm=&quot;right&quot;
      &gt;
        &lt;b-form-input id=&quot;nested-country&quot;&gt;&lt;/b-form-input&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group
        label=&quot;Ship via:&quot;
        label-cols-sm=&quot;3&quot;
        label-align-sm=&quot;right&quot;
        class=&quot;mb-0&quot;
        v-slot=&quot;{ ariaDescribedby }&quot;
      &gt;
        &lt;b-form-radio-group
          class=&quot;pt-2&quot;
          :options=&quot;['Air', 'Courier', 'Mail']&quot;
          :aria-describedby=&quot;ariaDescribedby&quot;
        &gt;&lt;/b-form-radio-group&gt;
      &lt;/b-form-group&gt;
    &lt;/b-form-group&gt;
  &lt;/b-card&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="Shipping Address"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="Street:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>

          <b-form-group
            label="City:"
            label-for="nested-city"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            label="State:"
            label-for="nested-state"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Country:"
            label-for="nested-country"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-country"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Ship via:"
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              class="pt-2"
              :options="['Air', 'Courier', 'Mail']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NestedFormGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>