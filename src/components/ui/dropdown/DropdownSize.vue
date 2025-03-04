<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown Size"
    subtitle="Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons."
    modalid="modal-10"
    modaltitle="Dropdown Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;div&gt;
    &lt;b-dropdown variant=&quot;primary&quot; size=&quot;lg&quot; text=&quot;Large&quot;&gt;
      &lt;b-dropdown-item-button&gt;Action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Another action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Something else here&lt;/b-dropdown-item-button&gt;
    &lt;/b-dropdown&gt;

    &lt;b-dropdown
      variant=&quot;primary&quot;
      size=&quot;lg&quot;
      split
      text=&quot;Large Split&quot;
      class=&quot;custom-dropdown&quot;&gt;
      &lt;b-dropdown-item-button&gt;Action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Another action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button
        &gt;Something else here...&lt;/b-dropdown-item-button&gt;
    &lt;/b-dropdown&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;b-dropdown variant=&quot;primary&quot; size=&quot;sm&quot; text=&quot;Small&quot;&gt;
      &lt;b-dropdown-item-button&gt;Action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Another action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Something else here...&lt;/b-dropdown-item-button&gt;
    &lt;/b-dropdown&gt;

    &lt;b-dropdown
      variant=&quot;primary&quot;
      size=&quot;sm&quot;
      split
      text=&quot;Small Split&quot;
      class=&quot;custom-dropdown&quot;&gt;
      &lt;b-dropdown-item-button&gt;Action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Another action&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Something else here...&lt;/b-dropdown-item-button&gt;
    &lt;/b-dropdown&gt;
  &lt;/div&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <div>
          <b-dropdown variant="primary" size="lg" text="Large">
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
          </b-dropdown>

          <b-dropdown
            variant="primary"
            size="lg"
            split
            text="Large Split"
            class="custom-dropdown">
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button>
          </b-dropdown>
        </div>
        <div>
          <b-dropdown variant="primary" size="sm" text="Small">
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
          </b-dropdown>

          <b-dropdown
            variant="primary"
            size="sm"
            split
            text="Small Split"
            class="custom-dropdown">
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
          </b-dropdown>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownSize",

  data: () => ({}),
  components: { BaseCard },
};
</script>