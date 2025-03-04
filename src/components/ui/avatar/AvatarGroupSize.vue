<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Group size -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Group size" 
    subtitle="To size the avatars, use the prop size on b-avatar-group. The size
          prop accepts the same type of values as the size prop on b-avatar" 
    modalid="modal-8"
    modaltitle="Avatar Group size"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar-group size=&quot;4rem&quot;&gt;
&lt;b-avatar variant=&quot;primary&quot;&gt;
  &lt;feather type=&quot;users&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot;&gt;
  &lt;feather type=&quot;users&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot;&gt;
  &lt;feather type=&quot;users&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot;&gt;
  &lt;feather type=&quot;users&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot;&gt;
  &lt;feather type=&quot;users&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
&lt;b-avatar-group size=&quot;3rem&quot; class=&quot;mt-3&quot;&gt;
&lt;b-avatar variant=&quot;success&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
&lt;b-avatar-group size=&quot;2.5rem&quot; class=&quot;mt-3&quot;&gt;
&lt;b-avatar variant=&quot;danger&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar-group size="4rem">
        <b-avatar variant="primary">
          <feather type="users"></feather>
        </b-avatar>
        <b-avatar variant="primary">
          <feather type="users"></feather>
        </b-avatar>
        <b-avatar variant="primary">
          <feather type="users"></feather>
        </b-avatar>
        <b-avatar variant="primary">
          <feather type="users"></feather>
        </b-avatar>
        <b-avatar variant="primary">
          <feather type="users"></feather>
        </b-avatar>
      </b-avatar-group>
      <b-avatar-group size="3rem" class="mt-3">
        <b-avatar variant="success">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="success">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="success">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="success">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="success">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
      </b-avatar-group>
      <b-avatar-group size="2.5rem" class="mt-3">
        <b-avatar variant="danger">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="danger">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="danger">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="danger">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="danger">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
      </b-avatar-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarGroupSize",

  data: () => ({}),
  components: { BaseCard },
};
</script>