<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Spinners in buttons -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Spinners in buttons"
    subtitle="Use spinners within buttons to indicate an action is currently processing or taking place."
    modalid="modal-2"
    modaltitle="Spinners in buttons"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button variant=&quot;primary&quot; disabled&gt;
    &lt;b-spinner small&gt;&lt;/b-spinner&gt;
    &lt;span class=&quot;sr-only&quot;&gt;Loading...&lt;/span&gt;
  &lt;/b-button&gt;

  &lt;b-button variant=&quot;primary&quot; disabled&gt;
    &lt;b-spinner small type=&quot;grow&quot;&gt;&lt;/b-spinner&gt;
    Loading...
  &lt;/b-button&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button variant="primary" disabled>
          <b-spinner small></b-spinner>
          <span class="sr-only">Loading...</span>
        </b-button>

        <b-button variant="primary" disabled>
          <b-spinner small type="grow"></b-spinner>
          Loading...
        </b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ButtonSpinner",

  data: () => ({}),
  components: { BaseCard },
};
</script>