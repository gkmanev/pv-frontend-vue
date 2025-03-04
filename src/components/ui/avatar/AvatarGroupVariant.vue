<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Group variant -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Group variant" 
    subtitle=" Use the variant prop to color all child avatars in the b-avatar-group.
          Note that the variant prop, when set, will override the the variant
          specified on individual avatars." 
    modalid="modal-9"
    modaltitle="Avatar Group variant"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar-group variant=&quot;primary&quot;&gt;
  &lt;b-avatar&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
&lt;b-avatar-group variant=&quot;light-info&quot; class=&quot;mt-3&quot;&gt;
  &lt;b-avatar class=&quot;text-info&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-info&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-info&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-info&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-info&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
&lt;b-avatar-group variant=&quot;light-success&quot; class=&quot;mt-3&quot;&gt;
  &lt;b-avatar class=&quot;text-success&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-success&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-success&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-success&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;text-success&quot;&gt;
    &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
</code>
</pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar-group variant="primary">
        <b-avatar>
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar>
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar>
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar>
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar>
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
      </b-avatar-group>
      <b-avatar-group variant="light-info" class="mt-3">
        <b-avatar class="text-info">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-info">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-info">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-info">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-info">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
      </b-avatar-group>
      <b-avatar-group variant="light-success" class="mt-3">
        <b-avatar class="text-success">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-success">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-success">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-success">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar class="text-success">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
      </b-avatar-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarGroupVariant",

  data: () => ({}),
  components: { BaseCard },
};
</script>