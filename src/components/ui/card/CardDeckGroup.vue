<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card deck groups -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card deck groups</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-4
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-4" scrollable title="Card deck groups">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot;&gt;
    &lt;b-card-group deck&gt;
      &lt;b-card
        title=&quot;Title&quot;
        img-src=&quot;@/assets/images/big/img1.jpg&quot;
        img-alt=&quot;Image&quot;
        img-top
        class=&quot;border&quot;
      &gt;
        &lt;b-card-text&gt;
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        &lt;/b-card-text&gt;
        &lt;template #footer&gt;
          &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
        &lt;/template&gt;
      &lt;/b-card&gt;

      &lt;b-card
        title=&quot;Title&quot;
        img-src=&quot;@/assets/images/big/img2.jpg&quot;
        img-alt=&quot;Image&quot;
        img-top
        class=&quot;border&quot;
      &gt;
        &lt;b-card-text&gt;
          This card has supporting text below as a natural lead-in to
          additional content.
        &lt;/b-card-text&gt;
        &lt;template #footer&gt;
          &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
        &lt;/template&gt;
      &lt;/b-card&gt;

      &lt;b-card
        title=&quot;Title&quot;
        img-src=&quot;@/assets/images/big/img3.jpg&quot;
        img-alt=&quot;Image&quot;
        img-top
        class=&quot;border&quot;
      &gt;
        &lt;b-card-text&gt;
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This card has even longer content
          than the first to show that equal height action.
        &lt;/b-card-text&gt;
        &lt;template #footer&gt;
          &lt;small class=&quot;text-muted&quot;&gt;Last updated 3 mins ago&lt;/small&gt;
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
              title="Title"
              img-src="@/assets/images/big/img1.jpg"
              img-alt="Image"
              img-top
              class="border"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>

            <b-card
              title="Title"
              img-src="@/assets/images/big/img2.jpg"
              img-alt="Image"
              img-top
              class="border"
            >
              <b-card-text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>

            <b-card
              title="Title"
              img-src="@/assets/images/big/img3.jpg"
              img-alt="Image"
              img-top
              class="border"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
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
  name: "CardDeckGroup",

  data: () => ({}),
  components: {},
};
</script>