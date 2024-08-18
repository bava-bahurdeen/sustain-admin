'use client'

import React, { FC, PropsWithChildren, useState } from 'react'
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new ReactQueryClient()
const QueryClient: FC<PropsWithChildren> = ({ children }) => {

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryClient