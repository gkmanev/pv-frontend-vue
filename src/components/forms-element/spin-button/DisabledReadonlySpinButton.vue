<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled and readonly states -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Disabled and readonly states"
    subtitle="Setting the prop disabled places the component in a disabled, non-interactive state. "
    modalid="modal-7"
    modaltitle="Disabled and readonly states"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-row&gt;
    &lt;b-col md=&quot;6&quot; class=&quot;mb-2&quot;&gt;
      &lt;label for=&quot;sb-disabled&quot;&gt;Disabled spin button&lt;/label&gt;
      &lt;b-form-spinbutton id=&quot;sb-disabled&quot; v-model=&quot;value&quot; disabled&gt;&lt;/b-form-spinbutton&gt;
    &lt;/b-col&gt;
    &lt;b-col md=&quot;6&quot; class=&quot;mb-2&quot;&gt;
      &lt;label for=&quot;sb-readonly&quot; class=&quot;&quot;&gt;Readonly spin button&lt;/label&gt;
      &lt;b-form-spinbutton id=&quot;sb-readonly&quot; v-model=&quot;value&quot; readonly&gt;&lt;/b-form-spinbutton&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 50
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
      <b-row>
        <b-col md="6" class="mb-2">
          <label for="sb-disabled">Disabled spin button</label>
          <b-form-spinbutton
            id="sb-disabled"
            v-model="value"
            disabled
          ></b-form-spinbutton>
        </b-col>
        <b-col md="6" class="mb-2">
          <label for="sb-readonly" class="">Readonly spin button</label>
          <b-form-spinbutton
            id="sb-readonly"
            v-model="value"
            readonly
          ></b-form-spinbutton>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisabledReadonlySpinButton",

  data: () => ({
    value: 50,
  }),
  components: { BaseCard },
};
</script>