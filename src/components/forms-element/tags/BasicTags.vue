<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Tags -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Tags"
    subtitle="Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection and optional tag validation."
    modalid="modal-1"
    modaltitle="Basic Tags"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;tags-basic&quot;&gt;Type a new tag and press enter&lt;/label&gt;
    &lt;b-form-tags input-id=&quot;tags-basic&quot; v-model=&quot;value&quot;&gt;&lt;/b-form-tags&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ['xtreme', 'monster']
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="tags-basic">Type a new tag and press enter</label>
      <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicTags",

  data: () => ({
    value: ["xtreme", "monster"],
  }),
  components: { BaseCard },
};
</script>