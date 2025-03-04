<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Header & Footer -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">
            Card with Header & Footer
          </h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-6
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-6" scrollable title="Card with Header & Footer">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot;&gt;
    &lt;b-card-group deck&gt;
      &lt;b-card
        header=&quot;featured&quot;
        header-tag=&quot;header&quot;
        footer=&quot;Card Footer&quot;
        footer-tag=&quot;footer&quot;
        title=&quot;Title&quot;
      &gt;
        &lt;b-card-text&gt;Header and footers using props.&lt;/b-card-text&gt;
        &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
      &lt;/b-card&gt;

      &lt;b-card title=&quot;Title&quot; header-tag=&quot;header&quot; footer-tag=&quot;footer&quot;&gt;
        &lt;template #header&gt;
          &lt;h6 class=&quot;mb-0&quot;&gt;Header Slot&lt;/h6&gt;
        &lt;/template&gt;
        &lt;b-card-text&gt;Header and footers using slots.&lt;/b-card-text&gt;
        &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
        &lt;template #footer&gt;
          &lt;em&gt;Footer Slot&lt;/em&gt;
        &lt;/template&gt;
      &lt;/b-card&gt;
      &lt;b-card
        header=&quot;featured&quot;
        header-tag=&quot;header&quot;
        footer=&quot;Card Footer&quot;
        footer-tag=&quot;footer&quot;
        title=&quot;Title&quot;
      &gt;
        &lt;b-card-text&gt;Header and footers using props.&lt;/b-card-text&gt;
        &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
      &lt;/b-card&gt;

      &lt;b-card title=&quot;Title&quot; header-tag=&quot;header&quot; footer-tag=&quot;footer&quot;&gt;
        &lt;template #header&gt;
          &lt;h6 class=&quot;mb-0&quot;&gt;Header Slot&lt;/h6&gt;
        &lt;/template&gt;
        &lt;b-card-text&gt;Header and footers using slots.&lt;/b-card-text&gt;
        &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
        &lt;template #footer&gt;
          &lt;em&gt;Footer Slot&lt;/em&gt;
        &lt;/template&gt;
      &lt;/b-card&gt;
    &lt;/b-card-group&gt;
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
        <b-col cols="12">
          <b-card-group deck>
            <b-card
              header="featured"
              header-tag="header"
              footer="Card Footer"
              footer-tag="footer"
              title="Title"
            >
              <b-card-text>Header and footers using props.</b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>

            <b-card title="Title" header-tag="header" footer-tag="footer">
              <template #header>
                <h6 class="mb-0">Header Slot</h6>
              </template>
              <b-card-text>Header and footers using slots.</b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
              <template #footer>
                <em>Footer Slot</em>
              </template>
            </b-card>
            <b-card
              header="featured"
              header-tag="header"
              footer="Card Footer"
              footer-tag="footer"
              title="Title"
            >
              <b-card-text>Header and footers using props.</b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>

            <b-card title="Title" header-tag="header" footer-tag="footer">
              <template #header>
                <h6 class="mb-0">Header Slot</h6>
              </template>
              <b-card-text>Header and footers using slots.</b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
              <template #footer>
                <em>Footer Slot</em>
              </template>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHeaderFooter",

  data: () => ({}),
  components: {},
};
</script>