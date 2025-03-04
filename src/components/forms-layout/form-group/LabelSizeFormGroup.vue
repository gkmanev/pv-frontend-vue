<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Label size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Label size"
    subtitle="You can control the label text size match the size of your form input(s) via the optional label-size prop."
    modalid="modal-3"
    modaltitle="Label size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div&gt;
  &lt;b-form-group label-cols=&quot;4&quot; label-cols-lg=&quot;2&quot; label-size=&quot;sm&quot; label=&quot;Small&quot; label-for=&quot;input-sm&quot;&gt;
    &lt;b-form-input id=&quot;input-sm&quot; size=&quot;sm&quot;&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;

  &lt;b-form-group label-cols=&quot;4&quot; label-cols-lg=&quot;2&quot; label=&quot;Default&quot; label-for=&quot;input-default&quot;&gt;
    &lt;b-form-input id=&quot;input-default&quot;&gt;&lt;/b-form-input&gt;
  &lt;/b-form-group&gt;

  &lt;b-form-group label-cols=&quot;4&quot; label-cols-lg=&quot;2&quot; label-size=&quot;lg&quot; label=&quot;Large&quot; label-for=&quot;input-lg&quot;&gt;
    &lt;b-form-input id=&quot;input-lg&quot; size=&quot;lg&quot;&gt;&lt;/b-form-input&gt;
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
        label-cols="4"
        label-cols-lg="2"
        label-size="sm"
        label="Small"
        label-for="input-sm"
      >
        <b-form-input id="input-sm" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label="Default"
        label-for="input-default"
      >
        <b-form-input id="input-default"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="2"
        label-size="lg"
        label="Large"
        label-for="input-lg"
      >
        <b-form-input id="input-lg" size="lg"></b-form-input>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "LabelSizeFormGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>