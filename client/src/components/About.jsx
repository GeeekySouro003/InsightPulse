import Section from './Section';
import { team } from '../constants';

const About = () => {
  return (
    <>
    <Section crosses className="mt-2" id="about-us">
        <div className='container px-5 py-14 mx-auto -mt-[5.25rem]'>
            <div className='flex flex-col text-center w-full mb-20'>
                <h1 className='sm:text-3xl text-2xl font-bold font-grotesk  mb-4 text-text'>
                    Our Team
                </h1>
            </div>

            <div className='flex flex-wrap -m-1'>
                {team.map((item) => (
                    <div key={item.id} className='p-2 lg:w-1/3 md:w-1/2 w-full'>
                        <div className='h-full flex items-center border-accent border p-4 rounded-lg'>
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.imgUrl}/>

                            <div className='flex-grow'>
                                <div className='flex items-center'>
                                    <h2 className='text-text title-font font-code font-medium'>
                                        {item.name}
                                    </h2>

                                    <svg
                                    className="w-4 h-4 ml-2 fill-current text-gray-600"
                                    viewBox="0 0 20 20"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className='text-gray-400'>{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
    </>
  )
}

export default About;