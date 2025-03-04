<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Custom navbar toggle -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Custom navbar toggle" modalid="modal-2" modaltitle="Custom navbar toggle">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-navbar toggleable type=&quot;dark&quot; variant=&quot;dark&quot;&gt;
  &lt;b-navbar-brand href=&quot;#&quot;&gt;NavBar&lt;/b-navbar-brand&gt;

  &lt;b-navbar-toggle target=&quot;navbar-toggle-collapse&quot;&gt;
    &lt;template #default=&quot;{ expanded }&quot;&gt;
      &lt;feather
        v-if=&quot;expanded&quot;
        type=&quot;chevron-up&quot;
        class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
      &lt;feather v-else type=&quot;chevron-down&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
    &lt;/template&gt;
  &lt;/b-navbar-toggle&gt;

  &lt;b-collapse id=&quot;navbar-toggle-collapse&quot; is-nav&gt;
    &lt;b-navbar-nav class=&quot;ml-auto&quot;&gt;
      &lt;b-nav-item href=&quot;#&quot;&gt;Link 1&lt;/b-nav-item&gt;
      &lt;b-nav-item href=&quot;#&quot;&gt;Link 2&lt;/b-nav-item&gt;
      &lt;b-nav-item href=&quot;#&quot; disabled&gt;Disabled&lt;/b-nav-item&gt;
    &lt;/b-navbar-nav&gt;
  &lt;/b-collapse&gt;
&lt;/b-navbar&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <feather
              v-if="expanded"
              type="chevron-up"
              class="feather-sm"></feather>
            <feather v-else type="chevron-down" class="feather-sm"></feather>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link 1</b-nav-item>
            <b-nav-item href="#">Link 2</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CustomNavbarToggle",

  data: () => ({}),
  components: { BaseCard },
};
</script>