<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dismissible alerts -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Dismissible alerts"
    subtitle="Using the dismissible prop it's possible to dismiss any b-alert
          inline. This will add a close X button. Use the dismiss-label prop to
          change the hidden label text associated with the dismiss
          button."
    modalid="modal-4"
    modaltitle="Dismissible alerts"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-alert
  variant=&quot;primary&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;primary&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A informational alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;secondary&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;secondary&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A secondary alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;success&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;success&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A successful alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;danger&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;danger&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A destructive alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;warning&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;warning&quot; class=&quot;text-white&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A warning alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;info&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;info&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A informational alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;light&quot;
  class=&quot;d-flex align-items-center bt-alert bg-light&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;light&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A light alert
&lt;/b-alert&gt;
&lt;b-alert
  variant=&quot;dark&quot;
  class=&quot;d-flex align-items-center bt-alert&quot;
  show
  dismissible
&gt;
  &lt;b-button variant=&quot;dark&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-octagon&quot;&gt;&lt;/i&gt;
  &lt;/b-button&gt;
  A dark alert
&lt;/b-alert&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-alert
        variant="primary"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="primary">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A informational alert
      </b-alert>
      <b-alert
        variant="secondary"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="secondary">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A secondary alert
      </b-alert>
      <b-alert
        variant="success"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="success">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A successful alert
      </b-alert>
      <b-alert
        variant="danger"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="danger">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A destructive alert
      </b-alert>
      <b-alert
        variant="warning"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="warning" class="text-white">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A warning alert
      </b-alert>
      <b-alert
        variant="info"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="info">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A informational alert
      </b-alert>
      <b-alert
        variant="light"
        class="d-flex align-items-center bt-alert bg-light"
        show
        dismissible
      >
        <b-button variant="light">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A light alert
      </b-alert>
      <b-alert
        variant="dark"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="dark">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A dark alert
      </b-alert>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AlertDismissible",

  data: () => ({}),
  components: { BaseCard },
};
</script>