import React from 'react'


export const metadata = {
    title: {
        default: "Dashboard Page",
        template: "%s | Dashboard Page"
    },
    description: "Dashboard Page Description",
};

const DashboardLayout = ({ children }) => {
    return (
        <div>
            Dashboard layout
            {children}
        </div>
    )
}

export default DashboardLayout
