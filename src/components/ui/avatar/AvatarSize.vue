<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Sizing -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Sizing" 
    subtitle="You can change the size of the avatar by changing the current font
          size, or use the prop size to specify an explicit size." 
    modalid="modal-15"
    modaltitle="Avatar Sizing"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;warning&quot; :size=&quot;24&quot;&gt;
  &lt;feather type=&quot;dribbble&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;info&quot; size=&quot;sm&quot;&gt;
  &lt;feather type=&quot;dribbble&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;primary&quot;&gt;
  &lt;feather type=&quot;dribbble&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;success&quot; size=&quot;3em&quot;&gt;
  &lt;feather type=&quot;dribbble&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;danger&quot; size=&quot;lg&quot;&gt;
  &lt;feather type=&quot;dribbble&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;b-avatar class=&quot;mr-2&quot; variant=&quot;secondary&quot; size=&quot;60&quot;&gt;
  &lt;feather type=&quot;dribbble&quot;&gt;&lt;/feather&gt;
&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
  &lt;b-avatar
    class=&quot;mr-2 text-warning&quot;
    variant=&quot;light-warning&quot;
    :size=&quot;24&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;mr-2 text-info&quot;
    variant=&quot;light-info&quot;
    size=&quot;sm&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar class=&quot;mr-2 text-primary&quot; variant=&quot;light-primary&quot;&gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;mr-2 text-success&quot;
    variant=&quot;light-success&quot;
    size=&quot;3em&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;mr-2 text-danger&quot;
    variant=&quot;light-danger&quot;
    size=&quot;lg&quot;
  &gt;&lt;/b-avatar&gt;

  &lt;b-avatar
    class=&quot;mr-2 text-secondary&quot;
    variant=&quot;light-secondary&quot;
    size=&quot;60&quot;
  &gt;&lt;/b-avatar&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar class="mr-2" variant="warning" :size="24">
        <feather type="dribbble" class="feather-sm"></feather>
      </b-avatar>
      <b-avatar class="mr-2" variant="info" size="sm">
        <feather type="dribbble" class="feather-sm"></feather>
      </b-avatar>
      <b-avatar class="mr-2" variant="primary">
        <feather type="dribbble" class="feather-sm"></feather>
      </b-avatar>
      <b-avatar class="mr-2" variant="success" size="3em">
        <feather type="dribbble" class="feather-sm"></feather>
      </b-avatar>
      <b-avatar class="mr-2" variant="danger" size="lg">
        <feather type="dribbble"></feather>
      </b-avatar>
      <b-avatar class="mr-2" variant="secondary" size="60">
        <feather type="dribbble"></feather>
      </b-avatar>
      <div class="mt-2">
        <b-avatar
          class="mr-2 text-warning"
          variant="light-warning"
          :size="24"
        ></b-avatar>
        <b-avatar
          class="mr-2 text-info"
          variant="light-info"
          size="sm"
        ></b-avatar>
        <b-avatar class="mr-2 text-primary" variant="light-primary"></b-avatar>
        <b-avatar
          class="mr-2 text-success"
          variant="light-success"
          size="3em"
        ></b-avatar>
        <b-avatar
          class="mr-2 text-danger"
          variant="light-danger"
          size="lg"
        ></b-avatar>

        <b-avatar
          class="mr-2 text-secondary"
          variant="light-secondary"
          size="60"
        ></b-avatar>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarSize",

  data: () => ({}),
  components: { BaseCard },
};
</script>