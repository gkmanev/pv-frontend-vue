<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Disabled Form" modalid="modal-3" modaltitle="Disabled Form">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
    &lt;b-form&gt;
        &lt;b-form-group
          id=&quot;fieldset-1&quot;
          label=&quot;Disabled input&quot;
          label-class=&quot;fw-medium mb-1&quot;
          label-for=&quot;input-1&quot;
          valid-feedback=&quot;Thank you!&quot;
          :invalid-feedback=&quot;invalidFeedback&quot;
          :state=&quot;state&quot;
        &gt;
          &lt;b-form-input
            id=&quot;input-1&quot;
            type=&quot;text&quot;
            placeholder=&quot;Disabled input&quot;
            disabled
          &gt;&lt;/b-form-input&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-group
          id=&quot;fieldset-2&quot;
          label=&quot;Disabled input&quot;
          label-class=&quot;fw-medium mb-1&quot;
          label-for=&quot;input-1&quot;
          valid-feedback=&quot;Thank you!&quot;
          :invalid-feedback=&quot;invalidFeedback&quot;
          :state=&quot;state&quot;
        &gt;
          &lt;b-form-select
            v-model=&quot;selected&quot;
            :options=&quot;options&quot;
            id=&quot;input-2&quot;
            type=&quot;text&quot;
            placeholder=&quot;Disabled input&quot;
            disabled
          &gt;&lt;/b-form-select&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-checkbox disabled class=&quot;mb-2 mr-sm-2 mb-sm-0&quot;
          &gt;Remember me&lt;/b-form-checkbox
        &gt;
        &lt;b-button
          variant=&quot;primary&quot;
          pill
          class=&quot;d-flex align-items-center px-3 mt-3&quot;
          disabled
        &gt;
          &lt;feather type=&quot;send&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt;
          Submit
        &lt;/b-button&gt;
      &lt;/b-form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data: () =&gt; ({
    selected: null,
    options: [
      { value: null, text: &quot;Please select an option&quot; },
      { value: &quot;a&quot;, text: &quot;This is First option&quot; },
      { value: &quot;b&quot;, text: &quot;Selected Option&quot; },
      { value: { C: &quot;3PO&quot; }, text: &quot;This is an option with object value&quot; },
      { value: &quot;d&quot;, text: &quot;This one is disabled&quot;, disabled: true },
    ],
  }),
};
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form>
        <b-form-group
          id="fieldset-1"
          label="Disabled input"
          label-class="fw-medium mb-1"
          valid-feedback="Thank you!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            type="text"
            placeholder="Disabled input"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-2"
          label="Disabled input"
          label-class="fw-medium mb-1"
          valid-feedback="Thank you!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-select
            v-model="selected"
            :options="options"
            type="text"
            placeholder="Disabled input"
            disabled
          ></b-form-select>
        </b-form-group>
        <b-form-checkbox disabled class="mb-2 mr-sm-2 mb-sm-0"
          >Remember me</b-form-checkbox
        >
        <b-button
          variant="primary"
          pill
          class="d-flex align-items-center px-3 mt-3"
          disabled
        >
          <feather type="send" class="feather-sm mr-2"></feather>
          Submit
        </b-button>
      </b-form>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisabledForm",

  data: () => ({
    selected: null,
    state: "",
    invalidFeedback: "",
    options: [
      { value: null, text: "Please select an option" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Selected Option" },
      { value: { C: "3PO" }, text: "This is an option with object value" },
      { value: "d", text: "This one is disabled", disabled: true },
    ],
  }),
  components: { BaseCard },
};
</script>