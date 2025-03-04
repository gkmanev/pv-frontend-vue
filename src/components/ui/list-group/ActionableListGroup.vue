<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Actionable list group items -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Actionable list group items"
    subtitle="Turn a <b-list-group-item> into an actionable link by specifying either an href prop or router-link to prop."
    modalid="modal-1"
    modaltitle="Actionable list group items"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
  &lt;b-list-group-item href=&quot;#some-link&quot;&gt;Awesome link&lt;/b-list-group-item&gt;
  &lt;b-list-group-item href=&quot;#&quot; active
    &gt;Link with active state&lt;/b-list-group-item
  &gt;
  &lt;b-list-group-item href=&quot;#&quot;&gt;Action links are easy&lt;/b-list-group-item&gt;
  &lt;b-list-group-item href=&quot;#foobar&quot; disabled
    &gt;Disabled link&lt;/b-list-group-item
  &gt;
&lt;/b-list-group&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-list-group>
        <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
        <b-list-group-item href="#" active
          >Link with active state</b-list-group-item
        >
        <b-list-group-item href="#">Action links are easy</b-list-group-item>
        <b-list-group-item href="#foobar" disabled
          >Disabled link</b-list-group-item
        >
      </b-list-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ActionableListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>