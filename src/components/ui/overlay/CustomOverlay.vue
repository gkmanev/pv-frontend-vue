<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Custom overlay content -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Custom overlay content"
    subtitle="Place custom content in the overlay (replacing the default spinner) via the optionally scoped slot overlay."
    modalid="modal-3"
    modaltitle="Custom overlay content"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-overlay :show=&quot;show&quot; rounded=&quot;sm&quot; @shown=&quot;onShown&quot; @hidden=&quot;onHidden&quot;&gt;
      &lt;b-card title=&quot;Card with custom overlay content&quot; :aria-hidden=&quot;show ? 'true' : null&quot;&gt;
        &lt;b-card-text&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/b-card-text&gt;
        &lt;b-card-text&gt;Click the button to toggle the overlay:&lt;/b-card-text&gt;
        &lt;b-button ref=&quot;show&quot; :disabled=&quot;show&quot; variant=&quot;primary&quot; @click=&quot;show = true&quot;&gt;
          Show overlay
        &lt;/b-button&gt;
      &lt;/b-card&gt;
      &lt;template #overlay&gt;
        &lt;div class=&quot;text-center&quot;&gt;
          &lt;b-icon icon=&quot;stopwatch&quot; font-scale=&quot;3&quot; animation=&quot;cylon&quot;&gt;&lt;/b-icon&gt;
          &lt;p id=&quot;cancel-label&quot;&gt;Please wait...&lt;/p&gt;
          &lt;b-button
            ref=&quot;cancel&quot;
            variant=&quot;outline-danger&quot;
            size=&quot;sm&quot;
            aria-describedby=&quot;cancel-label&quot;
            @click=&quot;show = false&quot;
          &gt;
            Cancel
          &lt;/b-button&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/b-overlay&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      onShown() {
        // Focus the cancel button when the overlay is showing
        this.$refs.cancel.focus()
      },
      onHidden() {
        // Focus the show button when the overlay is removed
        this.$refs.show.focus()
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
          :show="show"
          rounded="sm"
          @shown="onShown"
          @hidden="onHidden"
        >
          <b-card
            class="border"
            title="Card with custom overlay content"
            :aria-hidden="show ? 'true' : null"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
            <b-card-text>Click the button to toggle the overlay:</b-card-text>
            <b-button
              ref="show"
              :disabled="show"
              variant="primary"
              @click="show = true"
            >
              Show overlay
            </b-button>
          </b-card>
          <template #overlay>
            <div class="text-center">
              <feather
                type="loader"
                animation="spin"
                class="feather-lg"
              ></feather>
              <p id="cancel-label">Please wait...</p>
              <b-button
                ref="cancel"
                variant="danger"
                size="sm"
                aria-describedby="cancel-label"
                @click="show = false"
              >
                Cancel
              </b-button>
            </div>
          </template>
        </b-overlay>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CustomOverlay",

  data: () => ({
    show: false,
  }),
  components: { BaseCard },
  methods: {
    onShown() {
      // Focus the cancel button when the overlay is showing
      this.$refs.cancel.focus();
    },
    onHidden() {
      // Focus the show button when the overlay is removed
      this.$refs.show.focus();
    },
  },
};
</script>