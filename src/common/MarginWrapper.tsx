import React, { ReactNode } from "react";
interface MarginWrapperProps {
  children: ReactNode;
}
function MarginWrapper({ children }: MarginWrapperProps) {
  return <div className={"max-w-[min(1440px,80%)]  mx-auto"} >{children}</div>
}
export default MarginWrapper;