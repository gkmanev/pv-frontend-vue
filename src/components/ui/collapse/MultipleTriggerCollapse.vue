<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Trigger multiple collapse elements -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Trigger multiple collapse elements" 
     
    modalid="modal-4"
    modaltitle="Trigger multiple collapse elements"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;!-- Via multiple directive modifiers --&gt;
&lt;b-button variant=&quot;primary&quot; v-b-toggle.collapse-a.collapse-b
  &gt;Toggle Collapse A and B&lt;/b-button&gt;

&lt;!-- Via space separated string of IDs passed to directive value --&gt;
&lt;b-button variant=&quot;primary&quot; v-b-toggle=&quot;'collapse-a collapse-b'&quot;
  &gt;Toggle Collapse A and B&lt;/b-button&gt;

&lt;!-- Via array of string IDs passed to directive value --&gt;
&lt;b-button variant=&quot;primary&quot; v-b-toggle=&quot;['collapse-a', 'collapse-b']&quot;
  &gt;Toggle Collapse A and B&lt;/b-button&gt;

&lt;!-- Elements to collapse --&gt;
&lt;b-collapse id=&quot;collapse-a&quot; class=&quot;mt-2&quot;&gt;
  &lt;b-card&gt;I am collapsible content A!&lt;/b-card&gt;
&lt;/b-collapse&gt;
&lt;b-collapse id=&quot;collapse-b&quot; class=&quot;mt-2&quot;&gt;
  &lt;b-card&gt;I am collapsible content B!&lt;/b-card&gt;
&lt;/b-collapse&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
      <!-- Via multiple directive modifiers -->
      <b-button variant="primary" v-b-toggle.collapse-a.collapse-b
        >Toggle Collapse A and B</b-button>

      <!-- Via space separated string of IDs passed to directive value -->
      <b-button variant="primary" v-b-toggle="'collapse-a collapse-b'"
        >Toggle Collapse A and B</b-button>

      <!-- Via array of string IDs passed to directive value -->
      <b-button variant="primary" v-b-toggle="['collapse-a', 'collapse-b']"
        >Toggle Collapse A and B</b-button>
      </div>

      <!-- Elements to collapse -->
      <b-collapse id="collapse-a" class="mt-2">
        <b-card>I am collapsible content A!</b-card>
      </b-collapse>
      <b-collapse id="collapse-b" class="mt-2">
        <b-card>I am collapsible content B!</b-card>
      </b-collapse>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "MultipleTriggerCollapse",

  data: () => ({}),
  components: { BaseCard },
};
</script>