<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icon content -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Icon content" 
    subtitle="Easily use one of BootstrapVue's icons as the avatar content via the
          icon prop. The prop should be set to a valid icon name. Icons will
          scale respective to the size prop." 
    modalid="modal-10"
    modaltitle="Icon content"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar variant=&quot;info&quot; class=&quot;text-white mr-2&quot;&gt;
  &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot; class=&quot;text-white mr-2&quot;&gt;
  &lt;feather type=&quot;heart&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;warning&quot; class=&quot;text-white mr-2&quot;&gt;
  &lt;feather type=&quot;box&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;dark&quot; class=&quot;text-white mr-2&quot;&gt;
  &lt;feather type=&quot;cloud-drizzle&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;secondary&quot; class=&quot;text-white mr-2&quot;&gt;
  &lt;feather type=&quot;eye&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot; class=&quot;text-white&quot;&gt;
  &lt;feather type=&quot;camera&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
  &lt;b-avatar variant=&quot;light-info&quot; class=&quot;text-info mr-2&quot;&gt;
    &lt;feather type=&quot;heart&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-primary&quot; class=&quot;text-primary mr-2&quot;&gt;
    &lt;feather type=&quot;users&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-warning&quot; class=&quot;text-warning mr-2&quot;&gt;
    &lt;feather type=&quot;box&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-danger&quot; class=&quot;text-danger mr-2&quot;&gt;
    &lt;feather type=&quot;cloud-drizzle&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-secondary&quot; class=&quot;text-secondary mr-2&quot;&gt;
    &lt;feather type=&quot;eye&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
  &lt;/b-avatar&gt;
&lt;/div&gt;
  </code>
  </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar variant="info" class="text-white mr-2">
          <feather type="users" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="primary" class="text-white mr-2">
          <feather type="heart" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="warning" class="text-white mr-2">
          <feather type="box" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="dark" class="text-white mr-2">
          <feather type="cloud-drizzle" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="secondary" class="text-white mr-2">
          <feather type="eye" class="feather-sm"></feather>
        </b-avatar>
        <b-avatar variant="danger" class="text-white">
          <feather type="camera" class="feather-sm"></feather>
        </b-avatar>
        <div class="mt-2">
          <b-avatar variant="light-info" class="text-info mr-2">
            <feather type="heart" class="feather-sm"></feather>
          </b-avatar>
          <b-avatar variant="light-primary" class="text-primary mr-2">
            <feather type="users" class="feather-sm"></feather>
          </b-avatar>
          <b-avatar variant="light-warning" class="text-warning mr-2">
            <feather type="box" class="feather-sm"></feather>
          </b-avatar>
          <b-avatar variant="light-danger" class="text-danger mr-2">
            <feather type="cloud-drizzle" class="feather-sm"></feather>
          </b-avatar>
          <b-avatar variant="light-secondary" class="text-secondary mr-2">
            <feather type="eye" class="feather-sm"></feather>
          </b-avatar>
        </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarIconContent",

  data: () => ({}),
  components: { BaseCard },
};
</script>