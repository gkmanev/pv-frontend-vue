<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Variants -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Variants" 
    subtitle="Use the variant prop to specify one of Bootstrap theme variant colors.
          The default variant is secondary." 
    modalid="modal-18"
    modaltitle="Avatar Variants"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;secondary&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;primary&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;dark&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;light&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;success&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;danger&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;warning&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;info&quot;&gt;&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
&lt;b-avatar
  class=&quot;mr-2 text-secondary&quot;
  variant=&quot;light-secondary&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2 text-primary&quot; variant=&quot;light-primary&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2 text-success&quot; variant=&quot;light-success&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2 text-danger&quot; variant=&quot;light-danger&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2 text-warning&quot; variant=&quot;light-warning&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2 text-info&quot; variant=&quot;light-info&quot;&gt;&lt;/b-avatar&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-avatar class="mr-2" variant="secondary"></b-avatar>
      <b-avatar class="mr-2" variant="primary"></b-avatar>
      <b-avatar class="mr-2" variant="dark"></b-avatar>
      <b-avatar class="mr-2" variant="light"></b-avatar>
      <b-avatar class="mr-2" variant="success"></b-avatar>
      <b-avatar class="mr-2" variant="danger"></b-avatar>
      <b-avatar class="mr-2" variant="warning"></b-avatar>
      <b-avatar class="mr-2" variant="info"></b-avatar>
      <div class="mt-2">
        <b-avatar
          class="mr-2 text-secondary"
          variant="light-secondary"
        ></b-avatar>
        <b-avatar class="mr-2 text-primary" variant="light-primary"></b-avatar>
        <b-avatar class="mr-2 text-success" variant="light-success"></b-avatar>
        <b-avatar class="mr-2 text-danger" variant="light-danger"></b-avatar>
        <b-avatar class="mr-2 text-warning" variant="light-warning"></b-avatar>
        <b-avatar class="mr-2 text-info" variant="light-info"></b-avatar>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarVariants",

  data: () => ({}),
  components: { BaseCard },
};
</script>