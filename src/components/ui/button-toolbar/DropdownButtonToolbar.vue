<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- alert links -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Button groups & Keyboard navigation" 
     
    modalid="modal-2"
    modaltitle="Button groups & Keyboard navigation"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button-toolbar
  aria-label=&quot;Toolbar with button groups and dropdown menu&quot;
&gt;
  &lt;b-button-group class=&quot;mx-1&quot;&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;New&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Edit&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Undo&lt;/b-button&gt;
  &lt;/b-button-group&gt;
  &lt;b-dropdown class=&quot;mx-1&quot; right text=&quot;Dropdown&quot; variant=&quot;primary&quot;&gt;
    &lt;b-dropdown-item&gt;Item 1&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Item 2&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Item 3&lt;/b-dropdown-item&gt;
  &lt;/b-dropdown&gt;
  &lt;b-button-group class=&quot;mx-1&quot;&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;Cancel&lt;/b-button&gt;
  &lt;/b-button-group&gt;
&lt;/b-button-toolbar&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button-toolbar
          aria-label="Toolbar with button groups and dropdown menu"
        >
          <b-button-group class="mx-1">
            <b-button variant="primary">New</b-button>
            <b-button variant="primary">Edit</b-button>
            <b-button variant="primary">Undo</b-button>
          </b-button-group>
          <b-dropdown class="mx-1" right text="Dropdown" variant="primary">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
          <b-button-group class="mx-1">
            <b-button variant="primary">Save</b-button>
            <b-button variant="primary">Cancel</b-button>
          </b-button-group>
        </b-button-toolbar>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "DropdownButtonToolbar",

  data: () => ({}),
  components: { BaseCard },
};
</script>