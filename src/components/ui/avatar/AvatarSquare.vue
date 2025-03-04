<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Square -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Square" 
    subtitle="Prefer a square avatar? simply set the square prop to true." 
    modalid="modal-16"
    modaltitle="Avatar Square"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar square class=&quot;mr-2&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot; class=&quot;mr-2&quot; square&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;info&quot; class=&quot;mr-2&quot; square&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot; class=&quot;mr-2&quot; square&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;warning&quot; class=&quot;mr-2&quot; square&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot; class=&quot;mr-2&quot; square&gt;&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
&lt;b-avatar square class=&quot;mr-2&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  variant=&quot;light-primary&quot;
  class=&quot;text-primary mr-2&quot;
  square
&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;light-info&quot; class=&quot;text-info mr-2&quot; square&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  variant=&quot;light-danger&quot;
  class=&quot;text-danger mr-2&quot;
  square
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  variant=&quot;light-warning&quot;
  class=&quot;text-warning mr-2&quot;
  square
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  variant=&quot;light-success&quot;
  class=&quot;text-success mr-2&quot;
  square
&gt;&lt;/b-avatar&gt;
      </code>
    </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar square class="mr-2"></b-avatar>
      <b-avatar variant="primary" class="mr-2" square></b-avatar>
      <b-avatar variant="info" class="mr-2" square></b-avatar>
      <b-avatar variant="danger" class="mr-2" square></b-avatar>
      <b-avatar variant="warning" class="mr-2" square></b-avatar>
      <b-avatar variant="success" class="mr-2" square></b-avatar>
      <div class="mt-2">
        <b-avatar square class="mr-2"></b-avatar>
        <b-avatar
          variant="light-primary"
          class="text-primary mr-2"
          square
        ></b-avatar>
        <b-avatar variant="light-info" class="text-info mr-2" square></b-avatar>
        <b-avatar
          variant="light-danger"
          class="text-danger mr-2"
          square
        ></b-avatar>
        <b-avatar
          variant="light-warning"
          class="text-warning mr-2"
          square
        ></b-avatar>
        <b-avatar
          variant="light-success"
          class="text-success mr-2"
          square
        ></b-avatar>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarSquare",

  data: () => ({}),
  components: { BaseCard },
};
</script>