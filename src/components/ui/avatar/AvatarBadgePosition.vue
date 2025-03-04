<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Badge positioning -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Badge positioning" 
    subtitle="By default the badge appears on the bottom right of the avatar. You
          can use the badge-top and badge-right boolean props to switch the
          sides. Combine both props to move the badge to the top right of the
          avatar." 
    modalid="modal-3"
    modaltitle="Avatar Badge positioning"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar
  class=&quot;mr-3 text-primary&quot;
  variant=&quot;light-primary&quot;
  badge
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-3 text-info&quot;
  variant=&quot;light-info&quot;
  badge
  badge-variant=&quot;info&quot;
  badge-left
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-3 text-warning&quot;
  variant=&quot;light-warning&quot;
  badge
  badge-variant=&quot;warning&quot;
  badge-top
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-3 text-success&quot;
  variant=&quot;light-success&quot;
  badge
  badge-variant=&quot;success&quot;
  badge-left
  badge-top
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;text-danger&quot;
  variant=&quot;light-danger mr-3&quot;
  badge
  badge-variant=&quot;danger&quot;
  badge-offset=&quot;-0.5em&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;text-light-primary&quot;
  variant=&quot;primary mr-3&quot;
  badge
  badge-variant=&quot;light-primary&quot;
  badge-offset=&quot;-2px&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;text-light-success&quot;
  variant=&quot;success mr-3&quot;
  badge
  badge-variant=&quot;light-success&quot;
  badge-offset=&quot;2px&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;text-light-info&quot;
  variant=&quot;info mr-3&quot;
  badge
  badge-variant=&quot;light-info&quot;
  badge-top
&gt;&lt;/b-avatar&gt;
&lt;div class=&quot;mt-3&quot;&gt;
  &lt;b-avatar
    class=&quot;text-light-danger&quot;
    variant=&quot;danger mr-3&quot;
    badge
    badge-variant=&quot;light-danger&quot;
    badge-top
    badge-offset=&quot;-0.5em&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;text-light-warning&quot;
    variant=&quot;warning mr-3&quot;
    badge
    badge-variant=&quot;light-warning&quot;
    badge-top
    badge-offset=&quot;-2px&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;text-light-secondary&quot;
    variant=&quot;secondary mr-3&quot;
    badge
    badge-variant=&quot;light-secondary&quot;
    badge-top
    badge-offset=&quot;2px&quot;
  &gt;&lt;/b-avatar&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar
        class="mr-3 text-primary"
        variant="light-primary"
        badge
      ></b-avatar>
      <b-avatar
        class="mr-3 text-info"
        variant="light-info"
        badge
        badge-variant="info"
        badge-left
      ></b-avatar>
      <b-avatar
        class="mr-3 text-warning"
        variant="light-warning"
        badge
        badge-variant="warning"
        badge-top
      ></b-avatar>
      <b-avatar
        class="mr-3 text-success"
        variant="light-success"
        badge
        badge-variant="success"
        badge-left
        badge-top
      ></b-avatar>
      <b-avatar
        class="text-danger"
        variant="light-danger mr-3"
        badge
        badge-variant="danger"
        badge-offset="-0.5em"
      ></b-avatar>
      <b-avatar
        class="text-light-primary"
        variant="primary mr-3"
        badge
        badge-variant="light-primary"
        badge-offset="-2px"
      ></b-avatar>
      <b-avatar
        class="text-light-success"
        variant="success mr-3"
        badge
        badge-variant="light-success"
        badge-offset="2px"
      ></b-avatar>
      <b-avatar
        class="text-light-info"
        variant="info mr-3"
        badge
        badge-variant="light-info"
        badge-top
      ></b-avatar>
      <div class="mt-3">
        <b-avatar
          class="text-light-danger"
          variant="danger mr-3"
          badge
          badge-variant="light-danger"
          badge-top
          badge-offset="-0.5em"
        ></b-avatar>
        <b-avatar
          class="text-light-warning"
          variant="warning mr-3"
          badge
          badge-variant="light-warning"
          badge-top
          badge-offset="-2px"
        ></b-avatar>
        <b-avatar
          class="text-light-secondary"
          variant="secondary mr-3"
          badge
          badge-variant="light-secondary"
          badge-top
          badge-offset="2px"
        ></b-avatar>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarBadgePosition",

  data: () => ({}),
  components: { BaseCard },
};
</script>