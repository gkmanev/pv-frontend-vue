<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown with Group -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown with Group"
    subtitle="Group a set of dropdown sub components with an optional associated header."
    modalid="modal-6"
    modaltitle="Dropdown with Group"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  id=&quot;dropdown-grouped&quot;
  text=&quot;Dropdown with group&quot;
  variant=&quot;primary&quot;
&gt;
  &lt;b-dropdown-item-button&gt; Non-grouped Item &lt;/b-dropdown-item-button&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-group id=&quot;dropdown-group-1&quot; header=&quot;Group 1&quot;&gt;
    &lt;b-dropdown-item-button&gt;First Grouped item&lt;/b-dropdown-item-button&gt;
    &lt;b-dropdown-item-button&gt;Second Grouped Item&lt;/b-dropdown-item-button&gt;
  &lt;/b-dropdown-group&gt;
  &lt;b-dropdown-group id=&quot;dropdown-group-2&quot; header=&quot;Group 2&quot;&gt;
    &lt;b-dropdown-item-button&gt;First Grouped item&lt;/b-dropdown-item-button&gt;
    &lt;b-dropdown-item-button&gt;Second Grouped Item&lt;/b-dropdown-item-button&gt;
  &lt;/b-dropdown-group&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item-button&gt;
    Another Non-grouped Item
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
          id="dropdown-grouped"
          text="Dropdown with group"
          variant="primary"
        >
          <b-dropdown-item-button> Non-grouped Item </b-dropdown-item-button>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-group id="dropdown-group-1" header="Group 1">
            <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
            <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-2" header="Group 2">
            <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
            <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
          </b-dropdown-group>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button>
            Another Non-grouped Item
          </b-dropdown-item-button>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>