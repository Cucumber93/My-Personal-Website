import BackgroundBlobs from '../components/BackgroudBlobs';
import {Icon} from '@iconify/react';
export default function About() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />

      <div className="flex flex-col justify-between items-center min-h-screen relative z-10">
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <div className='text-[64px]'>Hi, I'm Rungtiwa</div>
            <div className='text-[32px]'>Web Designer & Developer</div>
          </div>
        </div>

        <a href='#experience' className="mb-6">
            <Icon icon="mingcute:down-fill" className="text-4xl " />
        </a>
      </div>
    </div>
  );
}
