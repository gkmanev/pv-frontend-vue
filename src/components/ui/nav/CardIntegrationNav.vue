<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card integration -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Card integration"
    subtitle="Use a <b-nav> in a <b-card> header, by enabling the card-header prop on <b-nav> and setting either the pills or tabs props:"
    modalid="modal-2"
    modaltitle="Card integration"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-card title=&quot;Card Title&quot; no-body&gt;
  &lt;b-card-header header-tag=&quot;nav&quot;&gt;
    &lt;b-nav card-header tabs&gt;
      &lt;b-nav-item
        to=&quot;#&quot;
        :active=&quot;$route.hash === '#' || $route.hash === ''&quot;&gt;
        One
      &lt;/b-nav-item&gt;
      &lt;b-nav-item to=&quot;#two&quot; :active=&quot;$route.hash === '#two'&quot;&gt;
        Two
      &lt;/b-nav-item&gt;
      &lt;b-nav-item to=&quot;#three&quot; :active=&quot;$route.hash === '#three'&quot;&gt;
        Three
      &lt;/b-nav-item&gt;
    &lt;/b-nav&gt;
  &lt;/b-card-header&gt;

  &lt;b-card-body&gt;
    &lt;div class=&quot;tab-content&quot;&gt;
      &lt;div
        :class=&quot;[
          'tab-pane',
          { active: $route.hash === '#' || $route.hash === '' },
        ]&quot;
        class=&quot;p-2&quot;&gt;
        &lt;b-card-text&gt;
          With supporting text below as a natural lead-in to additional
          content.
        &lt;/b-card-text&gt;

        &lt;b-button variant=&quot;primary&quot;&gt;Go somewhere&lt;/b-button&gt;
      &lt;/div&gt;
      &lt;div
        :class=&quot;['tab-pane', { active: $route.hash === '#two' }]&quot;
        class=&quot;p-2&quot;&gt;
        &lt;b-card-text&gt;
          With supporting text below as a natural lead-in to additional
          content.
        &lt;/b-card-text&gt;

        &lt;b-button variant=&quot;danger&quot;&gt;Go somewhere&lt;/b-button&gt;
      &lt;/div&gt;
      &lt;div
        :class=&quot;['tab-pane', { active: $route.hash === '#three' }]&quot;
        class=&quot;p-2&quot;&gt;
        &lt;b-card-text&gt;
          With supporting text below as a natural lead-in to additional
          content.
        &lt;/b-card-text&gt;

        &lt;b-button variant=&quot;success&quot;&gt;Go somewhere&lt;/b-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
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
          <b-nav card-header tabs>
            <b-nav-item
              to="#"
              :active="$route.hash === '#' || $route.hash === ''">
              One
            </b-nav-item>
            <b-nav-item to="#two" :active="$route.hash === '#two'">
              Two
            </b-nav-item>
            <b-nav-item to="#three" :active="$route.hash === '#three'">
              Three
            </b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body>
          <div class="tab-content">
            <div
              :class="[
                'tab-pane',
                { active: $route.hash === '#' || $route.hash === '' },
              ]"
              class="p-2">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>

              <b-button variant="primary">Go somewhere</b-button>
            </div>
            <div
              :class="['tab-pane', { active: $route.hash === '#two' }]"
              class="p-2">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>

              <b-button variant="danger">Go somewhere</b-button>
            </div>
            <div
              :class="['tab-pane', { active: $route.hash === '#three' }]"
              class="p-2">
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>

              <b-button variant="success">Go somewhere</b-button>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CardIntegrationNav",

  data: () => ({}),
  components: { BaseCard },
};
</script>