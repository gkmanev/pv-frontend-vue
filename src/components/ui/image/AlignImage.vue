<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Left an Right aligned -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Left an Right aligned"
    subtitle="Align images with the boolean props left (floats left) right(floats right), and center (auto left+right margins). You can also center images by placing them in a container that has the class text-center."
    modalid="modal-1"
    modaltitle="Left an Right aligned"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;clearfix&quot;&gt;
  &lt;b-img
    left
    src=&quot;@/assets/images/big/img6.jpg&quot;
    alt=&quot;Left image&quot;
    width=&quot;150&quot;&gt;&lt;/b-img&gt;
  &lt;b-img
    right
    src=&quot;@/assets/images/big/img6.jpg&quot;
    alt=&quot;Right image&quot;
    width=&quot;150&quot;&gt;&lt;/b-img&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="clearfix">
        <b-img
          left
          src="@/assets/images/big/img6.jpg"
          alt="Left image"
          width="150"></b-img>
        <b-img
          right
          src="@/assets/images/big/img6.jpg"
          alt="Right image"
          width="150"></b-img>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "AlignImage",

  data: () => ({}),
  components: { BaseCard },
};
</script>