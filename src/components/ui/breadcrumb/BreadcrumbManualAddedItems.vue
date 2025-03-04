<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Manually placed items -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Manually placed items" 
    subtitle="You may also manually place individual b-breadcrumb-item child
          components in the default slot of the b-breadcrumb component, as an
          alternative to using the items prop, for greater control over the
          content of each item:" 
    modalid="modal-3"
    modaltitle="Manually placed items"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-breadcrumb class=&quot;bg-light rounded&quot;&gt;
  &lt;b-breadcrumb-item href=&quot;#home&quot;&gt;
    &lt;div class=&quot;d-flex align-items-center&quot;&gt;
      &lt;feather type=&quot;home&quot; class=&quot;feather-sm mr-1&quot;&gt;&lt;/feather&gt;
    &lt;/div&gt;
  &lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#foo&quot;&gt;Foo&lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#bar&quot;&gt;Bar&lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item active&gt;Baz&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
          </code>
        </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-breadcrumb class="bg-light rounded">
        <b-breadcrumb-item href="#home">
          <div class="d-flex align-items-center">
            <feather type="home" class="feather-sm mr-1"></feather>
          </div>
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
        <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
        <b-breadcrumb-item active>Baz</b-breadcrumb-item>
      </b-breadcrumb>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BreadcrumbManualAddedItems",

  data: () => ({}),
  components: { BaseCard },
};
</script>