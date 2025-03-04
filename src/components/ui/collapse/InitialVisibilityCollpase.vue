<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Initial visibility -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Initial visibility" 
     
    modalid="modal-3"
    modaltitle="Initial visibility"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot; v-b-toggle.collapse-3 class=&quot;m-1&quot;
  &gt;Toggle Collapse&lt;/b-button
&gt;
&lt;b-collapse visible id=&quot;collapse-3&quot;&gt;
  &lt;b-card&gt;I should start open!&lt;/b-card&gt;
&lt;/b-collapse&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="primary" v-b-toggle.collapse-3 class="m-1"
        >Toggle Collapse</b-button
      >
      <b-collapse visible id="collapse-3">
        <b-card>I should start open!</b-card>
      </b-collapse>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "InitialVisibilityCollpase",

  data: () => ({}),
  components: { BaseCard },
};
</script>