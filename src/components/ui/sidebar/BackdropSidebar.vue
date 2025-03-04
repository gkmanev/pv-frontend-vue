<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Backdrop Sidebar -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Backdrop Sidebar"
    subtitle="Add a basic backdrop when the side bar is open via the backdrop prop."
    modalid="modal-1"
    modaltitle="Backdrop Sidebar"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button v-b-toggle.sidebar-backdrop&gt;Toggle Sidebar&lt;/b-button&gt;

    &lt;b-sidebar
      id=&quot;sidebar-backdrop&quot;
      title=&quot;Sidebar with backdrop&quot;
      :backdrop-variant=&quot;variant&quot;
      backdrop
      shadow
    &gt;
      &lt;div class=&quot;px-3 py-2&quot;&gt;
        &lt;b-form-group label=&quot;Backdrop variant&quot; label-for=&quot;backdrop-variant&quot;&gt;
          &lt;b-form-select id=&quot;backdrop-variant&quot; v-model=&quot;variant&quot; :options=&quot;variants&quot;&gt;&lt;/b-form-select&gt;
        &lt;/b-form-group&gt;
      &lt;/div&gt;
    &lt;/b-sidebar&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        variant: 'dark',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="primary" v-b-toggle.sidebar-backdrop
        >Toggle Sidebar</b-button
      >

      <b-sidebar
        id="sidebar-backdrop"
        title="Sidebar with backdrop"
        :backdrop-variant="variant"
        backdrop
        shadow
      >
        <div class="px-3 py-2">
          <b-form-group label="Backdrop variant" label-for="backdrop-variant">
            <b-form-select
              id="backdrop-variant"
              v-model="variant"
              :options="variants"
            ></b-form-select>
          </b-form-group>
        </div>
      </b-sidebar>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BackdropSidebar",

  data: () => ({
    variant: "dark",
    variants: [
      "transparent",
      "white",
      "light",
      "dark",
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ],
  }),
  components: { BaseCard },
};
</script>