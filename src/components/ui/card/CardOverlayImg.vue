<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Image Overlay -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card with Image Overlay</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-11
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-11" scrollable title="Card with Image Overlay">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      overlay
      img-src=&quot;@/assets/images/background/user-info.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
      text-variant=&quot;white&quot;
      title=&quot;Image Overlay&quot;
      class=&quot;mb-4 w-100 max-height-img&quot;
    &gt;
      &lt;b-card-text&gt;
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      &lt;/b-card-text&gt;

      &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Learn More&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      overlay
      img-src=&quot;@/assets/images/background/user-info.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
      text-variant=&quot;white&quot;
      title=&quot;Image Overlay&quot;
      class=&quot;mb-4 w-100 max-height-img&quot;
    &gt;
      &lt;b-card-text&gt;
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      &lt;/b-card-text&gt;

      &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Learn More&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      overlay
      img-src=&quot;@/assets/images/background/user-info.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
      text-variant=&quot;white&quot;
      title=&quot;Image Overlay&quot;
      class=&quot;mb-4 w-100 max-height-img&quot;
    &gt;
      &lt;b-card-text&gt;
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      &lt;/b-card-text&gt;

      &lt;b-button href=&quot;#&quot; variant=&quot;primary&quot;&gt;Learn More&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
                </code>
              </pre>
            </div>
          </b-modal>
        </div>
      </div>
      <!-- --------------------------
    code view
    ---------------------------- -->
    </b-card>
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            overlay
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Image"
            img-top
            text-variant="white"
            title="Image Overlay"
            class="mb-4 w-100 max-height-img"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Learn More</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            overlay
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Image"
            img-top
            text-variant="white"
            title="Image Overlay"
            class="mb-4 w-100 max-height-img"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Learn More</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            overlay
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Image"
            img-top
            text-variant="white"
            title="Image Overlay"
            class="mb-4 w-100 max-height-img"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Learn More</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardOverlayImg",

  data: () => ({}),
  components: {},
};
</script>