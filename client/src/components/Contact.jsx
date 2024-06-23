import Section from './Section';
import { stars } from '../assets';

const Contact = () => {
  return (
    <>
    <Section crosses id="contact">

    <section className="text-text font-code">
	<form noValidate="" className="container w-full max-w-xs md:max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-background border border-primary">
		<h2 className="w-full text-3xl font-bold font-grotesk leading-tight text-primary">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1 ">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-tertiary bg-gray-300" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-tertiary bg-gray-300" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded auto expand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-tertiary bg-gray-300"></textarea>
		</div>
		<div>
      <button type='submit' className="px-6 py-2 font-medium bg-secondary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Hover me
      </button>
    </div>

	</form>
    
</section>
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>

          <div className="absolute top-3/2 left-3/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>

    </Section>
   
    </>
  )
}

export default Contact;