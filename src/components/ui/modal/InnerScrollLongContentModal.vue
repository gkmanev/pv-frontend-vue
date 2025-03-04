<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Inner Scrolling long conten -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Inner Scrolling long content"
    subtitle="When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

"
    modalid="modal-6"
    modaltitle="Inner Scrolling long contentl"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot; v-b-modal.modal-tall&gt;Launch overflowing modal&lt;/b-button&gt;

&lt;b-modal id=&quot;modal-tall&quot; scrollable title=&quot;Overflowing Content&quot;&gt;
  &lt;p class=&quot;my-4&quot; v-for=&quot;i in 20&quot; :key=&quot;i&quot;&gt;
    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    consectetur ac, vestibulum at eros.
  &lt;/p&gt;
&lt;/b-modal&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="primary" v-b-modal.modal-innerscroll
        >Launch overflowing modal</b-button
      >

      <b-modal id="modal-innerscroll" scrollable title="Overflowing Content">
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </b-modal>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InnerScrollLongContentModal",

  data: () => ({}),
  components: { BaseCard },
};
</script>