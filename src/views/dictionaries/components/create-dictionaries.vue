<template>
  <a-modal
    v-model:visible="visible"
    unmount-on-close
    :mask-closable="false"
    @ok="submit"
    @cancel="visible = false"
  >
    <template #title>
      {{ t(`dictionaries.${modalTitle}Dictionaries`) }}
    </template>
    <a-form v-model:model="dictionaryItem">
      <a-form-item :label="t('dictionaries.dictKey')">
        <a-input v-model="dictionaryItem.dictKey" />
      </a-form-item>
      <a-form-item :label="t('dictionaries.dictValue')">
        <a-input v-model="dictionaryItem.dictValue" />
      </a-form-item>
      <a-form-item :label="t('dictionaries.version')">
        <a-input v-model="dictionaryItem.version" />
      </a-form-item>
      <a-form-item
        v-if="modalTitle === 'edit'"
        :label="t('dictionaries.version')"
      >
        <a-input v-model="dictionaryItem.version" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import type { Dictionaries } from '@/types/dictionaries';
  import { useI18n } from 'vue-i18n';

  const visible = ref<boolean>(false);
  const modalTitle = ref<string>('create');
  const { t } = useI18n();
  const dictionaryItem = ref<Dictionaries>({
    dictKey: '',
    dictValue: '',
    version: '',
  });

  const submit = () => {
    console.log('tijiao');
  };

  const openModal = () => {
    visible.value = !visible.value;
  };
  const setData = (title: string, dictionary?: Dictionaries) => {
    modalTitle.value = title;
    dictionaryItem.value = { ...dictionary };
  };
  defineExpose({ openModal, setData });
</script>
