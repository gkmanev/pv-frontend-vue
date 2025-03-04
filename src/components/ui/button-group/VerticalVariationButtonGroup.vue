<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Vertical variation -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Vertical variation" 
    subtitle="Make a set of buttons appear vertically stacked rather than
          horizontally by setting the vertical prop. Split button dropdowns are
          not supported here." 
    modalid="modal-4"
    modaltitle="Vertical variation"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button-group vertical&gt;
  &lt;b-button&gt;Top&lt;/b-button&gt;
  &lt;b-button&gt;Middle&lt;/b-button&gt;
  &lt;b-button&gt;Bottom&lt;/b-button&gt;
&lt;/b-button-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button-group vertical>
        <b-button>Top</b-button>
        <b-button>Middle</b-button>
        <b-button>Bottom</b-button>
      </b-button-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "VerticalVariationButtonGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>