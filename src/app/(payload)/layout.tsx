import config from '../../payload.config'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import type { ServerFunctionClient } from 'payload'
import React from 'react'
import { importMap } from './admin/importMap'
import SidebarController from '../../components/SidebarController'
import '@payloadcms/next/css'
import './custom-admin.css'

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap} config={config} serverFunction={serverFunction}>
    <SidebarController />
    {children}
  </RootLayout>
)

export default Layout
