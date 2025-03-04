<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Blank (or solid color) images -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Blank (or solid color) images" modalid="modal-7" modaltitle="Blank (or solid color) images">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; alt=&quot;Transparent image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; blank-color=&quot;#777&quot; alt=&quot;HEX shorthand color image (#777)&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; blank-color=&quot;red&quot; alt=&quot;Named color image (red)&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; blank-color=&quot;black&quot; alt=&quot;Named color image (black)&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; blank-color=&quot;#338833&quot; alt=&quot;HEX color image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; blank-color=&quot;rgba(128, 255, 255, 0.5)&quot; alt=&quot;RGBa color image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; blank-color=&quot;#88f&quot; alt=&quot;HEX shorthand color (#88f)&quot;&gt;&lt;/b-img&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        mainProps: { blank: true, width: 75, height: 75, class: 'm1' }
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
      <b-img
        class="mr-2"
        v-bind="mainProps"
        blank-color="#777"
        alt="HEX shorthand color image (#777)"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        blank-color="red"
        alt="Named color image (red)"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        blank-color="black"
        alt="Named color image (black)"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        blank-color="#338833"
        alt="HEX color image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        blank-color="rgba(128, 255, 255, 0.5)"
        alt="RGBa color image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        blank-color="#88f"
        alt="HEX shorthand color (#88f)"
      ></b-img>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SolidImages",

  data: () => ({
    mainProps: { blank: true, width: 75, height: 75, class: "m1" },
  }),
  components: { BaseCard },
};
</script>