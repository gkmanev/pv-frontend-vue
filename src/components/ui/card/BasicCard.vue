<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Simple Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
  code view
  ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Simple Card</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-1
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-1" scrollable title="Simple Card">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
&lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
  &lt;b-card title=&quot;Card title&quot; sub-title=&quot;Card subtitle&quot;&gt;
    &lt;b-card-text&gt;
      Some quick example text to build on the &lt;em&gt;card title&lt;/em&gt; and
      make up the bulk of the card's content.
    &lt;/b-card-text&gt;

    &lt;b-card-text&gt;A second paragraph of text in the card.&lt;/b-card-text&gt;

    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
    &lt;b-link href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/b-link&gt;
  &lt;/b-card&gt;
&lt;/b-col&gt;
&lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
  &lt;b-card title=&quot;Card title&quot; sub-title=&quot;Card subtitle&quot;&gt;
    &lt;b-card-text&gt;
      Some quick example text to build on the &lt;em&gt;card title&lt;/em&gt; and
      make up the bulk of the card's content.
    &lt;/b-card-text&gt;

    &lt;b-card-text&gt;A second paragraph of text in the card.&lt;/b-card-text&gt;

    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
    &lt;b-link href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/b-link&gt;
  &lt;/b-card&gt;
&lt;/b-col&gt;
&lt;b-col cols=&quot;12&quot; md=&quot;4&quot; class=&quot;d-flex align-items-stretch&quot;&gt;
  &lt;b-card title=&quot;Card title&quot; sub-title=&quot;Card subtitle&quot;&gt;
    &lt;b-card-text&gt;
      Some quick example text to build on the &lt;em&gt;card title&lt;/em&gt; and
      make up the bulk of the card's content.
    &lt;/b-card-text&gt;

    &lt;b-card-text&gt;A second paragraph of text in the card.&lt;/b-card-text&gt;

    &lt;a href=&quot;#&quot; class=&quot;card-link&quot;&gt;Card link&lt;/a&gt;
    &lt;b-link href=&quot;#&quot; class=&quot;card-link&quot;&gt;Another link&lt;/b-link&gt;
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
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and
              make up the bulk of the card's content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and
              make up the bulk of the card's content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and
              make up the bulk of the card's content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicCard",

  data: () => ({}),
  components: {},
};
</script>