<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Overlay -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Overlay"
    subtitle="BootstrapVue's custom b-overlay component is used to visually obscure a particular element or component and its content."
    modalid="modal-1"
    modaltitle="Overlay"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-overlay :show=&quot;show&quot; rounded=&quot;sm&quot;&gt;
      &lt;b-card title=&quot;Card with overlay&quot; :aria-hidden=&quot;show ? 'true' : null&quot;&gt;
        &lt;b-card-text&gt;Laborum consequat non elit enim exercitation cillum.&lt;/b-card-text&gt;
        &lt;b-card-text&gt;Click the button to toggle the overlay:&lt;/b-card-text&gt;
        &lt;b-button :disabled=&quot;show&quot; variant=&quot;primary&quot; @click=&quot;show = true&quot;&gt;
          Show overlay
        &lt;/b-button&gt;
      &lt;/b-card&gt;
    &lt;/b-overlay&gt;
    &lt;b-button class=&quot;mt-3&quot; @click=&quot;show = !show&quot;&gt;Toggle overlay&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        show: false
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
      <div>
        <b-overlay :show="show" rounded="sm">
          <b-card
            title="Card with overlay"
            class="border"
            :aria-hidden="show ? 'true' : null">
            <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
            <b-card-text>Click the button to toggle the overlay:</b-card-text>
            <b-button :disabled="show" variant="primary" @click="show = true">
              Show overlay
            </b-button>
          </b-card>
        </b-overlay>
        <b-button class="mt-3" @click="show = !show">Toggle overlay</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicOverlay",

  data: () => ({
    show: false,
  }),
  components: { BaseCard },
};
</script>