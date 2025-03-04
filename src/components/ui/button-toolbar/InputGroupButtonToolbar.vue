<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- alert links -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Input Group with Button Toolbar" 
     
    modalid="modal-3"
    modaltitle="Input Group with Button Toolbar"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button-toolbar
  aria-label=&quot;Toolbar with button groups and input groups&quot;
&gt;
  &lt;b-button-group size=&quot;sm&quot; class=&quot;mr-2&quot;&gt;
    &lt;b-button variant=&quot;success&quot;&gt;Save&lt;/b-button&gt;
    &lt;b-button variant=&quot;danger&quot;&gt;Cancel&lt;/b-button&gt;
  &lt;/b-button-group&gt;
  &lt;b-input-group size=&quot;sm&quot; prepend=&quot;$&quot; append=&quot;.00&quot;&gt;
    &lt;b-form-input value=&quot;100&quot; class=&quot;text-right&quot;&gt;&lt;/b-form-input&gt;
  &lt;/b-input-group&gt;
&lt;/b-button-toolbar&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button-toolbar
        aria-label="Toolbar with button groups and input groups"
      >
        <b-button-group size="sm" class="mr-2">
          <b-button variant="success">Save</b-button>
          <b-button variant="danger">Cancel</b-button>
        </b-button-group>
        <b-input-group size="sm" prepend="$" append=".00">
          <b-form-input value="100" class="text-right"></b-form-input>
        </b-input-group>
      </b-button-toolbar>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "InputGroupButtonToolbar",

  data: () => ({}),
  components: { BaseCard },
};
</script>