<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Fade transition -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Fade transition"
    subtitle="You can disable the fade transition via adding the no-fade prop to <b-overlay>."
    modalid="modal-4"
    modaltitle="Fade transition"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-overlay
      show
      spinner-variant=&quot;primary&quot;
      spinner-type=&quot;grow&quot;
      spinner-small
      rounded=&quot;sm&quot;
      style=&quot;max-width: 320px;&quot;
    &gt;
      &lt;b-card title=&quot;Card with spinner style&quot; aria-hidden=&quot;true&quot;&gt;
        &lt;b-card-text&gt;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/b-card-text&gt;
        &lt;b-button disabled variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
      &lt;/b-card&gt;
    &lt;/b-overlay&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div>
        <b-overlay
          show
          spinner-variant="primary"
          spinner-type="grow"
          spinner-small
          rounded="sm"
        >
          <b-card title="Card with spinner style" aria-hidden="true">
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </b-card-text>
            <b-button disabled variant="primary">Button</b-button>
          </b-card>
        </b-overlay>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FadeOverlay",

  data: () => ({
    show: false,
  }),
  components: { BaseCard },
};
</script>