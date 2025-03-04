<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Image -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card with Image</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-8
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-8" scrollable title="Card with Image">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      title=&quot;Card Title&quot;
      img-src=&quot;@/assets/images/big/img1.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
      tag=&quot;article&quot;
      class=&quot;mb-2&quot;
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
      title=&quot;Card Title&quot;
      img-src=&quot;@/assets/images/big/img2.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
      tag=&quot;article&quot;
      class=&quot;mb-2&quot;
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
      title=&quot;Card Title&quot;
      img-src=&quot;@/assets/images/big/img3.jpg&quot;
      img-alt=&quot;Image&quot;
      img-top
      tag=&quot;article&quot;
      class=&quot;mb-2&quot;
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
    </b-card>
    <!-- --------------------------
    code view
    ---------------------------- -->
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            title="Card Title"
            img-src="@/assets/images/big/img1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
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
            title="Card Title"
            img-src="@/assets/images/big/img2.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
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
            title="Card Title"
            img-src="@/assets/images/big/img3.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
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
  name: "CardImg",

  data: () => ({}),
  components: {},
};
</script>