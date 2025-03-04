export default [
  { header: "Dashboards", icon: "mdi mdi-dots-horizontal" },
  {
    id: "1",
    icon: "home",
    title: "Dashboard",
    i18n: "Dashboard",
    name: "/dashboard/",
    childern: [
      {
        icon: "mdi mdi-adjust",
        title: "Modern Dashboard",
        to: "/dashboard/modern-dashboard",
      },
      {
        icon: "mdi mdi-adjust",
        title: "Awesome Dashboard",
        to: "/dashboard/awesome-dashboard",
      },
      {
        icon: "mdi mdi-adjust",
        title: "Classy Dashboard",
        to: "/dashboard/classy-dashboard",
      },
      {
        icon: "mdi mdi-adjust",
        title: "Analytical Dashboard",
        to: "/dashboard/analytical-dashboard",
      },
      {
        icon: "mdi mdi-adjust",
        title: "Minimal Dashboard",
        to: "/dashboard/minimal-dashboard",
      },
      { icon: "mdi mdi-adjust", title: "Starter", to: "/starter" },
    ],
  },
  {
    id: "2",
    icon: "grid",
    title: "Apps",
    i18n: "Apps",
    name: "/apps/",
    childern: [
      {
        icon: "mdi mdi-comment-text-outline",
        title: "Chat",
        to: "/apps/chat",
      },
      {
        icon: "mdi mdi-inbox",
        title: "Email",
        to: "/apps/email/inbox",
      },
      {
        icon: "mdi mdi-phone",
        title: "Contacts",
        to: "/apps/contacts",
      },
      {
        icon: "mdi mdi-phone-log",
        title: "Contact List",
        to: "/apps/contactslist",
      },
      {
        icon: "mdi mdi-cart-outline",
        title: "Ecommerce",
        to: "/apps/ecommerce",
      },
      {
        icon: "mdi mdi-file-tree",
        title: "Tree View",
        to: "/apps/treeview",
      },
    ],
  },

  {
    id: "3",
    icon: "cpu",
    title: "Ui Elements",
    i18n: "Ui Elements",
    dd: "mega-menu",
    childern: [
      {
        icon: "mdi mdi-message-bulleted",
        title: "Alert",
        to: "/ui-elements/alert",
      },
      {
        icon: "mdi mdi-airplay",
        title: "Aspect",
        to: "/ui-elements/aspect",
      },
      {
        icon: "mdi mdi-account-box",
        title: "Avatar",
        to: "/ui-elements/avatar",
      },
      {
        icon: "mdi mdi-application",
        title: "Badge",
        to: "/ui-elements/badge",
      },
      {
        icon: "mdi mdi-equal",
        title: "Breadcrumb",
        to: "/ui-elements/breadcrumb",
      },
      {
        icon: "mdi mdi-toggle-switch",
        title: "Buttons",
        to: "/ui-elements/buttons",
      },
      {
        icon: "mdi mdi-checkerboard",
        title: "Button Group",
        to: "/ui-elements/button-group",
      },
      {
        icon: "mdi mdi-cards-variant",
        title: "Button Toolbar",
        to: "/ui-elements/button-toolbar",
      },
      {
        icon: "mdi mdi-cards-outline",
        title: "Cards",
        to: "/ui-elements/cards",
      },
      {
        icon: "mdi mdi-view-carousel",
        title: "Carousel",
        to: "/ui-elements/carousel",
      },
      {
        icon: "mdi mdi-bandcamp",
        title: "Collapse",
        to: "/ui-elements/collapse",
      },
      {
        icon: "mdi mdi-arrange-bring-to-front",
        title: "Dropdown",
        to: "/ui-elements/dropdown",
      },
      {
        icon: "mdi mdi-link-variant",
        title: "Embed",
        to: "/ui-elements/embed",
      },
      {
        icon: "mdi mdi-image-area",
        title: "Image",
        to: "/ui-elements/image",
      },
      {
        icon: "mdi mdi-library-books",
        title: "Jumbotron",
        to: "/ui-elements/jumbotron",
      },
      {
        icon: "mdi mdi-view-module",
        title: "Grid",
        to: "/ui-elements/grid",
      },
      {
        icon: "mdi mdi-file-video",
        title: "List Group",
        to: "/ui-elements/list-group",
      },
      {
        icon: "mdi mdi-image-filter",
        title: "Media",
        to: "/ui-elements/media",
      },
      {
        icon: "mdi mdi-tablet",
        title: "Modal",
        to: "/ui-elements/modal",
      },
      {
        icon: "mdi mdi-tab-unselected",
        title: "Nav",
        to: "/ui-elements/nav",
      },
      {
        icon: "mdi mdi-page-layout-header",
        title: "Navbar",
        to: "/ui-elements/navbar",
      },
      {
        icon: "mdi mdi-panorama-horizontal",
        title: "Overlay",
        to: "/ui-elements/overlay",
      },
      {
        icon: "mdi mdi-altimeter",
        title: "Pagination",
        to: "/ui-elements/pagination",
      },
      {
        icon: "mdi mdi-altimeter",
        title: "Pagination Nav",
        to: "/ui-elements/pagination-nav",
      },
      {
        icon: "mdi mdi-image-filter-vintage",
        title: "Popover",
        to: "/ui-elements/popover",
      },
      {
        icon: "mdi mdi-poll",
        title: "Progress",
        to: "/ui-elements/progress",
      },
      {
        icon: "mdi mdi-page-layout-sidebar-left",
        title: "Sidebar",
        to: "/ui-elements/sidebar",
      },
      {
        icon: "mdi mdi-tooltip-text",
        title: "Skeleton",
        to: "/ui-elements/skeleton",
      },
      {
        icon: "mdi mdi-apple-safari",
        title: "Spinner",
        to: "/ui-elements/spinner",
      },
      {
        icon: "mdi mdi-sort-variant",
        title: "Tabs",
        to: "/ui-elements/tabs",
      },
      {
        icon: "mdi mdi-timer",
        title: "Time",
        to: "/ui-elements/time",
      },
      {
        icon: "mdi mdi-credit-card-scan",
        title: "Toasts",
        to: "/ui-elements/toasts",
      },
      {
        icon: "mdi mdi-tooltip-outline",
        title: "Tooltip",
        to: "/ui-elements/tooltip",
      },
    ],
  },
  {
    id: "4",
    icon: "file-text",
    title: "Forms",
    i18n: "Forms",
    dd: "two-column",
    childern: [
      {
        icon: "mdi mdi-priority-low",
        title: "Form Inputs",
        to: "/form-elements/form-inputs",
      },
      {
        icon: "mdi mdi-code-equal",
        title: "Textarea",
        to: "/form-elements/textarea",
      },
      {
        icon: "mdi mdi-coins",
        title: "Select",
        to: "/form-elements/select",
      },
      {
        icon: "mdi mdi-checkbox-marked-outline",
        title: "Checkbox",
        to: "/form-elements/checkbox",
      },
      {
        icon: "mdi mdi-toggle-switch-off",
        title: "Switch",
        to: "/form-elements/switch",
      },
      {
        icon: "mdi mdi-radiobox-marked",
        title: "Radio",
        to: "/form-elements/radio",
      },
      {
        icon: "mdi mdi-calendar",
        title: "Datepicker",
        to: "/form-elements/datepicker",
      },
      {
        icon: "mdi mdi-clock-fast",
        title: "Timepicker",
        to: "/form-elements/timepicker",
      },
      {
        icon: "mdi mdi-file-document-box",
        title: "File",
        to: "/form-elements/file",
      },
      {
        icon: "mdi mdi-star-half",
        title: "Rating",
        to: "/form-elements/rating",
      },
      {
        icon: "mdi mdi-table-column-plus-after",
        title: "Spin Button",
        to: "/form-elements/spin-button",
      },
      {
        icon: "mdi mdi-tag-outline",
        title: "Tags",
        to: "/form-elements/tags",
      },
      {
        icon: "mdi mdi-rounded-corner",
        title: "Form Group",
        to: "/form-layouts/form-group",
      },
      {
        icon: "mdi mdi-vector-difference-ba",
        title: "Basic Form",
        to: "/form-layouts/form-basic",
      },
      {
        icon: "mdi mdi-code-equal",
        title: "Row Separator",
        to: "/form-layouts/form-row-separator",
      },
      {
        icon: "mdi mdi-flip-to-front",
        title: "Bordered Form",
        to: "/form-layouts/form-bordered",
      },
      {
        icon: "mdi mdi-file-document-box",
        title: "Horizontal Form",
        to: "/form-layouts/form-horizontal",
      },
      {
        icon: "mdi mdi-content-duplicate",
        title: "Striped Row",
        to: "/form-layouts/form-striped-row",
      },
      {
        icon: "mdi mdi-select",
        title: "Form Wizard",
        to: "/form-layouts/form-wizard",
      },
    ],
  },
  {
    id: "5",
    icon: "package",
    title: "Widgets",
    i18n: "Widgets",
    dd: "",
    childern: [
      {
        icon: "mdi mdi-table",
        title: "Widget Apps",
        to: "/widgets/widget-apps",
      },
      {
        icon: "mdi mdi-table-column-remove",
        title: "Widget Data",
        to: "/widgets/widget-data",
      },
      {
        icon: "mdi mdi-table-row-height",
        title: "Drag n Drop",
        to: "/widgets/drag-n-drop",
      },
    ],
  },
  {
    id: "6",
    icon: "book-open",
    title: "Pages",
    i18n: "Pages",
    dd: "",
    childern: [
      {
        icon: "mdi mdi-chart-arc",
        title: "Apex charts",
        to: "/charts/apexcharts",
      },
      {
        icon: "mdi mdi-face",
        title: "Font Awesome Icons",
        to: "/icons/fontawesome",
      },
      {
        icon: "mdi mdi-tag-faces",
        title: "Material Icons",
        to: "/icons/material",
      },
      {
        icon: "mdi mdi mdi-image-broken-variant",
        title: "Simpleline Icons",
        to: "/icons/simpleline",
      },
      {
        icon: "mdi mdi-chart-bubble",
        title: "Themify Icons",
        to: "/icons/themify",
      },
      {
        icon: "mdi mdi-feather",
        title: "Feather Icons",
        to: "/icons/feather",
      },
    ],
  },
  {
    id: "7",
    icon: "codepen",
    title: "Tables",
    i18n: "Tables",
    dd: "",
    childern: [
      {
        icon: "mdi mdi-table",
        title: "Basic Table",
        to: "/tables/basic-table",
      },
      {
        icon: "mdi mdi-table-column-remove",
        title: "Pagination Table",
        to: "/tables/pagination-table",
      },
      {
        icon: "mdi mdi-table-row-height",
        title: "Row Select Table",
        to: "/tables/row-select-table",
      },
      {
        icon: "mdi mdi-table-edit",
        title: "Row Detail Table",
        to: "/tables/row-detail-table",
      },
      {
        icon: "mdi mdi-table-row-plus-before",
        title: "Sort Table",
        to: "/tables/sort-table",
      },
      {
        icon: "mdi mdi-table-column-plus-before",
        title: "Stacked Table",
        to: "/tables/stacked-table",
      },
      {
        icon: "mdi mdi-table-column-width",
        title: "Sticky Header-Column",
        to: "/tables/sticky-header-column-table",
      },
      {
        icon: "mdi mdi-table-large",
        title: "Search Table",
        to: "/tables/search-table",
      },
    ],
  },
  { header: "Ui", icon: "mdi mdi-dots-horizontal" },
  {
    id: "8",
    icon: "lock",
    title: "Authentication",
    i18n: "Authentication",
    dd: "",
    childern: [
      {
        icon: "mdi mdi-account-key",
        title: "Boxed Login",
        to: "/authentication/boxedlogin",
      },
      {
        icon: "mdi mdi-account-edit",
        title: "Boxed Register",
        to: "/authentication/boxedregister",
      },
      {
        icon: "mdi mdi-account-key",
        title: "Login",
        to: "/authentication/fulllogin",
      },
      {
        icon: "mdi mdi-account-edit",
        title: "Register",
        to: "/authentication/fullregister",
      },
      {
        icon: "mdi mdi-alert",
        title: "Error",
        to: "/authentication/error",
      },
    ],
  },
];
