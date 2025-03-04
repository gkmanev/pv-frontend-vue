<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- alert links -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Button groups & Keyboard navigation" 
     
    modalid="modal-1"
    modaltitle="Button groups & Keyboard navigation"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button-toolbar key-nav aria-label=&quot;Toolbar with button groups&quot;&gt;
&lt;b-button-group class=&quot;mx-1&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; class=&quot;d-flex align-items-center mr-0&quot;&gt;
    &lt;feather type=&quot;chevron-left&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot; class=&quot;d-flex align-items-center&quot;&gt;
    &lt;feather type=&quot;chevrons-right&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-group class=&quot;mx-1&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; class=&quot;mr-0&quot;&gt;Edit&lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot; class=&quot;mr-0&quot;&gt;Undo&lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot;&gt;Redo&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-group class=&quot;mx-1&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; class=&quot;d-flex align-items-center mr-0&quot;&gt;
    &lt;feather type=&quot;chevron-right&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot; class=&quot;d-flex align-items-center&quot;&gt;
    &lt;feather type=&quot;chevrons-right&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;/b-button-toolbar&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-button variant="primary" class="d-flex align-items-center mr-0">
            <feather type="chevron-left" class="feather-sm"></feather>
          </b-button>
          <b-button variant="primary" class="d-flex align-items-center">
            <feather type="chevrons-right" class="feather-sm"></feather>
          </b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button variant="primary" class="mr-0">Edit</b-button>
          <b-button variant="primary" class="mr-0">Undo</b-button>
          <b-button variant="primary">Redo</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button variant="primary" class="d-flex align-items-center mr-0">
            <feather type="chevron-right" class="feather-sm"></feather>
          </b-button>
          <b-button variant="primary" class="d-flex align-items-center">
            <feather type="chevrons-right" class="feather-sm"></feather>
          </b-button>
        </b-button-group>
      </b-button-toolbar>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BasicButtonToolbar",

  data: () => ({}),
  components: { BaseCard },
};
</script>