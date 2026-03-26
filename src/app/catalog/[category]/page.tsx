import { categories, getProductsByCategory, getCategoryBySlug } from "@/lib/products";
import CatalogClient from "./CatalogClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CatalogPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return <CatalogClient category={cat} products={products} allCategories={categories} />;
}
