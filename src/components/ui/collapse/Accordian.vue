<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Accordion -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Accordion" 
     
    modalid="modal-1"
    modaltitle="Accordion"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
      <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;accordion&quot; role=&quot;tablist&quot;&gt;
    &lt;b-card no-body class=&quot;mb-1&quot;&gt;
      &lt;b-card-header header-tag=&quot;header&quot; class=&quot;p-1&quot; role=&quot;tab&quot;&gt;
        &lt;b-button block v-b-toggle.accordion-1 variant=&quot;info&quot;&gt;Accordion 1&lt;/b-button&gt;
      &lt;/b-card-header&gt;
      &lt;b-collapse id=&quot;accordion-1&quot; visible accordion=&quot;my-accordion&quot; role=&quot;tabpanel&quot;&gt;
        &lt;b-card-body&gt;
          &lt;b-card-text&gt;I start opened because &lt;code&gt;visible&lt;/code&gt; is &lt;code&gt;true&lt;/code&gt;&lt;/b-card-text&gt;
          &lt;b-card-text&gt;{{ text }}&lt;/b-card-text&gt;
        &lt;/b-card-body&gt;
      &lt;/b-collapse&gt;
    &lt;/b-card&gt;

    &lt;b-card no-body class=&quot;mb-1&quot;&gt;
      &lt;b-card-header header-tag=&quot;header&quot; class=&quot;p-1&quot; role=&quot;tab&quot;&gt;
        &lt;b-button block v-b-toggle.accordion-2 variant=&quot;info&quot;&gt;Accordion 2&lt;/b-button&gt;
      &lt;/b-card-header&gt;
      &lt;b-collapse id=&quot;accordion-2&quot; accordion=&quot;my-accordion&quot; role=&quot;tabpanel&quot;&gt;
        &lt;b-card-body&gt;
          &lt;b-card-text&gt;{{ text }}&lt;/b-card-text&gt;
        &lt;/b-card-body&gt;
      &lt;/b-collapse&gt;
    &lt;/b-card&gt;

    &lt;b-card no-body class=&quot;mb-1&quot;&gt;
      &lt;b-card-header header-tag=&quot;header&quot; class=&quot;p-1&quot; role=&quot;tab&quot;&gt;
        &lt;b-button block v-b-toggle.accordion-3 variant=&quot;info&quot;&gt;Accordion 3&lt;/b-button&gt;
      &lt;/b-card-header&gt;
      &lt;b-collapse id=&quot;accordion-3&quot; accordion=&quot;my-accordion&quot; role=&quot;tabpanel&quot;&gt;
        &lt;b-card-body&gt;
          &lt;b-card-text&gt;{{ text }}&lt;/b-card-text&gt;
        &lt;/b-card-body&gt;
      &lt;/b-collapse&gt;
    &lt;/b-card&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
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
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="primary"
              >Accordion 1</b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel">
            <b-card-body>
              <b-card-text>I start opened because <code>visible</code> is
                <code>true</code></b-card-text>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="primary"
              >Accordion 2</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="primary"
              >Accordion 3</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "Accordian",

  data: () => ({
    text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
  }),
  components: { BaseCard },
};
</script>