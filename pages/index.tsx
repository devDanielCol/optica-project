import Beneficies from "../components/Home/Beneficies/Molecules/Beneficies";
import PageHead from "../components/Home/PageHead/Molecules/PageHead";
import WorkDesc from "../components/Home/WorkDescription/Molecules/WorkDesc";
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
      <>
        <PageHead />
        <WorkDesc />
        <Beneficies />
        <ParticleBasic />
      </>
    </Content>
  );
}
