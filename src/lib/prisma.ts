import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient | undefined

if (!prisma) {
    prisma = new PrismaClient()
  }

export default prisma