<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Nav text content -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Nav text content"
    subtitle="Use the <b-nav-text> child component to place plain text content into the nav:"
    modalid="modal-9"
    modaltitle="Nav text content"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav&gt;
  &lt;b-nav-item href=&quot;#1&quot;&gt;Link 1&lt;/b-nav-item&gt;
  &lt;b-nav-item href=&quot;#2&quot;&gt;Link 2&lt;/b-nav-item&gt;
  &lt;b-nav-text&gt;Plain text&lt;/b-nav-text&gt;
&lt;/b-nav&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-nav>
        <b-nav-item href="#1">Link 1</b-nav-item>
        <b-nav-item href="#2">Link 2</b-nav-item>
        <b-nav-text>Plain text</b-nav-text>
      </b-nav>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NavtextContent",

  data: () => ({}),
  components: { BaseCard },
};
</script>