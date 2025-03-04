<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Plain style -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Card with Plain style" modalid="modal-4" modaltitle="Card with Plain style">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-card title=&quot;Card Title&quot; no-body&gt;
  &lt;b-card-header header-tag=&quot;nav&quot;&gt;
    &lt;b-nav&gt;
      &lt;b-nav-item active&gt;Active&lt;/b-nav-item&gt;
      &lt;b-nav-item&gt;Inactive&lt;/b-nav-item&gt;
      &lt;b-nav-item disabled&gt;Disabled&lt;/b-nav-item&gt;
    &lt;/b-nav&gt;
  &lt;/b-card-header&gt;

  &lt;b-card-body&gt;
    &lt;b-card-text&gt;
      With supporting text below as a natural lead-in to additional
      content.
    &lt;/b-card-text&gt;

    &lt;b-button variant=&quot;danger&quot;&gt;Go somewhere&lt;/b-button&gt;
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
          <b-nav>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Inactive</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body>
          <b-card-text>
            With supporting text below as a natural lead-in to additional
            content.
          </b-card-text>

          <b-button variant="danger">Go somewhere</b-button>
        </b-card-body>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CardPlainNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>