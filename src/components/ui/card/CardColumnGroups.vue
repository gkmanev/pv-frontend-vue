<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card column groups -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card column groups</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-3
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-3" scrollable title="Card column groups">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-card-group columns&gt;
&lt;b-card
  title=&quot;Card title that wraps to a new line&quot;
  img-src=&quot;@/assets/images/background/socialbg.jpg&quot;
  img-alt=&quot;Image&quot;
  img-top
&gt;
  &lt;b-card-text&gt;
    This is a wider card with supporting text below as a natural lead-in
    to additional content. This content is a little bit longer.
  &lt;/b-card-text&gt;
&lt;/b-card&gt;

&lt;b-card header=&quot;Quote&quot;&gt;
  &lt;blockquote class=&quot;blockquote mb-0&quot;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      posuere erat a ante.
    &lt;/p&gt;
    &lt;footer class=&quot;blockquote-footer&quot;&gt;
      Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
    &lt;/footer&gt;
  &lt;/blockquote&gt;
&lt;/b-card&gt;

&lt;b-card
  title=&quot;Title&quot;
  img-src=&quot;@/assets/images/big/img5.jpg&quot;
  img-alt=&quot;Image&quot;
  img-top
&gt;
  &lt;b-card-text&gt;
    This card has supporting text below as a natural lead-in to
    additional content.
  &lt;/b-card-text&gt;
  &lt;b-card-text class=&quot;small text-muted&quot;
    &gt;Last updated 3 mins ago&lt;/b-card-text
  &gt;
&lt;/b-card&gt;

&lt;b-card bg-variant=&quot;primary&quot; text-variant=&quot;white&quot;&gt;
  &lt;blockquote class=&quot;card-blockquote&quot;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      posuere erat a ante.
    &lt;/p&gt;
    &lt;footer&gt;
      &lt;small
        &gt;Someone famous in
        &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/small
      &gt;
    &lt;/footer&gt;
  &lt;/blockquote&gt;
&lt;/b-card&gt;

&lt;b-card&gt;
  &lt;b-card-title&gt;Title&lt;/b-card-title&gt;
  &lt;b-card-text&gt;
    This card has supporting text below as a natural lead-in to
    additional content.
  &lt;/b-card-text&gt;
  &lt;b-card-text class=&quot;small text-muted&quot;
    &gt;Last updated 3 mins ago&lt;/b-card-text
  &gt;
&lt;/b-card&gt;

&lt;b-card
  img-src=&quot;@/assets/images/big/img6.jpg&quot;
  img-alt=&quot;Image&quot;
  overlay
&gt;&lt;/b-card&gt;

&lt;b-card img-src=&quot;@/assets/images/big/img7.jpg&quot; img-alt=&quot;Image&quot; img-top&gt;
  &lt;b-card-text&gt;
    This is a wider card with supporting text below as a natural lead-in
    to additional content. This card has even longer content than the
    first.
  &lt;/b-card-text&gt;
  &lt;template #footer&gt;
    &lt;small class=&quot;text-muted&quot;&gt;Footer Text&lt;/small&gt;
  &lt;/template&gt;
&lt;/b-card&gt;
&lt;/b-card-group&gt;
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
      <b-card-group columns>
        <b-card
          title="Card title that wraps to a new line"
          img-src="@/assets/images/background/socialbg.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
        </b-card>

        <b-card header="Quote">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>

        <b-card
          title="Title"
          img-src="@/assets/images/big/img5.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <b-card-text class="small text-muted"
            >Last updated 3 mins ago</b-card-text
          >
        </b-card>

        <b-card bg-variant="primary" text-variant="white">
          <blockquote class="card-blockquote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer>
              <small
                >Someone famous in
                <cite title="Source Title">Source Title</cite></small
              >
            </footer>
          </blockquote>
        </b-card>

        <b-card>
          <b-card-title>Title</b-card-title>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <b-card-text class="small text-muted"
            >Last updated 3 mins ago</b-card-text
          >
        </b-card>

        <b-card
          img-src="@/assets/images/big/img6.jpg"
          img-alt="Image"
          overlay
        ></b-card>

        <b-card img-src="@/assets/images/big/img7.jpg" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Footer Text</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardColumnGroups",

  data: () => ({}),
  components: {},
};
</script>