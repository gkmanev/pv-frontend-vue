<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Responsive image -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Responsive image" modalid="modal-3" modaltitle="Responsive image">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-img
  src=&quot;@/assets/images/big/img7.jpg&quot;
  fluid
  alt=&quot;Responsive image&quot;&gt;
&lt;/b-img&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-img
        src="@/assets/images/big/img7.jpg"
        fluid
        alt="Responsive image">
      </b-img>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ResponsiveImage",

  data: () => ({}),
  components: { BaseCard },
};
</script>