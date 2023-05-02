import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Chintan Gor"}
          feedback={"Mansi is a complete package of all the skills which any full stack developer requires. Very Excellent in her coding and Architecture skills, She is always ready to take off on new assignments and involves herself in the requirements.She is very good at leading the team, Very Soft spoken and clever engineer."}
        />

        <TestimonialCard
          name={"Sanket Lakhani"}
          feedback={
           `Mansi is an extra ordinary developer and gifted intelligent, She can switch to any project instantly,
           She is very efficient in delivering good quality product and always think as a business point of view and users experience all together.
            "Very good in communication, understanding of requirements and building complex logic and algorithms, can handle multiple developers team as well.
            I'm lucky to have worked with Mansi, a team mate who's not only interested in the company's bottom line but her teammate's professional growth as well.`
          }
        />

        <TestimonialCard
          name={"Shaktivel Sanogadan"}
          feedback={"Mansi is quick learner, highly skilled, goal oriented and open minded person. She was work with me in Publicis Sapient for sometime, she understood the platforms quickly and delivered the features on time. She high quality coder, and bug free developer. I strongly recommend Mansi is right person for web development because she has very good knowledge & experience in front-end and back-end technologies, and her learning mindset which will help her to adopt into new tech stacks easily."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;