<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Toasts on demand -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Toasts on demand"
    subtitle="Generate a dynamic toast from anywhere in your app via the this.$bvToast Vue component instance injection"
    modalid="modal-6"
    modaltitle="Toasts on demand"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button @click=&quot;makeToast()&quot;&gt;Show Toast&lt;/b-button&gt;
    &lt;b-button @click=&quot;makeToast(true)&quot;&gt;Show Toast (appended)&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        toastCount: 0
      }
    },
    methods: {
      makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
          title: 'BootstrapVue Toast',
          autoHideDelay: 5000,
          appendToast: append
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
        <b-button variant="primary" @click="makeToast()">Show Toast</b-button>
        <b-button variant="success" @click="makeToast(true)"
          >Show Toast (appended)</b-button
        >
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastsDemand",

  data: () => ({
    toastCount: 0,
  }),
  components: { BaseCard },

  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: append,
      });
    },
  },
};
</script>