<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Color -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Color" modalid="modal-11" modaltitle="Type Color">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input type=&quot;color&quot; placeholder=&quot;&quot;&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input type="color" placeholder=""></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeColor",

  data: () => ({}),
  components: { BaseCard },
};
</script>