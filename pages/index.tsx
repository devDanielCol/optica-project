import PageHead from "../components/Home/PageHead/Molecules/PageHead";
import Content from "../components/Layout/Content/General";
import ParticleBasic from "../components/Particles/ParticleBasic";

export default function Home() {
  const description =
    "Brigadas de salud visual gratuitas, conoce como peudes empezar";

  return (
    <Content
      title="Visual Healt | Salud Visual, Optica, Examenes computarizados"
      description={description}
      threshold={120}
    >
      <PageHead />
      <ParticleBasic />
    </Content>
  );
}
