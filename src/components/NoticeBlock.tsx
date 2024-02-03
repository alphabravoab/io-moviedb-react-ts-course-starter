import React, {FunctionComponent, ReactNode} from "react";

type RenderProps = {
    children: ReactNode
}

const NoticeBlock: FunctionComponent<RenderProps> = ({ children }) => {
    return (
        <div className="flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 py-8 bg-gray-200">
          {children}
        </div>
    )
}

export default NoticeBlock;
