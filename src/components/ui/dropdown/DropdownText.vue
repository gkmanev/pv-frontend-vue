<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown with text -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown with text"
    subtitle="Place any freeform text within a dropdown menu using the <b-dropdown-text> sub component or use text and use spacing utilities. "
    modalid="modal-11"
    modaltitle="Dropdown with text"
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
  id=&quot;dropdown-text&quot;
  text=&quot;Dropdown with text&quot;
&gt;
  &lt;b-dropdown-text style=&quot;width: 240px&quot;&gt;
    Some example text that's free-flowing within the dropdown menu.
  &lt;/b-dropdown-text&gt;
  &lt;b-dropdown-text&gt;And this is more example text.&lt;/b-dropdown-text&gt;
  &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
  &lt;b-dropdown-item-button&gt;First item&lt;/b-dropdown-item-button&gt;
  &lt;b-dropdown-item-button&gt;Second Item&lt;/b-dropdown-item-button&gt;
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
          id="dropdown-text"
          text="Dropdown with text"
        >
          <b-dropdown-text style="width: 240px">
            Some example text that's free-flowing within the dropdown menu.
          </b-dropdown-text>
          <b-dropdown-text>And this is more example text.</b-dropdown-text>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button>First item</b-dropdown-item-button>
          <b-dropdown-item-button>Second Item</b-dropdown-item-button>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownText",

  data: () => ({}),
  components: { BaseCard },
};
</script>