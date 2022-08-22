const getTableColumn = (t: any) => {
  return [
    {
      title: t('scopespaces.name'),
      dataIndex: 'name',
    },
    {
      title: t('scopespaces.note'),
      dataIndex: 'note',
      slotName: 'note',
    },
    {
      title: t('scopespaces.state'),
      dataIndex: 'state',
      slotName: 'state',
    },
    {
      title: t('scopespaces.createAt'),
      dataIndex: 'createAt',
    },
    {
      title: t('scopespaces.operation'),
      dataIndex: 'operation',
      slotName: 'operation',
    },
  ];
};

export default getTableColumn;
