<template>
  <div>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Equal-width columns -->
    <!-- ----------------------------------------------------------------------------- -->
    <BaseCard
      title="Equal-width columns"
      subtitle="For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width."
      modalid="modal-1"
      modaltitle="Equal-width columns"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
        <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;1 of 2&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;2 of 2&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;1 of 3&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;2 of 3&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;3 of 3&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
        </code>
      </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="p-3 bg-light border mb-3">1 of 2</b-col>
            <b-col class="p-3 bg-light border mb-3">2 of 2</b-col>
          </b-row>

          <b-row>
            <b-col class="p-3 bg-light border mb-3">1 of 3</b-col>
            <b-col class="p-3 bg-light border mb-3">2 of 3</b-col>
            <b-col class="p-3 bg-light border mb-3">3 of 3</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 2 -->
    <BaseCard
      title="Equal-width multi-line"
      subtitle="Create equal-width columns that span multiple lines by inserting a .w-100 where you want the columns to break to a new line. Make the breaks responsive by mixing .w-100 with some responsive display utilities."
      modalid="modal-2"
      modaltitle="Equal-width multi-line"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;Column&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;Column&lt;/b-col&gt;
    &lt;div class=&quot;w-100&quot;&gt;&lt;/div&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;Column&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;Column&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="p-3 bg-light border mb-3">Column</b-col>
            <b-col class="p-3 bg-light border mb-3">Column</b-col>
            <div class="w-100"></div>
            <b-col class="p-3 bg-light border mb-3">Column</b-col>
            <b-col class="p-3 bg-light border mb-3">Column</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 3 -->
    <BaseCard
      title="Setting one column width"
      subtitle="Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column."
      modalid="modal-3"
      modaltitle="Setting one column width"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row class=&quot;text-center&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;1 of 3&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; cols=&quot;8&quot;
      &gt;2 of 3 (wider)&lt;/b-col
    &gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;3 of 3&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row class=&quot;text-center&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;1 of 3&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; cols=&quot;5&quot;
      &gt;2 of 3 (wider)&lt;/b-col
    &gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot;&gt;3 of 3&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row class="text-center">
            <b-col class="p-3 bg-light border mb-3">1 of 3</b-col>
            <b-col class="p-3 bg-light border mb-3" cols="8"
              >2 of 3 (wider)</b-col
            >
            <b-col class="p-3 bg-light border mb-3">3 of 3</b-col>
          </b-row>

          <b-row class="text-center">
            <b-col class="p-3 bg-light border mb-3">1 of 3</b-col>
            <b-col class="p-3 bg-light border mb-3" cols="5"
              >2 of 3 (wider)</b-col
            >
            <b-col class="p-3 bg-light border mb-3">3 of 3</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 4 -->
    <BaseCard
      title="Variable width content"
      subtitle="Use {breakpoint}='auto' props to size columns based on the natural width of their content."
      modalid="modal-4"
      modaltitle="Variable width content"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row class=&quot;justify-content-md-center&quot;&gt;
    &lt;b-col class=&quot;p-3 border bg-light mb-3&quot; col lg=&quot;2&quot;&gt;1 of 3&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 border bg-light mb-3&quot; cols=&quot;12&quot; md=&quot;auto&quot;
      &gt;Variable width content&lt;/b-col
    &gt;
    &lt;b-col class=&quot;p-3 border bg-light mb-3&quot; col lg=&quot;2&quot;&gt;3 of 3&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 border bg-light mb-3&quot;&gt;1 of 3&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 border bg-light mb-3&quot; cols=&quot;12&quot; md=&quot;auto&quot;
      &gt;Variable width content&lt;/b-col
    &gt;
    &lt;b-col class=&quot;p-3 border bg-light mb-3&quot; col lg=&quot;2&quot;&gt;3 of 3&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col class="p-3 border bg-light mb-3" col lg="2">1 of 3</b-col>
            <b-col class="p-3 border bg-light mb-3" cols="12" md="auto"
              >Variable width content</b-col
            >
            <b-col class="p-3 border bg-light mb-3" col lg="2">3 of 3</b-col>
          </b-row>

          <b-row>
            <b-col class="p-3 border bg-light mb-3">1 of 3</b-col>
            <b-col class="p-3 border bg-light mb-3" cols="12" md="auto"
              >Variable width content</b-col
            >
            <b-col class="p-3 border bg-light mb-3" col lg="2">3 of 3</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 5 -->
    <BaseCard
      title="All breakpoints"
      subtitle="For grids that are the same from the smallest of devices to the largest, use the col and cols='*' props. Specify a number of cols when you need a particularly sized column; otherwise, feel free to stick to col (which is applied automatically if no cols are specified)."
      modalid="modal-5"
      modaltitle="All breakpoints"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;border p-3 bg-light mb-3&quot;&gt;col&lt;/b-col&gt;
    &lt;b-col class=&quot;border p-3 bg-light mb-3&quot;&gt;col&lt;/b-col&gt;
    &lt;b-col class=&quot;border p-3 bg-light mb-3&quot;&gt;col&lt;/b-col&gt;
    &lt;b-col class=&quot;border p-3 bg-light mb-3&quot;&gt;col&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row&gt;
    &lt;b-col class=&quot;border p-3 bg-light mb-3&quot; cols=&quot;8&quot;&gt;col-8&lt;/b-col&gt;
    &lt;b-col class=&quot;border p-3 bg-light mb-3&quot; cols=&quot;4&quot;&gt;col-4&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="border p-3 bg-light mb-3">col</b-col>
            <b-col class="border p-3 bg-light mb-3">col</b-col>
            <b-col class="border p-3 bg-light mb-3">col</b-col>
            <b-col class="border p-3 bg-light mb-3">col</b-col>
          </b-row>

          <b-row>
            <b-col class="border p-3 bg-light mb-3" cols="8">col-8</b-col>
            <b-col class="border p-3 bg-light mb-3" cols="4">col-4</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 6 -->
    <BaseCard
      title="Stacked to horizontal"
      subtitle="Using a single set of sm='*' or sm (boolean for equal width @sm) props, you can create a basic grid system that starts out stacked on extra small devices before becoming horizontal on desktop (medium) devices."
      modalid="modal-6"
      modaltitle="Stacked to horizontal"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; sm=&quot;8&quot;&gt;col-sm-8&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; sm=&quot;4&quot;&gt;col-sm-4&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; sm&gt;col-sm&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; sm&gt;col-sm&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; sm&gt;col-sm&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="p-3 bg-light border mb-3" sm="8">col-sm-8</b-col>
            <b-col class="p-3 bg-light border mb-3" sm="4">col-sm-4</b-col>
          </b-row>

          <b-row>
            <b-col class="p-3 bg-light border mb-3" sm>col-sm</b-col>
            <b-col class="p-3 bg-light border mb-3" sm>col-sm</b-col>
            <b-col class="p-3 bg-light border mb-3" sm>col-sm</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 7 -->
    <BaseCard
      title="Mix and match"
      subtitle="Don't want your columns to simply stack in some grid tiers? Use a combination of different props for each tier as needed. See the example below for a better idea of how it all works."
      modalid="modal-7"
      modaltitle="Mix and match"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;!-- Stack the columns on mobile by making one full-width and the other half-width --&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;12&quot; md=&quot;8&quot;&gt;cols=&quot;12&quot; md=&quot;8&quot;&lt;/b-col&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;6&quot; md=&quot;4&quot;&gt;cols=&quot;6&quot; md=&quot;4&quot;&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;6&quot; md=&quot;4&quot;&gt;cols=&quot;6&quot; md=&quot;4&quot;&lt;/b-col&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;6&quot; md=&quot;4&quot;&gt;cols=&quot;6&quot; md=&quot;4&quot;&lt;/b-col&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;6&quot; md=&quot;4&quot;&gt;cols=&quot;6&quot; md=&quot;4&quot;&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;!-- Columns are always 50% wide, on mobile and desktop --&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;6&quot;&gt;cols=&quot;6&quot;&lt;/b-col&gt;
    &lt;b-col class=&quot;border mb-3 p-3 bg-light&quot; cols=&quot;6&quot;&gt;cols=&quot;6&quot;&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <b-row>
            <b-col class="border mb-3 p-3 bg-light" cols="12" md="8">cols="12" md="8"</b-col>
            <b-col class="border mb-3 p-3 bg-light" cols="6" md="4">cols="6" md="4"</b-col>
          </b-row>

          <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <b-row>
            <b-col class="border mb-3 p-3 bg-light" cols="6" md="4">cols="6" md="4"</b-col>
            <b-col class="border mb-3 p-3 bg-light" cols="6" md="4">cols="6" md="4"</b-col>
            <b-col class="border mb-3 p-3 bg-light" cols="6" md="4">cols="6" md="4"</b-col>
          </b-row>

          <!-- Columns are always 50% wide, on mobile and desktop -->
          <b-row>
            <b-col class="border mb-3 p-3 bg-light" cols="6">cols="6"</b-col>
            <b-col class="border mb-3 p-3 bg-light" cols="6">cols="6"</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 8 -->
    <BaseCard
      title="Vertical alignment"
      subtitle="For vertical alignment of all grid cells in a row, use the align-v prop on <b-row>. Possible values are 'start', 'center', 'end', 'baseline', and 'stretch':"
      modalid="modal-8"
      modaltitle="Vertical alignment"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row bv-example-row-flex-cols&quot;&gt;
