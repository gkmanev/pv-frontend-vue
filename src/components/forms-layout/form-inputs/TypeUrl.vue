<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Type Url -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Type Url" modalid="modal-6" modaltitle="Type Url">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-input
  type=&quot;url&quot;
  placeholder=&quot;https://www.wrappixel.com/&quot;
&gt;&lt;/b-form-input&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-input
        type="url"
        placeholder="https://www.wrappixel.com/"
      ></b-form-input>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "TypeUrl",

  data: () => ({}),
  components: { BaseCard },
};
</script>