<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Range -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Range" modalid="modal-10" modaltitle="Type Range">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;range&quot; placeholder=&quot;&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="range" placeholder=""></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeRange",

  data: () => ({}),
  components: { BaseCard },
};
</script>