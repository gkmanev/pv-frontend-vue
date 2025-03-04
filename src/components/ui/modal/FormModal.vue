<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Modal Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Modal"
    subtitle="Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS."
    modalid="modal-7"
    modaltitle="Form Modal"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
  &lt;b-button v-b-modal.modal-contact variant=&quot;outline-primary&quot;
    &gt;Contact List Modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-login variant=&quot;outline-info&quot;
    &gt;Login Modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-register variant=&quot;outline-danger&quot;
    &gt;Register Modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-confirmation variant=&quot;outline-success&quot;
    &gt;Confirmation Modal&lt;/b-button
  &gt;
  &lt;b-button v-b-modal.modal-selection variant=&quot;outline-secondary&quot;
    &gt;Selection Modal&lt;/b-button
  &gt;
&lt;/div&gt;

&lt;!-- ---------------------------------------- --&gt;
&lt;!-- contact modal --&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-contact&quot;
  size=&quot;sm&quot;
  title=&quot;Contact List&quot;
  ok-variant=&quot;primary&quot;
  header-bg-variant=&quot;light&quot;
  scrollable
&gt;
  &lt;b-card-text&gt;
    &lt;b-list-group&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/1.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Dickerson Macdonald&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/2.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Larsen Shaw&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/3.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Geneva Wilson&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/4.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Jami Carney&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/5.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;John Deo&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/1.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Dickerson Macdonald&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/2.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Larsen Shaw&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/3.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Geneva Wilson&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/4.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;Jami Carney&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
      &lt;b-list-group-item class=&quot;px-2 border-0&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
          &lt;b-img
            src=&quot;@/assets/images/users/5.jpg&quot;
            rounded=&quot;circle&quot;
            width=&quot;40&quot;
          /&gt;
          &lt;div class=&quot;ml-3&quot;&gt;
            &lt;h6 class=&quot;mb-0&quot;&gt;John Deo&lt;/h6&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ml-auto&quot;&gt;
            &lt;a href=&quot;#&quot;&gt;
              &lt;feather type=&quot;trash-2&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/b-list-group-item&gt;
    &lt;/b-list-group&gt;
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;!-- end contact modal --&gt;
&lt;!-- ---------------------------------------- --&gt;

&lt;!-- ---------------------------------------- --&gt;
&lt;!-- login modal --&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-login&quot;
  title=&quot;Login Modal&quot;
  header-bg-variant=&quot;light&quot;
  hide-footer
  hide-header
  size=&quot;sm&quot;
&gt;
  &lt;b-card-text&gt;
    &lt;div class=&quot;text-center mb-3&quot;&gt;
      &lt;b-img src=&quot;@/assets/images/logo-icon.png&quot;&gt;&lt;/b-img&gt;
      &lt;b-img src=&quot;@/assets/images/logo-text.png&quot;&gt;&lt;/b-img&gt;
    &lt;/div&gt;
    &lt;label&gt;Username&lt;/label&gt;
    &lt;b-form-input placeholder=&quot;Enter username here&quot;&gt;&lt;/b-form-input&gt;
    &lt;label class=&quot;mt-2&quot;&gt;Password&lt;/label&gt;
    &lt;b-form-input
      type=&quot;password&quot;
      placeholder=&quot;Enter password here&quot;
    &gt;&lt;/b-form-input&gt;
    &lt;b-form-checkbox
      id=&quot;checkbox-1&quot;
      name=&quot;checkbox-1&quot;
      value=&quot;accepted&quot;
      class=&quot;mt-3&quot;
    &gt;
      I accept the terms and use
    &lt;/b-form-checkbox&gt;

    &lt;b-button
      block
      variant=&quot;primary&quot;
      class=&quot;mt-3&quot;
      @click=&quot;$bvModal.hide('modal-login')&quot;
      &gt;Login&lt;/b-button
    &gt;
    &lt;b-button
      block
      variant=&quot;outline-secondary&quot;
      class=&quot;mt-3 border-0&quot;
      @click=&quot;$bvModal.hide('modal-login')&quot;
      &gt;No, Thanks.&lt;/b-button
    &gt;
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;!-- end login modal --&gt;
&lt;!-- ---------------------------------------- --&gt;

