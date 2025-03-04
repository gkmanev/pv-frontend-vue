<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input groups -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input groups"
    subtitle="The following is an example of placing <b-form-rating> in an input group"
    modalid="modal-13"
    modaltitle="Input groups"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-input-group&gt;
      &lt;b-input-group-prepend&gt;
        &lt;b-button @click=&quot;value = null&quot;&gt;Clear&lt;/b-button&gt;
      &lt;/b-input-group-prepend&gt;
      &lt;b-form-rating v-model=&quot;value&quot; color=&quot;#ff8800&quot;&gt;&lt;/b-form-rating&gt;
      &lt;b-input-group-append&gt;
        &lt;b-input-group-text class=&quot;justify-content-center&quot; style=&quot;min-width: 3em;&quot;&gt;
          {{ value }}
        &lt;/b-input-group-text&gt;
      &lt;/b-input-group-append&gt;
    &lt;/b-input-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
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
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="value = null">Clear</b-button>
        </b-input-group-prepend>
        <b-form-rating v-model="value" color="#ff8800"></b-form-rating>
        <b-input-group-append>
          <b-input-group-text
            class="justify-content-center"
            style="min-width: 3em"
          >
            {{ value }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InputGroupRating",

  data: () => ({
    value: null,
  }),
  components: { BaseCard },
};
</script>