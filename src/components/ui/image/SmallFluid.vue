<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Small image with fluid -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Small image with fluid" modalid="modal-5" modaltitle="Small image with fluid">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-img src=&quot;@/assets/images/big/img6.jpg&quot; fluid alt=&quot;Fluid image&quot;&gt;&lt;/b-img&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-img src="@/assets/images/big/img6.jpg" fluid alt="Fluid image"></b-img>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SmallFluid",

  data: () => ({}),
  components: { BaseCard },
};
</script>