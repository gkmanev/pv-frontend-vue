<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Checkbox Inputs -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Checkbox Inputs"
    subtitle="For cross browser consistency, <b-form-checkbox-group> and <b-form-checkbox> use Bootstrap's custom checkbox input to replace the browser default checkbox input."
    modalid="modal-1"
    modaltitle="Form Checkbox Inputs"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">

        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode> = </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MultipleChoiceCheckbox",

  data: () => ({}),
  components: { BaseCard },
};
</script>