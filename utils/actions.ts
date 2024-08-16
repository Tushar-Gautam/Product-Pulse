import prisma from "@/utils/db";
import db from "@/utils/db";

export const fetchFeaturedProducts = async () => {
  return await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async () => {
  return db.product.findMany({
    orderBy: { createdAt: "desc" },
  });
};
