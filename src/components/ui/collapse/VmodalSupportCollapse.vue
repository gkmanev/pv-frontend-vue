<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- v-model suppor -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="v-model suppor" 
     
    modalid="modal-5"
    modaltitle="v-model suppor"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-button
  variant=&quot;primary&quot;
  :class=&quot;visible ? null : 'collapsed'&quot;
  :aria-expanded=&quot;visible ? 'true' : 'false'&quot;
  aria-controls=&quot;collapse-4&quot;
  @click=&quot;visible = !visible&quot;
&gt;
  Toggle Collapse
&lt;/b-button&gt;
&lt;b-collapse id=&quot;collapse-4&quot; v-model=&quot;visible&quot; class=&quot;mt-2&quot;&gt;
  &lt;b-card&gt;I should start open!&lt;/b-card&gt;
&lt;/b-collapse&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button
        variant="primary"
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
      >
        Toggle Collapse
      </b-button>
      <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <b-card>I should start open!</b-card>
      </b-collapse>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "VmodalSupportCollapse",

  data: () => ({
    visible: true,
  }),
  components: { BaseCard },
};
</script>