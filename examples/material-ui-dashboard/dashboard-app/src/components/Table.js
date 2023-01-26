import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from '@material-ui/core';

import StatusBullet from './StatusBullet';
import palette from '../theme/palette';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  content: {
    padding: 0,
  },
  head: {
    backgroundColor: palette.background.gray,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  status: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  tableRow: {
    padding: '0 5px',
    '.MuiTableRow-root.MuiTableRow-hover&:hover': {
      backgroundColor: palette.primary.action,
    },
  },
  hoverable: {
    '&:hover': {
      color: `${palette.primary.normal}`,
      cursor: `pointer`,
    },
  },
  arrow: {
    fontSize: 10,
    position: 'absolute',
  },
}));

const statusColors = {
  completed: 'success',
  processing: 'info',
  // shipped: 'danger',
};

const TableComponent = (props) => {

  const {
    className,
    sorting,
    setSorting,
    rowsPerPage,
    page,
    setRowsPerPage,
    setPage,
    ...rest
  } = props;

  const classes = useStyles();

  const tableHeaders = [
    {
      text: 'Task ID',
      value: 'taskID',
    },
    {
      text: 'Task',
      value: 'task',
    },
    {
      text: 'Product',
      value: 'product',
    },
    {
      text: 'Status',
      value: 'status',
    },
    {
      text: 'Created by',
      value: 'createdBy',
    },
    {
      text: 'Created at',
      value: 'createdAt',
    },
  ];
    const tasks = [
      {
        taskID: 196745,
        task: 'Upload',
        product: 'Chase Mobile',
        status: 'Processing',
        createdBy: 'John Doe'
      },
      {
        taskID: 196745,
        task: 'Upload',
        product: 'Chase Mobile',
        status: 'Processing',
        createdBy: 'John Doe'
      },
      {
        taskID: 196745,
        task: 'Upload',
        product: 'Chase Mobile',
        status: 'Processing',
        createdBy: 'John Doe'
      },
      {
        taskID: 196745,
        task: 'Upload',
        product: 'Chase Mobile',
        status: 'Processing',
        createdBy: 'John Doe'
      },
      {
        taskID: 196745,
        task: 'Upload',
        product: 'Chase Mobile',
        status: 'Processing',
        createdBy: 'John Doe'
      },
      {
        taskID: 196745,
        task: 'Upload',
        product: 'Chase Mobile',
        status: 'Processing',
        createdBy: 'John Doe'
      },
    ];

    const handleSetSorting = (str) => {
      setSorting([str, sorting[1] === 'desc' ? 'asc' : 'desc']);
    };

    return (
      <Card {...rest} padding={'0'} className={clsx(classes.root, className)}>
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead className={classes.head}>
                  <TableRow>
                    {tableHeaders.map((item, index) => (
                      <TableCell
                        key={index}
                        className={classes.hoverable}
                        onClick={() => {
                          handleSetSorting(`${item.value}`);
                        }}
                      >
                        <span>{item.text}</span>
                        <Typography className={classes.arrow} variant="body2" component="span">
                          {sorting[0] === item.value ? (
                            sorting[1] === 'desc' ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )
                          ) : null}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TableRow
                      // className={classes.tableRow}
                      hover
                      key={index}
                      sx={{ borderBottom: 100, borderColor: 'primary.main'}}
                    >
                      <TableCell>{task['taskID']}</TableCell>
                      <TableCell>{task['task']}</TableCell>
                      <TableCell>{task['product']}</TableCell>
                      <TableCell>
                        <StatusBullet className={classes.status} color={statusColors[task['status'].toLowerCase()]} size="sm" />
                        {task['status']}
                      </TableCell>
                      <TableCell>{task['createdBy']}</TableCell>
                      <TableCell>{moment(task['createdAt']).format('DD/MM/YYYY')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={10}
            // count={parseInt(count.resultSet.tablePivot()[0]['Orders.count'])}
            // onChangePage={handlePageChange}
            // onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </CardActions>
      </Card>
    );
  }
// };

TableComponent.propTypes = {
  className: PropTypes.string,
  query: PropTypes.object.isRequired,
};

export default TableComponent;
