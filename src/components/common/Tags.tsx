const Tags = ({ tag }: { tag: string }) => {

    return (
        <div className={`border border-[#ffffff24] bg-[#ffffff14] hover:bg-[#ffffff24] ease duration-150 rounded-[7px] py-[8px] px-[13px] text-[12px] font-[500] text-[#ffffffa6] hover:text-white w-fit tracking-[1px]`}>
            {tag}
        </div>
    )
}

export default Tags