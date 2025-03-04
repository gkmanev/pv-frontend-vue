<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Sidebar -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Sidebar"
    subtitle="BootstrapVue's custom <b-sidebar> component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc."
    modalid="modal-2"
    modaltitle="Basic Sidebar"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;warning&quot; v-b-toggle.sidebarmy&gt;Toggle Sidebar&lt;/b-button&gt;
&lt;b-sidebar id=&quot;sidebarmy&quot; title=&quot;Sidebar&quot; shadow&gt;
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
      <b-button variant="warning" v-b-toggle.sidebarmy>Toggle Sidebar</b-button>
      <b-sidebar id="sidebarmy" title="Sidebar" shadow>
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
  name: "BasicSidebar",

  data: () => ({}),
  components: { BaseCard },
};
</script>