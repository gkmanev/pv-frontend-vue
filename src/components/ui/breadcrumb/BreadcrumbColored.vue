<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Colored Breadcrumb -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Colored Breadcrumb" 
    subtitle="Items are rendered using :items prop. It can be an array of objects
          to provide link and active state." 
    modalid="modal-2"
    modaltitle="Colored Breadcrumb"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-breadcrumb
  :items=&quot;items&quot;
  class=&quot;bg-primary breadcrumb-colored rounded&quot;
&gt;&lt;/b-breadcrumb&gt;
&lt;b-breadcrumb
  :items=&quot;items&quot;
  class=&quot;bg-info breadcrumb-colored rounded&quot;
&gt;&lt;/b-breadcrumb&gt;
&lt;b-breadcrumb
  :items=&quot;items&quot;
  class=&quot;bg-danger breadcrumb-colored rounded&quot;
&gt;&lt;/b-breadcrumb&gt;
&lt;b-breadcrumb
  :items=&quot;items&quot;
  class=&quot;bg-warning breadcrumb-colored rounded&quot;
&gt;&lt;/b-breadcrumb&gt;
&lt;b-breadcrumb
  :items=&quot;items&quot;
  class=&quot;bg-success breadcrumb-colored rounded&quot;
&gt;&lt;/b-breadcrumb&gt;
          </code>
        </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-breadcrumb
        :items="items"
        class="bg-primary breadcrumb-colored rounded"
      ></b-breadcrumb>
      <b-breadcrumb
        :items="items"
        class="bg-info breadcrumb-colored rounded"
      ></b-breadcrumb>
      <b-breadcrumb
        :items="items"
        class="bg-danger breadcrumb-colored rounded"
      ></b-breadcrumb>
      <b-breadcrumb
        :items="items"
        class="bg-warning breadcrumb-colored rounded"
      ></b-breadcrumb>
      <b-breadcrumb
        :items="items"
        class="bg-success breadcrumb-colored rounded"
      ></b-breadcrumb>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BreadcrumbColored",

  data: () => ({
    items: [
      {
        text: "Admin",
        href: "#",
      },
      {
        text: "Manage",
        href: "#",
      },
      {
        text: "Library",
        active: true,
      },
    ],
  }),
  components: { BaseCard },
};
</script>