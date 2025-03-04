<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Varient Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Varient Popover"
    subtitle=""
    modalid="modal-5"
    modaltitle="Varient Popover"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;text-center btn-grp&quot;&gt;
  &lt;b-button
    id=&quot;popover-button-variant&quot;
    variant=&quot;danger&quot;
    href=&quot;#&quot;
    tabindex=&quot;0&quot;&gt;Danger&lt;/b-button&gt;
  &lt;b-popover
    target=&quot;popover-button-variant&quot;
    variant=&quot;danger&quot;
    triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Danger!&lt;/template&gt;
    Danger variant popover
  &lt;/b-popover&gt;
  &lt;b-button
    id=&quot;popover-button-variant2&quot;
    variant=&quot;success&quot;
    href=&quot;#&quot;
    tabindex=&quot;0&quot;&gt;Success&lt;/b-button&gt;
  &lt;b-popover
    target=&quot;popover-button-variant2&quot;
    variant=&quot;success&quot;
    triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Success!&lt;/template&gt;
    Success variant popover
  &lt;/b-popover&gt;
  &lt;b-button
    id=&quot;popover-button-variant3&quot;
    variant=&quot;primary&quot;
    href=&quot;#&quot;
    tabindex=&quot;0&quot;&gt;Primary&lt;/b-button&gt;
  &lt;b-popover
    target=&quot;popover-button-variant3&quot;
    variant=&quot;primary&quot;
    triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Primary!&lt;/template&gt;
    Primary variant popover
  &lt;/b-popover&gt;
  &lt;b-button
    id=&quot;popover-button-variant4&quot;
    variant=&quot;info&quot;
    href=&quot;#&quot;
    tabindex=&quot;0&quot;&gt;Info&lt;/b-button&gt;
  &lt;b-popover
    target=&quot;popover-button-variant4&quot;
    variant=&quot;info&quot;
    triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Info!&lt;/template&gt;
    Info variant popover
  &lt;/b-popover&gt;
  &lt;b-button
    id=&quot;popover-button-variant5&quot;
    variant=&quot;warning&quot;
    href=&quot;#&quot;
    tabindex=&quot;0&quot;&gt;Warning&lt;/b-button&gt;
  &lt;b-popover
    target=&quot;popover-button-variant5&quot;
    variant=&quot;warning&quot;
    triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Warning!&lt;/template&gt;
    Warning variant popover
  &lt;/b-popover&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="text-center btn-grp">
        <b-button
          id="popover-button-variant"
          variant="danger"
          href="#"
          tabindex="0">Danger</b-button>
        <b-popover
          target="popover-button-variant"
          variant="danger"
          triggers="focus">
          <template #title>Danger!</template>
          Danger variant popover
        </b-popover>
        <b-button
          id="popover-button-variant2"
          variant="success"
          href="#"
          tabindex="0">Success</b-button>
        <b-popover
          target="popover-button-variant2"
          variant="success"
          triggers="focus">
          <template #title>Success!</template>
          Success variant popover
        </b-popover>
        <b-button
          id="popover-button-variant3"
          variant="primary"
          href="#"
          tabindex="0">Primary</b-button>
        <b-popover
          target="popover-button-variant3"
          variant="primary"
          triggers="focus">
          <template #title>Primary!</template>
          Primary variant popover
        </b-popover>
        <b-button
          id="popover-button-variant4"
          variant="info"
          href="#"
          tabindex="0">Info</b-button>
        <b-popover
          target="popover-button-variant4"
          variant="info"
          triggers="focus">
          <template #title>Info!</template>
          Info variant popover
        </b-popover>
        <b-button
          id="popover-button-variant5"
          variant="warning"
          href="#"
          tabindex="0">Warning</b-button>
        <b-popover
          target="popover-button-variant5"
          variant="warning"
          triggers="focus">
          <template #title>Warning!</template>
          Warning variant popover
        </b-popover>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "VarientPopover",

  data: () => ({}),
  components: { BaseCard },
};
</script>