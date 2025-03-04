<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Block Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

    <BaseCard title="Block Buttons" 
     
    modalid="modal-1"
    modaltitle="Block Buttons"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button block variant=&quot;primary&quot;&gt;Block Button&lt;/b-button&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button block variant="primary">Block Button</b-button>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BlockButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>