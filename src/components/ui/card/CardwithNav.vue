<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Nav -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card with Nav</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-14
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-14" scrollable title="Card with Nav">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;b-card
      title=&quot;Card Title&quot;
      body-class=&quot;text-center&quot;
      header-tag=&quot;nav&quot;
      header-class=&quot;bg-light-primary&quot;
      class=&quot;mb-4&quot;
    &gt;
      &lt;template #header&gt;
        &lt;b-nav card-header tabs&gt;
          &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
          &lt;b-nav-item&gt;Inactive&lt;/b-nav-item&gt;
          &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
        &lt;/b-nav&gt;
      &lt;/template&gt;

      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;

      &lt;b-button variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;b-card
      title=&quot;Card Title&quot;
      body-class=&quot;text-center&quot;
      header-tag=&quot;nav&quot;
      header-class=&quot;bg-light-info&quot;
      class=&quot;mb-4&quot;
    &gt;
      &lt;template #header&gt;
        &lt;b-nav card-header tabs&gt;
          &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
          &lt;b-nav-item&gt;Inactive&lt;/b-nav-item&gt;
          &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
        &lt;/b-nav&gt;
      &lt;/template&gt;

      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;

      &lt;b-button variant=&quot;info&quot; class=&quot;text-white&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;b-card
      title=&quot;Card Title&quot;
      body-class=&quot;text-center&quot;
      header-tag=&quot;nav&quot;
      header-class=&quot;bg-light-danger&quot;
      class=&quot;mb-4&quot;
    &gt;
      &lt;template #header&gt;
        &lt;b-nav card-header tabs&gt;
          &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
          &lt;b-nav-item&gt;Inactive&lt;/b-nav-item&gt;
          &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
        &lt;/b-nav&gt;
      &lt;/template&gt;

      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;

      &lt;b-button variant=&quot;danger&quot;&gt;Go somewhere&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;b-card
      title=&quot;Card Title&quot;
      body-class=&quot;text-center&quot;
      header-tag=&quot;nav&quot;
      header-class=&quot;bg-light-success&quot;
      class=&quot;mb-4&quot;
    &gt;
      &lt;template #header&gt;
        &lt;b-nav card-header tabs&gt;
          &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
          &lt;b-nav-item&gt;Inactive&lt;/b-nav-item&gt;
          &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
        &lt;/b-nav&gt;
      &lt;/template&gt;

      &lt;b-card-text&gt;
        With supporting text below as a natural lead-in to additional
        content.
      &lt;/b-card-text&gt;

      &lt;b-button variant=&quot;success&quot;&gt;Go somewhere&lt;/b-button&gt;
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
        <b-col cols="12" md="6">
          <b-card
            title="Card Title"
            body-class="text-center"
            header-tag="nav"
            header-class="bg-light-primary"
            class="mb-4"
          >
            <template #header>
              <b-nav card-header tabs>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Inactive</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </template>

            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>

            <b-button variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            title="Card Title"
            body-class="text-center"
            header-tag="nav"
            header-class="bg-light-info"
            class="mb-4"
          >
            <template #header>
              <b-nav card-header tabs>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Inactive</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </template>

            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>

            <b-button variant="info" class="text-white">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            title="Card Title"
            body-class="text-center"
            header-tag="nav"
            header-class="bg-light-danger"
            class="mb-4"
          >
            <template #header>
              <b-nav card-header tabs>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Inactive</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </template>

            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>

            <b-button variant="danger">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            title="Card Title"
            body-class="text-center"
            header-tag="nav"
            header-class="bg-light-success"
            class="mb-4"
          >
            <template #header>
              <b-nav card-header tabs>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Inactive</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </template>

            <b-card-text>
              With supporting text below as a natural lead-in to additional
              content.
            </b-card-text>

            <b-button variant="success">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardwithNav",

  data: () => ({}),
  components: {},
};
</script>