<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rounded corner -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Rounded corners" modalid="modal-4" modaltitle="Rounded corners">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded alt=&quot;Rounded image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded=&quot;top&quot; alt=&quot;Top-rounded image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded=&quot;right&quot; alt=&quot;Right-rounded image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded=&quot;bottom&quot; alt=&quot;Bottom-rounded image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded=&quot;left&quot; alt=&quot;Left-rounded image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded=&quot;circle&quot; alt=&quot;Circle image&quot;&gt;&lt;/b-img&gt;
    &lt;b-img v-bind=&quot;mainProps&quot; rounded=&quot;0&quot; alt=&quot;Not rounded image&quot;&gt;&lt;/b-img&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
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
        rounded
        alt="Rounded image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        rounded="top"
        alt="Top-rounded image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        rounded="right"
        alt="Right-rounded image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        rounded="bottom"
        alt="Bottom-rounded image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        rounded="left"
        alt="Left-rounded image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        rounded="circle"
        alt="Circle image"
      ></b-img>
      <b-img
        class="mr-2"
        v-bind="mainProps"
        rounded="0"
        alt="Not rounded image"
      ></b-img>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "RoundedCorners",

  data: () => ({
    mainProps: {
      blank: true,
      blankColor: "#777",
      width: 75,
      height: 75,
      class: "m1",
    },
  }),
  components: { BaseCard },
};
</script>