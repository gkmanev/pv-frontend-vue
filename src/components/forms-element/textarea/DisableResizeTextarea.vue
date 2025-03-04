<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disable resize handle -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Disable resize handle"
    subtitle="Some web browsers will allow the user to re-size the height of the textarea. To disable this feature, set the no-resize prop to true."
    modalid="modal-2"
    modaltitle="Disable resize handle"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div&gt;
  &lt;b-form-textarea
    id=&quot;textarea-no-resize&quot;
    placeholder=&quot;Fixed height textarea&quot;
    rows=&quot;3&quot;
    no-resize
  &gt;&lt;/b-form-textarea&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-textarea
        id="textarea-no-resize"
        placeholder="Fixed height textarea"
        rows="3"
        no-resize
      ></b-form-textarea>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisableResizeTextarea",

  data: () => ({}),
  components: { BaseCard },
};
</script>