&lt;!-- ---------------------------------------- --&gt;
&lt;!-- register modal --&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-register&quot;
  title=&quot;Register Modal&quot;
  header-bg-variant=&quot;light&quot;
  hide-footer
  hide-header
  size=&quot;sm&quot;
&gt;
  &lt;b-card-text&gt;
    &lt;div class=&quot;text-center mb-3&quot;&gt;
      &lt;b-img src=&quot;@/assets/images/logo-icon.png&quot;&gt;&lt;/b-img&gt;
      &lt;b-img src=&quot;@/assets/images/logo-text.png&quot;&gt;&lt;/b-img&gt;
    &lt;/div&gt;
    &lt;label&gt;Name&lt;/label&gt;
    &lt;b-form-input placeholder=&quot;Enter name here&quot;&gt;&lt;/b-form-input&gt;
    &lt;label class=&quot;mt-2&quot;&gt;Email&lt;/label&gt;
    &lt;b-form-input
      type=&quot;email&quot;
      placeholder=&quot;Enter email here&quot;
    &gt;&lt;/b-form-input&gt;
    &lt;label class=&quot;mt-2&quot;&gt;Password&lt;/label&gt;
    &lt;b-form-input
      type=&quot;password&quot;
      placeholder=&quot;Enter password here&quot;
    &gt;&lt;/b-form-input&gt;
    &lt;b-form-checkbox
      id=&quot;checkbox-1&quot;
      name=&quot;checkbox-1&quot;
      value=&quot;accepted&quot;
      class=&quot;mt-3&quot;
    &gt;
      I accept the terms and use
    &lt;/b-form-checkbox&gt;

    &lt;b-button
      block
      variant=&quot;primary&quot;
      class=&quot;mt-3&quot;
      @click=&quot;$bvModal.hide('modal-register')&quot;
      &gt;Register&lt;/b-button
    &gt;
    &lt;b-button
      block
      variant=&quot;outline-secondary&quot;
      class=&quot;mt-3 border-0&quot;
      @click=&quot;$bvModal.hide('modal-register')&quot;
      &gt;No, Thanks.&lt;/b-button
    &gt;
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;!-- end register modal --&gt;
&lt;!-- ---------------------------------------- --&gt;

&lt;!-- ---------------------------------------- --&gt;
&lt;!-- confirmation modal --&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-confirmation&quot;
  title=&quot;Confirmation Modal&quot;
  header-bg-variant=&quot;light&quot;
  hide-footer
  hide-header
  size=&quot;sm&quot;
&gt;
  &lt;b-card-text&gt;
    &lt;div class=&quot;text-center mb-3 mt-3&quot;&gt;
      &lt;feather type=&quot;file-text&quot; class=&quot;feather-lg&quot;&gt;&lt;/feather&gt;
      &lt;h5 class=&quot;mb-0 mt-3&quot;&gt;Changes Saved !&lt;/h5&gt;
      &lt;h6 class=&quot;text-muted mt-2 font-weight-normal&quot;&gt;
        Work number 001 was edited.
      &lt;/h6&gt;
    &lt;/div&gt;

    &lt;b-button
      block
      variant=&quot;info&quot;
      class=&quot;mt-5&quot;
      @click=&quot;$bvModal.hide('modal-confirmation')&quot;
      &gt;Download edited File&lt;/b-button
    &gt;
    &lt;b-button
      block
      variant=&quot;outline-secondary&quot;
      class=&quot;mt-3 border-0&quot;
      @click=&quot;$bvModal.hide('modal-confirmation')&quot;
      &gt;No, Thanks.&lt;/b-button
    &gt;
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;!-- end confirmation modal --&gt;
&lt;!-- ---------------------------------------- --&gt;

&lt;!-- ---------------------------------------- --&gt;
&lt;!-- selection modal --&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;b-modal
  id=&quot;modal-selection&quot;
  title=&quot;Selection Modal&quot;
  header-bg-variant=&quot;light&quot;
  hide-footer
  hide-header
  size=&quot;sm&quot;
