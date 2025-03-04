<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Last tag removal via backspace keypress -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Last tag removal via backspace keypress"
    subtitle="When the prop remove-on-delete is set, and the user presses Backspace (or Del) and the input value is empty, the last tag in the tag list will be removed."
    modalid="modal-3"
    modaltitle="Last tag removal via backspace keypress"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;tags-remove-on-delete&quot;&gt;Enter new tags separated by space&lt;/label&gt;
    &lt;b-form-tags
      input-id=&quot;tags-remove-on-delete&quot;
      :input-attrs=&quot;{ 'aria-describedby': 'tags-remove-on-delete-help' }&quot;
      v-model=&quot;value&quot;
      separator=&quot; &quot;
      placeholder=&quot;Enter new tags separated by space&quot;
      remove-on-delete
      no-add-on-enter
    &gt;&lt;/b-form-tags&gt;
    &lt;b-form-text id=&quot;tags-remove-on-delete-help&quot; class=&quot;mt-2&quot;&gt;
      Press &lt;kbd&gt;Backspace&lt;/kbd&gt; to remove the last tag entered
    &lt;/b-form-text&gt;
    &lt;p&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ["xtreme", "ample", "monster"],
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
      <label for="tags-remove-on-delete"
        >Enter new tags separated by space</label
      >
      <b-form-tags
        input-id="tags-remove-on-delete"
        :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
        v-model="value"
        separator=" "
        placeholder="Enter new tags separated by space"
        remove-on-delete
        no-add-on-enter
      ></b-form-tags>
      <b-form-text id="tags-remove-on-delete-help" class="mt-2">
        Press <kbd>Backspace</kbd> to remove the last tag entered
      </b-form-text>
      <p>Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BackspacePressTags",

  data: () => ({
    value: ["xtreme", "ample", "monster"],
  }),
  components: { BaseCard },
};
</script>