<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Header & Footer variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">
            Card with Header & Footer variants
          </h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-7
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal
            id="modal-7"
            scrollable
            title="Card with Header & Footer variants"
          >
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot;&gt;
    &lt;b-card-group deck&gt;
      &lt;b-card
        header=&quot;Card Header&quot;
        header-text-variant=&quot;white&quot;
        header-tag=&quot;header&quot;
        header-bg-variant=&quot;primary&quot;
        footer=&quot;Card Footer&quot;
        footer-tag=&quot;footer&quot;
        footer-bg-variant=&quot;light-primary&quot;
        footer-border-variant=&quot;dark&quot;
        title=&quot;Title&quot;
        style=&quot;max-width: 20rem&quot;
      &gt;
        &lt;b-card-text&gt;Header and footers variants.&lt;/b-card-text&gt;
      &lt;/b-card&gt;
      &lt;b-card
        header=&quot;Card Header&quot;
        header-text-variant=&quot;white&quot;
        header-tag=&quot;header&quot;
        header-bg-variant=&quot;info&quot;
        footer=&quot;Card Footer&quot;
        footer-tag=&quot;footer&quot;
        footer-bg-variant=&quot;light-info&quot;
        footer-border-variant=&quot;dark&quot;
        title=&quot;Title&quot;
        style=&quot;max-width: 20rem&quot;
      &gt;
        &lt;b-card-text&gt;Header and footers variants.&lt;/b-card-text&gt;
      &lt;/b-card&gt;
      &lt;b-card
        class=&quot;shadow-sm&quot;
        header=&quot;Card Header&quot;
        header-text-variant=&quot;white&quot;
        header-tag=&quot;header&quot;
        header-bg-variant=&quot;warning&quot;
        footer=&quot;Card Footer&quot;
        footer-tag=&quot;footer&quot;
        footer-bg-variant=&quot;light-warning&quot;
        footer-border-variant=&quot;dark&quot;
        title=&quot;Title&quot;
        style=&quot;max-width: 20rem&quot;
      &gt;
        &lt;b-card-text&gt;Header and footers variants.&lt;/b-card-text&gt;
      &lt;/b-card&gt;
      &lt;b-card
        header=&quot;Card Header&quot;
        header-text-variant=&quot;white&quot;
        header-tag=&quot;header&quot;
        header-bg-variant=&quot;danger&quot;
        footer=&quot;Card Footer&quot;
        footer-tag=&quot;footer&quot;
        footer-bg-variant=&quot;light-danger&quot;
        footer-border-variant=&quot;dark&quot;
        title=&quot;Title&quot;
        style=&quot;max-width: 20rem&quot;
      &gt;
        &lt;b-card-text&gt;Header and footers variants.&lt;/b-card-text&gt;
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
              header="Card Header"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="primary"
              footer="Card Footer"
              footer-tag="footer"
              footer-bg-variant="light-primary"
              footer-border-variant="dark"
              title="Title"
              style="max-width: 20rem"
            >
              <b-card-text>Header and footers variants.</b-card-text>
            </b-card>
            <b-card
              header="Card Header"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="info"
              footer="Card Footer"
              footer-tag="footer"
              footer-bg-variant="light-info"
              footer-border-variant="dark"
              title="Title"
              style="max-width: 20rem"
            >
              <b-card-text>Header and footers variants.</b-card-text>
            </b-card>
            <b-card
              class="shadow-sm"
              header="Card Header"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="warning"
              footer="Card Footer"
              footer-tag="footer"
              footer-bg-variant="light-warning"
              footer-border-variant="dark"
              title="Title"
              style="max-width: 20rem"
            >
              <b-card-text>Header and footers variants.</b-card-text>
            </b-card>
            <b-card
              header="Card Header"
              header-text-variant="white"
              header-tag="header"
              header-bg-variant="danger"
              footer="Card Footer"
              footer-tag="footer"
              footer-bg-variant="light-danger"
              footer-border-variant="dark"
              title="Title"
              style="max-width: 20rem"
            >
              <b-card-text>Header and footers variants.</b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHeaderFooterVarients",

  data: () => ({}),
  components: {},
};
</script>