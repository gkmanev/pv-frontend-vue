<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size Buttons -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Embed"
    subtitle="Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device."
    modalid="modal-1"
    modaltitle="Embed"
  >
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-embed
type=&quot;iframe&quot;
aspect=&quot;16by9&quot;
src=&quot;https://www.youtube.com/embed/zpOULjyy-n8?rel=0&quot;
allowfullscreen&gt;&lt;/b-embed&gt;
        </code>
      </pre>
    </template>

    <template v-slot:comcode>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen></b-embed>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicEmbed",

  data: () => ({}),
  components: { BaseCard },
};
</script>