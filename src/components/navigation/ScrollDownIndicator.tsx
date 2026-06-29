type ScrollIndicatorProps = {
    direction?: "up" | "down"
    className?: string
}

export const ScrollIndicator = ({
    direction = "down",
    className = "",
}: ScrollIndicatorProps) => {
    const rotation = direction === "up" ? "rotate-180" : ""

    return (
        <div className={`pointer-events-none ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-7 h-7 text-gray-500 animate-bounce ${rotation}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    )
}