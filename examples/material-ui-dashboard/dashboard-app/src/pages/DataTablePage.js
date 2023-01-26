import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Toolbar from '../components/Toolbar.js';
import Table from '../components/Table.js';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  content: {
    marginTop: 15,
  },
}));

const DataTablePage = () => {
  const classes = useStyles();
  const tabs = ['All', 'Processing', 'Completed'];
  const [statusFilter, setStatusFilter] = React.useState(0);
  const [sorting, setSorting] = React.useState(['createdAt', 'desc']);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  return (
    <div className={classes.root}>
      <Toolbar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        tabs={tabs}
      />
      <div className={classes.content}>
        <Table
          sorting={sorting}
          setSorting={setSorting}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default DataTablePage;
