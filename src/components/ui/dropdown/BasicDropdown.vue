<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdowns -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdowns"
    subtitle="Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format."
    modalid="modal-1"
    modaltitle="Dropdowns"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  variant=&quot;primary&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Primary Dropdown&quot;
  class=&quot;&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  variant=&quot;info&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Info Dropdown&quot;
  class=&quot;&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  variant=&quot;danger&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Danger Dropdown&quot;
  class=&quot;&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  variant=&quot;success&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Success Dropdown&quot;
  class=&quot;&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  variant=&quot;warning&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Warning Dropdown&quot;
  class=&quot;&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
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
        <b-dropdown
          variant="primary"
          id="dropdown-1"
          text="Primary Dropdown"
          class=""
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="info"
          id="dropdown-1"
          text="Info Dropdown"
          class=""
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="danger"
          id="dropdown-1"
          text="Danger Dropdown"
          class=""
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="success"
          id="dropdown-1"
          text="Success Dropdown"
          class=""
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="warning"
          id="dropdown-1"
          text="Warning Dropdown"
          class=""
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicDropdown",

  data: () => ({}),
  components: { BaseCard },
};
</script>