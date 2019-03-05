import React from 'react';

export const Relationships = () => {
  return (
    <section className="container relationships">
      <h2 className="h2 relationships__heading">
        About my relationships with web-development
      </h2>
      <div className="relationships__cards">
        <SkillCard image="./imgs/html.svg" title="I'm in love with HTML">
          Hypertext Markup Language (HTML) is the standard markup language for
          creating web pages and web applications.
        </SkillCard>
        <SkillCard image="./imgs/css.svg" title="CSS is my best friend">
          Cascading Style Sheets (CSS) is a style sheet language used for
          describing the presentation of a document written in a markup language
          like HTML.
        </SkillCard>
        <SkillCard
          image="./imgs/javascript.svg"
          title="JavaScript is my passion">
          JavaScript is a high-level, interpreted programming language. It is a
          language which is also characterized as dynamic, weakly typed,
          prototype-based and multi-paradigm.
        </SkillCard>
      </div>
    </section>
  );
};

const SkillCard = ({ image, title, children }) => (
  <div className="skillcard">
    <img className="skillcard__image" src={image} alt="skill-img" />
    <div>
      <h3 className="h3 skillcard__heading">{title}</h3>
      <p className="p p--md skillcard__paragraph">{children}</p>
    </div>
  </div>
);
