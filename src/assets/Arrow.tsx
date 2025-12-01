type ArrowProps = {
    width?: string
    height?: string
    stroke?: string
    color?: string
}

const Arrow = ({ width, height, stroke = "0", color = "currentColor" }: ArrowProps) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" strokeWidth={stroke}
            viewBox="0 0 14 12"
            className={`aspect-square ${width} ${height}`}
        >
            <path
                fill={"currentColor"}
                stroke={"currentColor"}
                d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                vectorEffect={"non-scaling-stroke"}>
            </path>
        </svg>
    )
}

export default Arrow