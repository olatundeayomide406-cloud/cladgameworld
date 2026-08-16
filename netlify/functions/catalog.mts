import type { Config } from '@netlify/functions'
import { desc, eq } from 'drizzle-orm'
import { db } from '../../db/index.js'
import { products } from '../../db/schema.js'

export default async (request: Request) => {
  if (request.method === 'GET') return Response.json(await db.select().from(products).where(eq(products.active, true)).orderBy(desc(products.featured)))
  if (request.method === 'POST') {
    const adminKey = Netlify.env.get('ADMIN_API_KEY')
    if (!adminKey || request.headers.get('x-admin-key') !== adminKey) return Response.json({ error: 'Unauthorized' }, { status: 401 })
    const payload = await request.json()
    const [created] = await db.insert(products).values(payload).returning()
    return Response.json(created, { status: 201 })
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 })
}
export const config: Config = { path: '/api/catalog', method: ['GET', 'POST'] }
