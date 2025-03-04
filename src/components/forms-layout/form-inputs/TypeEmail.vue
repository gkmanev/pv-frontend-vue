<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Email -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Email" modalid="modal-3" modaltitle="Type Email">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;email&quot; placeholder=&quot;Enter your Email&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="email" placeholder="Enter your Email"></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeEmail",

  data: () => ({}),
  components: { BaseCard },
};
</script>