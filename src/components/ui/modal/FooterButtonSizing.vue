<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Footer button sizing -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Footer button sizing"
    subtitle="Fancy smaller or larger buttons in the default footer? Simply set the button-size prop to 'sm' for small buttons, or 'lg' for larger buttons."
    modalid="modal-4"
    modaltitle="Footer button sizing"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; v-b-modal.modal-footer-sm&gt;Small Footer Buttons&lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot; v-b-modal.modal-footer-lg&gt;Large Footer Buttons&lt;/b-button&gt;
&lt;/div&gt;

&lt;b-modal id=&quot;modal-footer-sm&quot; title=&quot;BootstrapVue&quot; button-size=&quot;sm&quot;&gt;
  &lt;p class=&quot;my-2&quot;&gt;This modal has small footer buttons&lt;/p&gt;
&lt;/b-modal&gt;

&lt;b-modal id=&quot;modal-footer-lg&quot; title=&quot;BootstrapVue&quot; button-size=&quot;lg&quot;&gt;
  &lt;p class=&quot;my-2&quot;&gt;This modal has large footer buttons&lt;/p&gt;
&lt;/b-modal&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button variant="primary" v-b-modal.modal-footer-sm
          >Small Footer Buttons</b-button
        >
        <b-button variant="primary" v-b-modal.modal-footer-lg
          >Large Footer Buttons</b-button
        >
      </div>

      <b-modal id="modal-footer-sm" title="BootstrapVue" button-size="sm">
        <p class="my-2">This modal has small footer buttons</p>
      </b-modal>

      <b-modal id="modal-footer-lg" title="BootstrapVue" button-size="lg">
        <p class="my-2">This modal has large footer buttons</p>
      </b-modal>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FooterButtonSizing",

  data: () => ({}),
  components: { BaseCard },
};
</script>