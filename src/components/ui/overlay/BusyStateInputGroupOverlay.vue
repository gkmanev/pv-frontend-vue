<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Busy state input group -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Busy state input group" modalid="modal-2" modaltitle="Busy state input group">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-overlay :show=&quot;busy&quot; rounded=&quot;lg&quot; opacity=&quot;0.6&quot; @hidden=&quot;onHidden&quot;&gt;
      &lt;template #overlay&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-spinner small type=&quot;grow&quot; variant=&quot;secondary&quot;&gt;&lt;/b-spinner&gt;
          &lt;b-spinner type=&quot;grow&quot; variant=&quot;dark&quot;&gt;&lt;/b-spinner&gt;
          &lt;b-spinner small type=&quot;grow&quot; variant=&quot;secondary&quot;&gt;&lt;/b-spinner&gt;
          &lt;!-- We add an SR only text for screen readers --&gt;
          &lt;span class=&quot;sr-only&quot;&gt;Please wait...&lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;b-input-group size=&quot;lg&quot; :aria-hidden=&quot;busy ? 'true' : null&quot;&gt;
        &lt;b-form-input v-model=&quot;value&quot; :disabled=&quot;busy&quot;&gt;&lt;/b-form-input&gt;
        &lt;b-input-group-append&gt;
          &lt;b-button ref=&quot;button&quot; :disabled=&quot;busy&quot; variant=&quot;primary&quot;  @click=&quot;onClick&quot;&gt;
            Do something
          &lt;/b-button&gt;
        &lt;/b-input-group-append&gt;
      &lt;/b-input-group&gt;
    &lt;/b-overlay&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 'Some value',
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
        // Return focus to the button
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
        <b-overlay :show="busy" rounded="lg" opacity="0.6" @hidden="onHidden">
          <template #overlay>
            <div class="d-flex align-items-center">
              <b-spinner small type="grow" variant="secondary"></b-spinner>
              <b-spinner type="grow" variant="dark"></b-spinner>
              <b-spinner small type="grow" variant="secondary"></b-spinner>
              <!-- We add an SR only text for screen readers -->
              <span class="sr-only">Please wait...</span>
            </div>
          </template>
          <b-input-group size="lg" :aria-hidden="busy ? 'true' : null">
            <b-form-input v-model="value" :disabled="busy"></b-form-input>
            <b-input-group-append>
              <b-button
                ref="button"
                :disabled="busy"
                variant="primary"
                @click="onClick"
              >
                Do something
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-overlay>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BusyStateInputGroupOverlay",

  data: () => ({
    value: "Some value",
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
      // Return focus to the button
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