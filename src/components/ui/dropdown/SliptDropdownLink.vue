<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Split Dropdown with Link -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Split Dropdown with Link"
    subtitle="To convert this button into a link or <router-link>, specify the href via the split-href prop or a router link to value via the split-to prop, while maintaining the look of a button."
    modalid="modal-13"
    modaltitle="Split Dropdown with Link"
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
  split-href=&quot;#foo/bar&quot;
  variant=&quot;primary&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Primary Split Link&quot;
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
  split-href=&quot;#foo/bar&quot;
  variant=&quot;info&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Info Split Link&quot;
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
  split-href=&quot;#foo/bar&quot;
  variant=&quot;danger&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Danger Split Link&quot;
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
  split-href=&quot;#foo/bar&quot;
  variant=&quot;success&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Success Split Link&quot;
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
  split-href=&quot;#foo/bar&quot;
  variant=&quot;warning&quot;
  id=&quot;dropdown-1&quot;
  text=&quot;Warning Split Link&quot;
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
          split-href="#foo/bar"
          variant="primary"
          id="dropdown-1"
          text="Primary Split Link"
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
          split-href="#foo/bar"
          variant="info"
          id="dropdown-1"
          text="Info Split Link"
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
          split-href="#foo/bar"
          variant="danger"
          id="dropdown-1"
          text="Danger Split Link"
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
          split-href="#foo/bar"
          variant="success"
          id="dropdown-1"
          text="Success Split Link"
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
          split-href="#foo/bar"
          variant="warning"
          id="dropdown-1"
          text="Warning Split Link"
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
  name: "SliptDropdownLink",

  data: () => ({}),
  components: { BaseCard },
};
</script>