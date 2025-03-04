<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Variants"
    subtitle="BootstrapVue toasts provide custom CSS to define color variants. "
    modalid="modal-8"
    modaltitle="Variants"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button @click=&quot;makeToast()&quot; class=&quot;mb-2&quot;&gt;Default&lt;/b-button&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;makeToast('primary')&quot; class=&quot;mb-2&quot;&gt;Primary&lt;/b-button&gt;
    &lt;b-button variant=&quot;secondary&quot; @click=&quot;makeToast('secondary')&quot; class=&quot;mb-2&quot;&gt;Secondary&lt;/b-button&gt;
    &lt;b-button variant=&quot;danger&quot; @click=&quot;makeToast('danger')&quot; class=&quot;mb-2&quot;&gt;Danger&lt;/b-button&gt;
    &lt;b-button variant=&quot;warning&quot; @click=&quot;makeToast('warning')&quot; class=&quot;mb-2&quot;&gt;Warning&lt;/b-button&gt;
    &lt;b-button variant=&quot;success&quot; @click=&quot;makeToast('success')&quot; class=&quot;mb-2&quot;&gt;Success&lt;/b-button&gt;
    &lt;b-button variant=&quot;info&quot; @click=&quot;makeToast('info')&quot; class=&quot;mb-2&quot;&gt;Info&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      makeToast(variant = null) {
        this.$bvToast.toast('Toast body content', {
          title: `Variant ${variant || 'default'}`,
          variant: variant,
          solid: true
        })
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
      <div class="btn-grp">
        <b-button @click="makeToast()" class="mb-2">Default</b-button>
        <b-button variant="primary" @click="makeToast('primary')" class="mb-2"
          >Primary</b-button
        >
        <b-button
          variant="secondary"
          @click="makeToast('secondary')"
          class="mb-2"
          >Secondary</b-button
        >
        <b-button variant="danger" @click="makeToast('danger')" class="mb-2"
          >Danger</b-button
        >
        <b-button variant="warning" @click="makeToast('warning')" class="mb-2"
          >Warning</b-button
        >
        <b-button variant="success" @click="makeToast('success')" class="mb-2"
          >Success</b-button
        >
        <b-button variant="info" @click="makeToast('info')" class="mb-2"
          >Info</b-button
        >
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastsVarient",

  data: () => ({}),
  components: { BaseCard },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>