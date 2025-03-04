<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image content -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Image content" 
    subtitle="Use the src prop to specify a URL of an image to use as the avatar
          content. The image should have an aspect ratio of 1:1 (meaning the
          width and height should be equal), otherwise image aspect distortion
          will occur. The image will be scaled up or down to fit within the
          avatar's bounding box." 
    modalid="modal-11"
    modaltitle="Image content"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar src=&quot;https://placekitten.com/300/300&quot; class=&quot;mr-2&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar src=&quot;https://placekitten.com/300/300&quot; size=&quot;30px&quot;&gt;&lt;/b-avatar&gt;
        </code>
     </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-avatar :src="img1" class="mr-2" variant="none"></b-avatar>
      <b-avatar :src="img2" variant="none" size="30px"></b-avatar>
    </template> 
   
  </BaseCard>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";

import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarImageContent",

  data: () => ({
    img1,
    img2,
  }),
  components: { BaseCard },
};
</script>