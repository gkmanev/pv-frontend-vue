<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Input with Data List -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Input with Data List"
    modalid="modal-35"
    modaltitle="Input with Data List"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-input list=&quot;my-list-id&quot;&gt;&lt;/b-form-input&gt;

    &lt;datalist id=&quot;my-list-id&quot;&gt;
      &lt;option&gt;Manual Option&lt;/option&gt;
      &lt;option v-for=&quot;size in sizes&quot;&gt;{{ size }}&lt;/option&gt;
    &lt;/datalist&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        sizes: ['Small', 'Medium', 'Large', 'Extra Large']
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
      <b-form-input list="my-list-id"></b-form-input>

      <datalist id="my-list-id">
        <option>Manual Option</option>
        <option v-for="size in sizes" v-bind:key="size">{{ size }}</option>
      </datalist>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormControlDatalist",

  data: () => ({
    size: "",
    sizes: ["Small", "Medium", "Large", "Extra Large"],
  }),
  components: { BaseCard },
};
</script>