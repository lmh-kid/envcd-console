<template>
  <global-page>
    <a-typography-title :heading="5" style="margin-top: 0">
      {{ t('users.list') }}
    </a-typography-title>
    <div style="display: flex; justify-content: end">
      <a-space align="end" direction="horizontal" wrap>
        <a-button type="primary" @click="openModal('create')">
          {{ t('users.create') }}
        </a-button>
        <a-button type="primary" @click="openModal('deleteAll')">
          {{ t('users.deleteAll') }}
        </a-button>
      </a-space>
    </div>

    <a-table
      :key="currentLocale"
      v-model:selectedKeys="selectedKeys"
      row-key="id"
      :columns="userColumns"
      :row-selection="rowSelection"
      :data="userList"
      :pagination="pagination"
    >
      <template #identity="{ record }">
        {{ t(`users.identity.${['admin'][record.identity] || 'empty'}`) }}
      </template>
      <template #state="{ record }">
        {{ t(`users.state.${record.state}`) }}
      </template>
      <template #operation="{ record }">
        <a-space align="end" direction="horizontal">
          <a-button type="primary" @click="openModal('edit', record)">
            {{ t('global.edit') }}
          </a-button>
          <a-button type="primary" @click="openModal('delete', record)">
            {{ t('global.delete') }}
          </a-button>
        </a-space>
      </template>
    </a-table>

    <create-user ref="createModal" />
    <delete-user ref="deleteModal" />
  </global-page>
</template>

<script lang="ts" setup>
  import GlobalPage from '@/components/global-page/index.vue';
  import { nextTick, ref, watch, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLocale from '@/hooks/locale';
  import { User } from '@/types/user';
  import { getUserList } from '@/api/user';
  import type { Page, TablePage } from '@/types/global';
  import { getDefaultPage, getPage } from '@/utils/common';
  import getTableColumn from './config';
  import CreateUser from './components/create-user.vue';
  import DeleteUser from './components/delete-user.vue';

  const { currentLocale } = useLocale();
  const { t } = useI18n();

  const createModal = ref();
  const deleteModal = ref();
  const userList = ref<User[]>([]);
  const selectedKeys = ref<string[]>([]);
  const pagination = ref<TablePage>(getDefaultPage());
  // user table
  const userColumns = ref<any>();
  const rowSelection = reactive({
    showCheckedAll: true,
    onlyCurrent: false,
  });

  const updataTableColumn = () => {
    userColumns.value = getTableColumn(t);
  };
  watch(currentLocale, () => {
    updataTableColumn();
  });
  nextTick(() => {
    updataTableColumn();
  });

  // get user list
  const getUsers = () => {
    getUserList().then((res: Page<User[]>) => {
      userList.value = res.list || [];
      pagination.value = getPage(res);
    });
  };
  getUsers();

  const openModal = (type: string, user?: User) => {
    if (type === 'create') createModal.value.openModal();
    if (type === 'edit') {
      createModal.value.openModal();
      createModal.value.setData('edit', user);
    }
    if (type === 'delete' || type === 'deleteAll') {
      deleteModal.value.openModal();
      deleteModal.value.setData(type);
    }
  };
</script>

<style scoped lang="less">
  .text-right {
    text-align: right;
  }
</style>
