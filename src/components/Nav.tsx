import React from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

const linkStyling = ({ isActive }: { isActive: boolean}) =>
    clsx( "bg-gray-300 rounded-md px-4 py-1.5", { "bg-green-200": isActive })


function Nav() {
    return (
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-gray-300"
            >
                <div className="pb-8 space-y-1">
                    <NavLink to={"movies"} className={linkStyling}>
                        Movies
                    </NavLink>
                </div>
                <div className="pb-8 space-y-1">
                    <NavLink to={"favorites"} className={linkStyling}>
                        Favorites
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
