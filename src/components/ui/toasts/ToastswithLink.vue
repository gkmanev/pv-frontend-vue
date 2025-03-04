<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Links -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Links"
    subtitle="Optionally convert the toast body to a link (<a>) or <router-link> (or <nuxt-link>) via the href and to props respectively. When set, the entire toast body becomes a link."
    modalid="modal-9"
    modaltitle="Links"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button @click=&quot;toast()&quot;&gt;Toast with link&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      toast() {
        this.$bvToast.toast(`Toast with action link`, {
          href: '#foo',
          title: 'Example'
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
      <b-button variant="primary" @click="toast()">Toast with link</b-button>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastswithLink",

  data: () => ({}),
  components: { BaseCard },
  methods: {
    toast() {
      this.$bvToast.toast(`Toast with action link`, {
        href: "#foo",
        title: "Example",
      });
    },
  },
};
</script>