<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown Position -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown Position"
    subtitle="Turn your dropdown menu into a drop-right menu by setting the dropright prop. Or, turn it into a drop-left menu by setting the dropleft right prop to true."
    modalid="modal-9"
    modaltitle="Dropdown Position"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  id=&quot;dropdown-dropright&quot;
  dropright
  text=&quot;Drop-Right&quot;
  variant=&quot;primary&quot;
  no-caret
&gt;
  &lt;template #button-content&gt;
    &lt;div class=&quot;d-flex align-items-center&quot;&gt;
      Drop Right
      &lt;feather type=&quot;chevron-right&quot; class=&quot;feather-sm ml-2&quot;&gt;&lt;/feather&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;b-dropdown
  id=&quot;dropdown-dropleft&quot;
  dropleft
  text=&quot;Drop-Left&quot;
  variant=&quot;primary&quot;
  no-caret
&gt;
  &lt;template #button-content&gt;
    &lt;div class=&quot;d-flex align-items-center&quot;&gt;
      Drop Left
      &lt;feather type=&quot;chevron-left&quot; class=&quot;feather-sm ml-2&quot;&gt;&lt;/feather&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  id=&quot;dropdown-dropup&quot;
  dropup
  text=&quot;Drop-Up&quot;
  variant=&quot;primary&quot;
  no-caret
&gt;
  &lt;template #button-content&gt;
    &lt;div class=&quot;d-flex align-items-center&quot;&gt;
      Drop Up
      &lt;feather type=&quot;chevron-up&quot; class=&quot;feather-sm ml-2&quot;&gt;&lt;/feather&gt;
    &lt;/div&gt;
  &lt;/template&gt;
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
        <b-dropdown
          id="dropdown-dropright"
          dropright
          text="Drop-Right"
          variant="primary"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              Drop Right
              <feather type="chevron-right" class="feather-sm ml-2"></feather>
            </div>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          id="dropdown-dropleft"
          dropleft
          text="Drop-Left"
          variant="primary"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              Drop Left
              <feather type="chevron-left" class="feather-sm ml-2"></feather>
            </div>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          id="dropdown-dropup"
          dropup
          text="Drop-Up"
          variant="primary"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              Drop Up
              <feather type="chevron-up" class="feather-sm ml-2"></feather>
            </div>
          </template>
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
  name: "DropdownPosition",

  data: () => ({}),
  components: { BaseCard },
};
</script>