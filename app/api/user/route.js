import { usersTable } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import React from 'react'

export async function Post() {

const {user} = await req.json()

const userData = await db.select().from(usersTable)
.where((eq(usersTable.email,user?.primaryEmail.address.emailAddress)))


if(userData?.length <= 0){

    const result= await db.insert(usersTable).values({
    name:user?.fullName,
    email:user?.primaryEmail.address.emailAddress,
    image:user?.imageUrl
}).returning(usersTable)
return NextResponse.json(result[0])

}

  return  NextResponse.json(userData[0])
}
