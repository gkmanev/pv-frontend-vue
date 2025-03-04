<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Floats -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Floats"
    subtitle="Using float utility classesUsing float utility classes"
    modalid="modal-4"
    modaltitle="Floats"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;clearfix&quot;&gt;
  &lt;b-spinner class=&quot;float-right&quot; label=&quot;Floated Right&quot;&gt;&lt;/b-spinner&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="clearfix">
        <b-spinner class="float-right" label="Floated Right"></b-spinner>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FloatSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>