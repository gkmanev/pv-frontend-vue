<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Textarea -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Textarea"
    subtitle="Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states."
    modalid="modal-1"
    modaltitle="Basic Textarea"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-textarea
      id=&quot;textarea&quot;
      v-model=&quot;text&quot;
      placeholder=&quot;Enter something...&quot;
      rows=&quot;3&quot;
      max-rows=&quot;6&quot;
    &gt;&lt;/b-form-textarea&gt;

    &lt;pre class=&quot;mt-3 mb-0&quot;&gt;{{ text }}&lt;/pre&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        text: ''
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
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicTextarea",

  data: () => ({
    text: "",
  }),
  components: { BaseCard },
};
</script>