&lt;b-row
  align-v=&quot;start&quot;
  style=&quot;min-height: 10rem&quot;
  class=&quot;bg-light-info mb-3&quot;
&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
&lt;/b-row&gt;

&lt;b-row
  align-v=&quot;center&quot;
  style=&quot;min-height: 10rem&quot;
  class=&quot;bg-light-info mb-3&quot;
&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
&lt;/b-row&gt;

&lt;b-row
  align-v=&quot;end&quot;
  style=&quot;min-height: 10rem&quot;
  class=&quot;bg-light-info mb-3&quot;
&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
&lt;/b-row&gt;

&lt;b-row
  align-v=&quot;baseline&quot;
  style=&quot;min-height: 10rem&quot;
  class=&quot;bg-light-info mb-3&quot;
&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot; style=&quot;font-size: 0.75rem&quot;
    &gt;One of three columns&lt;/b-col
  &gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot; style=&quot;font-size: 1.25rem&quot;
    &gt;One of three columns&lt;/b-col
  &gt;
&lt;/b-row&gt;

&lt;b-row
  align-v=&quot;stretch&quot;
  style=&quot;min-height: 10rem&quot;
  class=&quot;bg-light-info mb-3&quot;
&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
  &lt;b-col class=&quot;p-3 mb-3 bg-light border&quot;&gt;One of three columns&lt;/b-col&gt;
&lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row bv-example-row-flex-cols">
          <b-row
            align-v="start"
            style="min-height: 10rem"
            class="bg-light-info mb-3"
          >
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
          </b-row>

          <b-row
            align-v="center"
            style="min-height: 10rem"
            class="bg-light-info mb-3"
          >
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
          </b-row>

          <b-row
            align-v="end"
            style="min-height: 10rem"
            class="bg-light-info mb-3"
          >
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
          </b-row>

          <b-row
            align-v="baseline"
            style="min-height: 10rem"
            class="bg-light-info mb-3"
          >
            <b-col class="p-3 mb-3 bg-light border" style="font-size: 0.75rem"
              >One of three columns</b-col
            >
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border" style="font-size: 1.25rem"
              >One of three columns</b-col
            >
          </b-row>

          <b-row
            align-v="stretch"
            style="min-height: 10rem"
            class="bg-light-info mb-3"
          >
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
            <b-col class="p-3 mb-3 bg-light border">One of three columns</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 9 -->
    <BaseCard
      title="Horizontal alignment"
      subtitle="To horizontally align grid cells within a row, use the align-h prop on <b-row>. Possible values are: 'start', 'center', 'end', 'around', and 'between'"
      modalid="modal-9"
      modaltitle="Horizontal alignment"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container class=&quot;bv-example-row&quot;&gt;
  &lt;b-row align-h=&quot;start&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row align-h=&quot;center&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row align-h=&quot;end&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row align-h=&quot;around&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row align-h=&quot;between&quot;&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; cols=&quot;4&quot;&gt;One of two columns&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container class="bv-example-row">
          <b-row align-h="start">
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
          </b-row>

          <b-row align-h="center">
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
          </b-row>

          <b-row align-h="end">
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
          </b-row>

          <b-row align-h="around">
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
          </b-row>

          <b-row align-h="between">
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
            <b-col class="p-3 bg-light mb-3 border" cols="4">One of two columns</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 10 -->
    <BaseCard
      title="Offsetting columns"
      subtitle="You can offset grid columns in two ways: our responsive offset-* props or the margin utility classes."
      modalid="modal-10"
      modaltitle="Offsetting columns"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container fluid class=&quot;bv-example-row&quot;&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; md=&quot;4&quot;&gt;md=&quot;4&quot;&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; md=&quot;4&quot; offset-md=&quot;4&quot;&gt;md=&quot;4&quot; offset-md=&quot;4&quot;&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; md=&quot;3&quot; offset-md=&quot;3&quot;&gt;md=&quot;3&quot; offset-md=&quot;3&quot;&lt;/b-col&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; md=&quot;3&quot; offset-md=&quot;3&quot;&gt;md=&quot;3&quot; offset-md=&quot;3&quot;&lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light mb-3 border&quot; md=&quot;6&quot; offset-md=&quot;3&quot;&gt;md=&quot;6&quot; offset-md=&quot;3&quot;&lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col class="p-3 bg-light mb-3 border" md="4">md="4"</b-col>
            <b-col class="p-3 bg-light mb-3 border" md="4" offset-md="4">md="4" offset-md="4"</b-col>
          </b-row>

          <b-row>
            <b-col class="p-3 bg-light mb-3 border" md="3" offset-md="3">md="3" offset-md="3"</b-col>
            <b-col class="p-3 bg-light mb-3 border" md="3" offset-md="3">md="3" offset-md="3"</b-col>
          </b-row>

          <b-row>
            <b-col class="p-3 bg-light mb-3 border" md="6" offset-md="3">md="6" offset-md="3"</b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>

    <!-- 11 -->
    <BaseCard
      title="Nesting grids"
      subtitle="To nest your content with the default grid, add a new <b-row> and set of <b-col> components within an existing <b-col> component."
      modalid="modal-11"
      modaltitle="Nesting grids"
    >
      <!-- --------------------------
      code view
      ---------------------------- -->
      <template v-slot:highlight>
        <pre class="mb-0">
          <code class="javascript">
