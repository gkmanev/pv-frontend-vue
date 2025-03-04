<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card Pill -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Card Pill"
    subtitle="Use a <b-nav> in a <b-card> header, by enabling the card-header prop on <b-nav> and setting either the pills or tabs props:"
    modalid="modal-3"
    modaltitle="Card Pill"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-card title=&quot;Card Title&quot; no-body&gt;
&lt;b-card-header header-tag=&quot;nav&quot;&gt;
  &lt;b-nav card-header pills&gt;
    &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
    &lt;b-nav-item&gt;Inactive&lt;/b-nav-item&gt;
    &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
  &lt;/b-nav&gt;
&lt;/b-card-header&gt;

&lt;b-card-body class=&quot;text-center&quot;&gt;
  &lt;b-card-text&gt;
    With supporting text below as a natural lead-in to additional
    content.
  &lt;/b-card-text&gt;

  &lt;b-button variant=&quot;success&quot;&gt;Go somewhere&lt;/b-button&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Inactive</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body class="text-center">
          <b-card-text>
            With supporting text below as a natural lead-in to additional
            content.
          </b-card-text>

          <b-button variant="success">Go somewhere</b-button>
        </b-card-body>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CardPillNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>