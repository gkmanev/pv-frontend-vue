<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Enabling of seconds spinbutton -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Enabling of seconds spinbutton"
    subtitle="By default, the seconds spinbutton is not shown. To enable the section of seconds, set the show-seconds prop to true to enable the seconds selection spinbutton."
    modalid="modal-5"
    modaltitle="Enabling of seconds spinbutton"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-time v-model=&quot;value&quot; show-seconds locale=&quot;en&quot;&gt;&lt;/b-time&gt;
  &lt;div class=&quot;mt-2&quot;&gt;Value: '{{ value }}'&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-time v-model="value" show-seconds locale="en"></b-time>
      <div class="mt-2">Value: '{{ value }}'</div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "EnableSecondTime",

  data: () => ({
    value: "",
  }),
  components: { BaseCard },
};
</script>