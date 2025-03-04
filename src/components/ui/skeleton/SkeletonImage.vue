<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Image"
    subtitle="Utilize <b-skeleton-img> to represent images. It utilizes a 16:9 aspect ratio by default, for a responsive sizing."
    modalid="modal-4"
    modaltitle="Image"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
  &lt;b-col&gt;
    &lt;b-skeleton-img&gt;&lt;/b-skeleton-img&gt;
  &lt;/b-col&gt;
  &lt;b-col&gt;
    &lt;b-skeleton-img&gt;&lt;/b-skeleton-img&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; class=&quot;mt-3&quot;&gt;
    &lt;b-skeleton-img no-aspect height=&quot;150px&quot;&gt;&lt;/b-skeleton-img&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-row>
        <b-col>
          <b-skeleton-img></b-skeleton-img>
        </b-col>
        <b-col>
          <b-skeleton-img></b-skeleton-img>
        </b-col>
        <b-col cols="12" class="mt-3">
          <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SkeletonImage",

  data: () => ({}),
  components: { BaseCard },
};
</script>