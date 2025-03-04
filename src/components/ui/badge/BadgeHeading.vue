<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Bagde with Heading -->
  <!-- ----------------------------------------------------------------------------- -->

 <BaseCard title="Bagde with Heading" 
    subtitle="Badges scale to match the size of the immediate parent element by
          using relative font sizing and em units." 
    modalid="modal-4"
    modaltitle="Bagde with Heading"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;h2&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h6&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <h2>Example heading <b-badge>New</b-badge></h2>
      <h3>Example heading <b-badge>New</b-badge></h3>
      <h4>Example heading <b-badge>New</b-badge></h4>
      <h5>Example heading <b-badge>New</b-badge></h5>
      <h6>Example heading <b-badge>New</b-badge></h6>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BadgeHeading",

  data: () => ({}),
  components: { BaseCard },
};
</script>