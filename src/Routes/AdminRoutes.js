import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Layout from '../user/admin/admin/components/Layout'
import Fruits from '../user/admin/admin/components/Fruits/Fruits'
import Vegetables from '../user/admin/admin/components/Vegetables/Vegetables'

const AdminRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/fruits" element={<Fruits />} />
                    <Route path="/vegetables" element={<Vegetables />} />
                </Routes>
            </Layout>
        </>
    )
}

export default AdminRoutes
