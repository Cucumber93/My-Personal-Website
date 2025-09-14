

export default function Projects() {

    const mockProjectsData = [
        {
            img: './imgs/mock.jpg',
            title: 'title1',
            description: 'description1'
        },
        {
            img: './imgs/mock.jpg',
            title: 'title2',
            description: 'description2'
        },
        {
            img: './imgs/mock.jpg',
            title: 'title3',
            description: 'description3'
        },
        {
            img: './imgs/mock.jpg',
            title: 'title4',
            description: 'description4'
        },
        {
            img: './imgs/mock.jpg',
            title: 'title5',
            description: 'description5'
        },
        {
            img: './imgs/mock.jpg',
            title: 'title6',
            description: 'description6'
        },

    ]
    return (
        <div className="bg-[#080B38] flex flex-col justify-center items-center p-15 gap-15">
            <div className="uppercase text-[32px]">
                my projects
            </div>
            <div className="grid grid-cols-2 gap-5 w-full">
                {mockProjectsData.map((item) => (
                    <div
                        key={item.img}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* รูป */}
                        <img
                            src={item.img}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* overlay ดำ */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* text ที่อยู่ด้านล่าง */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold">Cookie Website</h3>
                            <p className="text-sm">description dskloi m,ncxlslk oasiehfds</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}