import type { InsertProduct } from '@/db/schema'
import { products } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const newProduct: InsertProduct = {
      name: body.name,
      description: body.description,
      category: body.category,
      isActive: body.isActive ?? true,
    }

    const product = db.insert(products).values(newProduct).run()

    return { product }
  }
  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
