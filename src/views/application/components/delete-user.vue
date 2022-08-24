<template>
  <a-modal
    v-model:visible="visible"
    unmount-on-close
    width="600"
    @cancel="visible = false"
  >
    <template #title>{{ t(`users.${modalTitle}`) }}</template>
    <a-alert type="warning">
      <template #title> Warning </template>
      您确定要执行删除操作吗.
    </a-alert>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const visible = ref<boolean>(false);
  const modalTitle = ref<string>('delete');
  const { t } = useI18n();

  const openModal = () => {
    visible.value = !visible.value;
  };
  defineExpose({ openModal });
</script>
