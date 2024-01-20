const Contact = () => {
  return (
    <section>
      <div className="container mx-auto bg-yellow-secondary">
        <div className="py-10 grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block"></div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <h3 className="text-orange font-medium">Contact</h3>
            <h2 className="text-3xl font-extrabold">+ 1 000 10 84 000</h2>
            <p>Opening Hours: Mon-Sun: 10am - 6pm</p>
            <button className="text-white px-5 py-3 rounded-full bg-orange hover:bg-orange-hover">Get an appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
