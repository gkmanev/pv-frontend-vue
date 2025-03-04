<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Group rounding -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Group rounding" 
    subtitle="Similar to the variant prop, the b-avatar-group props square and
          rounded take precedence over the respective props on individual child
          avatars." 
    modalid="modal-6"
    modaltitle="Avatar Group rounding"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
          <code class="javascript">
&lt;b-avatar-group rounded=&quot;lg&quot;&gt;
  &lt;b-avatar variant=&quot;primary&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;info&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;danger&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;warning&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;success&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
&lt;b-avatar-group rounded=&quot;lg&quot; class=&quot;mt-3&quot;&gt;
  &lt;b-avatar variant=&quot;light-primary&quot; class=&quot;text-primary&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-info&quot; class=&quot;text-info&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-danger&quot; class=&quot;text-danger&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-warning&quot; class=&quot;text-warning&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-success&quot; class=&quot;text-success&quot;&gt;&lt;feather type=&quot;user&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar-group rounded="lg">
          <b-avatar variant="primary"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="info"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="danger"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="warning"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="success"><feather type="user" class="feather-sm"></feather></b-avatar>
        </b-avatar-group>
        <b-avatar-group rounded="lg" class="mt-3">
          <b-avatar variant="light-primary" class="text-primary"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="light-info" class="text-info"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="light-danger" class="text-danger"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="light-warning" class="text-warning"><feather type="user" class="feather-sm"></feather></b-avatar>
          <b-avatar variant="light-success" class="text-success"><feather type="user" class="feather-sm"></feather></b-avatar>
        </b-avatar-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarGroupRounding",

  data: () => ({}),
  components: { BaseCard },
};
</script>