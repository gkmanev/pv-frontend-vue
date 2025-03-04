<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Variants Sidebar -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Variants Sidebar"
    subtitle="Use the props bg-variant and text-variant to control the theme color variant of the background and text, respectively."
    modalid="modal-6"
    modaltitle="Variants Sidebar"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot; v-b-toggle.sidebar-variant&gt;Toggle Sidebar&lt;/b-button&gt;
&lt;b-sidebar
  id=&quot;sidebar-variant&quot;
  title=&quot;Sidebar&quot;
  bg-variant=&quot;dark&quot;
  text-variant=&quot;light&quot;
  shadow&gt;
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
      <b-button variant="primary" v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
      <b-sidebar
        id="sidebar-variant"
        title="Sidebar"
        bg-variant="dark"
        text-variant="light"
        shadow>
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
  name: "VariantsSidebar",

  data: () => ({}),
  components: { BaseCard },
};
</script>