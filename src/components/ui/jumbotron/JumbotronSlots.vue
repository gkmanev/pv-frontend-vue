<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Jumbotron with slots -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Jumbotron with slots" modalid="modal-2" modaltitle="Jumbotron with slots">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-jumbotron&gt;
&lt;template #header&gt;Xtreme Bootstrap Vue&lt;/template&gt;

&lt;template #lead&gt;
  This is a simple hero unit, a simple jumbotron-style component for
  calling extra attention to featured content or information.
&lt;/template&gt;

&lt;hr class=&quot;my-4&quot; /&gt;

&lt;p&gt;
  It uses utility classes for typography and spacing to space content
  out within the larger container.
&lt;/p&gt;
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; href=&quot;#&quot;&gt;Do Something&lt;/b-button&gt;
  &lt;b-button variant=&quot;success&quot; href=&quot;#&quot;&gt;Do Something Else&lt;/b-button&gt;
&lt;/div&gt;
&lt;/b-jumbotron&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-jumbotron>
        <template #header>Xtreme Bootstrap Vue</template>

        <template #lead>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </template>

        <hr class="my-4" />

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <div class="btn-grp">
          <b-button variant="primary" href="#">Do Something</b-button>
          <b-button variant="success" href="#">Do Something Else</b-button>
        </div>
      </b-jumbotron>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "JumbotronSlots",

  data: () => ({}),
  components: { BaseCard },
};
</script>