<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Popover"
    subtitle="The Popover feature, which provides a tooltip-like behavior, can be easily applied to any interactive element via the <b-popover> component or v-b-popover directive."
    modalid="modal-1"
    modaltitle="Popover"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-container fluid&gt;
    &lt;h5 class=&quot;my-3&quot;&gt;Placement&lt;/h5&gt;
    &lt;b-row&gt;
      &lt;b-col
        v-for=&quot;placement in placements&quot;
        :key=&quot;placement&quot;
        md=&quot;4&quot;
        class=&quot;py-4 text-center&quot;
      &gt;
        &lt;b-button :id=&quot;`popover-1-${placement}`&quot; variant=&quot;primary&quot;&gt;{{ placement }}&lt;/b-button&gt;
        &lt;b-popover
          :target=&quot;`popover-1-${placement}`&quot;
          :placement=&quot;placement&quot;
          title=&quot;Popover!&quot;
          triggers=&quot;hover focus&quot;
          :content=&quot;`Placement ${placement}`&quot;
        &gt;&lt;/b-popover&gt;
      &lt;/b-col&gt;
    &lt;/b-row&gt;

    &lt;h5 class=&quot;my-3&quot;&gt;Content via properties or slots&lt;/h5&gt;
    &lt;b-row&gt;
      &lt;b-col md=&quot;6&quot; class=&quot;py-4 text-center&quot;&gt;
        &lt;b-button id=&quot;popover-2&quot; variant=&quot;primary&quot;&gt;Using properties&lt;/b-button&gt;
        &lt;b-popover
          target=&quot;popover-2&quot;
          title=&quot;Prop Examples&quot;
          triggers=&quot;hover focus&quot;
          content=&quot;Embedding content using properties is easy&quot;
        &gt;&lt;/b-popover&gt;
      &lt;/b-col&gt;

      &lt;b-col md=&quot;6&quot; class=&quot;py-4 text-center&quot;&gt;
        &lt;b-button id=&quot;popover-3&quot; variant=&quot;primary&quot;&gt;Using slots&lt;/b-button&gt;
        &lt;b-popover target=&quot;popover-3&quot; triggers=&quot;hover focus&quot;&gt;
          &lt;template #title&gt;Content via Slots&lt;/template&gt;
          Embedding content &lt;span class=&quot;text-danger&quot;&gt;using slots&lt;/span&gt; affords you
          &lt;em&gt;greater &lt;strong&gt;control.&lt;/strong&gt;&lt;/em&gt; and basic HTML support.
        &lt;/b-popover&gt;
      &lt;/b-col&gt;
    &lt;/b-row&gt;
  &lt;/b-container&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        placements: [
          'topright',
          'top',
          'topleft',
          'bottomright',
          'bottom',
          'bottomleft',
          'righttop',
          'right',
          'lefttop',
          'rightbottom',
          'left',
          'leftbottom'
        ]
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
      <h5 class="my-3">Placement</h5>
      <b-row>
        <b-col
          v-for="placement in placements"
          :key="placement"
          md="4"
          xl="2"
          class="py-4 text-center"
        >
          <b-button :id="`popover-1-${placement}`" variant="primary">{{
            placement
          }}</b-button>
          <b-popover
            :target="`popover-1-${placement}`"
            :placement="placement"
            title="Popover!"
            triggers="hover focus"
            :content="`Placement ${placement}`"
          ></b-popover>
        </b-col>
      </b-row>

      <h5 class="my-3">Content via properties or slots</h5>
      <b-row>
        <b-col md="6" xl="2" class="py-4 text-center">
          <b-button id="popover-2" variant="primary">Using properties</b-button>
          <b-popover
            target="popover-2"
            title="Prop Examples"
            triggers="hover focus"
            content="Embedding content using properties is easy"
          ></b-popover>
        </b-col>

        <b-col md="6" class="py-4 text-center">
          <b-button id="popover-3" variant="primary">Using slots</b-button>
          <b-popover target="popover-3" triggers="hover focus">
            <template #title>Content via Slots</template>
            Embedding content
            <span class="text-danger">using slots</span> affords you
            <em>greater <strong>control.</strong></em> and basic HTML support.
          </b-popover>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicPopover",

  data: () => ({
    placement: "",
    placements: [
      "topright",
      "top",
      "topleft",
      "bottomright",
      "bottom",
      "bottomleft",
      "righttop",
      "right",
      "lefttop",
      "rightbottom",
      "left",
      "leftbottom",
    ],
  }),
  components: { BaseCard },
};
</script>