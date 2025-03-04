<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Toaster Position -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Toaster Position"
    subtitle="BootstrapVue comes with the following 'built-in' toaster names"
    modalid="modal-7"
    modaltitle="Toaster Position"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button @click=&quot;toast('b-toaster-top-right')&quot; class=&quot;mb-2&quot;&gt;b-toaster-top-right&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-top-left')&quot; class=&quot;mb-2&quot;&gt;b-toaster-top-left&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-top-center')&quot; class=&quot;mb-2&quot;&gt;b-toaster-top-center&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-top-full')&quot; class=&quot;mb-2&quot;&gt;b-toaster-top-full&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-bottom-right', true)&quot; class=&quot;mb-2&quot;&gt;b-toaster-bottom-right&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-bottom-left', true)&quot; class=&quot;mb-2&quot;&gt;b-toaster-bottom-left&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-bottom-center', true)&quot; class=&quot;mb-2&quot;&gt;b-toaster-bottom-center&lt;/b-button&gt;
    &lt;b-button @click=&quot;toast('b-toaster-bottom-full', true)&quot; class=&quot;mb-2&quot;&gt;b-toaster-bottom-full&lt;/b-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      toast(toaster, append = false) {
        this.counter++
        this.$bvToast.toast(`Toast ${this.counter} body content`, {
          title: `Toaster ${toaster}`,
          toaster: toaster,
          solid: true,
          appendToast: append
        })
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
      <div class="btn-grp">
        <b-button variant="primary" @click="toast('b-toaster-top-right')"
          >b-toaster-top-right</b-button
        >
        <b-button @click="toast('b-toaster-top-left')" variant="info"
          >b-toaster-top-left</b-button
        >
        <b-button @click="toast('b-toaster-top-center')" variant="success"
          >b-toaster-top-center</b-button
        >
        <b-button @click="toast('b-toaster-top-full')" variant="warning"
          >b-toaster-top-full</b-button
        >
        <b-button
          @click="toast('b-toaster-bottom-right', true)"
          variant="danger"
          >b-toaster-bottom-right</b-button
        >
        <b-button
          @click="toast('b-toaster-bottom-left', true)"
          variant="secondary"
          >b-toaster-bottom-left</b-button
        >
        <b-button
          @click="toast('b-toaster-bottom-center', true)"
          variant="primary"
          >b-toaster-bottom-center</b-button
        >
        <b-button
          @click="toast('b-toaster-bottom-full', true)"
          variant="success"
          >b-toaster-bottom-full</b-button
        >
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastsPosition",

  data: () => ({
    counter: 0,
  }),
  components: { BaseCard },
  methods: {
    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append,
      });
    },
  },
};
</script>