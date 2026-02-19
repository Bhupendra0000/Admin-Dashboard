import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default async function ProductDetail({ params }) {
  const { id } = await params;   // ⭐ IMPORTANT FIX

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">{product.title}</Typography>

      <img src={product.thumbnail} width="300" />

      <Typography mt={2}>{product.description}</Typography>
      <Typography>Price: ₹ {product.price}</Typography>
      <Typography>Rating: {product.rating}</Typography>
      <Typography>Category: {product.category}</Typography>

      <Link href="/products" style={{ textDecoration: "none" }}>
        <Button sx={{ mt: 2 }} variant="contained">
          Back to Products
        </Button>
      </Link>
    </Container>
  );
}
