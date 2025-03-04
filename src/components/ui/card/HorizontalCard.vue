<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Horizontal Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Horizontal Card</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-15
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-15" scrollable title="Horizontal Card ">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;b-card no-body class=&quot;overflow-hidden&quot;&gt;
      &lt;b-row no-gutters&gt;
        &lt;b-col md=&quot;6&quot;&gt;
          &lt;b-card-img
            :src=&quot;img1&quot;
            alt=&quot;Image&quot;
            class=&quot;rounded-0&quot;
          &gt;&lt;/b-card-img&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
          &lt;b-card-body title=&quot;Horizontal Card&quot;&gt;
            &lt;b-card-text&gt;
              This is a wider card with supporting text as a natural
              lead-in to additional content. This content is a little bit
              longer.
            &lt;/b-card-text&gt;
          &lt;/b-card-body&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;b-card no-body class=&quot;overflow-hidden&quot;&gt;
      &lt;b-row no-gutters&gt;
        &lt;b-col md=&quot;6&quot;&gt;
          &lt;b-card-img
            :src=&quot;img2&quot;
            alt=&quot;Image&quot;
            class=&quot;rounded-0&quot;
          &gt;&lt;/b-card-img&gt;
        &lt;/b-col&gt;
        &lt;b-col md=&quot;6&quot;&gt;
          &lt;b-card-body title=&quot;Horizontal Card&quot;&gt;
            &lt;b-card-text&gt;
              This is a wider card with supporting text as a natural
              lead-in to additional content. This content is a little bit
              longer.
            &lt;/b-card-text&gt;
          &lt;/b-card-body&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
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
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="img1"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="img2"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import img1 from "../../../assets/images/big/img1.jpg";
import img2 from "../../../assets/images/big/img2.jpg";

export default {
  name: "HorizontalCard",

  data: () => ({ img1, img2 }),
  components: {},
};
</script>