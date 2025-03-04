<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Placement Sidebar -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Placement Sidebar"
    subtitle="By default the sidebar will be placed on the left side of the viewport. Set the right prop to true to have the sidebar appear on the right side of the viewport."
    modalid="modal-5"
    modaltitle="Placement Sidebar"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;success&quot; v-b-toggle.sidebar-right&gt;Toggle Sidebar&lt;/b-button&gt;
&lt;b-sidebar id=&quot;sidebar-right&quot; title=&quot;Sidebar&quot; right shadow&gt;
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
      <b-button variant="success" v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
      <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
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
  name: "PlacementSidebar",

  data: () => ({}),
  components: { BaseCard },
};
</script>