import { products } from '@/db/schema'
import { db } from '@/server/sqlite-service'

export default defineEventHandler(async () => {
  try {
    const productsResp = db.select().from(products).all()
    
    return { products: productsResp }
  }

  catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
