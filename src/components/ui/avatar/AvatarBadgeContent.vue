<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Badge content -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Badge content" 
    subtitle="Add textual content to the badge by supplying a string to the badge
          prop, or use the named slot 'badge'." 
    modalid="modal-2"
    modaltitle="Avatar Badge content"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar class=&quot;mr-2&quot; badge=&quot;BV&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2&quot;
  badge=&quot;7&quot;
  variant=&quot;primary&quot;
  badge-variant=&quot;dark&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar badge-variant=&quot;danger&quot; src=&quot;https://placekitten.com/300/300&quot;&gt;
  &lt;template #badge&gt;
    &lt;feather type=&quot;heart&quot; class=&quot;feather-xs text-white&quot;&gt;&lt;/feather
  &gt;&lt;/template&gt;
&lt;/b-avatar&gt;
      </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-avatar class="mr-2" badge="BV"></b-avatar>
      <b-avatar
        class="mr-2"
        badge="7"
        variant="primary"
        badge-variant="dark"
      ></b-avatar>
      <b-avatar badge-variant="danger" :src="img1" variant="none">
        <template #badge>
          <feather type="heart" class="feather-xs text-white"></feather
        ></template>
      </b-avatar>
    </template> 
   
  </BaseCard>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";

import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarBadgeContent",

  data: () => ({ img1 }),
  components: { BaseCard },
};
</script>