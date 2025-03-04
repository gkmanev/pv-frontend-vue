<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- List groups inside cards -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="List groups inside cards"
    subtitle="Incorporate list groups into cards. Use the <b-list-group> prop flush prop when using cards with no-body to make the sides of the list group flush with the card."
    modalid="modal-9"
    modaltitle="List groups inside cards"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-card-group deck&gt;
&lt;b-card header=&quot;Card with list group&quot; class=&quot;border&quot;&gt;
  &lt;b-list-group&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;Cras justo odio&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;
      &gt;Dapibus ac facilisis in&lt;/b-list-group-item
    &gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
  &lt;/b-list-group&gt;

  &lt;p class=&quot;card-text mt-2&quot;&gt;
    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
    nulla tempor. Laborum consequat non elit enim exercitation cillum
    aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est
    in duis laboris ad sit ipsum anim Lorem.
  &lt;/p&gt;
&lt;/b-card&gt;

&lt;b-card no-body header=&quot;Card with flush list group&quot; class=&quot;border&quot;&gt;
  &lt;b-list-group flush&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;Cras justo odio&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;
      &gt;Dapibus ac facilisis in&lt;/b-list-group-item
    &gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
  &lt;/b-list-group&gt;

  &lt;b-card-body&gt;
    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
    nulla tempor. Laborum consequat non elit enim exercitation cillum
    aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est
    in duis laboris ad sit ipsum anim Lorem.
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
&lt;/b-card-group&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-card-group deck>
        <b-card header="Card with list group" class="border">
          <b-list-group>
            <b-list-group-item href="#">Cras justo odio</b-list-group-item>
            <b-list-group-item href="#"
              >Dapibus ac facilisis in</b-list-group-item
            >
            <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
          </b-list-group>

          <p class="card-text mt-2">
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
            nulla tempor. Laborum consequat non elit enim exercitation cillum
            aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est
            in duis laboris ad sit ipsum anim Lorem.
          </p>
        </b-card>

        <b-card no-body header="Card with flush list group" class="border">
          <b-list-group flush>
            <b-list-group-item href="#">Cras justo odio</b-list-group-item>
            <b-list-group-item href="#"
              >Dapibus ac facilisis in</b-list-group-item
            >
            <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
          </b-list-group>

          <b-card-body>
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
            nulla tempor. Laborum consequat non elit enim exercitation cillum
            aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est
            in duis laboris ad sit ipsum anim Lorem.
          </b-card-body>
        </b-card>
      </b-card-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InsideCardListGroup",

  data: () => ({}),
  components: { BaseCard },
};
</script>