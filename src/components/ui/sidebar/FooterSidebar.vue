<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Footer -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Footer"
    subtitle="<b-sidebar> provides a footer slot (optionally scoped), to allow you to provide content that appears at the bottom of the sidebar."
    modalid="modal-3"
    modaltitle="Footer"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;info&quot; v-b-toggle.sidebar-footer&gt;Toggle Sidebar&lt;/b-button&gt;
&lt;b-sidebar
  id=&quot;sidebar-footer&quot;
  aria-label=&quot;Sidebar with custom footer&quot;
  no-header
  shadow&gt;
  &lt;template #footer=&quot;{ hide }&quot;&gt;
    &lt;div
      class=&quot;d-flex bg-primary text-light align-items-center px-3 py-2&quot;&gt;
      &lt;strong class=&quot;mr-auto&quot;&gt;Footer&lt;/strong&gt;
      &lt;b-button variant=&quot;light-primary&quot; size=&quot;sm&quot; @click=&quot;hide&quot;&gt;Close&lt;/b-button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;div class=&quot;px-3 py-2&quot;&gt;
    &lt;p&gt;
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
      dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
      ac consectetur ac, vestibulum at eros.
    &lt;/p&gt;
    &lt;b-img src=&quot;@/assets/images/big/img3.jpg&quot; fluid thumbnail&gt;&lt;/b-img&gt;
  &lt;/div&gt;
&lt;/b-sidebar&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="info" v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
      <b-sidebar
        id="sidebar-footer"
        aria-label="Sidebar with custom footer"
        no-header
        shadow>
        <template #footer="{ hide }">
          <div
            class="d-flex bg-primary text-light align-items-center px-3 py-2">
            <strong class="mr-auto">Footer</strong>
            <b-button variant="light-primary" size="sm" @click="hide">Close</b-button>
          </div>
        </template>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="@/assets/images/big/img3.jpg" fluid thumbnail></b-img>
        </div>
      </b-sidebar>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FooterSidebar",

  data: () => ({}),
  components: { BaseCard },
};
</script>