const getTableColumn = (t: any) => {
  return [
    {
      title: t('users.name'),
      dataIndex: 'name',
    },
    {
      title: t('users.identity'),
      dataIndex: 'identity',
      slotName: 'identity',
    },
    {
      title: t('users.state'),
      dataIndex: 'state',
      slotName: 'state',
    },
    {
      title: t('users.createAt'),
      dataIndex: 'createAt',
    },
    {
      title: t('users.operation'),
      dataIndex: 'operation',
      slotName: 'operation',
    },
  ];
};

export default getTableColumn;
