type History = {
  question: string;
  answer: string;
  cost: number;
}[];

type Props = {
  history: History[];
  total: number;
};

export default function ContactForm({ history, total }: Props) {
  return (
    <div>
      {history.map((h) => (
        <p>{h.question}</p>
      ))}
    </div>
  );
}
