import { eq } from 'drizzle-orm'
import { products } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const productId = event.context.params?.id as string

    const product = db
      .select()
      .from(products)
      .where(eq(products.id, parseInt(productId)))
      .get()

    return { product }
  }

  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
