<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Direction of Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Direction of Popover"
    subtitle=""
    modalid="modal-2"
    modaltitle="Direction of Popover"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row class=&quot;text-center btn-grp&quot;&gt;
  &lt;b-col md=&quot;3&quot;&gt;
    &lt;b-button
      v-b-popover.hover.top=&quot;'Popover!'&quot;
      title=&quot;Title&quot;
      variant=&quot;primary&quot;&gt;Top&lt;/b-button&gt;
  &lt;/b-col&gt;

  &lt;b-col md=&quot;3&quot;&gt;
    &lt;b-button
      v-b-popover.hover.right=&quot;'Popover!'&quot;
      title=&quot;Title&quot;
      variant=&quot;success&quot;&gt;Right&lt;/b-button&gt;
  &lt;/b-col&gt;

  &lt;b-col md=&quot;3&quot;&gt;
    &lt;b-button
      v-b-popover.hover.left=&quot;'Popover!'&quot;
      title=&quot;Title&quot;
      variant=&quot;danger&quot;&gt;Left&lt;/b-button&gt;
  &lt;/b-col&gt;

  &lt;b-col md=&quot;3&quot;&gt;
    &lt;b-button
      v-b-popover.hover.bottom=&quot;'Popover!'&quot;
      title=&quot;Title&quot;
      variant=&quot;warning&quot;&gt;Bottom&lt;/b-button&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-row class="text-center btn-grp">
        <b-col md="3">
          <b-button
            v-b-popover.hover.top="'Popover!'"
            title="Title"
            variant="primary">Top</b-button>
        </b-col>

        <b-col md="3">
          <b-button
            v-b-popover.hover.right="'Popover!'"
            title="Title"
            variant="success">Right</b-button>
        </b-col>

        <b-col md="3">
          <b-button
            v-b-popover.hover.left="'Popover!'"
            title="Title"
            variant="danger">Left</b-button>
        </b-col>

        <b-col md="3">
          <b-button
            v-b-popover.hover.bottom="'Popover!'"
            title="Title"
            variant="warning">Bottom</b-button>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DirectionPopover",

  data: () => ({}),
  components: { BaseCard },
};
</script>