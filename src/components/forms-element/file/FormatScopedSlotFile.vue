<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- File name formatting via scoped slot -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="File name formatting via scoped slot"
    subtitle="Alternatively, you can use the scoped slot file-name to render the file names."
    modalid="modal-2"
    modaltitle="File name formatting via scoped slot"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-form-file multiple&gt;
   &lt;template slot=&quot;file-name&quot; slot-scope=&quot;{ names }&quot;&gt;
     &lt;b-badge variant=&quot;dark&quot;&gt;{{ names[0] }}&lt;/b-badge&gt;
     &lt;b-badge v-if=&quot;names.length &gt; 1&quot; variant=&quot;dark&quot; class=&quot;ml-1&quot;&gt;
       + {{ names.length - 1 }} More files
     &lt;/b-badge&gt;
   &lt;/template&gt;
  &lt;/b-form-file&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-file multiple>
        <template slot="file-name" slot-scope="{ names }">
          <b-badge variant="dark">{{ names[0] }}</b-badge>
          <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
            + {{ names.length - 1 }} More files
          </b-badge>
        </template>
      </b-form-file>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormatScopedSlotFile",

  data: () => ({
    names: "",
  }),
  components: { BaseCard },
};
</script>