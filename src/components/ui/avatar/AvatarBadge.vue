<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Badge avatars -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Badge avatars" 
    subtitle="Easily add a badge to your avatar via the badge prop or 'badge' slot,
          and the badge variant can be set via the badge-variant prop. The badge
          will scale with the size of the avatar." 
    modalid="modal-1"
    modaltitle="Badge avatars"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar
  class=&quot;mr-2 text-primary&quot;
  variant=&quot;light-primary&quot;
  badge
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2&quot;
  badge
  badge-variant=&quot;warning&quot;
  src=&quot;https://placekitten.com/300/300&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2 text-danger&quot;
  variant=&quot;light-danger&quot;
  badge
  badge-variant=&quot;danger&quot;
&gt;
  &lt;feather type=&quot;heart&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2&quot;
  badge
  badge-variant=&quot;success&quot;
  src=&quot;https://placekitten.com/300/300&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2 text-secondary&quot;
  variant=&quot;light-secondary&quot;
  badge
  badge-variant=&quot;secondary&quot;
  text=&quot;BV&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2 text-info&quot;
  variant=&quot;light-info&quot;
  square
  badge
  badge-variant=&quot;info&quot;
  text=&quot;BV&quot;
&gt;&lt;/b-avatar&gt;
      </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar
        class="mr-2 text-primary"
        variant="light-primary"
        badge
      ></b-avatar>
      <b-avatar
        class="mr-2"
        badge
        badge-variant="warning"
        :src="img1"
        variant="none"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-danger"
        variant="light-danger"
        badge
        badge-variant="danger"
      >
        <feather type="heart" class="feather-sm"></feather>
      </b-avatar>
      <b-avatar
        class="mr-2"
        badge
        badge-variant="success"
        :src="img2"
        variant="none"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-secondary"
        variant="light-secondary"
        badge
        badge-variant="secondary"
        text="BV"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-info"
        variant="light-info"
        square
        badge
        badge-variant="info"
        text="BV"
      ></b-avatar>
    </template> 
   
  </BaseCard>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";

import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarBadge",

  data: () => ({
    img1, img2
  }),
  components: { BaseCard },
};
</script>