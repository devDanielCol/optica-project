import Article from "../components/AboutUs/Article/Article";
import Presentation from "../components/AboutUs/Presentation/Presentation";
import Content from "../components/Layout/Content/General";

export default function Home() {
  const description = `somos una empresa comprometida con la satisfacción de nuestros
  clientes, somos especialistas en Diseño arquitectónico, remodelacion
  de interiores y exteriores y con todo lo referente a construcción en
  general.`;

  return (
    <Content
      title="Sobre nosotros visual health | Informacion sobre visual healt optica"
      description={description}
    >
      <Presentation />
      <Article />
    </Content>
  );
}
