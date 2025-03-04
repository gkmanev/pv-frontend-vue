<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Time -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Time" modalid="modal-9" modaltitle="Type Time">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;time&quot; placeholder=&quot;&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="time" placeholder=""></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeTime",

  data: () => ({}),
  components: { BaseCard },
};
</script>