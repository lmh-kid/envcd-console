<template>
  <a-modal v-model:visible="visible" unmount-on-close @cancel="visible = false">
    <template #title>{{ t(`users.${modalTitle}User`) }}</template>
    <a-form v-model:model="userItem">
      <a-form-item :label="t('users.name')">
        <a-input v-model="userItem.name" />
      </a-form-item>
      <a-form-item :label="t('users.identity')">
        <a-select v-model="userItem.identity">
          <a-option :label="t('users.identity.admin')" :value="0" />
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import type { User } from '@/types/user';
  import { useI18n } from 'vue-i18n';

  const visible = ref<boolean>(false);
  const modalTitle = ref<string>('create');
  const { t } = useI18n();
  const userItem = ref<User>({
    name: '',
    identity: 0,
    state: true,
  });

  const openModal = () => {
    visible.value = !visible.value;
    userItem.value = {
      name: '',
      identity: 0,
      state: true,
    };
  };
  const setData = (title: string, user?: User) => {
    modalTitle.value = title;
    if (user) {
      userItem.value = { ...user };
    }
  };
  defineExpose({ openModal, setData });
</script>
