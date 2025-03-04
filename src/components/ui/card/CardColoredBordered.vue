<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card Color bordred -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
  <!-- --------------------------
    code view
    ---------------------------- -->
    <b-card class="w-100 bg-light-primary">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-0 text-primary">Card Color bordred</h4>
          <b-card-text class="text-muted"> </b-card-text>
        </div>
        <div class="ml-auto">
          <b-link
            class="d-flex align-items-center"
            v-b-tooltip.hover
            title="view code"
            v-b-modal.modal-2
          >
            <feather type="code" class="feather-sm"></feather>
          </b-link>
          <b-modal id="modal-2" scrollable title="Card Color bordred">
            <div v-highlight>
              <pre class="mb-0">
                <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;3&quot; lg=&quot;2&quot;&gt;
    &lt;b-card class=&quot;mb-4 text-center border&quot; border-variant=&quot;danger&quot;&gt;
      &lt;img
        src=&quot;@/assets/images/users/7.jpg&quot;
        class=&quot;img-fluid rounded-circle&quot;
        width=&quot;65&quot;
      /&gt;
      &lt;h5 class=&quot;card-title mt-3 mb-2 pb-1&quot;&gt;Hurin Omar&lt;/h5&gt;
      &lt;h6 class=&quot;card-subtitle text-muted font-weight-normal&quot;&gt;
        21 years old
      &lt;/h6&gt;

      &lt;b-button
        block
        href=&quot;#&quot;
        pill
        variant=&quot;danger&quot;
        class=&quot;mt-3 d-flex align-items-center justify-content-center&quot;&gt;&lt;feather type=&quot;gift&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt; Wish
        Her&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;3&quot; lg=&quot;2&quot;&gt;
    &lt;b-card class=&quot;mb-4 text-center border&quot; border-variant=&quot;primary&quot;&gt;
      &lt;img
        src=&quot;@/assets/images/users/1.jpg&quot;
        class=&quot;img-fluid rounded-circle&quot;
        width=&quot;65&quot;
      /&gt;
      &lt;h5 class=&quot;card-title mt-3 mb-2 pb-1&quot;&gt;Rizal Ramadh&lt;/h5&gt;
      &lt;h6 class=&quot;card-subtitle text-muted font-weight-normal&quot;&gt;
        25 years old
      &lt;/h6&gt;

      &lt;b-button
        block
        href=&quot;#&quot;
        pill
        variant=&quot;primary&quot;
        class=&quot;mt-3 d-flex align-items-center justify-content-center&quot;&gt;&lt;feather type=&quot;gift&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt; Wish
        Him&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;3&quot; lg=&quot;2&quot;&gt;
    &lt;b-card class=&quot;mb-4 text-center border&quot; border-variant=&quot;warning&quot;&gt;
      &lt;img
        src=&quot;@/assets/images/users/2.jpg&quot;
        class=&quot;img-fluid rounded-circle&quot;
        width=&quot;65&quot;
      /&gt;
      &lt;h5 class=&quot;card-title mt-3 mb-2 pb-1&quot;&gt;Nguyen Le&lt;/h5&gt;
      &lt;h6 class=&quot;card-subtitle text-muted font-weight-normal&quot;&gt;
        31 years old
      &lt;/h6&gt;

      &lt;b-button
        block
        href=&quot;#&quot;
        pill
        variant=&quot;warning&quot;
        class=&quot;mt-3 d-flex align-items-center justify-content-center text-white&quot;&gt;&lt;feather type=&quot;gift&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt; Wish
        Him&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;3&quot; lg=&quot;2&quot;&gt;
    &lt;b-card class=&quot;mb-4 text-center border&quot; border-variant=&quot;success&quot;&gt;
      &lt;img
        src=&quot;@/assets/images/users/4.jpg&quot;
        class=&quot;img-fluid rounded-circle&quot;
        width=&quot;65&quot;
      /&gt;
      &lt;h5 class=&quot;card-title mt-3 mb-2 pb-1&quot;&gt;Shraddha C&lt;/h5&gt;
      &lt;h6 class=&quot;card-subtitle text-muted font-weight-normal&quot;&gt;
        22 years old
      &lt;/h6&gt;

      &lt;b-button
        block
        href=&quot;#&quot;
        pill
        variant=&quot;success&quot;
        class=&quot;mt-3 d-flex align-items-center justify-content-center&quot;
        &gt;&lt;feather type=&quot;gift&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt; Wish
        Her&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;3&quot; lg=&quot;2&quot;&gt;
    &lt;b-card class=&quot;mb-4 text-center border&quot; border-variant=&quot;info&quot;&gt;
      &lt;img
        src=&quot;@/assets/images/users/5.jpg&quot;
        class=&quot;img-fluid rounded-circle&quot;
        width=&quot;65&quot;
      /&gt;
      &lt;h5 class=&quot;card-title mt-3 mb-2 pb-1&quot;&gt;Nirav J&lt;/h5&gt;
      &lt;h6 class=&quot;card-subtitle text-muted font-weight-normal&quot;&gt;
        35 years old
      &lt;/h6&gt;

      &lt;b-button
        block
        href=&quot;#&quot;
        pill
        variant=&quot;info&quot;
        class=&quot;mt-3 d-flex align-items-center justify-content-center text-white&quot;
        &gt;&lt;feather type=&quot;gift&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt; Wish
        Him&lt;/b-button&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;3&quot; lg=&quot;2&quot;&gt;
    &lt;b-card class=&quot;mb-4 text-center border&quot; border-variant=&quot;primary&quot;&gt;
      &lt;img
        src=&quot;@/assets/images/users/8.jpg&quot;
        class=&quot;img-fluid rounded-circle&quot;
        width=&quot;65&quot;
      /&gt;
      &lt;h5 class=&quot;card-title mt-3 mb-2 pb-1&quot;&gt;Sunil J&lt;/h5&gt;
      &lt;h6 class=&quot;card-subtitle text-muted font-weight-normal&quot;&gt;
        36 years old
      &lt;/h6&gt;

      &lt;b-button
        block
        href=&quot;#&quot;
        pill
        variant=&quot;primary&quot;
        class=&quot;mt-3 d-flex align-items-center justify-content-center&quot;
        &gt;&lt;feather type=&quot;gift&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt; Wish Him
      &lt;/b-button&gt;
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
        <b-col cols="12" md="3" lg="2">
          <b-card class="mb-4 text-center border" border-variant="danger">
            <img
              src="@/assets/images/users/7.jpg"
              class="img-fluid rounded-circle"
              width="65"
            />
            <h5 class="card-title mt-3 mb-2 pb-1">Hurin Omar</h5>
            <h6 class="card-subtitle text-muted font-weight-normal">
              21 years old
            </h6>

            <b-button
              block
              href="#"
              pill
              variant="danger"
              class="mt-3 d-flex align-items-center justify-content-center"><feather type="gift" class="feather-sm mr-2"></feather> Wish
              Her</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" lg="2">
          <b-card class="mb-4 text-center border" border-variant="primary">
            <img
              src="@/assets/images/users/1.jpg"
              class="img-fluid rounded-circle"
              width="65"
            />
            <h5 class="card-title mt-3 mb-2 pb-1">Rizal Ramadh</h5>
            <h6 class="card-subtitle text-muted font-weight-normal">
              25 years old
            </h6>

            <b-button
              block
              href="#"
              pill
              variant="primary"
              class="mt-3 d-flex align-items-center justify-content-center"><feather type="gift" class="feather-sm mr-2"></feather> Wish
              Him</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" lg="2">
          <b-card class="mb-4 text-center border" border-variant="warning">
            <img
              src="@/assets/images/users/2.jpg"
              class="img-fluid rounded-circle"
              width="65"
            />
            <h5 class="card-title mt-3 mb-2 pb-1">Nguyen Le</h5>
            <h6 class="card-subtitle text-muted font-weight-normal">
              31 years old
            </h6>

            <b-button
              block
              href="#"
              pill
              variant="warning"
              class="mt-3 d-flex align-items-center justify-content-center text-white"><feather type="gift" class="feather-sm mr-2"></feather> Wish
              Him</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" lg="2">
          <b-card class="mb-4 text-center border" border-variant="success">
            <img
              src="@/assets/images/users/4.jpg"
              class="img-fluid rounded-circle"
              width="65"
            />
            <h5 class="card-title mt-3 mb-2 pb-1">Shraddha C</h5>
            <h6 class="card-subtitle text-muted font-weight-normal">
              22 years old
            </h6>

            <b-button
              block
              href="#"
              pill
              variant="success"
              class="mt-3 d-flex align-items-center justify-content-center"
              ><feather type="gift" class="feather-sm mr-2"></feather> Wish
              Her</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" lg="2">
          <b-card class="mb-4 text-center border" border-variant="info">
            <img
              src="@/assets/images/users/5.jpg"
              class="img-fluid rounded-circle"
              width="65"
            />
            <h5 class="card-title mt-3 mb-2 pb-1">Nirav J</h5>
            <h6 class="card-subtitle text-muted font-weight-normal">
              35 years old
            </h6>

            <b-button
              block
              href="#"
              pill
              variant="info"
              class="mt-3 d-flex align-items-center justify-content-center text-white"
              ><feather type="gift" class="feather-sm mr-2"></feather> Wish
              Him</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="3" lg="2">
          <b-card class="mb-4 text-center border" border-variant="primary">
            <img
              src="@/assets/images/users/8.jpg"
              class="img-fluid rounded-circle"
              width="65"
            />
            <h5 class="card-title mt-3 mb-2 pb-1">Sunil J</h5>
            <h6 class="card-subtitle text-muted font-weight-normal">
              36 years old
            </h6>

            <b-button
              block
              href="#"
              pill
              variant="primary"
              class="mt-3 d-flex align-items-center justify-content-center"
              ><feather type="gift" class="feather-sm mr-2"></feather> Wish Him
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardColoredBordered",

  data: () => ({}),
  components: {},
};
</script>