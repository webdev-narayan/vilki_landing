
const members = [

]

const TeamMember = () => {
    return (
        <div className="w-full bg-white md:py-20">
            <div className="c-container mx-auto flex flex-col gap-16">
                <div className="flex gap-3 flex-col w-full ">
                    <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] py-2 px-4 w-fit text-primary"><img src={feature} alt="" /> Features</div>
                    <h3 className="text-primary text-[52px] font-semibold">Features</h3>
                    <p className="text-primary font-light">Reach your goals  your whay with features designed for the fastets.</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-8">
                    {members.map((item, index) => {
                        return <div key={index} className={`feature-card border border-[#B3E7FB] rounded-[20px] ${item.classes} overflow-hidden`}>
                            <div className={`text-primary ${index == 0 && "p-8"}`}>
                                <h4 className={`text-[32px] font-medium `}>{item.title}</h4>
                                <p>{item.detail}</p>
                            </div>
                            <img src={item.svg} className={`${item.position} border-[#B3E7FB] border p-3 bg-white`} />
                        </div>;
                    })}

                </div>
            </div>
        </div>
    )
}

export default TeamMember
