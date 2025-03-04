<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar groups -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar groups" 
    subtitle=" Group multiple avatars together by wrapping them in a b-avatar-group
          component:" 
    modalid="modal-7"
    modaltitle="Avatar groups"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar-group size=&quot;40px&quot;&gt;
&lt;b-avatar class=&quot;text-secondary&quot; variant=&quot;light-secondary&quot;&gt;
  &lt;feather class=&quot;feather-sm&quot; type=&quot;user&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar
  text=&quot;S&quot;
  variant=&quot;light-primary&quot;
  class=&quot;text-primary&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  src=&quot;https://placekitten.com/300/300&quot;
  variant=&quot;info&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;info text-white&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;light-danger&quot; class=&quot;text-danger&quot;&gt;
  &lt;feather class=&quot;feather-sm&quot; type=&quot;user&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar
  src=&quot;https://placekitten.com/320/320&quot;
  variant=&quot;dark&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot;&gt;
  &lt;feather class=&quot;feather-sm&quot; type=&quot;users&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar-group size="40px">
        <b-avatar class="text-secondary" variant="light-secondary">
          <feather class="feather-sm" type="user"></feather>
        </b-avatar>
        <b-avatar
          text="S"
          variant="light-primary"
          class="text-primary"
        ></b-avatar>
        <b-avatar
          :src="img1" variant="none"
        ></b-avatar>
        <b-avatar variant="info text-white">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="light-danger" class="text-danger">
          <feather class="feather-sm" type="user"></feather>
        </b-avatar>
        <b-avatar
          :src="img2" variant="none"
        ></b-avatar>
        <b-avatar variant="success">
          <feather class="feather-sm" type="users"></feather>
        </b-avatar>
      </b-avatar-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/4.jpg";

import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarGroups",

  data: () => ({ img1, img2 }),
  components: { BaseCard },
};
</script>