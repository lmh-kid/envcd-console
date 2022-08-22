<template>
  <a-modal
    v-model:visible="visible"
    unmount-on-close
    width="600"
    :on-before-ok="handleBeforeOk"
    @cancel="visible = false"
  >
    <template #title>{{ t(`users.${modalTitle}`) }}</template>
    <a-alert type="warning">
      <template #title> Warning </template>
      您确定要执行删除操作吗.
    </a-alert>
    <!-- <a-table :columns="userColumns" :data="userList" :pagination="pagination" /> -->
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // import type { User } from '@/types/user';
  // import useLocale from '@/hooks/locale';
  import { useI18n } from 'vue-i18n';

  const visible = ref<boolean>(false);
  const modalTitle = ref<string>('delete');
  // const { currentLocale } = useLocale();
  const { t } = useI18n();

  // // const userList = ref<User[]>();
  // const userColumns = ref<any>();
  // const getTableColumn = () => {
  //   userColumns.value = [
  //     {
  //       title: t('users.name'),
  //       dataIndex: 'name',
  //     },
  //     {
  //       title: t('users.identity'),
  //       dataIndex: 'identity',
  //     },
  //     {
  //       title: t('users.createAt'),
  //       dataIndex: 'createAt',
  //     },
  //   ];
  // };
  // watch(currentLocale, getTableColumn);

  const openModal = () => {
    visible.value = !visible.value;
  };
  const setData = (title: string) => {
    modalTitle.value = title;
  };
  defineExpose({ openModal, setData });
</script>
