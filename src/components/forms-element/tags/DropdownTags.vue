<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown Tags -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown Tags"
    subtitle="The following is an example of using the <b-dropdown> component for choosing or searching from a pre-defined set of tags"
    modalid="modal-12"
    modaltitle="Dropdown Tags"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group label=&quot;Tagged input using dropdown&quot; label-for=&quot;tags-with-dropdown&quot;&gt;
      &lt;b-form-tags id=&quot;tags-with-dropdown&quot; v-model=&quot;value&quot; no-outer-focus class=&quot;mb-2&quot;&gt;
        &lt;template v-slot=&quot;{ tags, disabled, addTag, removeTag }&quot;&gt;
          &lt;ul v-if=&quot;tags.length &gt; 0&quot; class=&quot;list-inline d-inline-block mb-2&quot;&gt;
            &lt;li v-for=&quot;tag in tags&quot; :key=&quot;tag&quot; class=&quot;list-inline-item&quot;&gt;
              &lt;b-form-tag
                @remove=&quot;removeTag(tag)&quot;
                :title=&quot;tag&quot;
                :disabled=&quot;disabled&quot;
                variant=&quot;info&quot;
              &gt;{{ tag }}&lt;/b-form-tag&gt;
            &lt;/li&gt;
          &lt;/ul&gt;

          &lt;b-dropdown size=&quot;sm&quot; variant=&quot;outline-secondary&quot; block menu-class=&quot;w-100&quot;&gt;
            &lt;template #button-content&gt;
              &lt;b-icon icon=&quot;tag-fill&quot;&gt;&lt;/b-icon&gt; Choose tags
            &lt;/template&gt;
            &lt;b-dropdown-form @submit.stop.prevent=&quot;() =&gt; {}&quot;&gt;
              &lt;b-form-group
                label=&quot;Search tags&quot;
                label-for=&quot;tag-search-input&quot;
                label-cols-md=&quot;auto&quot;
                class=&quot;mb-0&quot;
                label-size=&quot;sm&quot;
                :description=&quot;searchDesc&quot;
                :disabled=&quot;disabled&quot;
              &gt;
                &lt;b-form-input
                  v-model=&quot;search&quot;
                  id=&quot;tag-search-input&quot;
                  type=&quot;search&quot;
                  size=&quot;sm&quot;
                  autocomplete=&quot;off&quot;
                 &gt;&lt;/b-form-input&gt;
              &lt;/b-form-group&gt;
            &lt;/b-dropdown-form&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item-button
              v-for=&quot;option in availableOptions&quot;
              :key=&quot;option&quot;
              @click=&quot;onOptionClick({ option, addTag })&quot;
            &gt;
              {{ option }}
            &lt;/b-dropdown-item-button&gt;
            &lt;b-dropdown-text v-if=&quot;availableOptions.length === 0&quot;&gt;
              There are no tags available to select
            &lt;/b-dropdown-text&gt;
          &lt;/b-dropdown&gt;
        &lt;/template&gt;
      &lt;/b-form-tags&gt;
    &lt;/b-form-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [
           &quot;Xtreme Admin&quot;,
           &quot;Monster Admin&quot;,
           &quot;Material Pro Admin&quot;,
           &quot;Ample Admin&quot;,
           &quot;Severny Admin&quot;,
           &quot;Admin Pro&quot;,
           &quot;Admin Wrap&quot;,
        ],
        search: '',
        value: []
      }
    },
    computed: {
      criteria() {
        // Compute the search criteria
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        // Filter out already selected options
        const options = this.options.filter(opt =&gt; this.value.indexOf(opt) === -1)
        if (criteria) {
          // Show only options that match criteria
          return options.filter(opt =&gt; opt.toLowerCase().indexOf(criteria) &gt; -1);
        }
        // Show all options available
        return options
      },
      searchDesc() {
        if (this.criteria &amp;&amp; this.availableOptions.length === 0) {
          return 'There are no tags matching your search criteria'
        }
        return ''
      }
    },
    methods: {
      onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
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
      <b-form-group
        label="Tagged input using dropdown"
        label-for="tags-with-dropdown"
      >
        <b-form-tags
          id="tags-with-dropdown"
          v-model="value"
          no-outer-focus
          class="mb-2"
        >
          <template v-slot="{ tags, disabled, addTag, removeTag }">
            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                <b-form-tag
                  @remove="removeTag(tag)"
                  :title="tag"
                  :disabled="disabled"
                  variant="info"
                  >{{ tag }}</b-form-tag
                >
              </li>
            </ul>

            <b-dropdown
              size="sm"
              variant="outline-secondary"
              block
              menu-class="w-100"
            >
              <template #button-content>
                <feather type="bookmark" class="feather-sm"></feather>
                Choose tags
              </template>
              <b-dropdown-form @submit.stop.prevent="() => {}">
                <b-form-group
                  label="Search tags"
                  label-for="tag-search-input"
                  label-cols-md="auto"
                  class="mb-0"
                  label-size="sm"
                  :description="searchDesc"
                  :disabled="disabled"
                >
                  <b-form-input
                    v-model="search"
                    id="tag-search-input"
                    type="search"
                    size="sm"
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </b-dropdown-form>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button
                v-for="option in availableOptions"
                :key="option"
                @click="onOptionClick({ option, addTag })"
              >
                {{ option }}
              </b-dropdown-item-button>
              <b-dropdown-text v-if="availableOptions.length === 0">
                There are no tags available to select
              </b-dropdown-text>
            </b-dropdown>
          </template>
        </b-form-tags>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownTags",

  data: () => ({
    option: "",
    tag: "",
    options: [
      "Xtreme Admin",
      "Monster Admin",
      "Material Pro Admin",
      "Ample Admin",
      "Severny Admin",
      "Admin Pro",
      "Admin Wrap",
    ],
    search: "",
    value: [],
  }),
  components: { BaseCard },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase();
    },
    availableOptions() {
      const criteria = this.criteria;
      // Filter out already selected options
      const options = this.options.filter(
        (opt) => this.value.indexOf(opt) === -1
      );
      if (criteria) {
        // Show only options that match criteria
        return options.filter(
          (opt) => opt.toLowerCase().indexOf(criteria) > -1
        );
      }
      // Show all options available
      return options;
    },
    searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return "There are no tags matching your search criteria";
      }
      return "";
    },
  },
  methods: {
    onOptionClick({ option, addTag }) {
      addTag(option);
      this.search = "";
    },
  },
};
</script>