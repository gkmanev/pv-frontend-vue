<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Breadcrumb -->
  <!-- ----------------------------------------------------------------------------- -->

 <BaseCard title="Basic Breadcrumb" 
    subtitle="Items are rendered using :items prop. It can be an array of objects
          to provide link and active state." 
    modalid="modal-1"
    modaltitle="Basic Breadcrumb"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-breadcrumb :items=&quot;items&quot; class=&quot;bg-light rounded&quot;&gt;&lt;/b-breadcrumb&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-breadcrumb :items="items" class="bg-light rounded"></b-breadcrumb>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BreadcrumbBasic",

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