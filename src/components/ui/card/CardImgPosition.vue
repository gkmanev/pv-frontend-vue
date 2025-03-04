<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Image Position -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card with Image Position</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-9
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-9" scrollable title="Card with Image Position">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;8&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card-group deck&gt;
      &lt;b-card
        title=&quot;Image Top&quot;
        class=&quot;mb-4&quot;
        img-src=&quot;@/assets/images/background/weatherbg.jpg&quot;
        img-alt=&quot;Card image&quot;
        img-top
      &gt;
        &lt;b-card-text&gt;
          Some quick example text to build on the card and make up the
          bulk of the card's content.
        &lt;/b-card-text&gt;
      &lt;/b-card&gt;

      &lt;b-card
        title=&quot;Image Bottom&quot;
        class=&quot;mb-4&quot;
        img-src=&quot;@/assets/images/background/weatherbg.jpg&quot;
        img-alt=&quot;Card image&quot;
        img-bottom
      &gt;
        &lt;b-card-text&gt;
          Some quick example text to build on the card and make up the
          bulk of the card's content.
        &lt;/b-card-text&gt;
      &lt;/b-card&gt;
    &lt;/b-card-group&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      title=&quot;Image Top&quot;
      class=&quot;mb-4&quot;
      img-src=&quot;@/assets/images/background/weatherbg.jpg&quot;
      img-alt=&quot;Card image&quot;
      img-top
    &gt;
      &lt;b-card-text&gt;
        Some quick example text to build on the card and make up the bulk
        of the card's content.
      &lt;/b-card-text&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      img-src=&quot;@/assets/images/background/user-info.jpg&quot;
      img-alt=&quot;Card image&quot;
      img-left
      class=&quot;mb-4&quot;
      title=&quot;Image Left&quot;
    &gt;
      &lt;b-card-text&gt;
        Some quick example text to build on the card and make up the bulk
        of the card's content.
      &lt;/b-card-text&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; lg=&quot;6&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
    &lt;b-card
      img-src=&quot;@/assets/images/background/user-info.jpg&quot;
      img-alt=&quot;Card image&quot;
      img-right
      class=&quot;mb-4&quot;
      title=&quot;Image Right&quot;
    &gt;
      &lt;b-card-text&gt;
        Some quick example text to build on the card and make up the bulk
        of the card's content.
      &lt;/b-card-text&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
                </code>
              </pre>
            </div>
          </b-modal>
          <!-- --------------------------
          code view
          ---------------------------- -->
        </div>
      </div>
    </b-card>
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="8" class="d-flex align-items-stretch">
          <b-card-group deck>
            <b-card
              title="Image Top"
              class="mb-4"
              img-src="@/assets/images/background/weatherbg.jpg"
              img-alt="Card image"
              img-top
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>

            <b-card
              title="Image Bottom"
              class="mb-4"
              img-src="@/assets/images/background/weatherbg.jpg"
              img-alt="Card image"
              img-bottom
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            title="Image Top"
            class="mb-4"
            img-src="@/assets/images/background/weatherbg.jpg"
            img-alt="Card image"
            img-top
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" class="d-flex align-items-stretch">
          <b-card
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Card image"
            img-left
            class="mb-4 flex-column flex-md-row"
            title="Image Left"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" class="d-flex align-items-stretch">
          <b-card
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Card image"
            img-right
            class="mb-4 flex-column-reverse flex-md-row-reverse"
            title="Image Right"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardImgPosition",

  data: () => ({}),
  components: {},
};
</script>