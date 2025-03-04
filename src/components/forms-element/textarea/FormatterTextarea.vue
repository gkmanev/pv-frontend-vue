<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Formatter support -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Formatter support"
    subtitle="<b-form-textarea> optionally supports formatting by passing a function reference to the formatter prop."
    modalid="modal-6"
    modaltitle="Formatter support"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group
      label=&quot;Textarea with formatter (on input)&quot;
      label-for=&quot;textarea-formatter&quot;
      description=&quot;We will convert your text to lowercase instantly&quot;
      class=&quot;mb-0&quot;
    &gt;
      &lt;b-form-textarea
        id=&quot;textarea-formatter&quot;
        v-model=&quot;text1&quot;
        placeholder=&quot;Enter your text&quot;
        :formatter=&quot;formatter&quot;
      &gt;&lt;/b-form-textarea&gt;
    &lt;/b-form-group&gt;
    &lt;p style=&quot;white-space: pre-line&quot;&gt;&lt;b&gt;Value:&lt;/b&gt; {{ text1 }}&lt;/p&gt;

    &lt;b-form-group
      label=&quot;Textarea with lazy formatter (on blur)&quot;
      label-for=&quot;textarea-lazy&quot;
      description=&quot;This one is a little lazy!&quot;
      class=&quot;mb-0&quot;
    &gt;
      &lt;b-form-textarea
        id=&quot;textarea-lazy&quot;
        v-model=&quot;text2&quot;
        placeholder=&quot;Enter your text&quot;
        lazy-formatter
        :formatter=&quot;formatter&quot;
      &gt;&lt;/b-form-textarea&gt;
    &lt;/b-form-group&gt;
    &lt;p class=&quot;mb-0&quot; style=&quot;white-space: pre-line&quot;&gt;&lt;b&gt;Value:&lt;/b&gt; {{ text2 }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        text1: '',
        text2: ''
      }
    },
    methods: {
      formatter(value) {
        return value.toLowerCase()
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
      <b-form-group
        label="Textarea with formatter (on input)"
        label-for="textarea-formatter"
        description="We will convert your text to lowercase instantly"
        class="mb-0"
      >
        <b-form-textarea
          id="textarea-formatter"
          v-model="text1"
          placeholder="Enter your text"
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <p style="white-space: pre-line"><b>Value:</b> {{ text1 }}</p>

      <b-form-group
        label="Textarea with lazy formatter (on blur)"
        label-for="textarea-lazy"
        description="This one is a little lazy!"
        class="mb-0"
      >
        <b-form-textarea
          id="textarea-lazy"
          v-model="text2"
          placeholder="Enter your text"
          lazy-formatter
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <p class="mb-0" style="white-space: pre-line">
        <b>Value:</b> {{ text2 }}
      </p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormatterTextarea",

  data: () => ({
    text1: "",
    text2: "",
  }),
  components: { BaseCard },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    },
  },
};
</script>