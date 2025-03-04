<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Collpase -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Basic Collpase" 
     
    modalid="modal-2"
    modaltitle="Basic Collpase"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-button v-b-toggle.collapse-1 variant=&quot;primary&quot;
  &gt;Toggle Collapse&lt;/b-button
&gt;
&lt;b-collapse id=&quot;collapse-1&quot; class=&quot;mt-2&quot;&gt;
  &lt;b-card&gt;
    &lt;p class=&quot;card-text&quot;&gt;Collapse contents Here&lt;/p&gt;
    &lt;b-button v-b-toggle.collapse-1-inner size=&quot;sm&quot;
      &gt;Toggle Inner Collapse&lt;/b-button
    &gt;
    &lt;b-collapse id=&quot;collapse-1-inner&quot; class=&quot;mt-2&quot;&gt;
      &lt;b-card&gt;Hello!&lt;/b-card&gt;
    &lt;/b-collapse&gt;
  &lt;/b-card&gt;
&lt;/b-collapse&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button v-b-toggle.collapse-1 variant="primary"
        >Toggle Collapse</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
          <b-button v-b-toggle.collapse-1-inner size="sm"
            >Toggle Inner Collapse</b-button
          >
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BasicCollpase",

  data: () => ({}),
  components: { BaseCard },
};
</script>