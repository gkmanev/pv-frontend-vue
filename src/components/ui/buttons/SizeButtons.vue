<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

    <BaseCard title="Size Buttons" 
     
    modalid="modal-9"
    modaltitle="Size Buttons"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button size=&quot;sm&quot; variant=&quot;primary&quot;&gt;Small&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Medium&lt;/b-button&gt;
&lt;b-button size=&quot;lg&quot; variant=&quot;primary&quot;&gt;Large&lt;/b-button&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button size="sm" variant="primary">Small</b-button>
        <b-button variant="primary">Medium</b-button>
        <b-button size="lg" variant="primary">Large</b-button>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "SizeButtons",

  data: () => ({}),
  components: { BaseCard },
};
</script>