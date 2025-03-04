<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Link -->
  <!-- ----------------------------------------------------------------------------- -->

 <BaseCard title="Avatar Link" 
    subtitle="Fancy an avatar as a link or router link? Simply set either the href
          or to props (respectively). The to prop can either be a string path,
          or a Location object. The to prop requires that Vue router (or
          equivalent) be installed." 
    modalid="modal-12"
    modaltitle="Avatar Link"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
  &lt;b-list-group-item&gt;
    &lt;b-avatar
      href=&quot;#foo&quot;
      variant=&quot;primary&quot;
      text=&quot;FF&quot;
      class=&quot;align-baseline mr-2&quot;
    &gt;&lt;/b-avatar&gt;
    Link Text Avatar
  &lt;/b-list-group-item&gt;
  &lt;b-list-group-item&gt;
    &lt;b-avatar
      href=&quot;#bar&quot;
      src=&quot;https://placekitten.com/300/300&quot;
      class=&quot;mr-2&quot;
    &gt;&lt;/b-avatar&gt;
    Link Image Avatar
  &lt;/b-list-group-item&gt;
  &lt;b-list-group-item&gt;
    &lt;b-avatar href=&quot;#baz&quot; class=&quot;align-center mr-2&quot;&gt;
      &lt;feather type=&quot;star&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
    &lt;/b-avatar&gt;
    Link Icon Avatar
  &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
      </code>
    </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-list-group>
        <b-list-group-item>
          <b-avatar
            href="#foo"
            variant="primary"
            text="FF"
            class="align-baseline mr-2"
          ></b-avatar>
          Link Text Avatar
        </b-list-group-item>
        <b-list-group-item>
          <b-avatar
            href="#bar"
            :src="img1"
            variant="none"
            class="mr-2"
          ></b-avatar>
          Link Image Avatar
        </b-list-group-item>
        <b-list-group-item>
          <b-avatar href="#baz" class="align-center mr-2">
            <feather type="star" class="feather-sm"></feather>
          </b-avatar>
          Link Icon Avatar
        </b-list-group-item>
      </b-list-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";

import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarLink",

  data: () => ({
    img1
  }),
  components: { BaseCard },
};
</script>