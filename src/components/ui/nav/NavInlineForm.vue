<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Nav inline forms -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Nav inline forms"
    subtitle="Use the <b-nav-form> child component to place an inline form into the nav:"
    modalid="modal-8"
    modaltitle="Nav inline forms"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-nav pills&gt;
  &lt;b-nav-item href=&quot;#1&quot; active&gt;Link 1&lt;/b-nav-item&gt;
  &lt;b-nav-item href=&quot;#2&quot;&gt;Link 2&lt;/b-nav-item&gt;
  &lt;b-nav-form @submit.stop.prevent=&quot;alert('Form Submitted')&quot;&gt;
    &lt;b-form-input aria-label=&quot;Input&quot; class=&quot;mr-1&quot;&gt;&lt;/b-form-input&gt;
    &lt;b-button type=&quot;submit&quot;&gt;Ok&lt;/b-button&gt;
  &lt;/b-nav-form&gt;
&lt;/b-nav&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-nav pills>
        <b-nav-item href="#1" active>Link 1</b-nav-item>
        <b-nav-item href="#2">Link 2</b-nav-item>
        <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
          <b-form-input aria-label="Input" class="mr-1"></b-form-input>
          <b-button type="submit">Ok</b-button>
        </b-nav-form>
      </b-nav>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NavInlineForm",

  data: () => ({}),
  components: { BaseCard },
};
</script>