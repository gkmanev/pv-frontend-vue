<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button Group Sizing -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Button Group Sizing" 
    subtitle="Set the size prop to lg or sm to render larger or smaller,
          respectively, buttons. There is no need to specify the size on the
          individual buttons." 
    modalid="modal-3"
    modaltitle="Button Group Sizing"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div&gt;
  &lt;b-button-group size=&quot;sm&quot;&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
  &lt;/b-button-group&gt;
&lt;/div&gt;
&lt;div class=&quot;mt-3&quot;&gt;
  &lt;b-button-group&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
  &lt;/b-button-group&gt;
&lt;/div&gt;
&lt;div class=&quot;mt-3&quot;&gt;
  &lt;b-button-group size=&quot;lg&quot;&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
  &lt;/b-button-group&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <div>
        <b-button-group size="sm">
          <b-button variant="primary">Left</b-button>
          <b-button variant="primary">Middle</b-button>
          <b-button variant="primary">Right</b-button>
        </b-button-group>
      </div>
      <div class="mt-3">
        <b-button-group>
          <b-button variant="primary">Left</b-button>
          <b-button variant="primary">Middle</b-button>
          <b-button variant="primary">Right</b-button>
        </b-button-group>
      </div>
      <div class="mt-3">
        <b-button-group size="lg">
          <b-button variant="primary">Left</b-button>
          <b-button variant="primary">Middle</b-button>
          <b-button variant="primary">Right</b-button>
        </b-button-group>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "SizeButtonGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>