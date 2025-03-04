<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Avatar Button -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Avatar Button" 
    subtitle="Want to trigger the opening of a modal or trigger an action? Set the
          button prop to instruct b-avatar to render as a button element." 
    modalid="modal-4"
    modaltitle="Avatar Button"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-list-group&gt;
  &lt;b-list-group-item&gt;
    &lt;b-avatar
      button
      @click=&quot;onClick&quot;
      variant=&quot;primary&quot;
      text=&quot;FF&quot;
      class=&quot;align-baseline mr-2&quot;
    &gt;&lt;/b-avatar&gt;
    Button Text Avatar
  &lt;/b-list-group-item&gt;
  &lt;b-list-group-item&gt;
    &lt;b-avatar
      button
      @click=&quot;onClick&quot;
      src=&quot;https://placekitten.com/300/300&quot;
      class=&quot;mr-2&quot;
    &gt;&lt;/b-avatar&gt;
    Button Image Avatar
  &lt;/b-list-group-item&gt;
  &lt;b-list-group-item&gt;
    &lt;b-avatar button @click=&quot;onClick&quot; class=&quot;align-center mr-2&quot;&gt;
      &lt;feather type=&quot;star&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
    &lt;/b-avatar&gt;
    Button Icon Avatar
  &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
        <b-list-group>
        <b-list-group-item>
          <b-avatar
            button
            @click="onClick"
            variant="primary"
            text="FF"
            class="align-baseline mr-2"
          ></b-avatar>
          Button Text Avatar
        </b-list-group-item>
        <b-list-group-item>
          <b-avatar
            button
            @click="onClick"
            :src="img1" variant="none"
            class="mr-2"
          ></b-avatar>
          Button Image Avatar
        </b-list-group-item>
        <b-list-group-item>
          <b-avatar button @click="onClick" class="align-center mr-2">
            <feather type="star" class="feather-sm"></feather>
          </b-avatar>
          Button Icon Avatar
        </b-list-group-item>
      </b-list-group>
    </template> 
   
  </BaseCard>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";
import BaseCard from "../../card/BaseCard";
export default {
  name: "AvatarButton",

  data: () => ({
    img1,
  }),
  methods: {
    onClick() {
      this.$bvModal.msgBoxOk("User name: Fred Flintstone", {
        title: "User Info",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
      });
    },
  },
  components: { BaseCard },
};
</script>