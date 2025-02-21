import { EvidenceDetails } from "./Components/EvidenceDetails";

interface EvidencePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EvidencePage({ params }: EvidencePageProps) {
  const { id } = await params;

  return <EvidenceDetails id={id} />;
}
