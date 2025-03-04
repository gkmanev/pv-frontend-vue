<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual states -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Contextual states"
    subtitle="Bootstrap includes validation styles for valid and invalid states on most form controls."
    modalid="modal-5"
    modaltitle="Contextual states"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-textarea
      id=&quot;textarea-state&quot;
      v-model=&quot;text&quot;
      :state=&quot;text.length &gt;= 10&quot;
      placeholder=&quot;Enter at least 10 characters&quot;
      rows=&quot;3&quot;
    &gt;&lt;/b-form-textarea&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        text: ''
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
      <b-form-textarea
        id="textarea-state"
        v-model="text"
        :state="text.length >= 10"
        placeholder="Enter at least 10 characters"
        rows="3"
      ></b-form-textarea>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ContextualStatesTextarea",

  data: () => ({
    text: "",
  }),
  components: { BaseCard },
};
</script>