&gt;
  &lt;b-card-text&gt;
    &lt;div class=&quot;text-center mb-3 mt-3&quot;&gt;
      &lt;feather type=&quot;check-square&quot; class=&quot;feather-lg&quot;&gt;&lt;/feather&gt;
      &lt;h4 class=&quot;mb-0 mt-3&quot;&gt;Select file type&lt;/h4&gt;
      &lt;h6 class=&quot;text-muted mt-2 font-weight-normal&quot;&gt;
        Choose one or multiple types you want to export.
      &lt;/h6&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mt-3 p-3&quot;&gt;
      &lt;b-form-radio name=&quot;some-radios&quot;&gt;PNG&lt;/b-form-radio&gt;
      &lt;b-form-radio name=&quot;some-radios&quot; class=&quot;mt-2&quot;&gt;JPEG&lt;/b-form-radio&gt;
      &lt;b-form-radio name=&quot;some-radios&quot; class=&quot;mt-2&quot;&gt;PDF&lt;/b-form-radio&gt;
      &lt;b-form-radio name=&quot;some-radios&quot; class=&quot;mt-2&quot;&gt;DOCS&lt;/b-form-radio&gt;
    &lt;/div&gt;
    &lt;b-button
      block
      variant=&quot;primary&quot;
      class=&quot;mt-4&quot;
      @click=&quot;$bvModal.hide('modal-selection')&quot;
      &gt;Continue&lt;/b-button
    &gt;
    &lt;b-button
      block
      variant=&quot;outline-secondary&quot;
      class=&quot;mt-3 border-0&quot;
      @click=&quot;$bvModal.hide('modal-selection')&quot;
      &gt;Cancel&lt;/b-button
    &gt;
  &lt;/b-card-text&gt;
