<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    pageTitle: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <BRow>
    <BRow>
      <BCol cols="12">
        <div
          class="page-title-box d-sm-flex align-items-center justify-content-between"
        >
          <h4 class="mb-sm-0">{{ title }}</h4>
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item" v-if="pageTitle">
                <BLink href="javascript: void(0);">{{ pageTitle }}</BLink>
              </li>
              <li class="breadcrumb-item" v-if="subTitle">
                <BLink href="javascript: void(0);">{{ subTitle }}</BLink>
              </li>
              <li class="breadcrumb-item active" v-if="title">{{ title }}</li>
            </ol>
          </div>
          <slot name="navigation"></slot>
        </div>
      </BCol>
    </BRow>
  </BRow>
</template>
