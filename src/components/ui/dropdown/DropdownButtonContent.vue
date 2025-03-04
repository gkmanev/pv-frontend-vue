<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button content -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Button content"
    subtitle="You can customize the text of the dropdown button by using either the text prop (shown in previous examples), or use the button-content slot instead of the text prop."
    modalid="modal-4"
    modaltitle="Button content"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown variant=&quot;primary&quot; text=&quot;Button text via Prop&quot;&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;An item&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;b-dropdown variant=&quot;primary&quot;&gt;
  &lt;template #button-content&gt;
    Custom &lt;strong&gt;Content&lt;/strong&gt; with &lt;em&gt;HTML&lt;/em&gt; via Slot
  &lt;/template&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;An item&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another item&lt;/b-dropdown-item&gt;
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
        <b-dropdown variant="primary" text="Button text via Prop">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown variant="primary">
          <template #button-content>
            Custom <strong>Content</strong> with <em>HTML</em> via Slot
          </template>
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownButtonContent",

  data: () => ({}),
  components: { BaseCard },
};
</script>