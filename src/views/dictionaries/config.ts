const getTableColumn = (t: any) => {
  return [
    {
      title: t('dictionaries.dictKey'),
      dataIndex: 'dictKey',
    },
    {
      title: t('dictionaries.dictValue'),
      dataIndex: 'dictValue',
    },
    {
      title: t('dictionaries.version'),
      dataIndex: 'version',
    },
    {
      title: t('dictionaries.state'),
      dataIndex: 'state',
      slotName: 'state',
    },
    {
      title: t('dictionaries.createAt'),
      dataIndex: 'createAt',
    },
    {
      title: t('dictionaries.operation'),
      dataIndex: 'operation',
      slotName: 'operation',
    },
  ];
};

export default getTableColumn;
