<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Limiting tags -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Limiting tags"
    subtitle="If you want to limit the amount of tags the user is able to add use the limit prop. When configured, adding more tags than the limit allows is only possible by the v-model."
    modalid="modal-7"
    modaltitle="Limiting tags"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;tags-limit&quot;&gt;Enter tags&lt;/label&gt;
    &lt;b-form-tags input-id=&quot;tags-limit&quot; v-model=&quot;value&quot; :limit=&quot;limit&quot; remove-on-delete&gt;&lt;/b-form-tags&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [],
        limit: 5
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
      <label for="tags-limit">Enter tags</label>
      <b-form-tags
        input-id="tags-limit"
        v-model="value"
        :limit="limit"
        remove-on-delete
      ></b-form-tags>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "LimitTags",

  data: () => ({
    value: [],
    limit: 5,
  }),
  components: { BaseCard },
};
</script>