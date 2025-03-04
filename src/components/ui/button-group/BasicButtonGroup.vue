<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Button Group -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Basic Button Group" 
    subtitle="Button groups are an easy way to group a series of buttons together." 
    modalid="modal-1"
    modaltitle="Basic Button Group"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-button-group&gt;
  &lt;b-button variant=&quot;primary&quot;&gt;Button 1&lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot;&gt;Button 2&lt;/b-button&gt;
  &lt;b-button variant=&quot;primary&quot;&gt;Button 3&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;div class=&quot;mt-2&quot;&gt;
  &lt;b-button-group&gt;
    &lt;b-button class=&quot;d-flex align-items-center justify-content-center&quot;&gt;
      &lt;feather type=&quot;skip-back&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
    &lt;/b-button&gt;
    &lt;b-button class=&quot;d-flex align-items-center justify-content-center&quot;&gt;
      &lt;feather type=&quot;play&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
    &lt;/b-button&gt;
    &lt;b-button class=&quot;d-flex align-items-center justify-content-center&quot;&gt;
      &lt;feather type=&quot;skip-forward&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
    &lt;/b-button&gt;
  &lt;/b-button-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-button-group>
        <b-button variant="primary">Button 1</b-button>
        <b-button variant="primary">Button 2</b-button>
        <b-button variant="primary">Button 3</b-button>
      </b-button-group>
      <div class="mt-2">
        <b-button-group>
          <b-button class="d-flex align-items-center justify-content-center">
            <feather type="skip-back" class="feather-sm"></feather>
          </b-button>
          <b-button class="d-flex align-items-center justify-content-center">
            <feather type="play" class="feather-sm"></feather>
          </b-button>
          <b-button class="d-flex align-items-center justify-content-center">
            <feather type="skip-forward" class="feather-sm"></feather>
          </b-button>
        </b-button-group>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BasicButtonGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>