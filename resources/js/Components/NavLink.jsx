import { Link } from '@inertiajs/react';
import {useSubMenu} from "@/functions";
export default function NavLink({ active = false, className = '', children, ...props }) {

    return (
        <>
        <Link

            {...props}
            className={
                ' ' +
                (active
                    ? 'active '
                    : '') +
                className
            }
        >
            {children}
        </Link>
        </>
    );
}
