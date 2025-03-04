<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Contextual variants"
    subtitle="Use contextual variants to style list items with a stateful background and color, via the variant prop."
    modalid="modal-5"
    modaltitle="Contextual variants"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
  &lt;b-list-group-item&gt;Default list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;primary&quot;&gt;Primary list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;secondary&quot;&gt;Secondary list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;success&quot;&gt;Success list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;danger&quot;&gt;Danger list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;warning&quot;&gt;Warning list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;info&quot;&gt;Info list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;light&quot;&gt;Light list group item&lt;/b-list-group-item&gt;
  &lt;b-list-group-item variant=&quot;dark&quot;&gt;Dark list group item&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-list-group>
        <b-list-group-item>Default list group item</b-list-group-item>
        <b-list-group-item variant="primary">Primary list group item</b-list-group-item>
        <b-list-group-item variant="secondary">Secondary list group item</b-list-group-item>
        <b-list-group-item variant="success">Success list group item</b-list-group-item>
        <b-list-group-item variant="danger">Danger list group item</b-list-group-item>
        <b-list-group-item variant="warning">Warning list group item</b-list-group-item>
        <b-list-group-item variant="info">Info list group item</b-list-group-item>
        <b-list-group-item variant="light">Light list group item</b-list-group-item>
        <b-list-group-item variant="dark">Dark list group item</b-list-group-item>
      </b-list-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ContextualListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>