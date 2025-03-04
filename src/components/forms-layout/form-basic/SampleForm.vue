<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Sample Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Sample Form" modalid="modal-2" modaltitle="Sample Form">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
     &lt;b-form&gt;
        &lt;b-row&gt;
          &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot;&gt;
            &lt;b-form-group
              id=&quot;input1&quot;
              label-cols-sm=&quot;4&quot;
              label-cols-lg=&quot;4&quot;
              content-cols-sm
              content-cols-lg=&quot;8&quot;
              label=&quot;Name&quot;
              label-for=&quot;input1&quot;
              label-class=&quot;fw-medium&quot;
            &gt;
              &lt;b-form-input id=&quot;input1&quot; size=&quot;lg&quot;&gt;&lt;/b-form-input&gt;
            &lt;/b-form-group&gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot;&gt;
            &lt;b-form-group
              id=&quot;input2&quot;
              label-cols-sm=&quot;4&quot;
              label-cols-lg=&quot;4&quot;
              content-cols-sm
              content-cols-lg=&quot;8&quot;
              label=&quot;Email address&quot;
              label-for=&quot;input2&quot;
              label-class=&quot;fw-medium&quot;
            &gt;
              &lt;b-form-input type=&quot;email&quot; id=&quot;input2&quot; size=&quot;lg&quot;&gt;&lt;/b-form-input&gt;
            &lt;/b-form-group&gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot;&gt;
            &lt;b-form-group
              id=&quot;input3&quot;
              label-cols-sm=&quot;4&quot;
              label-cols-lg=&quot;4&quot;
              content-cols-sm
              content-cols-lg=&quot;8&quot;
              label=&quot;Password&quot;
              label-for=&quot;input3&quot;
              label-class=&quot;fw-medium&quot;
            &gt;
              &lt;b-form-input
                id=&quot;input3&quot;
                type=&quot;password&quot;
                size=&quot;lg&quot;
              &gt;&lt;/b-form-input&gt;
            &lt;/b-form-group&gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot;&gt;
            &lt;b-form-group
              id=&quot;input4&quot;
              label-cols-sm=&quot;4&quot;
              label-cols-lg=&quot;4&quot;
              content-cols-sm
              content-cols-lg=&quot;8&quot;
              label=&quot;Confirm Password&quot;
              label-for=&quot;input4&quot;
              label-class=&quot;fw-medium&quot;
            &gt;
              &lt;b-form-input
                id=&quot;input4&quot;
                type=&quot;password&quot;
                size=&quot;lg&quot;
              &gt;&lt;/b-form-input&gt;
            &lt;/b-form-group&gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot;&gt;
            &lt;b-form-checkbox class=&quot;mb-2 mr-sm-2 mb-sm-0&quot;
              &gt;Remember my preference&lt;/b-form-checkbox
            &gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot; class=&quot;d-flex justify-content-end&quot;&gt;
            &lt;b-button
              variant=&quot;primary&quot;
              pill
              class=&quot;d-flex align-items-center px-3&quot;
            &gt;
              &lt;feather type=&quot;send&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt;
              Submit
            &lt;/b-button&gt;
          &lt;/b-col&gt;
        &lt;/b-row&gt;
      &lt;/b-form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    
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
        <b-row>
          <b-col cols="12" lg="6">
            <b-form-group
              id="input1"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Name"
              label-for="input1"
              label-class="fw-medium"
            >
              <b-form-input id="input1" size="lg"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group
              id="input2"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Email address"
              label-for="input2"
              label-class="fw-medium"
            >
              <b-form-input type="email" id="input2" size="lg"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group
              id="input3"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Password"
              label-for="input3"
              label-class="fw-medium"
            >
              <b-form-input
                id="input3"
                type="password"
                size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-group
              id="input4"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Confirm Password"
              label-for="input4"
              label-class="fw-medium"
            >
              <b-form-input
                id="input4"
                type="password"
                size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6">
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember my preference</b-form-checkbox
            >
          </b-col>
          <b-col cols="12" lg="6" class="d-flex justify-content-end">
            <b-button
              variant="primary"
              pill
              class="d-flex align-items-center px-3"
            >
              <feather type="send" class="feather-sm mr-2"></feather>
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SampleForm",

  data: () => ({}),
  components: { BaseCard },
};
</script>