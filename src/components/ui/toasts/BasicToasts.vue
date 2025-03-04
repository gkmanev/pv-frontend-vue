<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Toasts -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Toasts"
    subtitle="Push notifications to your visitors with a <b-toast> and <b-toaster>, lightweight components which are easily customizable for generating alert messages."
    modalid="modal-1"
    modaltitle="Toasts"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;p-3 bg-light progress-bar-striped&quot; style=&quot;min-height: 170px&quot;&gt;
  &lt;b-button
    class=&quot;mb-2&quot;
    variant=&quot;primary&quot;
    @click=&quot;$bvToast.show('example-toast')&quot;&gt;
    Show Toast
  &lt;/b-button&gt;
  &lt;b-toast id=&quot;example-toast&quot; title=&quot;BootstrapVue&quot; static no-auto-hide&gt;
    Hello, world! This is a toast message.
  &lt;/b-toast&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="p-3 bg-light progress-bar-striped" style="min-height: 170px">
        <b-button
          class="mb-2"
          variant="primary"
          @click="$bvToast.show('example-toast')">
          Show Toast
        </b-button>
        <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
          Hello, world! This is a toast message.
        </b-toast>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicToasts",

  data: () => ({}),
  components: { BaseCard },
};
</script>