&lt;b-container fluid class=&quot;bv-example-row&quot;&gt;
  &lt;b-row&gt;
    &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; sm=&quot;9&quot;&gt;
      Level 1: sm=&quot;9&quot;
      &lt;b-row&gt;
        &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; cols=&quot;8&quot; sm=&quot;6&quot;
          &gt;Level 2: cols=&quot;8&quot; sm=&quot;6&quot;&lt;/b-col
        &gt;
        &lt;b-col class=&quot;p-3 bg-light border mb-3&quot; cols=&quot;4&quot; sm=&quot;6&quot;
          &gt;Level 2: cols=&quot;4&quot; sm=&quot;6&quot;&lt;/b-col
        &gt;
      &lt;/b-row&gt;
    &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/b-container&gt;
          </code>
        </pre>
      </template>
      <!-- --------------------------
      code view
      ---------------------------- -->

      <template v-slot:comcode>
        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col class="p-3 bg-light border mb-3" sm="9">
              Level 1: sm="9"
              <b-row>
                <b-col class="p-3 bg-light border mb-3" cols="8" sm="6"
                  >Level 2: cols="8" sm="6"</b-col
                >
                <b-col class="p-3 bg-light border mb-3" cols="4" sm="6"
                  >Level 2: cols="4" sm="6"</b-col
                >
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicGrid",

  data: () => ({}),
  components: { BaseCard },
};
</script>