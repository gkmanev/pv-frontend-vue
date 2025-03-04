<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- File sizing -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="File sizing"
    subtitle="Use the size prop to control the visual size of the input. The default size is considered md."
    modalid="modal-1"
    modaltitle="File sizing"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-form-group label=&quot;Small:&quot; label-cols-sm=&quot;2&quot; label-size=&quot;sm&quot;&gt;
  &lt;b-form-file id=&quot;file-small&quot; size=&quot;sm&quot;&gt;&lt;/b-form-file&gt;
&lt;/b-form-group&gt;

&lt;b-form-group label=&quot;Default:&quot; label-cols-sm=&quot;2&quot;&gt;
  &lt;b-form-file id=&quot;file-default&quot;&gt;&lt;/b-form-file&gt;
&lt;/b-form-group&gt;

&lt;b-form-group label=&quot;Large:&quot; label-cols-sm=&quot;2&quot; label-size=&quot;lg&quot;&gt;
  &lt;b-form-file id=&quot;file-large&quot; size=&quot;lg&quot;&gt;&lt;/b-form-file&gt;
&lt;/b-form-group&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group label="Small:" label-cols-sm="2" label-size="sm">
        <b-form-file id="file-small" size="sm"></b-form-file>
      </b-form-group>

      <b-form-group label="Default:" label-cols-sm="2">
        <b-form-file id="file-default"></b-form-file>
      </b-form-group>

      <b-form-group label="Large:" label-cols-sm="2" label-size="lg">
        <b-form-file id="file-large" size="lg"></b-form-file>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FileSize",

  data: () => ({}),
  components: { BaseCard },
};
</script>