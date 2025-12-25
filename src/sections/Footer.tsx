'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks =[
  {
    title: 'Telegram',
    href: 'https://t.me/SiberianMaestro',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sam-kislitcyn/',
    target: '_blank',
  },
  {
    title: 'Github',
    href: 'https://github.com/Bounty38',
    target: '_blank',
  },
]

export const Footer = () => {
  const handlePdfClick = () => {
    window.open(
      'https://raw.githubusercontent.com/bounty38/Portfolio/master/src/assets/EN_CV_Sam_Kislitcyn.pdf',
      '_blank'
    );
  };
  
  return (
    <footer className='relative -z-1 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2026. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => (
              <a 
                href={link.href} 
                key={link.title} 
                className='inline-flex items-center gap-1.5'
                target={link.target || '_blank'}
                rel="noopener noreferrer"
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
            <button onClick={handlePdfClick} className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Resume</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};
