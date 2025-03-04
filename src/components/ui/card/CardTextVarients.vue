<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Text variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Text variants</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-12
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-12" scrollable title="Text variants">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card class=&quot;mb-4&quot; bg-variant=&quot;info&quot; text-variant=&quot;white&quot; title=&quot;Card Title&quot;&gt;
      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;
      &lt;b-button href=&quot;#&quot; variant=&quot;light-info&quot; class=&quot;text-info&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card class=&quot;mb-4&quot; bg-variant=&quot;primary&quot; text-variant=&quot;white&quot; title=&quot;Card Title&quot;&gt;
      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;
      &lt;b-button href=&quot;#&quot; variant=&quot;light-primary&quot; class=&quot;text-primary&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card class=&quot;mb-4&quot; bg-variant=&quot;danger&quot; text-variant=&quot;white&quot; title=&quot;Card Title&quot;&gt;
      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;
      &lt;b-button href=&quot;#&quot; variant=&quot;light-danger&quot; class=&quot;text-danger&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card class=&quot;mb-4&quot; bg-variant=&quot;light-success&quot; text-variant=&quot;success&quot; title=&quot;Card Title&quot;&gt;
      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;
      &lt;b-button href=&quot;#&quot; variant=&quot;success&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card class=&quot;mb-4&quot; bg-variant=&quot;light-primary&quot; text-variant=&quot;primary&quot; title=&quot;Card Title&quot;&gt;
      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;
      &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card class=&quot;mb-4&quot; bg-variant=&quot;light-danger&quot; text-variant=&quot;danger&quot; title=&quot;Card Title&quot;&gt;
      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;
      &lt;b-button href=&quot;#&quot; variant=&quot;danger&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
                </code>
              </pre>
            </div>
          </b-modal>
        </div>
      </div>
    </b-card>
    <!-- --------------------------
    code view
    ---------------------------- -->
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="6" lg="4">
          <b-card class="mb-4" bg-variant="info" text-variant="white" title="Card Title">
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <b-button href="#" variant="light-info" class="text-info">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card class="mb-4" bg-variant="primary" text-variant="white" title="Card Title">
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <b-button href="#" variant="light-primary" class="text-primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card class="mb-4" bg-variant="danger" text-variant="white" title="Card Title">
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <b-button href="#" variant="light-danger" class="text-danger">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card class="mb-4" bg-variant="light-success" text-variant="success" title="Card Title">
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <b-button href="#" variant="success">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card class="mb-4" bg-variant="light-primary" text-variant="primary" title="Card Title">
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card class="mb-4" bg-variant="light-danger" text-variant="danger" title="Card Title">
            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>
            <b-button href="#" variant="danger">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTextVarients",

  data: () => ({}),
  components: {},
};
</script>