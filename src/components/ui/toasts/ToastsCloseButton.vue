<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Close button -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Close button"
    subtitle="Toasts have a close button to hide them on use click by default. Setting the no-close-button prop to true will prevent this and creates a toast without the default close button."
    modalid="modal-4"
    modaltitle="Close button"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button @click=&quot;showToast&quot;&gt;Show Toast&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      showToast() {
        // Use a shorter name for `this.$createElement`
        const h = this.$createElement
        // Create a ID with a incremented count
        const id = `my-toast-${this.count++}`

        // Create the custom close button
        const $closeButton = h(
          'b-button',
          {
            on: { click: () =&gt; this.$bvToast.hide(id) }
          },
          'Close'
        )

        // Create the toast
        this.$bvToast.toast([$closeButton], {
          id: id,
          title: `Toast ${this.count}`,
          noCloseButton: true
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
      <b-button variant="primary" @click="showToast">Show Toast</b-button>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastsCloseButton",

  data: () => ({
    count: 0,
  }),
  components: { BaseCard },
  methods: {
    showToast() {
      // Use a shorter name for `this.$createElement`
      const h = this.$createElement;
      // Create a ID with a incremented count
      const id = `my-toast-${this.count++}`;

      // Create the custom close button
      const $closeButton = h(
        "b-button",
        {
          on: { click: () => this.$bvToast.hide(id) },
        },
        "Close"
      );

      // Create the toast
      this.$bvToast.toast([$closeButton], {
        id: id,
        title: `Toast ${this.count}`,
        noCloseButton: true,
      });
    },
  },
};
</script>