<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size Textarea -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Size Textarea"
    subtitle="Set text height using the size prop to sm or lg for small or large respectively."
    modalid="modal-3"
    modaltitle="Size Textarea"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-container fluid&gt;
  &lt;b-row&gt;
    &lt;b-col sm=&quot;2&quot;&gt;
      &lt;label for=&quot;textarea-small&quot;&gt;Small:&lt;/label&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;10&quot;&gt;
      &lt;b-form-textarea
        id=&quot;textarea-small&quot;
        size=&quot;sm&quot;
        placeholder=&quot;Small textarea&quot;
      &gt;&lt;/b-form-textarea&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row class=&quot;mt-2&quot;&gt;
    &lt;b-col sm=&quot;2&quot;&gt;
      &lt;label for=&quot;textarea-default&quot;&gt;Default:&lt;/label&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;10&quot;&gt;
      &lt;b-form-textarea
        id=&quot;textarea-default&quot;
        placeholder=&quot;Default textarea&quot;
      &gt;&lt;/b-form-textarea&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row class=&quot;mt-2&quot;&gt;
    &lt;b-col sm=&quot;2&quot;&gt;
      &lt;label for=&quot;textarea-large&quot;&gt;Large:&lt;/label&gt;
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;10&quot;&gt;
      &lt;b-form-textarea
        id=&quot;textarea-large&quot;
        size=&quot;lg&quot;
        placeholder=&quot;Large textarea&quot;
      &gt;&lt;/b-form-textarea&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-container fluid>
        <b-row>
          <b-col sm="2">
            <label for="textarea-small">Small:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="textarea-small"
              size="sm"
              placeholder="Small textarea"
            ></b-form-textarea>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col sm="2">
            <label for="textarea-default">Default:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="textarea-default"
              placeholder="Default textarea"
            ></b-form-textarea>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col sm="2">
            <label for="textarea-large">Large:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="textarea-large"
              size="lg"
              placeholder="Large textarea"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SizeTextarea",

  data: () => ({}),
  components: { BaseCard },
};
</script>