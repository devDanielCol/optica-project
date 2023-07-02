import ProductsCarrousell from "../components/Global/ProductsCarrousell/Molecules/ProductsCarrousell";
import About from "../components/Home/About/Molecules/About";
import BannerDescription from "../components/Home/BannerDescription/BannerDescription";
import Beneficies from "../components/Home/Beneficies/Beneficies";
import PageHead from "../components/Home/PageHead/Molecules/PageHead";
import WhatIs from "../components/Home/WhatIs/WahtIs";
import WorkDesc from "../components/Home/WorkDescription/Molecules/WorkDesc";
import Content from "../components/Layout/Content/General";
import ParticleBasic from "../components/Particles/ParticleBasic";
import Subscribe from "../components/Subscribe/Molecules/Subscribe";

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
        <About />
        <Beneficies />
        <Subscribe />
        <WhatIs />
        <BannerDescription />
        <ProductsCarrousell />
        {/* <ParticleBasic /> */}
      </>
    </Content>
  );
}
