<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown support -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown support"
    subtitle="Use <b-nav-item-dropdown> to place dropdown items within your nav."
    modalid="modal-5"
    modaltitle="Dropdown support"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav pills&gt;
  &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
  &lt;b-nav-item&gt;Link&lt;/b-nav-item&gt;
  &lt;b-nav-item-dropdown
    id=&quot;my-nav-dropdown&quot;
    text=&quot;Dropdown&quot;
    toggle-class=&quot;nav-link-custom&quot;
    right&gt;
    &lt;b-dropdown-item&gt;One&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Two&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
    &lt;b-dropdown-item&gt;Three&lt;/b-dropdown-item&gt;
  &lt;/b-nav-item-dropdown&gt;
&lt;/b-nav&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Dropdown"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownsupportNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>