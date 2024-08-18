"use client"
import Fetchticket from '@/app/api/api'
import { useQuery } from '@tanstack/react-query'

export const Usequery=()=>{
    return useQuery("ticket",Fetchticket)
}