<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Text align -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Text align"
    subtitle="Using text alignment utility classes"
    modalid="modal-8"
    modaltitle="Text align"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;text-center&quot;&gt;
  &lt;b-spinner variant=&quot;primary&quot; label=&quot;Text Centered&quot;&gt;&lt;/b-spinner&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="text-center">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TextalignSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>