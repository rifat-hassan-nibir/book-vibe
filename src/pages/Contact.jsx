const Contact = () => {
  return (
    <div className="mb-[50px]">
      <div className="w-full bg-[#1313130d] text-center py-[16px] lg:py-[33px] rounded-2xl">
        <h2 className="text-[18px] lg:text-[20px] font-bold">Contact</h2>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
          </div>
        </div>
        <form novalidate="" className="space-y-6">
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-400 text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
