import Button from './Button';
import '../css/index.css';

export default function Banner({ title, text, button1, button2 }) {
  return (
    <section className="banner">
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        <Button text={button1.text} type={button1.type} />
        <Button text={button2.text} type={button2.type} />
      </div>
    </section>
  );
}