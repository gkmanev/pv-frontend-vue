<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Navbar -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Navbar"
    subtitle="The component <b-navbar> is a wrapper that positions branding, navigation, and other elements into a concise header."
    modalid="modal-1"
    modaltitle="Basic Navbar"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-navbar toggleable=&quot;lg&quot; type=&quot;dark&quot; variant=&quot;info&quot;&gt;
  &lt;b-navbar-brand href=&quot;#&quot;&gt;NavBar&lt;/b-navbar-brand&gt;

  &lt;b-navbar-toggle target=&quot;nav-collapse&quot;&gt;&lt;/b-navbar-toggle&gt;

  &lt;b-collapse id=&quot;nav-collapse&quot; is-nav&gt;
    &lt;b-navbar-nav&gt;
      &lt;b-nav-item href=&quot;#&quot;&gt;Link&lt;/b-nav-item&gt;
      &lt;b-nav-item href=&quot;#&quot; disabled&gt;Disabled&lt;/b-nav-item&gt;
    &lt;/b-navbar-nav&gt;

    &lt;!-- Right aligned nav items --&gt;
    &lt;b-navbar-nav class=&quot;ml-auto&quot;&gt;
      &lt;b-nav-form&gt;
        &lt;b-form-input
          size=&quot;sm&quot;
          class=&quot;mr-sm-2&quot;
          placeholder=&quot;Search&quot;&gt;
        &lt;/b-form-input&gt;
        &lt;b-button size=&quot;sm&quot; class=&quot;my-2 my-sm-0&quot; type=&quot;submit&quot;&gt;Search&lt;/b-button&gt;
      &lt;/b-nav-form&gt;

      &lt;b-nav-item-dropdown text=&quot;Lang&quot; right&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;EN&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;ES&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;RU&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;FA&lt;/b-dropdown-item&gt;
      &lt;/b-nav-item-dropdown&gt;

      &lt;b-nav-item-dropdown right&gt;
        &lt;!-- Using 'button-content' slot --&gt;
        &lt;template #button-content&gt;
          &lt;em&gt;User&lt;/em&gt;
        &lt;/template&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Profile&lt;/b-dropdown-item&gt;
        &lt;b-dropdown-item href=&quot;#&quot;&gt;Sign Out&lt;/b-dropdown-item&gt;
      &lt;/b-nav-item-dropdown&gt;
    &lt;/b-navbar-nav&gt;
  &lt;/b-collapse&gt;
&lt;/b-navbar&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search">
              </b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicNavbar",

  data: () => ({}),
  components: { BaseCard },
};
</script>