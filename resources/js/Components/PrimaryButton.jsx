export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `${
                    disabled && 'opacity-25 rounded'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
