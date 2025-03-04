<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Reactive Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Reactive Popover"
    subtitle=""
    modalid="modal-4"
    modaltitle="Reactive Popover"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div id=&quot;my-container&quot;&gt;
    &lt;div class=&quot;my-3&quot;&gt;
      &lt;!-- Our triggering (target) element --&gt;
      &lt;b-button id=&quot;popover-reactive-1&quot; variant=&quot;primary&quot; ref=&quot;button&quot;&gt;
        Reactive Content Using Slots
      &lt;/b-button&gt;
    &lt;/div&gt;

    &lt;!-- Output from the popover interaction --&gt;
    &lt;b-card title=&quot;Returned values:&quot; v-if=&quot;input1Return &amp;&amp; input2Return&quot;&gt;
      &lt;p class=&quot;card-text&quot; style=&quot;max-width: 20rem;&quot;&gt;
        Name: &lt;strong&gt;{{ input1Return }}&lt;/strong&gt;&lt;br&gt;
        Color: &lt;strong&gt;{{ input2Return }}&lt;/strong&gt;
      &lt;/p&gt;
    &lt;/b-card&gt;

    &lt;!-- Our popover title and content render container --&gt;
    &lt;!-- We use placement 'auto' so popover fits in the best spot on viewport --&gt;
    &lt;!-- We specify the same container as the trigger button, so that popover is close to button --&gt;
    &lt;b-popover
      target=&quot;popover-reactive-1&quot;
      triggers=&quot;click&quot;
      :show.sync=&quot;popoverShow&quot;
      placement=&quot;auto&quot;
      container=&quot;my-container&quot;
      ref=&quot;popover&quot;
      @show=&quot;onShow&quot;
      @shown=&quot;onShown&quot;
      @hidden=&quot;onHidden&quot;&gt;
      &lt;template #title&gt;
        &lt;b-button @click=&quot;onClose&quot; class=&quot;close&quot; aria-label=&quot;Close&quot;&gt;
          &lt;span class=&quot;d-inline-block&quot; aria-hidden=&quot;true&quot;&gt;&times;&lt;/span&gt;
        &lt;/b-button&gt;
        Interactive Content
      &lt;/template&gt;

      &lt;div&gt;
        &lt;b-form-group
          label=&quot;Name&quot;
          label-for=&quot;popover-input-1&quot;
          label-cols=&quot;3&quot;
          :state=&quot;input1state&quot;
          class=&quot;mb-1&quot;
          description=&quot;Enter your name&quot;
          invalid-feedback=&quot;This field is required&quot;&gt;
          &lt;b-form-input
            ref=&quot;input1&quot;
            id=&quot;popover-input-1&quot;
            v-model=&quot;input1&quot;
            :state=&quot;input1state&quot;
            size=&quot;sm&quot;&gt;
          &lt;/b-form-input&gt;
        &lt;/b-form-group&gt;

        &lt;b-form-group
          label=&quot;Color&quot;
          label-for=&quot;popover-input-2&quot;
          label-cols=&quot;3&quot;
          :state=&quot;input2state&quot;
          class=&quot;mb-1&quot;
          description=&quot;Pick a color&quot;
          invalid-feedback=&quot;This field is required&quot;&gt;
          &lt;b-form-select
            id=&quot;popover-input-2&quot;
            v-model=&quot;input2&quot;
            :state=&quot;input2state&quot;
            :options=&quot;options&quot;
            size=&quot;sm&quot;&gt;
          &lt;/b-form-select&gt;
        &lt;/b-form-group&gt;

        &lt;b-alert show class=&quot;small&quot;&gt;
          &lt;strong&gt;Current Values:&lt;/strong&gt;&lt;br&gt;
          Name: &lt;strong&gt;{{ input1 }}&lt;/strong&gt;&lt;br&gt;
          Color: &lt;strong&gt;{{ input2 }}&lt;/strong&gt;
        &lt;/b-alert&gt;

        &lt;b-button @click=&quot;onClose&quot; size=&quot;sm&quot; variant=&quot;danger&quot;&gt;Cancel&lt;/b-button&gt;
        &lt;b-button @click=&quot;onOk&quot; size=&quot;sm&quot; variant=&quot;primary&quot;&gt;Ok&lt;/b-button&gt;
      &lt;/div&gt;
    &lt;/b-popover&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input1: '',
        input1state: null,
        input2: '',
        input2state: null,
        options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
        input1Return: '',
        input2Return: '',
        popoverShow: false
      }
    },
    watch: {
      input1(val) {
        if (val) {
          this.input1state = true
        }
      },
      input2(val) {
        if (val) {
          this.input2state = true
        }
      }
    },
    methods: {
      onClose() {
        this.popoverShow = false
      },
      onOk() {
        if (!this.input1) {
          this.input1state = false
        }
        if (!this.input2) {
          this.input2state = false
        }
        if (this.input1 &amp;&amp; this.input2) {
          this.onClose()
          // Return our popover form results
          this.input1Return = this.input1
          this.input2Return = this.input2
        }
      },
      onShow() {
        // This is called just before the popover is shown
        // Reset our popover form variables
        this.input1 = ''
        this.input2 = ''
        this.input1state = null
        this.input2state = null
        this.input1Return = ''
        this.input2Return = ''
      },
      onShown() {
        // Called just after the popover has been shown
        // Transfer focus to the first input
        this.focusRef(this.$refs.input1)
      },
      onHidden() {
        // Called just after the popover has finished hiding
        // Bring focus back to the button
        this.focusRef(this.$refs.button)
      },
      focusRef(ref) {
        // Some references may be a component, functional component, or plain element
        // This handles that check before focusing, assuming a `focus()` method exists
        // We do this in a double `$nextTick()` to ensure components have
        // updated &amp; popover positioned first
        this.$nextTick(() =&gt; {
          this.$nextTick(() =&gt; {
            ;(ref.$el || ref).focus()
          })
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
      <div id="my-container">
        <div class="my-3">
          <!-- Our triggering (target) element -->
          <b-button id="popover-reactive-1" variant="primary" ref="button">
            Reactive Content Using Slots
          </b-button>
        </div>

        <!-- Output from the popover interaction -->
        <b-card title="Returned values:" v-if="input1Return && input2Return">
          <p class="card-text" style="max-width: 20rem">
            Name: <strong>{{ input1Return }}</strong
            ><br />
            Color: <strong>{{ input2Return }}</strong>
          </p>
        </b-card>

        <!-- Our popover title and content render container -->
        <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
        <!-- We specify the same container as the trigger button, so that popover is close to button -->
        <b-popover
          target="popover-reactive-1"
          triggers="click"
          :show.sync="popoverShow"
          placement="auto"
          container="my-container"
          ref="popover"
          @show="onShow"
          @shown="onShown"
          @hidden="onHidden"
        >
          <template #title>
            <b-button @click="onClose" class="close" aria-label="Close">
              <span class="d-inline-block" aria-hidden="true">&times;</span>
            </b-button>
            Interactive Content
          </template>

          <div>
            <b-form-group
              label="Name"
              label-for="popover-input-1"
              label-cols="3"
              :state="input1state"
              class="mb-1"
              description="Enter your name"
              invalid-feedback="This field is required"
            >
              <b-form-input
                ref="input1"
                id="popover-input-1"
                v-model="input1"
                :state="input1state"
                size="sm"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Color"
              label-for="popover-input-2"
              label-cols="3"
              :state="input2state"
              class="mb-1"
              description="Pick a color"
              invalid-feedback="This field is required"
            >
              <b-form-select
                id="popover-input-2"
                v-model="input2"
                :state="input2state"
                :options="options"
                size="sm"
              ></b-form-select>
            </b-form-group>

            <b-alert show class="small">
              <strong>Current Values:</strong><br />
              Name: <strong>{{ input1 }}</strong
              ><br />
              Color: <strong>{{ input2 }}</strong>
            </b-alert>
            <div class="btn-grp">
              <b-button @click="onClose" size="sm" variant="danger"
                >Cancel</b-button
              >
              <b-button @click="onOk" size="sm" variant="primary">Ok</b-button>
            </div>
          </div>
        </b-popover>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ReactivePopover",

  data: () => ({
    input1: "",
    input1state: null,
    input2: "",
    input2state: null,
    options: [{ text: "- Choose 1 -", value: "" }, "Red", "Green", "Blue"],
    input1Return: "",
    input2Return: "",
    popoverShow: false,
  }),
  components: { BaseCard },
  watch: {
    input1(val) {
      if (val) {
        this.input1state = true;
      }
    },
    input2(val) {
      if (val) {
        this.input2state = true;
      }
    },
  },
  methods: {
    onClose() {
      this.popoverShow = false;
    },
    onOk() {
      if (!this.input1) {
        this.input1state = false;
      }
      if (!this.input2) {
        this.input2state = false;
      }
      if (this.input1 && this.input2) {
        this.onClose();
        // Return our popover form results
        this.input1Return = this.input1;
        this.input2Return = this.input2;
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = "";
      this.input2 = "";
      this.input1state = null;
      this.input2state = null;
      this.input1Return = "";
      this.input2Return = "";
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      this.focusRef(this.$refs.input1);
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button);
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus();
        });
      });
    },
  },
};
</script>