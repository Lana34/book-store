import "./title.css";

interface ITitle {
  content: string;
}

export const Title = ({ content }: ITitle) => {
  return <h1 className="title">{content}</h1>;
};
