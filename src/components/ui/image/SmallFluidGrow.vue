<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Small image with fluid-grow -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Small image with fluid-grow" modalid="modal-6" modaltitle="Small image with fluid-grow">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-img
  src=&quot;@/assets/images/big/img5.jpg&quot;
  fluid-grow
  alt=&quot;Fluid-grow image&quot;&gt;
&lt;/b-img&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-img
        src="@/assets/images/big/img5.jpg"
        fluid-grow
        alt="Fluid-grow image">
      </b-img>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SmallFluidGrow",

  data: () => ({}),
  components: { BaseCard },
};
</script>