import { eq } from 'drizzle-orm'
import type { InsertProduct } from '@/db/schema'
import { products } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    const productId = event.context.params?.id as string
    const body = await readBody(event)
    const editedProduct: InsertProduct = {
      ...body,
    }

    const product = db
      .update(products)
      .set(editedProduct)
      .where(eq(products.id, parseInt(productId)))
      .run()

    return { user: product }
  }
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
