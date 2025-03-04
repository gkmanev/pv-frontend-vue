<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Aspect -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Basic Aspect" 
    subtitle="The default aspect ratio is 1:1 (ratio of 1), which makes the height
          always be at least the same as the width. The aspect prop can be used
          to specify an arbitrary aspect ratio (i.e. 1.5) or a ratio as a string
          such as '16:9' or '4:3'. The width will always be 100% of the
          available width in the parent element/component." 
    modalid="modal-1"
    modaltitle="Basic Aspect"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-form-group
  label=&quot;Aspect ratio&quot;
  label-for=&quot;ratio&quot;
  label-cols-md=&quot;auto&quot;
  class=&quot;mb-3&quot;
&gt;
  &lt;b-form-select
    id=&quot;ratio&quot;
    v-model=&quot;aspect&quot;
    :options=&quot;aspects&quot;
  &gt;&lt;/b-form-select&gt;
&lt;/b-form-group&gt;
&lt;b-card&gt;
  &lt;b-aspect :aspect=&quot;aspect&quot;&gt;
    This will always be an aspect of &quot;{{ aspect }}&quot;, except when the
    content is too tall.
  &lt;/b-aspect&gt;
&lt;/b-card&gt;
      </code>
    </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-form-group
        label="Aspect ratio"
        label-for="ratio"
        label-cols-md="auto"
        class="mb-3"
      >
        <b-form-select
          id="ratio"
          v-model="aspect"
          :options="aspects"
        ></b-form-select>
      </b-form-group>
      <b-card>
        <b-aspect :aspect="aspect">
          This will always be an aspect of "{{ aspect }}", except when the
          content is too tall.
        </b-aspect>
      </b-card>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AspectBasic",

  data: () => ({
    aspect: "16:9",
    aspects: [
      { text: "4:3 (SD)", value: "4:3" },
      { text: "1:1 (Square)", value: "1:1" },
      { text: "16:9 (HD)", value: "16:9" },
      { text: "1.85:1 (Widescreen)", value: "1.85:1" },
      { text: "2:1 (Univisium/Superscope)", value: "2:1" },
      { text: "21:9 (Anamorphic)", value: "21:9" },
      { text: "1.43:1 (IMAX)", value: "1.43:1" },
      { text: "3:2 (35mm Film)", value: "3:2" },
      { text: "3:1 (APS-P)", value: "3:1" },
      { text: "4/3 (Same as 4:3)", value: 4 / 3 },
      { text: "16/9 (Same as 16:9)", value: 16 / 9 },
      { text: "3 (Same as 3:1)", value: 3 },
      { text: "2 (Same as 2:1)", value: 2 },
      { text: "1.85 (Same as 1.85:1)", value: 1.85 },
      { text: "1.5", value: 1.5 },
      { text: "1 (Same as 1:1)", value: 1 },
    ],
  }),
  components: { BaseCard },
};
</script>