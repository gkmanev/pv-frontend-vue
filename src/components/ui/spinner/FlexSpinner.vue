<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Flex -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Flex"
    subtitle="Using flex utility classes"
    modalid="modal-3"
    modaltitle="Flex"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;d-flex justify-content-center mb-3&quot;&gt;
  &lt;b-spinner label=&quot;Loading...&quot;&gt;&lt;/b-spinner&gt;
&lt;/div&gt;

&lt;div class=&quot;d-flex align-items-center&quot;&gt;
  &lt;strong&gt;Loading...&lt;/strong&gt;
  &lt;b-spinner class=&quot;ml-auto&quot;&gt;&lt;/b-spinner&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="d-flex justify-content-center mb-3">
        <b-spinner label="Loading..."></b-spinner>
      </div>

      <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <b-spinner class="ml-auto"></b-spinner>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FlexSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>