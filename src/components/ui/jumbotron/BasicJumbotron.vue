<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Jumbotron -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Jumbotron"
    subtitle="A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site."
    modalid="modal-1"
    modaltitle="Jumbotron"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-jumbotron
  header=&quot;Xtreme Bootstrap Vue&quot;
  lead=&quot;Bootstrap v4 Components for Vue.js 2&quot;
&gt;
  &lt;p&gt;For more information visit website&lt;/p&gt;
  &lt;b-button variant=&quot;primary&quot; href=&quot;#&quot;&gt;More Info&lt;/b-button&gt;
&lt;/b-jumbotron&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-jumbotron
        header="Xtreme Bootstrap Vue"
        lead="Bootstrap v4 Components for Vue.js 2"
      >
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicJumbotron",

  data: () => ({}),
  components: { BaseCard },
};
</script>