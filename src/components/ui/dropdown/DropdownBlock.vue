<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Block level dropdowns -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Block level dropdowns"
    subtitle="To create block level dropdowns (that span to the full width of a parent) set the block prop."
    modalid="modal-3"
    modaltitle="Block level dropdowns"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown text=&quot;Block Level Dropdown&quot; block variant=&quot;primary&quot;&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;b-dropdown
  text=&quot;Block Level Split Dropdown&quot;
  block
  split
  split-variant=&quot;outline-primary&quot;
  variant=&quot;primary&quot;
  class=&quot;custom-dropdown&quot;
&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here...&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  text=&quot;Block Level Dropdown Menu&quot;
  block
  variant=&quot;primary&quot;
  menu-class=&quot;w-100&quot;
&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-dropdown text="Block Level Dropdown" block variant="primary">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          text="Block Level Split Dropdown"
          block
          split
          split-variant="outline-primary"
          variant="primary"
          class="custom-dropdown"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          text="Block Level Dropdown Menu"
          block
          variant="primary"
          menu-class="w-100"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownBlock",

  data: () => ({}),
  components: { BaseCard },
};
</script>