"use client";
import React from 'react'
import css from "@/styles/Header.module.css";
import Box from "@/components/Box";
import Image from 'next/image';
import { Flex } from 'antd';
import ModeButton from './ModeButton';
import { UserButton } from '@clerk/nextjs';
import SidebarButton from './SidebarButton';
const Header = () => {
  return (
    <div className={css.wrapper}>
        <Box style={{height: "100%"}}>
            <div className={css.container}>
              {/* sidbear button */}

          <div className={css.sidebarButton}>
            <SidebarButton />
          </div>
               
               {/* logo */}
         <Image
            src={"/images/logo.png"}
            width={150}
            height={40}
            alt="logo"
            className={css.logo}
          />
          {/* actions */}
          <Flex gap={25} align="center"> 
            <ModeButton />
            <UserButton afterSignOutUrl="/sign-in" />
          </Flex>
            </div>
        </Box>  
    </div>
  );
};

export default Header;
