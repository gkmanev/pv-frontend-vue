<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Horizontal Form Group -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Horizontal Form Group"
    subtitle="The props label-cols and label-cols-{breakpoint} allow you to specify how many columns the label should occupy in the row. "
    modalid="modal-2"
    modaltitle="Horizontal Form Group"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div&gt;
    &lt;b-form-group
      id=&quot;fieldset-horizontal&quot;
      label-cols-sm=&quot;4&quot;
      label-cols-lg=&quot;3&quot;
      content-cols-sm
      content-cols-lg=&quot;7&quot;
      description=&quot;Let us know your name.&quot;
      label=&quot;Enter your name&quot;
      label-for=&quot;input-horizontal&quot;
    &gt;
      &lt;b-form-input id=&quot;input-horizontal&quot;&gt;&lt;/b-form-input&gt;
    &lt;/b-form-group&gt;
  &lt;/div&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "HorizontalFormGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>