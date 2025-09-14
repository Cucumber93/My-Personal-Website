import {Icon} from '@iconify/react'
export default function Experience() {
    return (
        <div className="relative bg-[#080B38]  pt-15">
            <div className="flex flex-col gap-5 justify-center items-center pb-5">
                <div className='text-[32px]'>EXPERIENCE</div>
                <div className='w-[500px] text-center'>
                    I've been doing web development for about 3 years now, 
                    and I'm always eager to learn more in this fast paced industry.
                </div>
            </div>
            <div className="flex gap-4 pt-6 pb-15 pl-30 pr-30 justify-between ">
                <div>
                    <div>SOME TECHNOLOGIES I’VE WORKED WITH</div>
                    <div className='pt-10 grid grid-cols-5 gap-5'>
                        <Icon icon={'skill-icons:html'} width={100} height={100}/>
                        <Icon icon={'skill-icons:css'} width={100} height={100}/>
                        <Icon icon={'skill-icons:javascript'} width={100} height={100}/>
                        <Icon icon={'devicon:react'} width={100} height={100}/>
                        <Icon icon={'devicon:nodejs'} width={100} height={100}/>
                        <Icon icon={'uil:github'} width={100} height={100}/>
                        <Icon icon={'material-icon-theme:figma'} width={100} height={100}/>
                    </div>
                </div>
                <div>
                    <div>WHERE I’VE WORKED</div>
                    <div className='pt-10'>
                        <img src='./imgs/tcc_technology_logo.jpg' width={70} height={70}/>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#8C36DB] to-[#DF9E8D] flex flex-col justify-center items-center pt-15 pb-15 gap-5' >
                <div className='uppercase text-[32px]'>check out my resume!</div>
                <div>
                    <button className='cursor-pointer bg-[#080B38]/[0.13] p-5 pl-10 pr-10 text-[32px] text-[#080B38]'>go to resume</button>
                </div>
            </div>
        </div>
    )
}
