<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Custom scoped slots -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Custom scoped slots" modalid="modal-3" modaltitle="Custom scoped slots">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot; @click=&quot;$bvModal.show('modal-scoped')&quot;&gt;Open Modal&lt;/b-button&gt;

&lt;b-modal id=&quot;modal-scoped&quot;&gt;
  &lt;template #modal-header=&quot;{ close }&quot;&gt;
    &lt;!-- Emulate built in modal header close button action --&gt;
    &lt;b-button size=&quot;sm&quot; variant=&quot;outline-danger&quot; @click=&quot;close()&quot;&gt;
      Close Modal
    &lt;/b-button&gt;
    &lt;h5&gt;Modal Header&lt;/h5&gt;
  &lt;/template&gt;

  &lt;template #default=&quot;{ hide }&quot;&gt;
    &lt;p&gt;Modal Body with button&lt;/p&gt;
    &lt;b-button @click=&quot;hide()&quot;&gt;Hide Modal&lt;/b-button&gt;
  &lt;/template&gt;

  &lt;template #modal-footer=&quot;{ ok, cancel, hide }&quot;&gt;
    &lt;b&gt;Custom Footer&lt;/b&gt;
    &lt;!-- Emulate built in modal footer ok and cancel button actions --&gt;
    &lt;b-button size=&quot;sm&quot; variant=&quot;success&quot; @click=&quot;ok()&quot;&gt; OK &lt;/b-button&gt;
    &lt;b-button size=&quot;sm&quot; variant=&quot;danger&quot; @click=&quot;cancel()&quot;&gt;
      Cancel
    &lt;/b-button&gt;
    &lt;!-- Button with custom close trigger value --&gt;
    &lt;b-button
      size=&quot;sm&quot;
      variant=&quot;outline-secondary&quot;
      @click=&quot;hide('forget')&quot;
    &gt;
      Forget it
    &lt;/b-button&gt;
  &lt;/template&gt;
&lt;/b-modal&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="primary" @click="$bvModal.show('modal-scoped')"
        >Open Modal</b-button
      >

      <b-modal id="modal-scoped">
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <b-button size="sm" variant="outline-danger" @click="close()">
            Close Modal
          </b-button>
          <h5>Modal Header</h5>
        </template>

        <template #default="{ hide }">
          <p>Modal Body with button</p>
          <b-button @click="hide()">Hide Modal</b-button>
        </template>

        <template #modal-footer="{ ok, cancel, hide }">
          <b>Custom Footer</b>
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="ok()"> OK </b-button>
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
          <!-- Button with custom close trigger value -->
          <b-button
            size="sm"
            variant="outline-secondary"
            @click="hide('forget')"
          >
            Forget it
          </b-button>
        </template>
      </b-modal>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CustomSlotsModal",

  data: () => ({}),
  components: { BaseCard },
};
</script>