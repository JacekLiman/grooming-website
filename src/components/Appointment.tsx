import DogImg from "../assets/img/dogs/dog-appointment.png";

const Appointment = () => {
  return (
    <section>
      <div className="container mx-auto bg-yellow-secondary">
        <div className="pb-20 pt-10 flex items-center justify-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative py-10 px-10 md:px-20 bg-yellow max-w-[600px] w-full rounded-3xl"
          >
            <h2 className="text-center text-4xl font-bold mb-8">
              Get an appointment
            </h2>

            <div className="flex flex-col gap-3">
              <input
                placeholder="Full name"
                className="p-3 rounded-full placeholder:text-sm outline-none"
                type="text"
              />
              <input
                placeholder="Email address"
                className="p-3 rounded-full placeholder:text-sm outline-none"
                type="email"
              />
              <input
                placeholder="Phone number"
                className="p-3 rounded-full placeholder:text-sm outline-none"
                type="phone"
              />
              <button className="text-white bg-orange p-3 rounded-full hover:bg-orange-hover">
                Send
              </button>
            </div>

            <img
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 md:h-[140px] h-[110px]"
              src={DogImg}
              alt=""
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
