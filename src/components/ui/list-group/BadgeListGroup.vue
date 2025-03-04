<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- With badges -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="With badges"
    subtitle="Add badges to any list group item to show unread counts, activity, and more with the help of some flex utility classes."
    modalid="modal-3"
    modaltitle="With badges"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
&lt;b-list-group-item
  class=&quot;d-flex justify-content-between align-items-center&quot;
&gt;
  Cras justo odio
  &lt;b-badge variant=&quot;primary&quot; pill&gt;14&lt;/b-badge&gt;
&lt;/b-list-group-item&gt;

&lt;b-list-group-item
  class=&quot;d-flex justify-content-between align-items-center&quot;
&gt;
  Dapibus ac facilisis in
  &lt;b-badge variant=&quot;primary&quot; pill&gt;2&lt;/b-badge&gt;
&lt;/b-list-group-item&gt;

&lt;b-list-group-item
  class=&quot;d-flex justify-content-between align-items-center&quot;
&gt;
  Morbi leo risus
  &lt;b-badge variant=&quot;primary&quot; pill&gt;1&lt;/b-badge&gt;
&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-list-group>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Cras justo odio
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Dapibus ac facilisis in
          <b-badge variant="primary" pill>2</b-badge>
        </b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Morbi leo risus
          <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BadgeListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>