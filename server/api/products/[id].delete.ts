import { eq } from 'drizzle-orm'
import { products } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    const productId = event.context.params?.id as string

    const product = db
      .delete(products)
      .where(eq(products.id, parseInt(productId)))
      .run()

    return { product }
  }
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
