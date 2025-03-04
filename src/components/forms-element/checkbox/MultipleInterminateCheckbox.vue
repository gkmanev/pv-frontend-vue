<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Indeterminate checkbox use-case -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Indeterminate checkbox use-case"
    modalid="modal-11"
    modaltitle="Indeterminate checkbox use-case"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group&gt;
      &lt;template #label&gt;
        &lt;b&gt;Choose your flavours:&lt;/b&gt;&lt;br&gt;
        &lt;b-form-checkbox
          v-model=&quot;allSelected&quot;
          :indeterminate=&quot;indeterminate&quot;
          aria-describedby=&quot;flavours&quot;
          aria-controls=&quot;flavours&quot;
          @change=&quot;toggleAll&quot;
        &gt;
          {{ allSelected ? 'Un-select All' : 'Select All' }}
        &lt;/b-form-checkbox&gt;
      &lt;/template&gt;

      &lt;template v-slot=&quot;{ ariaDescribedby }&quot;&gt;
        &lt;b-form-checkbox-group
          id=&quot;flavors&quot;
          v-model=&quot;selected&quot;
          :options=&quot;flavours&quot;
          :aria-describedby=&quot;ariaDescribedby&quot;
          name=&quot;flavors&quot;
          class=&quot;ml-4&quot;
          aria-label=&quot;Individual flavours&quot;
          stacked
        &gt;&lt;/b-form-checkbox-group&gt;
      &lt;/b-form-group&gt;

      &lt;div&gt;
        Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;br&gt;
        All Selected: &lt;strong&gt;{{ allSelected }}&lt;/strong&gt;&lt;br&gt;
        Indeterminate: &lt;strong&gt;{{ indeterminate }}&lt;/strong&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        flavours: ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry'],
        selected: [],
        allSelected: false,
        indeterminate: false
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      }
    },
    watch: {
      selected(newValue, oldValue) {
        // Handle changes in individual flavour checkboxes
        if (newValue.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newValue.length === this.flavours.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
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
      <b-form-group>
        <template #label>
          <b>Choose your flavours:</b><br />
          <b-form-checkbox
            v-model="allSelected"
            :indeterminate="indeterminate"
            aria-describedby="flavours"
            aria-controls="flavours"
            @change="toggleAll"
          >
            {{ allSelected ? "Un-select All" : "Select All" }}
          </b-form-checkbox>
        </template>

        <template v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="flavors"
            v-model="selected"
            :options="flavours"
            :aria-describedby="ariaDescribedby"
            name="flavors"
            class="ml-4"
            aria-label="Individual flavours"
            stacked
          ></b-form-checkbox-group>
        </template>
      </b-form-group>

      <div>
        Selected: <strong>{{ selected }}</strong
        ><br />
        All Selected: <strong>{{ allSelected }}</strong
        ><br />
        Indeterminate: <strong>{{ indeterminate }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MultipleInterminateCheckbox",

  data: () => ({
    flavours: ["Orange", "Grape", "Apple", "Lime", "Very Berry"],
    selected: [],
    allSelected: false,
    indeterminate: false,
  }),
  components: { BaseCard },
  methods: {
    toggleAll(checked) {
      this.selected = checked ? this.flavours.slice() : [];
    },
  },
  watch: {
    selected(newValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newValue.length === this.flavours.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
    },
  },
};
</script>