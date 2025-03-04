<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Menu alignment -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Menu alignment"
    subtitle="The dropdown menu can either be left aligned (default) or right aligned with respect to the button above it. To have the dropdown aligned on the right, set the right prop."
    modalid="modal-8"
    modaltitle="Menu alignment"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  id=&quot;dropdown-left&quot;
  text=&quot;Left align&quot;
  variant=&quot;primary&quot;
  no-caret
&gt;
  &lt;template #button-content&gt;
    &lt;div class=&quot;d-flex align-items-center&quot;&gt;
      &lt;feather type=&quot;align-left&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt;
      Left Align
      &lt;feather type=&quot;chevron-down&quot; class=&quot;feather-sm ml-2&quot;&gt;&lt;/feather&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;b-dropdown
  id=&quot;dropdown-right&quot;
  right
  text=&quot;Right align&quot;
  variant=&quot;primary&quot;
  no-caret
&gt;
  &lt;template #button-content&gt;
    &lt;div class=&quot;d-flex align-items-center&quot;&gt;
      &lt;feather type=&quot;align-right&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt;
      Right Align
      &lt;feather type=&quot;chevron-down&quot; class=&quot;feather-sm ml-2&quot;&gt;&lt;/feather&gt;
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
          id="dropdown-left"
          text="Left align"
          variant="primary"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              <feather type="align-left" class="feather-sm mr-2"></feather>
              Left Align
              <feather type="chevron-down" class="feather-sm ml-2"></feather>
            </div>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          id="dropdown-right"
          right
          text="Right align"
          variant="primary"
          no-caret
        >
          <template #button-content>
            <div class="d-flex align-items-center">
              <feather type="align-right" class="feather-sm mr-2"></feather>
              Right Align
              <feather type="chevron-down" class="feather-sm ml-2"></feather>
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
  name: "DropdownMenuAlignment",

  data: () => ({}),
  components: { BaseCard },
};
</script>