&lt;/b-modal&gt;
&lt;!-- ---------------------------------------- --&gt;
&lt;!-- end selection modal --&gt;
&lt;!-- ---------------------------------------- --&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-button v-b-modal.modal-contact variant="outline-primary"
          >Contact List Modal</b-button
        >
        <b-button v-b-modal.modal-login variant="outline-info"
          >Login Modal</b-button
        >
        <b-button v-b-modal.modal-register variant="outline-danger"
          >Register Modal</b-button
        >
        <b-button v-b-modal.modal-confirmation variant="outline-success"
          >Confirmation Modal</b-button
        >
        <b-button v-b-modal.modal-selection variant="outline-secondary"
          >Selection Modal</b-button
        >
      </div>

      <!-- ---------------------------------------- -->
      <!-- contact modal -->
      <!-- ---------------------------------------- -->
      <b-modal
        id="modal-contact"
        size="sm"
        title="Contact List"
        ok-variant="primary"
        header-bg-variant="light"
        scrollable
      >
        <b-card-text>
          <b-list-group>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/1.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Dickerson Macdonald</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/2.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Larsen Shaw</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/3.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Geneva Wilson</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/4.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Jami Carney</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/5.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">John Deo</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/1.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Dickerson Macdonald</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/2.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Larsen Shaw</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/3.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Geneva Wilson</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/4.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">Jami Carney</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
            <b-list-group-item class="px-2 border-0">
              <div class="d-flex align-items-center">
                <b-img
                  src="@/assets/images/users/5.jpg"
                  rounded="circle"
                  width="40"
                />
                <div class="ml-3">
                  <h6 class="mb-0">John Deo</h6>
                </div>
                <div class="ml-auto">
                  <a href="#">
                    <feather type="trash-2" class="feather-sm"></feather>
                  </a>
                </div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-card-text>
      </b-modal>
      <!-- ---------------------------------------- -->
      <!-- end contact modal -->
      <!-- ---------------------------------------- -->

      <!-- ---------------------------------------- -->
      <!-- login modal -->
      <!-- ---------------------------------------- -->
      <b-modal
        id="modal-login"
        title="Login Modal"
        header-bg-variant="light"
        hide-footer
        hide-header
        size="sm"
      >
        <b-card-text>
          <div class="text-center mb-3">
            <b-img src="@/assets/images/logo-icon.png"></b-img>
            <b-img src="@/assets/images/logo-text.png"></b-img>
          </div>
          <label>Username</label>
          <b-form-input placeholder="Enter username here"></b-form-input>
          <label class="mt-2">Password</label>
          <b-form-input
            type="password"
            placeholder="Enter password here"
          ></b-form-input>
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            class="mt-3"
          >
            I accept the terms and use
          </b-form-checkbox>

          <b-button
            block
            variant="primary"
            class="mt-3"
            @click="$bvModal.hide('modal-login')"
            >Login</b-button
          >
          <b-button
            block
            variant="outline-secondary"
            class="mt-3 border-0"
            @click="$bvModal.hide('modal-login')"
            >No, Thanks.</b-button
          >
        </b-card-text>
      </b-modal>
      <!-- ---------------------------------------- -->
      <!-- end login modal -->
      <!-- ---------------------------------------- -->

      <!-- ---------------------------------------- -->
      <!-- register modal -->
      <!-- ---------------------------------------- -->
      <b-modal
        id="modal-register"
        title="Register Modal"
        header-bg-variant="light"
        hide-footer
        hide-header
        size="sm"
      >
        <b-card-text>
          <div class="text-center mb-3">
            <b-img src="@/assets/images/logo-icon.png"></b-img>
            <b-img src="@/assets/images/logo-text.png"></b-img>
          </div>
          <label>Name</label>
          <b-form-input placeholder="Enter name here"></b-form-input>
          <label class="mt-2">Email</label>
          <b-form-input
            type="email"
            placeholder="Enter email here"
          ></b-form-input>
          <label class="mt-2">Password</label>
          <b-form-input
            type="password"
            placeholder="Enter password here"
          ></b-form-input>
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            class="mt-3"
          >
            I accept the terms and use
          </b-form-checkbox>

          <b-button
            block
            variant="primary"
            class="mt-3"
            @click="$bvModal.hide('modal-register')"
            >Register</b-button
          >
          <b-button
            block
            variant="outline-secondary"
            class="mt-3 border-0"
            @click="$bvModal.hide('modal-register')"
            >No, Thanks.</b-button
          >
        </b-card-text>
      </b-modal>
      <!-- ---------------------------------------- -->
      <!-- end register modal -->
      <!-- ---------------------------------------- -->

      <!-- ---------------------------------------- -->
      <!-- confirmation modal -->
      <!-- ---------------------------------------- -->
      <b-modal
        id="modal-confirmation"
        title="Confirmation Modal"
        header-bg-variant="light"
        hide-footer
        hide-header
        size="sm"
      >
        <b-card-text>
          <div class="text-center mb-3 mt-3">
            <feather type="file-text" class="feather-lg"></feather>
            <h5 class="mb-0 mt-3">Changes Saved !</h5>
            <h6 class="text-muted mt-2 font-weight-normal">
              Work number 001 was edited.
            </h6>
          </div>

          <b-button
            block
            variant="info"
            class="mt-5"
            @click="$bvModal.hide('modal-confirmation')"
            >Download edited File</b-button
          >
          <b-button
            block
            variant="outline-secondary"
            class="mt-3 border-0"
            @click="$bvModal.hide('modal-confirmation')"
            >No, Thanks.</b-button
          >
        </b-card-text>
      </b-modal>
      <!-- ---------------------------------------- -->
      <!-- end confirmation modal -->
      <!-- ---------------------------------------- -->

      <!-- ---------------------------------------- -->
      <!-- selection modal -->
      <!-- ---------------------------------------- -->
      <b-modal
        id="modal-selection"
        title="Selection Modal"
        header-bg-variant="light"
        hide-footer
        hide-header
        size="sm"
      >
        <b-card-text>
          <div class="text-center mb-3 mt-3">
            <feather type="check-square" class="feather-lg"></feather>
            <h4 class="mb-0 mt-3">Select file type</h4>
            <h6 class="text-muted mt-2 font-weight-normal">
              Choose one or multiple types you want to export.
            </h6>
          </div>
          <div class="mt-3 p-3">
            <b-form-radio name="some-radios">PNG</b-form-radio>
            <b-form-radio name="some-radios" class="mt-2">JPEG</b-form-radio>
            <b-form-radio name="some-radios" class="mt-2">PDF</b-form-radio>
            <b-form-radio name="some-radios" class="mt-2">DOCS</b-form-radio>
          </div>
          <b-button
            block
            variant="primary"
            class="mt-4"
            @click="$bvModal.hide('modal-selection')"
            >Continue</b-button
          >
          <b-button
            block
            variant="outline-secondary"
            class="mt-3 border-0"
            @click="$bvModal.hide('modal-selection')"
            >Cancel</b-button
          >
        </b-card-text>
      </b-modal>
      <!-- ---------------------------------------- -->
      <!-- end selection modal -->
      <!-- ---------------------------------------- -->
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "FormModal",

  data: () => ({}),
  components: { BaseCard },
};
</script>