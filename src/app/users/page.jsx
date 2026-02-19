"use client";

import { useEffect, useState } from "react";
import { Container, Typography, TextField, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useUserStore } from "@/store/userstore";
import Link from "next/link";

export default function UsersPage() {
  const { users, fetchUsers, searchUsers } = useUserStore();
  const [query, setQuery] = useState("");

useEffect(() => { fetchUsers(); }, [fetchUsers]);

  const handleSearch = (value) => {
    setQuery(value);
    value ? searchUsers(value) : fetchUsers();
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" mb={2}>Users</Typography>

      <TextField label="Search user" value={query}
        onChange={(e) => handleSearch(e.target.value)} sx={{ mb: 2 }}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id}>
              <TableCell>
                <Link href={`/users/${u.id}`}>{u.firstName} {u.lastName}</Link>
              </TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.gender}</TableCell>
              <TableCell>{u.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}