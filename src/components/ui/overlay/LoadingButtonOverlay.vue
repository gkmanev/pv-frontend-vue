<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Loading Button -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Loading Button" modalid="modal-6" modaltitle="Loading Button">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-overlay
      :show=&quot;busy&quot;
      rounded
      opacity=&quot;0.6&quot;
      spinner-small
      spinner-variant=&quot;primary&quot;
      class=&quot;d-inline-block&quot;
      @hidden=&quot;onHidden&quot;
    &gt;
      &lt;b-button
        ref=&quot;button&quot;
        :disabled=&quot;busy&quot;
        variant=&quot;primary&quot;
        @click=&quot;onClick&quot;
      &gt;
        Do something
      &lt;/b-button&gt;
    &lt;/b-overlay&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        busy: false,
        timeout: null
      }
    },
    beforeDestroy() {
      this.clearTimeout()
    },
    methods: {
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() =&gt; {
          this.clearTimeout()
          callback()
        }, 5000)
      },
      onHidden() {
        // Return focus to the button once hidden
        this.$refs.button.focus()
      },
      onClick() {
        this.busy = true
        // Simulate an async request
        this.setTimeout(() =&gt; {
          this.busy = false
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
      <div>
        <b-overlay
          :show="busy"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          @hidden="onHidden"
        >
          <b-button
            ref="button"
            :disabled="busy"
            variant="danger"
            @click="onClick"
          >
            Do something
          </b-button>
        </b-overlay>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "LoadingButtonOverlay",

  data: () => ({
    busy: false,
    timeout: null,
  }),
  components: { BaseCard },
  beforeDestroy() {
    this.clearTimeout();
  },
  methods: {
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    setTimeout(callback) {
      this.clearTimeout();
      this.timeout = setTimeout(() => {
        this.clearTimeout();
        callback();
      }, 5000);
    },
    onHidden() {
      // Return focus to the button once hidden
      this.$refs.button.focus();
    },
    onClick() {
      this.busy = true;
      // Simulate an async request
      this.setTimeout(() => {
        this.busy = false;
      });
    },
  },
};
</script>