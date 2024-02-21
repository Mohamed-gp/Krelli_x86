import TestimonialsCard from "../testimonials/TestimonialsCard";

const OurTeam = () => {
  return (
    <div className="container my-40">
      <div className="flex-col flex gap-4">
        <p className="text-primaryColor font-bold">Team</p>
        <p className="text-3xl font-bold ">Our Team</p>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="flex justify-center gap-10 my-10">
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
