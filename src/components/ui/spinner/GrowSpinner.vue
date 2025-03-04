<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Grow spinner -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Grow spinner"
    subtitle="If you don't fancy a border spinner, switch to the grow spinner by setting the prop type to 'grow'. "
    modalid="modal-5"
    modaltitle="Grow spinner"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-spinner type=&quot;grow&quot; label=&quot;Loading...&quot;&gt;&lt;/b-spinner&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-spinner type="grow" label="Loading..."></b-spinner>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "GrowSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>