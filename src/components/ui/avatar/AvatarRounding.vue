<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Rounding -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Rounding" 
    subtitle="b-avatar renders with a circular border radius. You can change the
          rounding by setting the prop rounded to one of the values true, 'sm',
          'lg', 'top', 'left', 'right', or 'bottom'." 
    modalid="modal-14"
    modaltitle="Avatar Rounding"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar rounded=&quot;sm&quot; class=&quot;mr-2&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot; class=&quot;mr-2&quot; rounded&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;info&quot; class=&quot;mr-2&quot; rounded=&quot;lg&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot; class=&quot;mr-2&quot; rounded=&quot;top&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;warning&quot; class=&quot;mr-2&quot; rounded=&quot;left&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;success&quot; class=&quot;mr-2&quot; rounded=&quot;right&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;dark&quot; class=&quot;mr-2&quot; rounded=&quot;bottom&quot;&gt;&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
  &lt;b-avatar rounded=&quot;sm&quot; class=&quot;mr-2&quot;&gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    variant=&quot;light-primary&quot;
    class=&quot;text-primary mr-2&quot;
    rounded
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    variant=&quot;light-info&quot;
    class=&quot;text-info mr-2&quot;
    rounded=&quot;lg&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    variant=&quot;light-danger&quot;
    class=&quot;text-danger mr-2&quot;
    rounded=&quot;top&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    variant=&quot;light-warning&quot;
    class=&quot;text-warning mr-2&quot;
    rounded=&quot;left&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    variant=&quot;light-success&quot;
    class=&quot;text-success mr-2&quot;
    rounded=&quot;right&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    variant=&quot;light-success&quot;
    class=&quot;text-success mr-2&quot;
    rounded=&quot;botttom&quot;
  &gt;&lt;/b-avatar&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar rounded="sm" class="mr-2"></b-avatar>
      <b-avatar variant="primary" class="mr-2" rounded></b-avatar>
      <b-avatar variant="info" class="mr-2" rounded="lg"></b-avatar>
      <b-avatar variant="danger" class="mr-2" rounded="top"></b-avatar>
      <b-avatar variant="warning" class="mr-2" rounded="left"></b-avatar>
      <b-avatar variant="success" class="mr-2" rounded="right"></b-avatar>
      <b-avatar variant="dark" class="mr-2" rounded="bottom"></b-avatar>
      <div class="mt-2">
        <b-avatar rounded="sm" class="mr-2"></b-avatar>
        <b-avatar
          variant="light-primary"
          class="text-primary mr-2"
          rounded
        ></b-avatar>
        <b-avatar
          variant="light-info"
          class="text-info mr-2"
          rounded="lg"
        ></b-avatar>
        <b-avatar
          variant="light-danger"
          class="text-danger mr-2"
          rounded="top"
        ></b-avatar>
        <b-avatar
          variant="light-warning"
          class="text-warning mr-2"
          rounded="left"
        ></b-avatar>
        <b-avatar
          variant="light-success"
          class="text-success mr-2"
          rounded="right"
        ></b-avatar>
        <b-avatar
          variant="light-success"
          class="text-success mr-2"
          rounded="botttom"
        ></b-avatar>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarRounding",

  data: () => ({}),
  components: { BaseCard },
};
</script>