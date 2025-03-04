<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multi-line text -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Multi-line text" 
    subtitle="Use the default slot to render custom content in the avatar, for finer
          grained control of its appearance, or if using custom icons or SVGs
          e.g.:" 
    modalid="modal-13"
    modaltitle="Multi-line text"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar variant=&quot;info&quot; size=&quot;4em&quot; class=&quot;mr-2&quot;&gt;Hello&lt;br /&gt;World&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot; size=&quot;4em&quot; class=&quot;mr-2&quot;&gt;你好&lt;br /&gt;世界&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot; size=&quot;4em&quot; class=&quot;mr-2&quot;&gt;Hello&lt;br /&gt;World&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;secondary&quot; size=&quot;4em&quot; class=&quot;mr-2&quot;&gt;Hello&lt;br /&gt;World&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;warning&quot; size=&quot;4em&quot;&gt;你好&lt;br /&gt;世界&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
  &lt;b-avatar variant=&quot;light-info&quot; size=&quot;4em&quot; class=&quot;mr-2 text-info&quot;&gt;Hello&lt;br /&gt;World&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-primary&quot; size=&quot;4em&quot; class=&quot;mr-2 text-primary&quot;&gt;你好&lt;br /&gt;世界&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-danger&quot; size=&quot;4em&quot; class=&quot;mr-2 text-danger&quot;&gt;Hello&lt;br /&gt;World&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-secondary&quot; size=&quot;4em&quot; class=&quot;mr-2 text-secondary&quot;&gt;Hello&lt;br /&gt;World&lt;/b-avatar&gt;
  &lt;b-avatar variant=&quot;light-warning&quot; size=&quot;4em&quot; class=&quot;text-warning&quot;&gt;你好&lt;br /&gt;世界&lt;/b-avatar&gt;
&lt;/div&gt;
      </code>
    </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar variant="info" size="4em" class="mr-2">Hello<br />World</b-avatar>
        <b-avatar variant="primary" size="4em" class="mr-2">你好<br />世界</b-avatar>
        <b-avatar variant="danger" size="4em" class="mr-2">Hello<br />World</b-avatar>
        <b-avatar variant="secondary" size="4em" class="mr-2">Hello<br />World</b-avatar>
        <b-avatar variant="warning" size="4em">你好<br />世界</b-avatar>
        <div class="mt-2">
          <b-avatar variant="light-info" size="4em" class="mr-2 text-info">Hello<br />World</b-avatar>
          <b-avatar variant="light-primary" size="4em" class="mr-2 text-primary">你好<br />世界</b-avatar>
          <b-avatar variant="light-danger" size="4em" class="mr-2 text-danger">Hello<br />World</b-avatar>
          <b-avatar variant="light-secondary" size="4em" class="mr-2 text-secondary">Hello<br />World</b-avatar>
          <b-avatar variant="light-warning" size="4em" class="text-warning">你好<br />世界</b-avatar>
        </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarMultilineText",

  data: () => ({}),
  components: { BaseCard },
};
</script>