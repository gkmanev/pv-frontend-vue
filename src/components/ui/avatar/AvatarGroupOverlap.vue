<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Group overlap -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Group overlap" 
    subtitle="By default child avatars inside a b-avatar-group will overlap by a
          factor of 0.3 (relative to the size of the avatar)" 
    modalid="modal-5"
    modaltitle="Avatar Group overlap"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar-group overlap=&quot;0.65&quot;&gt;
&lt;b-avatar variant=&quot;light-secondary&quot; class=&quot;text-secondary mr-2&quot;&gt;
  &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;light-secondary&quot; class=&quot;text-secondary mr-2&quot;&gt;
  &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;light-secondary&quot; class=&quot;text-secondary mr-2&quot;&gt;
  &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;light-secondary&quot; class=&quot;text-secondary mr-2&quot;&gt;
  &lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;light-secondary&quot; class=&quot;text-secondary&quot;&gt;
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
        <b-avatar-group overlap="0.65">
        <b-avatar variant="light-secondary" class="text-secondary mr-2">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="light-secondary" class="text-secondary mr-2">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="light-secondary" class="text-secondary mr-2">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="light-secondary" class="text-secondary mr-2">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="light-secondary" class="text-secondary">
          <feather type="user" class="feather-sm"></feather>
        </b-avatar>
      </b-avatar-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarGroupOverlap",

  data: () => ({}),
  components: { BaseCard },
};
</script>