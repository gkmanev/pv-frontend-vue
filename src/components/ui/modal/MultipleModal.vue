<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple modal support -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Multiple modal support"
    subtitle="To disable stacking for a specific modal, just set the prop no-stacking on the <b-modal> component. "
    modalid="modal-8"
    modaltitle="Multiple modal support"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot; v-b-modal.modal-multi-1&gt;Open First Modal&lt;/b-button&gt;

&lt;b-modal
  id=&quot;modal-multi-1&quot;
  size=&quot;lg&quot;
  title=&quot;First Modal&quot;
  ok-only
  no-stacking&gt;
  &lt;p class=&quot;my-2&quot;&gt;First Modal&lt;/p&gt;
  &lt;b-button v-b-modal.modal-multi-2&gt;Open Second Modal&lt;/b-button&gt;
&lt;/b-modal&gt;

&lt;b-modal id=&quot;modal-multi-2&quot; title=&quot;Second Modal&quot; ok-only&gt;
  &lt;p class=&quot;my-2&quot;&gt;Second Modal&lt;/p&gt;
  &lt;b-button v-b-modal.modal-multi-3 size=&quot;sm&quot;&gt;Open Third Modal&lt;/b-button&gt;
&lt;/b-modal&gt;

&lt;b-modal id=&quot;modal-multi-3&quot; size=&quot;sm&quot; title=&quot;Third Modal&quot; ok-only&gt;
  &lt;p class=&quot;my-1&quot;&gt;Third Modal&lt;/p&gt;
&lt;/b-modal&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="primary" v-b-modal.modal-multi-1
        >Open First Modal</b-button
      >

      <b-modal
        id="modal-multi-1"
        size="lg"
        title="First Modal"
        ok-only
        no-stacking
      >
        <p class="my-2">First Modal</p>
        <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
      </b-modal>

      <b-modal id="modal-multi-2" title="Second Modal" ok-only>
        <p class="my-2">Second Modal</p>
        <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
      </b-modal>

      <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
        <p class="my-1">Third Modal</p>
      </b-modal>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MultipleModal",

  data: () => ({}),
  components: { BaseCard },
};
</script>