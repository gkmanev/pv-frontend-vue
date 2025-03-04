<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Split Dropdown -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Split Dropdown"
    subtitle="Create a split dropdown button, where the left button provides standard click event and link support, while the right hand side is the dropdown menu toggle button."
    modalid="modal-12"
    modaltitle="Split Dropdown"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  split
  variant=&quot;primary&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Split Dropdown&quot;
  class=&quot;custom-dropdown&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  split
  variant=&quot;info&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Split Dropdown&quot;
  class=&quot;custom-dropdown&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  split
  variant=&quot;danger&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Split Dropdown&quot;
  class=&quot;custom-dropdown&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  split
  variant=&quot;success&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Split Dropdown&quot;
  class=&quot;custom-dropdown&quot;
&gt;
  &lt;b-dropdown-item&gt;First Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Second Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item&gt;Third Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item active&gt;Active action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item disabled&gt;Disabled action&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  split
  variant=&quot;warning&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Split Dropdown&quot;
  class=&quot;custom-dropdown&quot;
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
          split
          variant="primary"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          split
          variant="info"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          split
          variant="danger"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          split
          variant="success"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          split
          variant="warning"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
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
  name: "SliptDropdown",

  data: () => ({}),
  components: { BaseCard },
};
</script>