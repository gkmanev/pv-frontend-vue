<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Tag creation using separators -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Tag creation using separators"
    subtitle="To auto create tags when a separator character is typed (i.e. Space, ,, etc.), set the separator prop to the character that will trigger the tag to be added.."
    modalid="modal-2"
    modaltitle="Tag creation using separators"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;tags-separators&quot;&gt;Enter tags separated by space, comma or semicolon&lt;/label&gt;
    &lt;b-form-tags
      input-id=&quot;tags-separators&quot;
      v-model=&quot;value&quot;
      separator=&quot; ,;&quot;
      placeholder=&quot;Enter new tags separated by space, comma or semicolon&quot;
      no-add-on-enter
    &gt;&lt;/b-form-tags&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ['one', 'two']
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
      <label for="tags-separators"
        >Enter tags separated by space, comma or semicolon</label
      >
      <b-form-tags
        input-id="tags-separators"
        v-model="value"
        separator=" ,;"
        placeholder="Enter new tags separated by space, comma or semicolon"
        no-add-on-enter
      ></b-form-tags>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SeperatorTags",

  data: () => ({
    value: ["one", "two"],
  }),
  components: { BaseCard },
};
</script>