<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button Groups -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Button Groups" modalid="modal-2" modaltitle="Button Groups">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button-group size=&quot;sm&quot;&gt;
  &lt;b-button
    v-for=&quot;(btn, idx) in buttons&quot;
    :key=&quot;idx&quot;
    :pressed.sync=&quot;btn.state&quot;
    variant=&quot;primary&quot;
  &gt;
     btn.caption 
  &lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;p class=&quot;mt-2 fw-medium&quot;&gt;
  Pressed States: &lt;strong&gt;{{ btnStates }}&lt;/strong&gt;
&lt;/p&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button-group size="sm">
        <b-button
          v-for="(btn, idx) in buttons"
          :key="idx"
          :pressed.sync="btn.state"
          variant="primary"
        >
          {{ btn.caption }}
        </b-button>
      </b-button-group>
      <p class="mt-2 fw-medium">
        Pressed States: <strong>{{ btnStates }}</strong>
      </p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "ButtonGroup",

  data: () => ({
    btn: [],
    buttons: [
      { caption: "Toggle 1", state: true },
      { caption: "Toggle 2", state: false },
      { caption: "Toggle 3", state: true },
      { caption: "Toggle 4", state: false },
    ],
  }),
  components: { BaseCard },
  computed: {
    btnStates() {
      return this.buttons.map((btn) => btn.state);
    },
  },
};
</script>