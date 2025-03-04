<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alert Link Colors -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Alert Link Colors"
    subtitle="Use the .alert-link utility CSS class to quickly provide matching
          colored links within any alert."
    modalid="modal-6"
    modaltitle="Alert Link Colors"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-alert show variant=&quot;primary&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;primary&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Primary Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;secondary&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;secondary&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Secondary Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;success&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;success&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Success Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;danger&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;danger&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Danger Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;warning&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;warning&quot; class=&quot;text-white&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Warning Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;info&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;info&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Info Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;light&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;light&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Light Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
&lt;b-alert show variant=&quot;dark&quot; class=&quot;bt-alert&quot;&gt;
  &lt;a href=&quot;#&quot; class=&quot;alert-link d-flex align-items-center&quot;&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;
      &lt;i class=&quot;mdi mdi-alert-circle&quot;&gt;&lt;/i&gt;
    &lt;/b-button&gt;
    Dark Alert
  &lt;/a&gt;
&lt;/b-alert&gt;
      </code>
    </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-alert show variant="primary" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="primary">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Primary Alert
        </a>
      </b-alert>
      <b-alert show variant="secondary" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="secondary">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Secondary Alert
        </a>
      </b-alert>
      <b-alert show variant="success" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="success">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Success Alert
        </a>
      </b-alert>
      <b-alert show variant="danger" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="danger">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Danger Alert
        </a>
      </b-alert>
      <b-alert show variant="warning" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="warning" class="text-white">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Warning Alert
        </a>
      </b-alert>
      <b-alert show variant="info" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="info">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Info Alert
        </a>
      </b-alert>
      <b-alert show variant="light" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="light">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Light Alert
        </a>
      </b-alert>
      <b-alert show variant="dark" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="dark">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Dark Alert
        </a>
      </b-alert>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AlertLinks",

  data: () => ({}),
  components: { BaseCard },
};
</script>