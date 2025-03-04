<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form confirmation prompt and upload status -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form confirmation prompt and upload status"
    subtitle="This example is a bit more complex, but shows the use of no-wrap, and using the overlay slot to present the user with a prompt dialog, and once confirmed it shows a uploading status indicator. "
    modalid="modal-5"
    modaltitle="Form confirmation prompt and upload status"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form class=&quot;position-relative p-3&quot; @submit.prevent=&quot;onSubmit&quot;&gt;
      &lt;b-form-group label=&quot;Name&quot; label-for=&quot;form-name&quot; label-cols-lg=&quot;2&quot;&gt;
        &lt;b-input-group&gt;
          &lt;b-input-group-prepend is-text&gt;
            &lt;b-icon icon=&quot;person-fill&quot;&gt;&lt;/b-icon&gt;
          &lt;/b-input-group-prepend&gt;
          &lt;b-form-input id=&quot;form-name&quot; :disabled=&quot;busy&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-input-group&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group label=&quot;Email&quot; label-for=&quot;form-mail&quot; label-cols-lg=&quot;2&quot;&gt;
        &lt;b-input-group&gt;
          &lt;b-input-group-prepend is-text&gt;
            &lt;b-icon icon=&quot;envelope-fill&quot;&gt;&lt;/b-icon&gt;
          &lt;/b-input-group-prepend&gt;
          &lt;b-form-input id=&quot;form-email&quot; type=&quot;email&quot; :disabled=&quot;busy&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-input-group&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group label=&quot;Image&quot; label-for=&quot;form-image&quot; label-cols-lg=&quot;2&quot;&gt;
        &lt;b-input-group&gt;
          &lt;b-input-group-prepend is-text&gt;
            &lt;b-icon icon=&quot;image-fill&quot;&gt;&lt;/b-icon&gt;
          &lt;/b-input-group-prepend&gt;
          &lt;b-form-file id=&quot;form-image&quot; :disabled=&quot;busy&quot; accept=&quot;image/*&quot;&gt;&lt;/b-form-file&gt;
        &lt;/b-input-group&gt;
      &lt;/b-form-group&gt;

      &lt;div class=&quot;d-flex justify-content-center&quot;&gt;
         &lt;b-button ref=&quot;submit&quot; type=&quot;submit&quot; :disabled=&quot;busy&quot;&gt;Submit&lt;/b-button&gt;
      &lt;/div&gt;

      &lt;b-overlay :show=&quot;busy&quot; no-wrap @shown=&quot;onShown&quot; @hidden=&quot;onHidden&quot;&gt;
        &lt;template #overlay&gt;
          &lt;div v-if=&quot;processing&quot; class=&quot;text-center p-4 bg-primary text-light rounded&quot;&gt;
            &lt;b-icon icon=&quot;cloud-upload&quot; font-scale=&quot;4&quot;&gt;&lt;/b-icon&gt;
            &lt;div class=&quot;mb-3&quot;&gt;Processing...&lt;/div&gt;
            &lt;b-progress
              min=&quot;1&quot;
              max=&quot;20&quot;
              :value=&quot;counter&quot;
              variant=&quot;success&quot;
              height=&quot;3px&quot;
              class=&quot;mx-n4 rounded-0&quot;
            &gt;&lt;/b-progress&gt;
          &lt;/div&gt;
          &lt;div
            v-else
            ref=&quot;dialog&quot;
            tabindex=&quot;-1&quot;
            role=&quot;dialog&quot;
            aria-modal=&quot;false&quot;
            aria-labelledby=&quot;form-confirm-label&quot;
            class=&quot;text-center p-3&quot;
          &gt;
            &lt;p&gt;&lt;strong id=&quot;form-confirm-label&quot;&gt;Are you sure?&lt;/strong&gt;&lt;/p&gt;
            &lt;div class=&quot;d-flex&quot;&gt;
              &lt;b-button variant=&quot;outline-danger&quot; class=&quot;mr-3&quot; @click=&quot;onCancel&quot;&gt;
                Cancel
              &lt;/b-button&gt;
              &lt;b-button variant=&quot;outline-success&quot; @click=&quot;onOK&quot;&gt;OK&lt;/b-button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/template&gt;
      &lt;/b-overlay&gt;
    &lt;/b-form&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        busy: false,
        processing: false,
        counter: 1,
        interval: null
      }
    },
    beforeDestroy() {
      this.clearInterval()
    },
    methods: {
      clearInterval() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      onShown() {
        // Focus the dialog prompt
        this.$refs.dialog.focus()
      },
      onHidden() {
        // In this case, we return focus to the submit button
        // You may need to alter this based on your application requirements
        this.$refs.submit.focus()
      },
      onSubmit() {
        this.processing = false
        this.busy = true
      },
      onCancel() {
        this.busy = false
      },
      onOK() {
        this.counter = 1
        this.processing = true
        // Simulate an async request
        this.clearInterval()
        this.interval = setInterval(() =&gt; {
          if (this.counter &lt; 20) {
            this.counter = this.counter + 1
          } else {
            this.clearInterval()
            this.$nextTick(() =&gt; {
              this.busy = this.processing = false
            })
          }
        }, 350)
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
        <b-form class="position-relative p-3" @submit.prevent="onSubmit">
          <b-form-group label="Name" label-for="form-name" label-cols-lg="2">
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather type="user" class="feather-sm"></feather>
              </b-input-group-prepend>
              <b-form-input id="form-name" :disabled="busy"></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group label="Email" label-for="form-mail" label-cols-lg="2">
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather type="mail" class="feather-sm"></feather>
              </b-input-group-prepend>
              <b-form-input
                id="form-email"
                type="email"
                :disabled="busy"
              ></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group label="Image" label-for="form-image" label-cols-lg="2">
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather type="camera" class="feather-sm"></feather>
              </b-input-group-prepend>
              <b-form-file
                id="form-image"
                :disabled="busy"
                accept="image/*"
              ></b-form-file>
            </b-input-group>
          </b-form-group>

          <div class="d-flex justify-content-center">
            <b-button
              variant="primary"
              ref="submit"
              type="submit"
              :disabled="busy"
              >Submit</b-button
            >
          </div>

          <b-overlay :show="busy" no-wrap @shown="onShown" @hidden="onHidden">
            <template #overlay>
              <div
                v-if="processing"
                class="text-center p-4 bg-primary text-light rounded"
              >
                <feather
                  type="loader"
                  animation="spin"
                  class="fetaher-sm"
                ></feather>
                <div class="mb-3">Processing...</div>
                <b-progress
                  min="1"
                  max="20"
                  :value="counter"
                  variant="success"
                  height="3px"
                  class="mx-n4 rounded-0"
                ></b-progress>
              </div>
              <div
                v-else
                ref="dialog"
                tabindex="-1"
                role="dialog"
                aria-modal="false"
                aria-labelledby="form-confirm-label"
                class="text-center p-3"
              >
                <p><strong id="form-confirm-label">Are you sure?</strong></p>
                <div class="d-flex">
                  <b-button variant="danger" class="mr-3" @click="onCancel">
                    Cancel
                  </b-button>
                  <b-button variant="success" @click="onOK">OK</b-button>
                </div>
              </div>
            </template>
          </b-overlay>
        </b-form>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormConfirmationOverlay",

  data: () => ({
    busy: false,
    processing: false,
    counter: 1,
    interval: null,
  }),
  components: { BaseCard },
  beforeDestroy() {
    this.clearInterval();
  },
  methods: {
    clearInterval() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    onShown() {
      // Focus the dialog prompt
      this.$refs.dialog.focus();
    },
    onHidden() {
      // In this case, we return focus to the submit button
      // You may need to alter this based on your application requirements
      this.$refs.submit.focus();
    },
    onSubmit() {
      this.processing = false;
      this.busy = true;
    },
    onCancel() {
      this.busy = false;
    },
    onOK() {
      this.counter = 1;
      this.processing = true;
      // Simulate an async request
      this.clearInterval();
      this.interval = setInterval(() => {
        if (this.counter < 20) {
          this.counter = this.counter + 1;
        } else {
          this.clearInterval();
          this.$nextTick(() => {
            this.busy = this.processing = false;
          });
        }
      }, 350);
    },
  },
};
</script>