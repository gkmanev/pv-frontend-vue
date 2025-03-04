<template>
  <b-row>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarImageContent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarIconContent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarTextContent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarMultilineText />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarVariants />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarSize />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarSquare />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarRounding />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarButton />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarLink />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarBadge />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarBadgeContent />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarBadgePosition />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarGroups />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarGroupSize />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarGroupVariant />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarGroupRounding />
    </b-col>
    <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch">
      <AvatarGroupOverlap />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Avatar",

  data: () => ({
    page: {
      title: "Avatar",
    },
  }),
  components: {
    AvatarImageContent: () =>
      import("@/components/ui/avatar/AvatarImageContent"),
    AvatarIconContent: () => import("@/components/ui/avatar/AvatarIconContent"),
    AvatarTextContent: () => import("@/components/ui/avatar/AvatarTextContent"),
    AvatarVariants: () => import("@/components/ui/avatar/AvatarVariants"),
    AvatarSize: () => import("@/components/ui/avatar/AvatarSize"),
    AvatarSquare: () => import("@/components/ui/avatar/AvatarSquare"),
    AvatarRounding: () => import("@/components/ui/avatar/AvatarRounding"),
    AvatarButton: () => import("@/components/ui/avatar/AvatarButton"),
    AvatarLink: () => import("@/components/ui/avatar/AvatarLink"),
    AvatarBadge: () => import("@/components/ui/avatar/AvatarBadge"),
    AvatarGroups: () => import("@/components/ui/avatar/AvatarGroups"),
    AvatarGroupSize: () => import("@/components/ui/avatar/AvatarGroupSize"),
    AvatarGroupOverlap: () =>
      import("@/components/ui/avatar/AvatarGroupOverlap"),
    AvatarGroupRounding: () =>
      import("@/components/ui/avatar/AvatarGroupRounding"),
    AvatarGroupVariant: () =>
      import("@/components/ui/avatar/AvatarGroupVariant"),
    AvatarBadgePosition: () =>
      import("@/components/ui/avatar/AvatarBadgePosition"),
    AvatarBadgeContent: () =>
      import("@/components/ui/avatar/AvatarBadgeContent"),
    AvatarMultilineText: () =>
      import("@/components/ui/avatar/AvatarMultilineText"),
  },
};
</script>
