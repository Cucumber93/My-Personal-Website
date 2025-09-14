
import { Icon } from '@iconify/react'

export default function Contact() {
    return (
        <div className='bg-[#ffffff] flex flex-col justify-center items-center pt-15 gap-5 text-black' >
            <div>
                <Icon icon={'bi:rocket'} width={124} height={124} style={{ color: 'black' }} />
            </div>
            <div className='uppercase text-[36px]'>
                get in touch!
            </div>
            <div className='w-[400px] text-center'>
                Whether you have idea for a product or just want to chat,
                feel free to shoot me an email!
            </div>
            <div>
                <button className="bg-[#080B38]/[0.13] text-[#080B38] p-3 pl-5 pr-5">Say Hello</button>
            </div>
            <div className='flex gap-6 bg-[#000000] w-full justify-center p-5'>
                <a href="https://www.facebook.com/rungtiwa.taeudomchok/" target="_blank" rel="noopener noreferrer">
                    <Icon
                        icon="uil:facebook"
                        width={45}
                        height={45}
                        className="text-[#505050] hover:text-[#1877f2] transition-colors duration-500"
                    />
                </a>

                <a href="https://www.instagram.com/k_cucumber/" target="_blank" rel="noopener noreferrer">
                    <Icon
                        icon="uil:instagram"
                        width={45}
                        height={45}
                        className="text-[#505050] hover:text-[#FF543E] transition-colors duration-500"
                    />
                </a>

                <a href="https://github.com/Cucumber93" target="_blank" rel="noopener noreferrer">
                    <Icon
                        icon="uil:github"
                        width={45}
                        height={45}
                        className="text-[#505050] hover:text-[#FFFFFF] transition-colors duration-500"
                    />
                </a>

                <a href="https://www.linkedin.com/in/rungtiwa-taeudomchok-0ab737274/" target="_blank" rel="noopener noreferrer">
                    <Icon
                        icon="uil:linkedin"
                        width={45}
                        height={45}
                        className="text-[#505050] hover:text-[#0A66C2] transition-colors duration-500"
                    />
                </a>

            </div>
        </div>
    )
}