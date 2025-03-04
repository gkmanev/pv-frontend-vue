<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown Menu Button Groups -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Dropdown Menu Button Groups" 
    subtitle="Add b-dropdown menus directly inside your b-button-group. Note that
          split dropdown menus are not supported when prop vertical is
          set." 
    modalid="modal-2"
    modaltitle="Dropdown Menu Button Groups"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button-group&gt;
&lt;b-button&gt;Button&lt;/b-button&gt;
&lt;b-dropdown right text=&quot;Menu&quot;&gt;
  &lt;b-dropdown-item&gt;Item 1&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Item 2&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item&gt;Item 3&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown right split text=&quot;Split Menu&quot;&gt;
  &lt;b-dropdown-item&gt;Item 1&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Item 2&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item&gt;Item 3&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button-group>
        <b-button>Button</b-button>
        <b-dropdown right text="Menu">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
        <b-dropdown right split text="Split Menu">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "DropdownButtonGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>