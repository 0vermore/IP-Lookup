import React, { useEffect } from 'react'
import { useActions } from './hooks/useActions'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { Layout } from 'antd'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  const { fetchIpInfos } = useActions()

  useEffect(() => {
    fetchIpInfos()
  })

  return (
    <Layout>
      <Navbar />
      <ToastContainer />
      <Layout.Content
        style={{
          padding: 24,
          margin: 0,
          height: 'calc(100vh - 64px)',
        }}>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App
