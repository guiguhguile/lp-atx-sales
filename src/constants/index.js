import { BsCollection } from "react-icons/bs";
import { PiBuilding } from "react-icons/pi";
import { IoReceiptOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

export const FEATURES = [
  {
    icon: <BsCollection color="#ffff" size={30} />,
    title: "Gráficos de vendas",
    description:
      "  Acompanhe todas as suas movimentações e vendas com uma gama de gráficos que te ajudam na gestão do seu negócio.",
  },
  {
    icon: <PiBuilding color="#ffff" size={30} />,
    title: "Multiempresa",
    description:
      "Adicione sua matriz e filiais em um só lugar com o ATX SALES, controlando tudo com um único clique.",
  },
  {
    icon: <IoReceiptOutline color="#ffff" size={30} />,
    title: "Ponto de venda",
    description:
      "Nosso ponto de venda facilita vendas fiscais e controle de estoque, seja de produtos ou serviços.",
  },
  {
    icon: <CiClock2 color="#ffff" size={30} />,
    title: "Suporte acessível",
    description:
      "Nossa equipe de suporte está sempre pronta para atender e solucionar suas dúvidas, presencialmente ou remotamente.",
  },
];
