<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Size"
    subtitle="Set the prop small to true to make a smaller spinner that can quickly be used within other components."
    modalid="modal-6"
    modaltitle="Size"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-spinner small label=&quot;Small Spinner&quot; class=&quot;mr-2&quot;&gt;&lt;/b-spinner&gt;
&lt;b-spinner
  small
  label=&quot;Small Spinner&quot;
  type=&quot;grow&quot;
  class=&quot;mr-2&quot;&gt;
&lt;/b-spinner&gt;

&lt;b-spinner
  style=&quot;width: 3rem; height: 3rem&quot;
  class=&quot;mr-2&quot;
  label=&quot;Large Spinner&quot;&gt;
&lt;/b-spinner&gt;
&lt;b-spinner
  style=&quot;width: 3rem; height: 3rem&quot;
  label=&quot;Large Spinner&quot;
  type=&quot;grow&quot;&gt;
&lt;/b-spinner&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-spinner small label="Small Spinner" class="mr-2"></b-spinner>
      <b-spinner
        small
        label="Small Spinner"
        type="grow"
        class="mr-2">
      </b-spinner>

      <b-spinner
        style="width: 3rem; height: 3rem"
        class="mr-2"
        label="Large Spinner">
      </b-spinner>
      <b-spinner
        style="width: 3rem; height: 3rem"
        label="Large Spinner"
        type="grow">
      </b-spinner>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SizeSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>