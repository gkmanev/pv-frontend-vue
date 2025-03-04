<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual variants -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Contextual variants"
    subtitle="For proper styling of , use one of the four required contextual
          variants by setting the variant prop to one of the following: info,
          success, warning or danger. The default is info."
    modalid="modal-3"
    modaltitle="Contextual variants"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
            <code class="javascript">
&lt;b-alert
class=&quot;d-flex align-items-center bt-alert&quot;
show
variant=&quot;primary&quot;
&gt;
&lt;b-button variant=&quot;primary&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;

An informational alert
&lt;/b-alert&gt;
&lt;b-alert
class=&quot;d-flex align-items-center bt-alert&quot;
show
variant=&quot;secondary&quot;
&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;
A secondary alert
&lt;/b-alert&gt;
&lt;b-alert
class=&quot;d-flex align-items-center bt-alert&quot;
show
variant=&quot;success&quot;
&gt;
&lt;b-button variant=&quot;success&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;
A successful alert
&lt;/b-alert&gt;
&lt;b-alert class=&quot;d-flex align-items-center bt-alert&quot; show variant=&quot;danger&quot;&gt;
&lt;b-button variant=&quot;danger&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;
A destructive alert
&lt;/b-alert&gt;
&lt;b-alert
class=&quot;d-flex align-items-center bt-alert&quot;
show
variant=&quot;warning&quot;
&gt;
&lt;b-button variant=&quot;warning&quot; class=&quot;text-white&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;
A warning alert
&lt;/b-alert&gt;
&lt;b-alert class=&quot;d-flex align-items-center bt-alert&quot; show variant=&quot;info&quot;&gt;
&lt;b-button variant=&quot;info&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;
A information alert
&lt;/b-alert&gt;
&lt;b-alert
class=&quot;d-flex align-items-center bt-alert bg-light&quot;
show
variant=&quot;light&quot;
&gt;
&lt;b-button variant=&quot;light&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
&lt;/b-button&gt;
A light alert
&lt;/b-alert&gt;
&lt;b-alert class=&quot;d-flex align-items-center bt-alert&quot; show variant=&quot;dark&quot;&gt;
&lt;b-button variant=&quot;dark&quot;&gt;
    &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
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
        class="d-flex align-items-center bt-alert"
        show
        variant="primary"
      >
        <b-button variant="primary">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>

        An informational alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="secondary"
      >
        <b-button variant="secondary">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A secondary alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="success"
      >
        <b-button variant="success">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A successful alert
      </b-alert>
      <b-alert class="d-flex align-items-center bt-alert" show variant="danger">
        <b-button variant="danger">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A destructive alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="warning"
      >
        <b-button variant="warning" class="text-white">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A warning alert
      </b-alert>
      <b-alert class="d-flex align-items-center bt-alert" show variant="info">
        <b-button variant="info">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A information alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert bg-light"
        show
        variant="light"
      >
        <b-button variant="light">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A light alert
      </b-alert>
      <b-alert class="d-flex align-items-center bt-alert" show variant="dark">
        <b-button variant="dark">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A dark alert
      </b-alert>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AlertContextual",

  data: () => ({}),
  components: { BaseCard },
};
</script>