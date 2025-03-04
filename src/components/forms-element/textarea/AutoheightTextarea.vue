<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Auto height -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Auto height"
    subtitle="<b-form-textarea> can also automatically adjust its height (text rows) to fit the content, even as the user enters or deletes text."
    modalid="modal-4"
    modaltitle="Auto height"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
  &lt;b-col sm=&quot;2&quot;&gt;
    &lt;label for=&quot;textarea-auto-height&quot;&gt;Auto height:&lt;/label&gt;
  &lt;/b-col&gt;
  &lt;b-col sm=&quot;10&quot;&gt;
    &lt;b-form-textarea
      id=&quot;textarea-auto-height&quot;
      placeholder=&quot;Auto height textarea&quot;
      rows=&quot;3&quot;
      max-rows=&quot;8&quot;
    &gt;&lt;/b-form-textarea&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;

&lt;b-row class=&quot;mt-2&quot;&gt;
  &lt;b-col sm=&quot;2&quot;&gt;
    &lt;label for=&quot;textarea-no-auto-shrink&quot;&gt;No auto-shrink:&lt;/label&gt;
  &lt;/b-col&gt;
  &lt;b-col sm=&quot;10&quot;&gt;
    &lt;b-form-textarea
      id=&quot;textarea-no-auto-shrink&quot;
      placeholder=&quot;Auto height (no-shrink) textarea&quot;
      rows=&quot;3&quot;
      max-rows=&quot;8&quot;
      no-auto-shrink
    &gt;&lt;/b-form-textarea&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-row>
        <b-col sm="2">
          <label for="textarea-auto-height">Auto height:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            id="textarea-auto-height"
            placeholder="Auto height textarea"
            rows="3"
            max-rows="8"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label for="textarea-no-auto-shrink">No auto-shrink:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            id="textarea-no-auto-shrink"
            placeholder="Auto height (no-shrink) textarea"
            rows="3"
            max-rows="8"
            no-auto-shrink
          ></b-form-textarea>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "AutoheightTextarea",

  data: () => ({}),
  components: { BaseCard },
};
</script>