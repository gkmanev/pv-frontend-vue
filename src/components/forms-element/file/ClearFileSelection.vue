<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Clearing the file selection -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Clearing the file selection"
    subtitle="With inputs of type file, normally the v-model is uni-directional."
    modalid="modal-3"
    modaltitle="Clearing the file selection"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-file v-model=&quot;file&quot; ref=&quot;file-input&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-file&gt;

    &lt;b-button @click=&quot;clearFiles&quot; class=&quot;mr-2&quot;&gt;Reset via method&lt;/b-button&gt;
    &lt;b-button @click=&quot;file = null&quot;&gt;Reset via v-model&lt;/b-button&gt;

    &lt;p class=&quot;mt-2&quot;&gt;Selected file: &lt;b&gt;{{ file ? file.name : '' }}&lt;/b&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        file: null
      }
    },
    methods: {
      clearFiles() {
        this.$refs['file-input'].reset()
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
      <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>

      <b-button variant="primary" @click="clearFiles" class="mr-2"
        >Reset via method</b-button
      >
      <b-button variant="info" @click="file = null">Reset via v-model</b-button>

      <p class="mt-2">
        Selected file: <b>{{ file ? file.name : "" }}</b>
      </p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ClearFileSelection",

  data: () => ({
    file: null,
  }),
  components: { BaseCard },
  methods: {
    clearFiles() {
      this.$refs["file-input"].reset();
    },
  },
};
</script>