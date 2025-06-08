import GHTBannerTiles from "@/components/GHTBannerTiles";
import GHTMainContent from "@/components/GHTMainContent";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <GHTBannerTiles>
        <GHTMainContent>{children}</GHTMainContent>
      </GHTBannerTiles>
    </>
  );
};

export default MainLayout;
