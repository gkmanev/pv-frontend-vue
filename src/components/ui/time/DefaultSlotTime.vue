<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Default slot -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Default slot"
    subtitle="Provide optional content at the bottom of the time interface via the use of default slot."
    modalid="modal-3"
    modaltitle="Default slot"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-time v-model=&quot;value&quot; show-seconds locale=&quot;en&quot;&gt;
    &lt;div class=&quot;d-flex&quot; dir=&quot;ltr&quot;&gt;
      &lt;b-button
        size=&quot;sm&quot;
        variant=&quot;outline-danger&quot;
        v-if=&quot;value&quot;
        @click=&quot;clearTime&quot;
      &gt;
        Clear time
      &lt;/b-button&gt;
      &lt;b-button
        size=&quot;sm&quot;
        variant=&quot;outline-primary&quot;
        class=&quot;ml-auto&quot;
        @click=&quot;setNow&quot;
      &gt;
        Set Now
      &lt;/b-button&gt;
    &lt;/div&gt;
  &lt;/b-time&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
      }
    },
    methods: {
      setNow() {
        const now = new Date()
        // Grab the HH:mm:ss part of the time string
        this.value = now.toTimeString().slice(0, 8)
      },
      clearTime() {
        this.value = ''
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
      <b-time v-model="value" show-seconds locale="en">
        <div class="d-flex" dir="ltr">
          <b-button
            size="sm"
            variant="outline-danger"
            v-if="value"
            @click="clearTime"
          >
            Clear time
          </b-button>
          <b-button size="sm" variant="primary" class="ml-auto" @click="setNow">
            Set Now
          </b-button>
        </div>
      </b-time>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DefaultSlotTime",

  data: () => ({
    value: null,
  }),
  components: { BaseCard },
  methods: {
    setNow() {
      const now = new Date();
      // Grab the HH:mm:ss part of the time string
      this.value = now.toTimeString().slice(0, 8);
    },
    clearTime() {
      this.value = "";
    },
  },
};
</script>