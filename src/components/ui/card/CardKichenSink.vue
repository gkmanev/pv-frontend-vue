<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Kitchen sink -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Kitchen sink</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-10
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-10" scrollable title="Kitchen sink ">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card
      class=&quot;max-height-img&quot;
      no-body
      img-src=&quot;@/assets/images/big/img3.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
    &gt;
      &lt;template #header&gt;
        &lt;h4 class=&quot;mb-0&quot;&gt;Hello World&lt;/h4&gt;
      &lt;/template&gt;

      &lt;b-card-body&gt;
        &lt;b-card-title&gt;Card Title&lt;/b-card-title&gt;
        &lt;b-card-sub-title class=&quot;mb-2&quot;&gt;Card Sub Title&lt;/b-card-sub-title&gt;
        &lt;b-card-text&gt;
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        &lt;/b-card-text&gt;
      &lt;/b-card-body&gt;

      &lt;b-list-group flush&gt;
        &lt;b-list-group-item&gt;Cras justo odio&lt;/b-list-group-item&gt;
        &lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
        &lt;b-list-group-item&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
      &lt;/b-list-group&gt;

      &lt;b-card-body&gt;
        &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
        &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/a&gt;
      &lt;/b-card-body&gt;

      &lt;b-card-footer&gt;This is a footer&lt;/b-card-footer&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card
      class=&quot;max-height-img&quot;
      no-body
      img-src=&quot;@/assets/images/big/img2.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
    &gt;
      &lt;template #header&gt;
        &lt;h4 class=&quot;mb-0&quot;&gt;Hello World&lt;/h4&gt;
      &lt;/template&gt;

      &lt;b-card-body&gt;
        &lt;b-card-title&gt;Card Title&lt;/b-card-title&gt;
        &lt;b-card-sub-title class=&quot;mb-2&quot;&gt;Card Sub Title&lt;/b-card-sub-title&gt;
        &lt;b-card-text&gt;
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        &lt;/b-card-text&gt;
      &lt;/b-card-body&gt;

      &lt;b-list-group flush&gt;
        &lt;b-list-group-item&gt;Cras justo odio&lt;/b-list-group-item&gt;
        &lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
        &lt;b-list-group-item&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
      &lt;/b-list-group&gt;

      &lt;b-card-body&gt;
        &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
        &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/a&gt;
      &lt;/b-card-body&gt;

      &lt;b-card-footer&gt;This is a footer&lt;/b-card-footer&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot; lg=&quot;4&quot;&gt;
    &lt;b-card
      class=&quot;max-height-img&quot;
      no-body
      img-src=&quot;@/assets/images/big/img1.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
    &gt;
      &lt;template #header&gt;
        &lt;h4 class=&quot;mb-0&quot;&gt;Hello World&lt;/h4&gt;
      &lt;/template&gt;

      &lt;b-card-body&gt;
        &lt;b-card-title&gt;Card Title&lt;/b-card-title&gt;
        &lt;b-card-sub-title class=&quot;mb-2&quot;&gt;Card Sub Title&lt;/b-card-sub-title&gt;
        &lt;b-card-text&gt;
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        &lt;/b-card-text&gt;
      &lt;/b-card-body&gt;

      &lt;b-list-group flush&gt;
        &lt;b-list-group-item&gt;Cras justo odio&lt;/b-list-group-item&gt;
        &lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
        &lt;b-list-group-item&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
      &lt;/b-list-group&gt;

      &lt;b-card-body&gt;
        &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
        &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/a&gt;
      &lt;/b-card-body&gt;

      &lt;b-card-footer&gt;This is a footer&lt;/b-card-footer&gt;
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
          <b-card
            class="max-height-img"
            no-body
            img-src="@/assets/images/big/img3.jpg"
            img-alt="Image"
            img-top
          >
            <template #header>
              <h4 class="mb-0">Hello World</h4>
            </template>

            <b-card-body>
              <b-card-title>Card Title</b-card-title>
              <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card-body>

            <b-list-group flush>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card-body>

            <b-card-footer>This is a footer</b-card-footer>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card
            class="max-height-img"
            no-body
            img-src="@/assets/images/big/img2.jpg"
            img-alt="Image"
            img-top
          >
            <template #header>
              <h4 class="mb-0">Hello World</h4>
            </template>

            <b-card-body>
              <b-card-title>Card Title</b-card-title>
              <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card-body>

            <b-list-group flush>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card-body>

            <b-card-footer>This is a footer</b-card-footer>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
          <b-card
            class="max-height-img"
            no-body
            img-src="@/assets/images/big/img1.jpg"
            img-alt="Image"
            img-top
          >
            <template #header>
              <h4 class="mb-0">Hello World</h4>
            </template>

            <b-card-body>
              <b-card-title>Card Title</b-card-title>
              <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card-body>

            <b-list-group flush>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card-body>

            <b-card-footer>This is a footer</b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardKichenSink",

  data: () => ({}),
  components: {},
};
</script>