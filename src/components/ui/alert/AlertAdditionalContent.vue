<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Additional content inside alerts -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Additional content inside alerts"
    subtitle="b-alerts can also contain additional HTML elements like headings and
          paragraphs, which will be styled with the appropriate color matching
          the variant."
    modalid="modal-1"
    modaltitle="Additional content inside alerts"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-alert show variant=&quot;success&quot;&gt;
  &lt;h4 class=&quot;alert-heading&quot;&gt;Well done!&lt;/h4&gt;
  &lt;p&gt;
    Aww yeah, you successfully read this important alert message. This
    example text is going to run a bit longer so that you can see how
    spacing within an alert works with this kind of content.
  &lt;/p&gt;
  &lt;hr /&gt;
  &lt;p class=&quot;mb-0&quot;&gt;
    Whenever you need to, be sure to use margin utilities to keep things
    nice and tidy.
  &lt;/p&gt;
&lt;/b-alert&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-alert show variant="success">
        <h4 class="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p class="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </b-alert>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "AlertAdditionalContent",

  data: () => ({}),
  components: { BaseCard },
};
</script>