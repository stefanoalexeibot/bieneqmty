import { getProductBySlug } from "@/lib/products";
import { Metadata } from "next";
import ProductView from "./product-view";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Bieneq Shop",
    };
  }

  return {
    title: `${product.name} | Herramientas Profesionales Bieneq`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - Bieneq Shop`,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductView product={product} />;
}
