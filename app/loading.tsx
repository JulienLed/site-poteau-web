export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 justify-center items-center">
      <div className="loader"></div>
      <p className="!text-logo-blue font-bold">Chargement du contenu...</p>
    </div>
  );
}
