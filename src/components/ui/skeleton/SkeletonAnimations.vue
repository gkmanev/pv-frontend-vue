<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Skeleton animations -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Skeleton animations"
    subtitle="<b-skeleton> supports different animations. You can set them per component or change it globally in the settings."
    modalid="modal-2"
    modaltitle="Skeleton animations"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;h5&gt;Wave (default)&lt;/h5&gt;
&lt;b-card&gt;
  &lt;b-skeleton animation=&quot;wave&quot; width=&quot;85%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation=&quot;wave&quot; width=&quot;55%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation=&quot;wave&quot; width=&quot;70%&quot;&gt;&lt;/b-skeleton&gt;
&lt;/b-card&gt;

&lt;h5 class=&quot;mt-3&quot;&gt;Fade&lt;/h5&gt;
&lt;b-card&gt;
  &lt;b-skeleton animation=&quot;fade&quot; width=&quot;85%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation=&quot;fade&quot; width=&quot;55%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation=&quot;fade&quot; width=&quot;70%&quot;&gt;&lt;/b-skeleton&gt;
&lt;/b-card&gt;

&lt;h5 class=&quot;mt-3&quot;&gt;Throb&lt;/h5&gt;
&lt;b-card&gt;
  &lt;b-skeleton animation=&quot;throb&quot; width=&quot;85%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation=&quot;throb&quot; width=&quot;55%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation=&quot;throb&quot; width=&quot;70%&quot;&gt;&lt;/b-skeleton&gt;
&lt;/b-card&gt;

&lt;h5 class=&quot;mt-3&quot;&gt;None&lt;/h5&gt;
&lt;b-card&gt;
  &lt;b-skeleton animation width=&quot;85%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation width=&quot;55%&quot;&gt;&lt;/b-skeleton&gt;
  &lt;b-skeleton animation width=&quot;70%&quot;&gt;&lt;/b-skeleton&gt;
&lt;/b-card&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <h5>Wave (default)</h5>
      <b-card class="border">
        <b-skeleton animation="wave" width="85%"></b-skeleton>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
      </b-card>

      <h5 class="mt-3">Fade</h5>
      <b-card class="border">
        <b-skeleton animation="fade" width="85%"></b-skeleton>
        <b-skeleton animation="fade" width="55%"></b-skeleton>
        <b-skeleton animation="fade" width="70%"></b-skeleton>
      </b-card>

      <h5 class="mt-3">Throb</h5>
      <b-card class="border">
        <b-skeleton animation="throb" width="85%"></b-skeleton>
        <b-skeleton animation="throb" width="55%"></b-skeleton>
        <b-skeleton animation="throb" width="70%"></b-skeleton>
      </b-card>

      <h5 class="mt-3">None</h5>
      <b-card class="border">
        <b-skeleton animation width="85%"></b-skeleton>
        <b-skeleton animation width="55%"></b-skeleton>
        <b-skeleton animation width="70%"></b-skeleton>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SkeletonAnimations",

  data: () => ({}),
  components: { BaseCard },
};
</script>