import PageHead from "../components/Home/PageHead/Molecules/PageHead";
import Content from "../components/Layout/Content/General";
import ParticleBasic from "../components/Particles/ParticleBasic";

export default function Home() {
  return (
    <Content title="Inicio">
      <PageHead />
      <ParticleBasic />
    </Content>
  );
}
