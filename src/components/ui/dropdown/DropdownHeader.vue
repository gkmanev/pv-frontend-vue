<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown with Header -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown with Header"
    subtitle="Add a header to label sections of actions in any dropdown menu."
    modalid="modal-7"
    modaltitle="Dropdown with Header"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  id=&quot;dropdown-header&quot;
  text=&quot;Dropdown with header&quot;
  variant=&quot;primary&quot;
&gt;
  &lt;b-dropdown-header id=&quot;dropdown-header-label&quot;&gt;
    Dropdown header
  &lt;/b-dropdown-header&gt;
  &lt;b-dropdown-item-button aria-describedby=&quot;dropdown-header-label&quot;&gt;
    First item
  &lt;/b-dropdown-item-button&gt;
  &lt;b-dropdown-item-button aria-describedby=&quot;dropdown-header-label&quot;&gt;
    Second Item
  &lt;/b-dropdown-item-button&gt;
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
          id="dropdown-header"
          text="Dropdown with header"
          variant="primary"
        >
          <b-dropdown-header id="dropdown-header-label">
            Dropdown header
          </b-dropdown-header>
          <b-dropdown-item-button aria-describedby="dropdown-header-label">
            First item
          </b-dropdown-item-button>
          <b-dropdown-item-button aria-describedby="dropdown-header-label">
            Second Item
          </b-dropdown-item-button>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownHeader",

  data: () => ({}),
  components: { BaseCard },
};
</script>