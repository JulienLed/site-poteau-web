import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const handleFetchContact = async () => {
    const response = await fetch("/api/");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Discutons de votre projet !</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={() => handleFetchContact()}></form>
      </CardContent>
    </Card>
  );
}
