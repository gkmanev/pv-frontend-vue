<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Varients Tags -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Varients Tags"
    subtitle="The focus and validation state styling of the component relies upon BootstrapVue's custom CSS."
    modalid="modal-4"
    modaltitle="Varients Tags"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;tags-pills&quot;&gt;Enter tags&lt;/label&gt;
    &lt;b-form-tags
      input-id=&quot;tags-pills&quot;
      v-model=&quot;value&quot;
      tag-variant=&quot;primary&quot;
      tag-pills
      size=&quot;lg&quot;
      separator=&quot; &quot;
      placeholder=&quot;Enter new tags separated by space&quot;
    &gt;&lt;/b-form-tags&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ['apple', 'orange', 'grape']
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
      <label for="tags-pills">Enter tags</label>
      <b-form-tags
        input-id="tags-pills"
        v-model="value"
        tag-variant="primary"
        tag-pills
        size="lg"
        separator=" "
        placeholder="Enter new tags separated by space"
      ></b-form-tags>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "VarientTags",

  data: () => ({
    value: ["xtreme", "ample", "monster"],
  }),
  components: { BaseCard },
};
</script>