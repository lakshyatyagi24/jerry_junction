import React from 'react'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Jerry's Junction</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar

