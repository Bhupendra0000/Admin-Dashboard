"use client";

import { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, TextField, Select, MenuItem } from "@mui/material";
import { useProductStore } from "@/store/productstore";
import Link from "next/link";

export default function ProductsPage() {
  const { products, fetchProducts, searchProducts, categories, fetchCategories, filterByCategory } = useProductStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" mb={2}>Products</Typography>

      <TextField label="Search product" value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          e.target.value ? searchProducts(e.target.value) : fetchProducts();
        }} sx={{ mr: 2 }}
      />

      <Select defaultValue="" onChange={(e) => filterByCategory(e.target.value)}>
        <MenuItem value="">All</MenuItem>
        {categories.map((c) => (
          <MenuItem key={c} value={c}>{c}</MenuItem>
        ))}
      </Select>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card component={Link} href={`/products/${p.id}`} sx={{ textDecoration: "none" }}>
              <CardMedia component="img" height="160" image={p.thumbnail} />
              <CardContent>
                <Typography fontWeight="bold">{p.title}</Typography>
                <Typography>₹ {p.price}</Typography>
                <Typography variant="body2">Rating: {p.rating}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}