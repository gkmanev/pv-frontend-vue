<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Hiding the default header -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Hiding the default header"
    subtitle="You can disable the default header (including the close button) via the no-header prop."
    modalid="modal-4"
    modaltitle="Hiding the default header"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;danger&quot; v-b-toggle.sidebar-no-header&gt;Toggle Sidebar&lt;/b-button&gt;
&lt;b-sidebar
  id=&quot;sidebar-no-header&quot;
  aria-labelledby=&quot;sidebar-no-header-title&quot;
  no-header
  shadow&gt;
  &lt;template #default=&quot;{ hide }&quot;&gt;
    &lt;div class=&quot;p-3&quot;&gt;
      &lt;h4 id=&quot;sidebar-no-header-title&quot;&gt;Custom header sidebar&lt;/h4&gt;
      &lt;p&gt;
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.
      &lt;/p&gt;
      &lt;nav class=&quot;mb-3&quot;&gt;
        &lt;b-nav vertical&gt;
          &lt;b-nav-item active @click=&quot;hide&quot;&gt;Active&lt;/b-nav-item&gt;
          &lt;b-nav-item href=&quot;#link-1&quot; @click=&quot;hide&quot;&gt;Link&lt;/b-nav-item&gt;
          &lt;b-nav-item href=&quot;#link-2&quot; @click=&quot;hide&quot;&gt;Another Link&lt;/b-nav-item&gt;
        &lt;/b-nav&gt;
      &lt;/nav&gt;
      &lt;b-button variant=&quot;primary&quot; block @click=&quot;hide&quot;&gt;Close Sidebar&lt;/b-button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/b-sidebar&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="danger" v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item active @click="hide">Active</b-nav-item>
                <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
          </div>
        </template>
      </b-sidebar>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "HideDafultSidebar",

  data: () => ({}),
  components: { BaseCard },
};
</script>