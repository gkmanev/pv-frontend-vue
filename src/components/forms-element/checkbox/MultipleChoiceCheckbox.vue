<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multiple choice checkboxes -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Multiple choice checkboxes"
    subtitle="For cross browser consistency, <b-form-checkbox-group> and <b-form-checkbox> use Bootstrap's custom checkbox input to replace the browser default checkbox input."
    modalid="modal-2"
    modaltitle="Multiple choice checkboxes"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group label=&quot;Using options array:&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
        &lt;b-form-checkbox-group
          id=&quot;checkbox-group-1&quot;
          v-model=&quot;selected&quot;
          :options=&quot;options&quot;
          :aria-describedby=&quot;ariaDescribedby&quot;
          name=&quot;flavour-1&quot;
        &gt;&lt;/b-form-checkbox-group&gt;
      &lt;/b-form-group&gt;

      &lt;b-form-group label=&quot;Using sub-components:&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
        &lt;b-form-checkbox-group
          id=&quot;checkbox-group-2&quot;
          v-model=&quot;selected&quot;
          :aria-describedby=&quot;ariaDescribedby&quot;
          name=&quot;flavour-2&quot;
        &gt;
          &lt;b-form-checkbox value=&quot;xtreme&quot;&gt;Xtreme&lt;/b-form-checkbox&gt;
          &lt;b-form-checkbox value=&quot;monster&quot;&gt;Monster&lt;/b-form-checkbox&gt;
          &lt;b-form-checkbox value=&quot;ample&quot;&gt;Ample&lt;/b-form-checkbox&gt;
          &lt;b-form-checkbox value=&quot;materialpro&quot;&gt;Material Pro&lt;/b-form-checkbox&gt;
        &lt;/b-form-checkbox-group&gt;
      &lt;/b-form-group&gt;

    &lt;div&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: &quot;Xtreme&quot;, value: &quot;xtreme&quot; },
          { text: &quot;Monster&quot;, value: &quot;monster&quot; },
          { text: &quot;Ample&quot;, value: &quot;ample&quot; },
          { text: &quot;Material Pro&quot;, value: &quot;materialpro&quot; },
        ]
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="flavour-2"
        >
          <b-form-checkbox value="xtreme">Xtreme</b-form-checkbox>
          <b-form-checkbox value="monster">Monster</b-form-checkbox>
          <b-form-checkbox value="ample">Ample</b-form-checkbox>
          <b-form-checkbox value="materialpro">Material Pro</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MultipleChoiceCheckbox",

  data: () => ({
    selected: [], // Must be an array reference!
    options: [
      { text: "Xtreme", value: "xtreme" },
      { text: "Monster", value: "monster" },
      { text: "Ample", value: "ample" },
      { text: "Material Pro", value: "materialpro" },
    ],
  }),
  components: { BaseCard },
};
</script>