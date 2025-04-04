import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { Autocomplete, TextField } from "@mui/material";

function EnhancedTableHead({ order, orderBy, onRequestSort, headCells }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ backgroundColor: "#FFFFCC" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={headCell.style}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function ApplicantTable({
  headCells,
  searchTerm = "",
  rows,
  handleOpen,
  downloadResume,
}) {
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = rows?.filter((row) =>
    row.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedRows = [...filteredRows].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const rowsToDisplay = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box>
      <Paper>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size={"small"}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
            />
            <TableBody>
              {rowsToDisplay.map((row, index) => {
                return (
                  <TableRow hover key={index} role="checkbox" tabIndex={-1}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.Name}</TableCell>
                    <TableCell>{row.ApplicationDate}</TableCell>
                    <TableCell>{row.Email}</TableCell>
                    <TableCell>{row.PhoneNumber}</TableCell>
                    <TableCell>{row.Status}</TableCell>
                    <TableCell>{row.ScheduledDate}</TableCell>
                    <TableCell>
                      <Autocomplete
                        size="small"
                        options={["Pending", "Viewed", "Rejected", "Scheduled"]}
                        renderInput={(params) => (
                          <TextField {...params} label="Status" />
                        )}
                        value={
                          [
                            "Pending",
                            "Viewed",
                            "Rejected",
                            "Scheduled",
                          ].includes(row.Status)
                            ? row.Status
                            : null
                        }
                        onChange={(event, newValue) => {
                          if (newValue) {
                            handleOpen(row.id, newValue, row.ScheduledDate);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="col-auto d-none d-lg-block">
                        <div className="header-button">
                          <button
                            className="th-btn shadow-none"
                            style={{
                              padding: "6px 12px",
                              fontSize: "12px",
                              height: "35px",
                              width: "auto",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                            onClick={() => downloadResume(row.id, row.Name)}
                          >
                            Download
                            <i className="fas fa-download me-2" />
                          </button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {!filteredRows.length && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true,
            style: {
              marginBottom: "13px",
            },
          }}
          nextIconButtonProps={{
            style: {
              marginBottom: "12px",
              color: "#4786e6",
            },
            tabIndex: -1,
          }}
          backIconButtonProps={{
            style: {
              marginBottom: "12px",
              color: "#4786e6",
            },
            tabIndex: -1,
          }}
          style={{
            height: "40px",
            overflow: "hidden",
          }}
        />
      </Paper>
    </Box>
  );
}
