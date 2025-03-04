<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Time -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Time"
    subtitle="<b-time> is WAI-ARIA accessibility compliant, optimized for keyboard control"
    modalid="modal-1"
    modaltitle="Basic Time"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-row&gt;
    &lt;b-col md=&quot;auto&quot;&gt;
      &lt;b-time v-model=&quot;value&quot; locale=&quot;en&quot; @context=&quot;onContext&quot;&gt;&lt;/b-time&gt;
    &lt;/b-col&gt;
    &lt;b-col&gt;
      &lt;p&gt;Value: &lt;b&gt;'{{ value }}'&lt;/b&gt;&lt;/p&gt;
      &lt;p class=&quot;mb-0&quot;&gt;Context:&lt;/p&gt;
      &lt;pre class=&quot;small&quot;&gt;{{ context }}&lt;/pre&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-row>
        <b-col md="auto">
          <b-time v-model="value" locale="en" @context="onContext"></b-time>
        </b-col>
        <b-col>
          <p>
            Value: <b>'{{ value }}'</b>
          </p>
          <p class="mb-0">Context:</p>
          <pre class="small">{{ context }}</pre>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicTime",

  data: () => ({
    value: "",
    context: null,
  }),
  components: { BaseCard },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>