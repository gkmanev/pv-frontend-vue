<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Text content -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Text content" 
    subtitle="You can specify a short string as the content of an avatar via the
          text prop. The string should be short (1 to 3 characters), and will be
          transformed via CSS to be all uppercase. The font size will be scaled
          relative to the size prop setting." 
    modalid="modal-17"
    modaltitle="Text content"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-avatar
  class=&quot;mr-2 text-info&quot;
  variant=&quot;light-info&quot;
  text=&quot;BV&quot;
  size=&quot;30px&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2 text-primary&quot;
  variant=&quot;light-primary&quot;
  text=&quot;a&quot;
  size=&quot;40px&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2 text-danger&quot;
  variant=&quot;light-danger&quot;
  text=&quot;Foo&quot;
  size=&quot;50px&quot;
&gt;&lt;/b-avatar&gt;
&lt;b-avatar
  class=&quot;mr-2 text-warning&quot;
  variant=&quot;light-warning&quot;
  text=&quot;BV&quot;
  size=&quot;60px&quot;
&gt;&lt;/b-avatar&gt;
&lt;div class=&quot;mt-2&quot;&gt;
  &lt;b-avatar class=&quot;mr-2&quot; variant=&quot;info&quot; text=&quot;BV&quot; size=&quot;30px&quot;&gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;mr-2&quot;
    variant=&quot;primary&quot;
    text=&quot;a&quot;
    size=&quot;40px&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;mr-2&quot;
    variant=&quot;danger&quot;
    text=&quot;Foo&quot;
    size=&quot;50px&quot;
  &gt;&lt;/b-avatar&gt;
  &lt;b-avatar
    class=&quot;mr-2&quot;
    variant=&quot;warning&quot;
    text=&quot;BV&quot;
    size=&quot;60px&quot;
  &gt;&lt;/b-avatar&gt;
      </code>
    </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-avatar
        class="mr-2 text-info"
        variant="light-info"
        text="BV"
        size="30px"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-primary"
        variant="light-primary"
        text="a"
        size="40px"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-danger"
        variant="light-danger"
        text="Foo"
        size="50px"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-warning"
        variant="light-warning"
        text="BV"
        size="60px"
      ></b-avatar>
      <div class="mt-2">
        <b-avatar class="mr-2" variant="info" text="BV" size="30px"></b-avatar>
        <b-avatar
          class="mr-2"
          variant="primary"
          text="a"
          size="40px"
        ></b-avatar>
        <b-avatar
          class="mr-2"
          variant="danger"
          text="Foo"
          size="50px"
        ></b-avatar>
        <b-avatar
          class="mr-2"
          variant="warning"
          text="BV"
          size="60px"
        ></b-avatar>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarTextContent",

  data: () => ({}),
  components: { BaseCard },
};
</script>