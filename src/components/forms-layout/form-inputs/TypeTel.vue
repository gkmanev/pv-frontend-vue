<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Telephone -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Type Telephone"
    modalid="modal-7"
    modaltitle="Type Telephone"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;tel&quot; placeholder=&quot;+91 1234 5640&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="tel" placeholder="+91 1234 5640"></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeTel",

  data: () => ({}),
  components: { BaseCard },
};
</script>